'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const usePageTransition = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const navigateWithTransition = useCallback((href: string) => {
        setIsLoading(true);

        // Simular tiempo de carga mínimo
        setTimeout(() => {
            router.push(href);
            // El loading se completará cuando el componente LoadingScreen termine
        }, 100);
    }, [router]);

    const completeTransition = useCallback(() => {
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        navigateWithTransition,
        completeTransition
    };
};