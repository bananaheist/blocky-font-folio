
import React from "react";
import PixelCard from "./PixelCard";

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-pixel-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-black px-4 py-2 mb-2">
            <span className="text-pixel-white font-pixel text-xs">WHO AM I</span>
          </div>
          <h2 className="font-pixel text-2xl">ABOUT ME</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <PixelCard className="h-full">
              <h3 className="font-pixel text-lg mb-4">PIXEL ARTIST & DEVELOPER</h3>
              
              <p className="font-pixel-mono mb-4">
                Hello! I'm a passionate pixel artist and developer with a love for all things retro and 8-bit.
              </p>
              
              <p className="font-pixel-mono mb-4">
                I specialize in creating nostalgic digital experiences that combine modern technologies with classic pixel aesthetics.
              </p>
              
              <p className="font-pixel-mono mb-4">
                My work spans from web development to game design, always maintaining that distinctive pixel art style.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border-4 border-pixel-black p-2">
                  <div className="font-pixel text-xs mb-1">EXPERIENCE</div>
                  <div className="font-pixel-mono text-lg">5+ YEARS</div>
                </div>
                
                <div className="border-4 border-pixel-black p-2">
                  <div className="font-pixel text-xs mb-1">PROJECTS</div>
                  <div className="font-pixel-mono text-lg">30+</div>
                </div>
                
                <div className="border-4 border-pixel-black p-2">
                  <div className="font-pixel text-xs mb-1">CLIENTS</div>
                  <div className="font-pixel-mono text-lg">20+</div>
                </div>
                
                <div className="border-4 border-pixel-black p-2">
                  <div className="font-pixel text-xs mb-1">SKILLS</div>
                  <div className="font-pixel-mono text-lg">15+</div>
                </div>
              </div>
            </PixelCard>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-pixel-black border-8 border-pixel-white p-4 relative">
              <div className="absolute top-4 left-4 w-8 h-8 bg-pixel-white"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-pixel-white"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-pixel-white"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-pixel-white"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-pixel-white"></div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <PixelCard>
            <h3 className="font-pixel text-lg mb-4">MY SKILLS</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-8 bg-pixel-blue border-4 border-pixel-black mb-2"></div>
                <span className="font-pixel text-xs">PIXEL ART</span>
              </div>
              
              <div className="text-center">
                <div className="w-full h-8 bg-pixel-red border-4 border-pixel-black mb-2"></div>
                <span className="font-pixel text-xs">GAME DEV</span>
              </div>
              
              <div className="text-center">
                <div className="w-full h-8 bg-pixel-green border-4 border-pixel-black mb-2"></div>
                <span className="font-pixel text-xs">WEB DEV</span>
              </div>
              
              <div className="text-center">
                <div className="w-full h-8 bg-pixel-yellow border-4 border-pixel-black mb-2"></div>
                <span className="font-pixel text-xs">UI DESIGN</span>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default About;
