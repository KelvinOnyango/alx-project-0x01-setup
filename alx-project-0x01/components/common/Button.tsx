// components/common/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
