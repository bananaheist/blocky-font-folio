
import React from "react";
import { Blocks } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pixel-black text-pixel-white py-8 px-4 border-t-4 border-pixel-blue">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Blocks className="w-6 h-6" />
            <span className="font-pixel text-sm">PIXEL FOLIO</span>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-pixel-blue flex items-center justify-center">
              <div className="w-4 h-4 bg-pixel-white"></div>
            </div>
            <div className="w-8 h-8 bg-pixel-red flex items-center justify-center">
              <div className="w-4 h-4 bg-pixel-white"></div>
            </div>
            <div className="w-8 h-8 bg-pixel-green flex items-center justify-center">
              <div className="w-4 h-4 bg-pixel-white"></div>
            </div>
            <div className="w-8 h-8 bg-pixel-yellow flex items-center justify-center">
              <div className="w-4 h-4 bg-pixel-white"></div>
            </div>
          </div>
        </div>
        
        <div className="border-t-4 border-pixel-gray mt-6 pt-6">
          <div className="text-center">
            <p className="font-pixel-mono text-sm mb-2">
              © {new Date().getFullYear()} PIXEL FOLIO. ALL RIGHTS RESERVED.
            </p>
            <p className="font-pixel text-xs">
              CRAFTED WITH PIXEL PERFECT PRECISION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
