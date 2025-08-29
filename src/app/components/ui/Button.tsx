// Botones personalizables
interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    icon
}: ButtonProps) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-[var(--color-naranja)] hover:bg-[var(--color-naranja-200)] text-white focus:ring-[var(--color-naranja)]",
        secondary: "bg-[var(--color-amarillo)] hover:bg-yellow-500 text-[var(--color-negro)] focus:ring-[var(--color-amarillo)]",
        outline: "border-2 border-[var(--color-naranja)] text-[var(--color-naranja)] hover:bg-[var(--color-naranja)] hover:text-white focus:ring-[var(--color-naranja)]",
        ghost: "text-[var(--color-naranja)] hover:bg-[var(--color-beige)] focus:ring-[var(--color-naranja)]"
    };

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;