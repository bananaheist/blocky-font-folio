
import { cn } from "@/lib/utils";
import React from "react";

interface PixelCardProps {
  className?: string;
  children: React.ReactNode;
  color?: "white" | "blue" | "green" | "red" | "yellow";
}

const PixelCard: React.FC<PixelCardProps> = ({
  className,
  children,
  color = "white",
}) => {
  const colorClasses = {
    white: "bg-pixel-white border-pixel-black",
    blue: "bg-pixel-light-blue border-pixel-blue",
    green: "bg-pixel-green border-pixel-dark-green",
    red: "bg-pixel-red border-pixel-dark-red",
    yellow: "bg-pixel-yellow border-pixel-orange",
  };

  return (
    <div
      className={cn(
        "pixel-card",
        colorClasses[color],
        className
      )}
    >
      {children}
    </div>
  );
};

export default PixelCard;
