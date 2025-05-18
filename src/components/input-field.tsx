type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  readOnly?: boolean;
};

export default function InputField({
  label,
  value,
  onChange,
  className = "",
}: InputFieldProps) {
  return (
    <div className="w-full flex flex-col">
      <label className="text-sm opacity-60 italic">{label}</label>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 w-full text-center h-12 px-5 rounded-md border-accent border-2 text-2xl transition-all ${className}`}
      />
    </div>
  );
}
