
import React, { useEffect, useState } from "react";
import PixelButton from "./PixelButton";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "WELCOME TO MY PIXEL PORTFOLIO";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <div className="w-full max-w-4xl text-center">
        <div className="bg-pixel-black p-4 sm:p-8 inline-block">
          <h1 className="text-pixel-white font-pixel text-lg sm:text-2xl md:text-3xl mb-2">
            {text}
            {showCursor && <span className="animate-pixel-blink">_</span>}
          </h1>
        </div>
        
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-8 max-w-xl mx-auto">
          <div className="pixel-card flex flex-col items-center justify-center p-4 animate-pixel-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-pixel-blue"></div>
            <p className="mt-4 font-pixel text-xs">WEB DESIGN</p>
          </div>
          
          <div className="pixel-card flex flex-col items-center justify-center p-4 animate-pixel-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-pixel-red"></div>
            <p className="mt-4 font-pixel text-xs">UI/UX</p>
          </div>
          
          <div className="pixel-card flex flex-col items-center justify-center p-4 animate-pixel-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="w-16 h-16 bg-pixel-green"></div>
            <p className="mt-4 font-pixel text-xs">DEVELOPMENT</p>
          </div>
          
          <div className="pixel-card flex flex-col items-center justify-center p-4 animate-pixel-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="w-16 h-16 bg-pixel-yellow"></div>
            <p className="mt-4 font-pixel text-xs">PIXEL ART</p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <PixelButton variant="primary" size="lg" onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}>
            VIEW PROJECTS
          </PixelButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
