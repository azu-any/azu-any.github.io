import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrapbookCard from "./components/ScrapbookCard";
import AccessibleModal from "./components/AccessibleModal";
import CommandPalette from "./components/CommandPalette";
import { homeNode, spatialIslands } from "./constants/layout";
import { projects } from "./constants";

const App = () => {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeModalCard, setActiveModalCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <BrowserRouter>
      <CommandPalette />

      <div className="h-screen w-full overflow-y-auto overflow-x-hidden bg-primary">
        
        {/* CENTER NODE (HOME) */}
        <div className="snap-center min-h-screen w-full relative flex items-center justify-center p-4">
          <div 
            id={homeNode.id}
            tabIndex={0}
            className={isMobile ? homeNode.mobileClassName : homeNode.className}
            style={{ "--island-color": "#2dd4bf" }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-accent uppercase tracking-tighter mb-4 text-left break-words">
              {isMobile ? "Azuany Mila" : "Azuany_Mila"}
            </h1>
            <h2 className="text-xl md:text-2xl text-accent font-medium tracking-wide text-left mb-6">
              Software Engineer • Accessibility • AI/ML
            </h2>
            <div className="text-white/80 max-w-2xl text-left text-lg leading-relaxed space-y-4">
              <p>
                I am a passionate software engineer specializing in accessibility and artificial intelligence. With a strong background in developing robust platforms, I strive to create inclusive, high-impact technologies that bridge the gap between human needs and digital experiences.
              </p>
              <p>
                My work spans from architecting global accessibility features to engineering multimodal LLM pipelines. Scroll down to explore my journey, experiences, and projects.
              </p>
            </div>
            <div className="mt-12 text-sm text-white/50 font-mono text-left">
              Press <strong className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">Cmd + K</strong> to open the command palette.
            </div>
          </div>
        </div>

        {/* THEMATIC ISLANDS */}
        {spatialIslands.map((island) => (
          <div key={island.id} className="w-full relative flex justify-center py-24 mb-32 border-t border-white/5">
            <div className="w-full max-w-5xl px-4 flex flex-col relative" style={{ "--island-color": island.color }}>
              
              {/* Island Title Header */}
              <div 
                id={island.id}
                tabIndex={0}
                className="lg:absolute top-0 left-0 flex flex-col items-center lg:items-start focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-8 focus:ring-offset-[#000] rounded p-2 z-0 hover:z-50 focus:z-50 transition-all cursor-pointer"
              >
                <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-white uppercase tracking-tighter text-center lg:text-left break-words">
                  {isMobile ? island.title.replace("_", " ") : island.title}
                </h1>
                <p className="text-accent opacity-80 font-mono text-sm mt-1 text-center lg:text-left">{island.subtitle}</p>
              </div>

              {/* Native Staggered Scrapbook Flow */}
              <div className="mt-48 w-full flex flex-col gap-48 md:gap-80 relative z-10">
                {island.cards.map((card, idx) => {
                  if (!card.data) return null;
                  
                  const title = card.type === "project" ? card.data.name : card.data.title;
                  const subtitle = card.type === "project" ? "Project" : card.data.company_name;
                  const summary = card.type === "project" ? card.data.description : card.data.points?.[0];
                  const points = card.type === "project" ? [card.data.description] : card.data.points;
                  const image = card.data.image || card.data.icon;
                  const link = card.data.source_code_link || card.data.link;

                  // Create a native staggered scrapbook layout using CSS alignment instead of absolute coordinates
                  const isEven = idx % 2 === 0;
                  const alignClass = isEven ? "self-start md:translate-x-12" : "self-end md:-translate-x-12";
                  const rotationClass = isEven ? "-rotate-2" : "rotate-1";

                  return (
                    <ScrapbookCard 
                      key={idx}
                      index={idx}
                      id={card.id}
                      isMobile={isMobile}
                      className={`relative w-full max-w-[90%] md:max-w-[500px] lg:max-w-[600px] ${alignClass} ${rotationClass} ${card.marginClass || ""} transition-transform hover:rotate-0 z-10 hover:z-50`}
                      title={title}
                      subtitle={subtitle}
                      date={card.data.date}
                      summary={summary}
                      points={points}
                      tags={card.data.tags}
                      image={image}
                      images={card.data.images}
                      imageConfig={card.data.imageConfig}
                      link={link}
                      onOpen={(view) => setActiveModalCard({ title, subtitle, points, link, color: island.color, images: card.data.images, __view: view })}
                    />
                  );
                })}
              </div>

            </div>
          </div>
        ))}

        {/* EXTRA PROJECTS BENTO GRID */}
        <div className="w-full max-w-5xl mx-auto py-24 px-4 border-t border-white/10 mb-32">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase tracking-tighter mb-2 break-words">
              {isMobile ? "Side Quests" : "Side_Quests"}
            </h2>
            <p className="text-accent font-mono text-sm uppercase tracking-widest">SYS.ARCHIVE // EXTRA PROJECTS</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.name.includes("QCourse") || p.name.includes("OERWF") || p.name.includes("MAIA")).map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 flex flex-col justify-between hover:border-white/30 transition-all hover:-translate-y-1 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] ${project.className || ""}`}
              >
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map(t => (
                      <span key={t.name} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-white/70">
                        {t.name}
                      </span>
                    ))}
                  </div>
                  {project.source_code_link && (
                    <a 
                      href={project.source_code_link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-mono text-accent hover:text-white flex items-center gap-1 transition-colors self-start mt-2"
                    >
                      VIEW_SOURCE ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <AccessibleModal 
        card={activeModalCard} 
        onClose={() => setActiveModalCard(null)} 
      />

    </BrowserRouter>
  );
};

export default App;
