import React from 'react';

interface CalendarioHeaderProps {
    añosDisponibles: number[];
    selectedYear: number;
    onYearChange: (year: number) => void;
    getAnimationClass: (elementId: string, baseClass?: string) => string;
}

const CalendarioHeader = ({
    añosDisponibles,
    selectedYear,
    onYearChange,
    getAnimationClass
}: CalendarioHeaderProps) => {
    return (
        <div
            className="text-center mb-12"
            id="calendario-header"
            data-animate
        >
            <h2
                className={getAnimationClass(
                    "calendario-header",
                    "text-4xl font-bold mb-2"
                )}
            >
                Calendario de Salidas
            </h2>
            <div
                className={getAnimationClass(
                    "calendario-header",
                    "w-24 h-1 bg-amber-500 mx-auto my-4"
                )}
            ></div>
            <p
                className={getAnimationClass(
                    "calendario-header",
                    "text-lg text-gray-600 max-w-3xl mx-auto mb-6"
                )}
            >
                Elegí el año y mes de tu próxima aventura
            </p>

            {/* Selector de Año */}
            <div
                className={getAnimationClass(
                    "calendario-header",
                    "flex justify-center items-center space-x-2 mb-8"
                )}
                style={{ transitionDelay: "200ms" }}
            >
                <span className="text-sm font-medium text-gray-600 mr-4">
                    Ver año:
                </span>
                <div className="flex space-x-2">
                    {añosDisponibles.map((año, index) => (
                        <button
                            key={año}
                            onClick={() => onYearChange(año)}
                            className={`
                                px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                                ${selectedYear === año
                                    ? "bg-[var(--color-naranja)] text-[var(--color-white)] shadow-lg"
                                    : "bg-[var(--color-beige)]/40 text-[var(--color-negro)] hover:bg-[var(--color-beige)]/60 border border-[var(--color-beige)]"
                                }
                            `}
                            style={{
                                animationDelay: `${300 + index * 100}ms`,
                            }}
                        >
                            {año}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarioHeader;