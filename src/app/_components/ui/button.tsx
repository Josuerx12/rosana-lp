import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3.5 font-semibold text-base rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
