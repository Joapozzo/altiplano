import Image from 'next/image';

interface GaleriaItemProps {
    item: number;
}

// Subcomponente para cada imagen de la galería
const GaleriaItem = ({ item }: GaleriaItemProps) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
            <Image
                src="/imgs/vallecitos.jpg"
                alt={`Galería ${item}`}
                width={400}
                height={256}
                className="object-cover w-full h-64"
            />
        </div>
    );
};

export default GaleriaItem;