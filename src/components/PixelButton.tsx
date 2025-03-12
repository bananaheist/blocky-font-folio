
import { cn } from "@/lib/utils";
import React from "react";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const variantClasses = {
    primary: "bg-pixel-blue text-pixel-white border-pixel-dark-blue",
    secondary: "bg-pixel-light-gray text-pixel-black border-pixel-gray",
    success: "bg-pixel-green text-pixel-white border-pixel-dark-green",
    danger: "bg-pixel-red text-pixel-white border-pixel-dark-red",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      className={cn(
        "font-pixel border-4 inline-block",
        "box-shadow-[4px_4px_0_rgba(0,0,0,1)]",
        "transition-transform duration-[0.05s]",
        "active:translate-x-1 active:translate-y-1",
        "active:box-shadow-[0px_0px_0_rgba(0,0,0,1)]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PixelButton;
