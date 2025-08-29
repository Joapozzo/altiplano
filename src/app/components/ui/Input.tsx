import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

// Input de búsqueda personalizable
interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    icon?: React.ReactNode;
}

export const SearchInput = ({
    value,
    onChange,
    placeholder = "Buscar...",
    className = "",
    icon = <Search size={20} />
}: SearchInputProps) => {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {icon}
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md text-[var(--color-negro-200)] font-medium"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

// Select personalizable
interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    className?: string;
    label?: string;
}

export const CustomSelect = ({
    value,
    onChange,
    options,
    placeholder = "Seleccionar...",
    className = "",
    label
}: CustomSelectProps) => {
    return (
        <div className={`relative ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    className="w-full px-4 py-3 pr-10 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer text-[var(--color-negro-200)] font-medium"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                />
            </div>
        </div>
    );
};

// Input con label personalizable
interface LabeledInputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    icon?: React.ReactNode;
}

export const LabeledInput = ({
    value,
    onChange,
    label,
    type = "text",
    placeholder,
    className = "",
    required = false,
    icon
}: LabeledInputProps) => {
    return (
        <div className={`${className}`}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                />
            </div>
        </div>
    );
};

// Range slider personalizable
interface RangeSliderProps {
    value: number[];
    onChange: (value: number[]) => void;
    min: number;
    max: number;
    step?: number;
    label?: string;
    className?: string;
    formatValue?: (value: number) => string;
}

export const RangeSlider = ({
    value,
    onChange,
    min,
    max,
    step = 1,
    label,
    className = "",
    formatValue = (val) => val.toString()
}: RangeSliderProps) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <div className="px-2">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value[0]}
                    onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatValue(value[0])}</span>
                    <span>{formatValue(value[1])}</span>
                </div>
            </div>
            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d97706;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d97706;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
        </div>
    );
};

// Toggle switch personalizable
interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const ToggleSwitch = ({
    checked,
    onChange,
    label,
    className = "",
    size = 'md'
}: ToggleSwitchProps) => {
    const sizeClasses = {
        sm: 'w-8 h-4',
        md: 'w-11 h-6',
        lg: 'w-14 h-8'
    };

    const thumbSizes = {
        sm: 'w-3 h-3',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    return (
        <div className={`flex items-center ${className}`}>
            <button
                type="button"
                className={`${sizeClasses[size]} bg-gray-200 rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 ${checked ? 'bg-amber-600' : ''
                    }`}
                onClick={() => onChange(!checked)}
            >
                <div
                    className={`${thumbSizes[size]} bg-white rounded-full shadow-md transform transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                />
            </button>
            {label && (
                <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
            )}
        </div>
    );
};

// Radio buttons personalizables
interface RadioOption {
    value: string;
    label: string;
    description?: string;
}

interface RadioGroupProps {
    value: string;
    onChange: (value: string) => void;
    options: RadioOption[];
    name: string;
    label?: string;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
}

export const RadioGroup = ({
    value,
    onChange,
    options,
    name,
    label,
    className = "",
    orientation = 'vertical'
}: RadioGroupProps) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    {label}
                </label>
            )}
            <div className={`space-${orientation === 'horizontal' ? 'x' : 'y'}-3 ${orientation === 'horizontal' ? 'flex flex-wrap' : ''}`}>
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-start cursor-pointer group"
                    >
                        <div className="flex items-center h-5">
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                                {option.label}
                            </div>
                            {option.description && (
                                <div className="text-xs text-gray-500 mt-1">
                                    {option.description}
                                </div>
                            )}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

// Checkbox personalizable
interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    description?: string;
    className?: string;
}

export const Checkbox = ({
    checked,
    onChange,
    label,
    description,
    className = ""
}: CheckboxProps) => {
    return (
        <label className={`flex items-start cursor-pointer group ${className}`}>
            <div className="flex items-center h-5">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
            </div>
            {(label || description) && (
                <div className="ml-3">
                    {label && (
                        <div className="text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                            {label}
                        </div>
                    )}
                    {description && (
                        <div className="text-xs text-gray-500 mt-1">
                            {description}
                        </div>
                    )}
                </div>
            )}
        </label>
    );
};