interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}