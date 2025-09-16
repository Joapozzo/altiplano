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

  // Configuración de tamaños
  const sizeVariants = {
    sm: {
      padding: "py-2 px-4",
      text: "text-xs",
      iconSize: "p-1",
      iconMargin: "ml-1.5 group-hover:ml-2",
    },
    md: {
      padding: "py-4 px-8",
      text: "text-sm",
      iconSize: "p-1.5",
      iconMargin: "ml-2 group-hover:ml-3",
    },
    lg: {
      padding: "py-5 px-10",
      text: "text-base",
      iconSize: "p-2",
      iconMargin: "ml-3 group-hover:ml-4",
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

  // Clases base del botón
  const baseClasses = `
    group relative overflow-hidden 
    text-white font-medium rounded-full 
    flex items-center justify-center 
    shadow-2xl transition-all duration-500 
    transform hover:scale-105 w-fit
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  // Aplicar colores según si es custom o predefinido
  const colorClasses =
    variant === "custom" && customColors
      ? `bg-gradient-to-r ${colors.shadowColor}`
      : `bg-gradient-to-r ${colors.from} ${colors.to} ${colors.hoverFrom} ${colors.hoverTo} ${colors.shadowColor}`;

  // Icono por defecto
  const defaultIcon = (
    <ChevronRight size={size === "sm" ? 12 : size === "lg" ? 16 : 14} />
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
      <span className="relative z-10">{children}</span>

      {/* Icono - solo se renderiza si hasIcon es true */}
      {hasIcon && (
        <span
          className={`
            relative z-10 rounded-full transition-all duration-300
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