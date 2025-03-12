
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PixelButton from "@/components/PixelButton";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pixel-black px-4">
      <div className="text-center">
        <h1 className="text-6xl font-pixel text-pixel-white mb-4">404</h1>
        <div className="w-16 h-16 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-pixel-red border-4 border-pixel-white"></div>
          <div className="absolute w-2 h-2 bg-pixel-white left-2 top-4"></div>
          <div className="absolute w-2 h-2 bg-pixel-white right-2 top-4"></div>
          <div className="absolute w-6 h-2 bg-pixel-white left-1/2 bottom-4 transform -translate-x-1/2"></div>
        </div>
        <p className="text-xl text-pixel-white font-pixel mb-8">GAME OVER</p>
        <p className="text-pixel-white font-pixel-mono mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <PixelButton
          variant="primary"
          size="lg"
          onClick={() => window.location.href = "/"}
        >
          RETURN TO HOME
        </PixelButton>
      </div>
    </div>
  );
};

export default NotFound;
