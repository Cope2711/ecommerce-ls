import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`border rounded px-4 py-2 w-full ${
            errorMessage ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
