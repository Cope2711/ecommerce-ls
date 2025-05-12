interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function Label({ children, className }: LabelProps) {
  return (
    <label className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );
}