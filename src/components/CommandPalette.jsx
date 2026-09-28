import React, { useState, useEffect, useRef } from "react";
import { experiences, projects } from "../constants";
import { genExpId, genProjId } from "../constants/layout";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K on Mac, Ctrl+K on Windows
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Compile all spatial nodes into a flat search list
  const allItems = [
    { id: "node-home", title: "Home / Azuany Mila", type: "Node" },
    { id: "node-apple", title: "Apple Ecosystem", type: "Island" },
    { id: "node-ai", title: "Machine Intelligence", type: "Island" },
    { id: "node-edu", title: "Education", type: "Island" },
    ...experiences.map((e) => ({
      id: genExpId(e.title),
      title: e.title,
      subtitle: e.company_name,
      type: "Experience",
    })),
    ...projects.map((p) => ({
      id: genProjId(p.name),
      title: p.name,
      type: "Project",
    })),
  ];

  const filtered = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSelect = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: wait for smooth scroll to finish before focus or just focus immediately
        el.focus({ preventScroll: true });
      }
    }, 10);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-black-100 border border-secondary/30 rounded-xl shadow-[0_0_50px_rgba(57,255,20,0.15)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-4 border-b border-secondary/20 bg-black-200">
          <span className="text-accent mr-3 font-bold text-lg">❯</span>
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects, roles, or islands... (Esc to close)"
            className="w-full bg-transparent text-white outline-none font-mono text-sm placeholder-gray-600"
          />
          <div className="text-[10px] text-gray-500 font-mono bg-black-100 px-2 py-1 rounded border border-gray-800">
            ESC
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <div className="p-8 text-gray-600 font-mono text-sm text-center">
              No results found for "{search}"
            </div>
          )}
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className="w-full text-left px-4 py-3 hover:bg-accent/10 focus:bg-accent/10 focus:outline-none rounded-lg group flex justify-between items-center transition-colors mb-1"
            >
              <div>
                <h4 className="text-white font-bold text-sm group-hover:text-accent group-focus:text-accent transition-colors">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-gray-500 text-xs mt-1">{item.subtitle}</p>
                )}
              </div>
              <span className="text-[10px] text-accent/50 uppercase font-mono tracking-widest bg-accent/5 px-2 py-1 rounded">
                {item.type}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
