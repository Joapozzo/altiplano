import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { expedicionesMock, serviciosMock } from '@/app/data/mockSalidas';
import { Expedicion } from '@/app/types/expedicion';
import { Servicio } from '@/app/types/servicio';

// Función para normalizar nombres a slugs
const normalizeToSlug = (name: string): string => {
    return name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/[^a-z0-9-]/g, '');
};

// Función para buscar expedición por slug o ID
const findExpedicionBySlugOrId = (slug: string): Expedicion | null => {
    if (!slug) return null;

    // Primero intentar buscar por ID si es un número
    if (!isNaN(Number(slug))) {
        const expedicionById = expedicionesMock.find(e => e.id_expedicion === parseInt(slug));
        if (expedicionById) return expedicionById;
    }

    // Buscar por nombre normalizado (slug)
    const expedicionByName = expedicionesMock.find(expedicion => {
        const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
        if (servicio) {
            const normalizedServiceName = normalizeToSlug(servicio.nombre);
            return normalizedServiceName === slug;
        }
        return false;
    });

    return expedicionByName || null;
};

export interface UseExpedicionReturn {
    expedicion: Expedicion | null;
    servicio: Servicio | null;
    isLoading: boolean;
    error: string | null;
    slug: string | null;
}

export const useExpedicion = (): UseExpedicionReturn => {
    const params = useParams();
    const slug = params.slug as string | null;

    const { expedicion, servicio, error } = useMemo(() => {
        if (!slug) {
            return {
                expedicion: null,
                servicio: null,
                error: 'No se proporcionó un identificador válido'
            };
        }

        const foundExpedicion = findExpedicionBySlugOrId(slug);

        if (!foundExpedicion) {
            return {
                expedicion: null,
                servicio: null,
                error: 'Expedición no encontrada'
            };
        }

        const foundServicio = serviciosMock.find(s => s.id_servicio === foundExpedicion.id_servicio);

        if (!foundServicio) {
            return {
                expedicion: foundExpedicion,
                servicio: null,
                error: 'Información del servicio no encontrada'
            };
        }

        return {
            expedicion: foundExpedicion,
            servicio: foundServicio,
            error: null
        };
    }, [slug]);

    return {
        expedicion,
        servicio,
        isLoading: false, // En una app real esto sería útil para loading states
        error,
        slug
    };
};

// Función utilitaria para generar slugs (exportada para uso en otros componentes)
export const generateSlugFromService = (serviceName: string): string => {
    return normalizeToSlug(serviceName);
};

// Función utilitaria para generar links
export const generateExpedicionLink = (expedicion: Expedicion, servicio: Servicio): string => {
    const slug = generateSlugFromService(servicio.nombre);
    return `/salidas/${slug}`;
};

// Función alternativa para generar slugs con ID (mejor para SEO y evitar duplicados)
export const generateSlugWithId = (expedicion: Expedicion, servicio: Servicio): string => {
    const slug = normalizeToSlug(servicio.nombre);
    return `${expedicion.id_expedicion}-${slug}`;
};

// Para buscar con formato id-nombre
const findExpedicionByIdSlug = (slug: string): Expedicion | null => {
    const parts = slug.split('-');
    const id = parseInt(parts[0]);

    if (!isNaN(id)) {
        return expedicionesMock.find(e => e.id_expedicion === id) || null;
    }

    return null;
};