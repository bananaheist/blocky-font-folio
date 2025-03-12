
import React from "react";
import PixelCard from "./PixelCard";
import PixelButton from "./PixelButton";

const projectsData = [
  {
    id: 1,
    title: "PIXEL ADVENTURE",
    description: "A retro-style game with pixel art graphics and classic gameplay mechanics.",
    color: "blue" as const,
    tags: ["GAME DESIGN", "PIXEL ART", "DEVELOPMENT"],
  },
  {
    id: 2,
    title: "RETRO WEBSITE",
    description: "A nostalgic website design inspired by the early days of the internet.",
    color: "green" as const,
    tags: ["WEB DESIGN", "HTML/CSS", "JAVASCRIPT"],
  },
  {
    id: 3,
    title: "8-BIT APP",
    description: "Mobile application with pixel-perfect interface and retro aesthetics.",
    color: "red" as const,
    tags: ["APP DESIGN", "UI/UX", "REACT NATIVE"],
  },
  {
    id: 4,
    title: "PIXEL ICONS",
    description: "A collection of hand-crafted pixel art icons for various interfaces.",
    color: "yellow" as const,
    tags: ["PIXEL ART", "ILLUSTRATION", "DESIGN"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-black px-4 py-2 mb-2">
            <span className="text-pixel-white font-pixel text-xs">MY WORK</span>
          </div>
          <h2 className="font-pixel text-2xl">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <PixelCard
              key={project.id}
              color={project.color}
              className="animate-pixel-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-40 bg-pixel-black mb-4"></div>
              <h3 className="font-pixel text-lg mb-2">{project.title}</h3>
              <p className="mb-4 font-pixel-mono">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-pixel-black text-pixel-white font-pixel-mono text-xs px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <PixelButton variant="primary" size="sm">
                VIEW PROJECT
              </PixelButton>
            </PixelCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <PixelButton variant="secondary" size="md">
            LOAD MORE PROJECTS
          </PixelButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
