
import React from "react";
import { Blocks } from "lucide-react";
import PixelButton from "./PixelButton";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-pixel-black text-pixel-white z-50 border-b-4 border-pixel-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Blocks className="w-6 h-6" />
          <span className="font-pixel text-sm">PIXEL FOLIO</span>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <a href="#home" className="font-pixel text-xs sm:text-sm hover:text-pixel-blue transition-colors">HOME</a>
          <a href="#projects" className="font-pixel text-xs sm:text-sm hover:text-pixel-blue transition-colors">PROJECTS</a>
          <a href="#about" className="font-pixel text-xs sm:text-sm hover:text-pixel-blue transition-colors">ABOUT</a>
          <a href="#contact" className="font-pixel text-xs sm:text-sm hover:text-pixel-blue transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
