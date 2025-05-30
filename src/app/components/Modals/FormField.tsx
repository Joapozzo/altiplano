interface FormFieldProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: any;
    placeholder: string;
    rows?: number;
}

// Subcomponente para el campo de entrada
const FormField = ({ label, type = "text", name, value, onChange, placeholder, rows } : FormFieldProps) => {
    const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50";

    return (
        <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor={name}>
                {label}
            </label>
            {rows ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    className={inputClasses}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={inputClasses}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default FormField;