import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibleModal({ card, onClose }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // ACCESSIBILITY: Focus Trapping & Escape Key Listener
  useEffect(() => {
    if (!card) return;
    
    // Prevent background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      
      // Basic Tab trapping to keep focus inside modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    // Auto-focus the close button for screen readers when opened
    setTimeout(() => closeBtnRef.current?.focus(), 100);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [card, onClose]);

  useEffect(() => {
    if (card && card.__view === "gallery") {
      setTimeout(() => {
        const el = document.getElementById("gallery-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [card]);

  return (
    <AnimatePresence>
      {card && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          style={{ "--island-color": card.color }}
        >
          {/* ACCESSIBILITY: proper dialog roles and aria labels */}
          <motion.div 
            ref={modalRef}
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-black-100 rounded-2xl border border-accent/40 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-start bg-black-200">
              <div>
                <h2 id="modal-title" className="text-2xl md:text-3xl font-black text-white leading-tight mb-1">
                  {card.title}
                </h2>
                <p className="text-accent font-mono text-sm tracking-widest uppercase">{card.subtitle}</p>
              </div>
              <button 
                ref={closeBtnRef}
                onClick={onClose}
                className="shrink-0 w-10 h-10 ml-4 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-accent hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black-200"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="space-y-6">
                {card.points?.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-accent font-bold select-none" aria-hidden="true">▹</span>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{point}</p>
                  </div>
                ))}
              </div>
              
              {card.link && (
                <div className="mt-10 pt-6 border-t border-white/10">
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold uppercase tracking-widest text-sm rounded hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black-100 transition-all"
                  >
                    View Project ↗
                  </a>
                </div>
              )}

              {/* Image Gallery */}
              {card.images && card.images.length > 0 && (
                <div id="gallery-section" className="mt-10 pt-6 border-t border-white/10">
                  <h3 className="text-white font-bold mb-4 font-mono text-sm tracking-widest uppercase text-accent">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {card.images.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-black-200 border border-white/10">
                        <img 
                          src={typeof img === "string" ? img : img.src} 
                          alt={`Gallery image ${idx + 1}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
