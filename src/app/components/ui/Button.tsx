import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  customColors?: {
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
    iconBg?: string;
    iconColor?: string;
    shadowColor?: string;
  };
  showShineEffect?: boolean;
  animateIcon?: boolean;
  type?: 'button' | 'submit' | 'reset';
  hasIcon?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  icon,
  variant = "primary",
  size = "md",
  customColors,
  showShineEffect = true,
  animateIcon = true,
  type = "button",
  hasIcon = true,
}) => {
  // Configuración de variantes de color
  const colorVariants = {
    primary: {
      from: "from-orange-600",
      to: "to-orange-700",
      hoverFrom: "hover:from-orange-700",
      hoverTo: "hover:to-orange-800",
      iconBg: "bg-black",
      iconColor: "text-orange-500",
      shadowColor: "hover:shadow-orange-500/25",
    },
    secondary: {
      from: "from-gray-600",
      to: "to-gray-700",
      hoverFrom: "hover:from-gray-700",
      hoverTo: "hover:to-gray-800",
      iconBg: "bg-white",
      iconColor: "text-gray-600",
      shadowColor: "hover:shadow-gray-500/25",
    },
    success: {
      from: "from-green-600",
      to: "to-green-700",
      hoverFrom: "hover:from-green-700",
      hoverTo: "hover:to-green-800",
      iconBg: "bg-white",
      iconColor: "text-green-600",
      shadowColor: "hover:shadow-green-500/25",
    },
    danger: {
      from: "from-red-600",
      to: "to-red-700",
      hoverFrom: "hover:from-red-700",
      hoverTo: "hover:to-red-800",
      iconBg: "bg-white",
      iconColor: "text-red-600",
      shadowColor: "hover:shadow-red-500/25",
    },
    warning: {
      from: "from-amber-500",
      to: "to-amber-600",
      hoverFrom: "hover:from-amber-600",
      hoverTo: "hover:to-amber-700",
      iconBg: "bg-white",
      iconColor: "text-amber-600",
      shadowColor: "hover:shadow-amber-500/25",
    },
    custom: {
      from: "",
      to: "",
      hoverFrom: "",
      hoverTo: "",
      iconBg: "",
      iconColor: "",
      shadowColor: "",
    },
  };

  // Configuración de tamaños RESPONSIVE
  const sizeVariants = {
    sm: {
      padding: "py-2 px-4 sm:py-2.5 sm:px-5",
      text: "text-[10px] sm:text-xs",
      iconSize: "p-0.5 sm:p-1",
      iconMargin: "ml-1 sm:ml-1.5 group-hover:ml-1.5 sm:group-hover:ml-2",
    },
    md: {
      padding: "py-2.5 px-5 sm:py-3 sm:px-6 md:py-4 md:px-8",
      text: "text-xs sm:text-sm",
      iconSize: "p-1 sm:p-1.5",
      iconMargin: "ml-1.5 sm:ml-2 group-hover:ml-2 sm:group-hover:ml-3",
    },
    lg: {
      padding: "py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10",
      text: "text-sm sm:text-base",
      iconSize: "p-1.5 sm:p-2",
      iconMargin: "ml-2 sm:ml-3 group-hover:ml-2.5 sm:group-hover:ml-4",
    },
  };

  // Obtener colores según variante o custom
  const colors =
    variant === "custom" && customColors
      ? {
          from: customColors.from,
          to: customColors.to,
          hoverFrom: customColors.hoverFrom,
          hoverTo: customColors.hoverTo,
          iconBg: customColors.iconBg || "bg-black",
          iconColor: customColors.iconColor || "text-white",
          shadowColor: customColors.shadowColor || "hover:shadow-lg",
        }
      : colorVariants[variant];

  const sizes = sizeVariants[size];

  // Clases base del botón - RESPONSIVE
  const baseClasses = `
    group relative overflow-hidden 
    text-white font-medium rounded-full 
    flex items-center justify-center 
    shadow-lg sm:shadow-xl md:shadow-2xl 
    transition-all duration-500 
    transform hover:scale-105 
    w-full sm:w-auto
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  // Aplicar colores según si es custom o predefinido
  const colorClasses =
    variant === "custom" && customColors
      ? `bg-gradient-to-r ${colors.shadowColor}`
      : `bg-gradient-to-r ${colors.from} ${colors.to} ${colors.hoverFrom} ${colors.hoverTo} ${colors.shadowColor}`;

  // Icono por defecto - TAMAÑO RESPONSIVE
  const getIconSize = () => {
    switch (size) {
      case "sm":
        return { mobile: 10, desktop: 12 };
      case "lg":
        return { mobile: 14, desktop: 16 };
      default:
        return { mobile: 12, desktop: 14 };
    }
  };

  const iconSize = getIconSize();
  const defaultIcon = (
    <>
      <span className="sm:hidden">
        <ChevronRight size={iconSize.mobile} />
      </span>
      <span className="hidden sm:inline">
        <ChevronRight size={iconSize.desktop} />
      </span>
    </>
  );
  const displayIcon = icon || defaultIcon;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${colorClasses}
        ${sizes.padding}
        ${sizes.text}
        ${className}
      `}
      style={
        variant === "custom" && customColors
          ? {
              background: `linear-gradient(to right, ${customColors.from}, ${customColors.to})`,
              ...(disabled
                ? {}
                : {
                    "--hover-gradient": `linear-gradient(to right, ${customColors.hoverFrom}, ${customColors.hoverTo})`,
                  }),
            }
          : {}
      }
    >
      {/* Efecto de brillo */}
      {showShineEffect && !disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}

      {/* Contenido del texto */}
      <span className="relative z-10 whitespace-nowrap">{children}</span>

      {/* Icono - solo se renderiza si hasIcon es true */}
      {hasIcon && (
        <span
          className={`
            relative z-10 rounded-full transition-all duration-300
            flex items-center justify-center flex-shrink-0
            ${sizes.iconSize}
            ${sizes.iconMargin}
            ${colors.iconBg}
            ${colors.iconColor}
            ${animateIcon ? "group-hover:rotate-12" : ""}
          `}
          style={
            variant === "custom" && customColors
              ? {
                  backgroundColor: customColors.iconBg,
                  color: customColors.iconColor,
                }
              : {}
          }
        >
          {displayIcon}
        </span>
      )}
    </button>
  );
};

export default AnimatedButton;