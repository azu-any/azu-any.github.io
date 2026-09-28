import React from "react";
import { motion } from "framer-motion";

export default function ScrapbookCard({ id, className, title, subtitle, date, summary, tags, image, images, imageConfig, onOpen, index, isMobile }) {
  // Give polaroids a slightly messy/random rotation based on their index
  const rotations = ["rotate-6", "-rotate-6", "rotate-3", "-rotate-12", "rotate-12"];
  const rotClass = rotations[(index || 0) % rotations.length];
  
  // If the user specifies an imageConfig in index.js, use it! Otherwise, fallback to default top-right
  const finalImagePos = (isMobile ? null : imageConfig) || `-top-6 -right-6 ${rotClass}`;

  return (
    <motion.div 
      id={id}
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* 
        ACCESSIBILITY & HCI:
        The decorative polaroid photo sits behind the card. 
        It has aria-hidden="true" so screen readers ignore it entirely.
      */}

      {/* Render Multiple Images if provided */}
      
      {/* 6 Pre-calculated Auto-Scatter Slots */}
      {images && images.map((rawImg, i) => {
        const scatterSlots = [
          { config: "-top-8 -right-8 rotate-6", zIndex: -1 },
          { config: "-bottom-10 -left-10 -rotate-12", zIndex: -2 },
          { config: "-top-4 -left-12 -rotate-6", zIndex: -3 },
          { config: "-bottom-6 -right-14 rotate-12", zIndex: -4 },
          { config: "top-[20%] -right-16 rotate-3", zIndex: -5 },
          { config: "top-[60%] -left-16 -rotate-3", zIndex: -6 },
        ];

        // Support both strings (auto-mode) and objects (manual override mode)
        const isString = typeof rawImg === "string";
        const img = isString ? { src: rawImg } : rawImg;
        const slot = scatterSlots[i % scatterSlots.length];

        const finalConfig = isMobile ? slot.config : (img.config || slot.config);
        const rawZIndex = img.zIndex !== undefined ? img.zIndex : slot.zIndex;
        // Force images to be strictly behind the main card (which is z-10) to prevent blocking text/buttons
        const finalZIndex = rawZIndex > 0 ? -1 : rawZIndex;

        let frameClass = "p-0 overflow-hidden rounded-sm"; // default is nothing (raw image)
        if (img.frame === "polaroid") frameClass = "bg-white p-2 pb-6 rounded-sm border border-white/10";
        if (img.frame === "circle") frameClass = "rounded-full p-0 overflow-hidden border border-white/10";
        if (img.frame === "rounded") frameClass = "rounded-2xl p-0 overflow-hidden border border-white/10";
        if (img.frame === "dark") frameClass = "bg-[#13161F] p-2 pb-6 border border-white/10 rounded-sm";
        if (img.frame === "glow") frameClass = "rounded-xl p-0 overflow-hidden border-2 border-accent shadow-[0_0_30px_var(--island-color)]";
        if (img.frame === "glass") frameClass = "p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl";
        if (img.frame === "dashed") frameClass = "p-1.5 border-2 border-dashed border-white/50 rounded-sm";

        return (
          <div 
            key={i}
            className={`absolute ${img.size || "w-32 h-32 md:w-48 md:h-48"} shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${finalConfig} ${frameClass} group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none`}
            style={{ zIndex: finalZIndex }}
            aria-hidden="true"
          >
            <img 
              src={img.src} 
              alt="" 
              className={`w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 ${img.contain ? "object-contain" : "object-cover"}`} 
            />
          </div>
        );
      })}

      {/* Backwards Compatibility for Single Image */}
      {!images && image && (
        <div 
          className={`absolute w-32 h-32 md:w-48 md:h-48 p-0 overflow-hidden rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${finalImagePos} group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 z-0 pointer-events-none`}
          aria-hidden="true"
        >
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
          />
        </div>
      )}

      {/* Main Interactive Summary Card */}
      <div className="relative z-10 w-full h-full bg-black-200/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] group-hover:border-accent/50 group-hover:-translate-y-2 transition-all duration-300">
        
        <div>
          <div className="flex flex-col items-start gap-1 mb-1">
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-1">{subtitle}</p>
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight w-full">{title}</h3>
            {date && <span className="text-xs font-mono text-white/50 mt-2 block">{date}</span>}
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-6 mt-4 line-clamp-3">
            {summary}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags?.map((tag, i) => (
              <span key={i} className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-1 rounded">
                {tag.name || tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button 
              onClick={onOpen}
              className="flex-1 py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-accent text-white hover:text-black font-bold tracking-wide text-xs md:text-sm rounded transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black group/btn"
              aria-label={`Expand details for ${title}`}
              aria-haspopup="dialog"
            >
              <span>More Info</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {images && images.length > 0 && (
              <button 
                onClick={() => onOpen("gallery")}
                className="w-12 flex items-center justify-center border border-white/10 hover:bg-white/10 text-white rounded transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black group/galleryBtn"
                aria-label={`View image gallery for ${title}`}
                aria-haspopup="dialog"
                title={`View ${images.length} images`}
              >
                <svg className="w-5 h-5 opacity-70 group-hover/galleryBtn:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
