import { experiences, projects } from "./index.js";

// Utility functions to generate consistent IDs for spatial navigation
export const genExpId = (title) => `exp-${title.replace(/\s+/g, "-").toLowerCase()}`;
export const genProjId = (name) => `proj-${name.replace(/\s+/g, "-").toLowerCase()}`;

// ---------------------------------------------------------------------------
// DATA GROUPING
// ---------------------------------------------------------------------------
const appleExp = experiences.filter(e => e.section === "Apple");
const appleProj = projects.filter(p => p.name === "Stomadida" || p.name === "ColorScore");

const aiExp = experiences.filter(e => e.company_name.includes("Abat") || e.company_name.includes("Puebla"));
const aiProj = projects.filter(p => p.name.includes("MAIA") || p.name.includes("AI") || p.name.includes("QCourse"));

const eduExp = experiences.filter(e =>
  (e.company_name.includes("Academy") && !e.company_name.includes("Apple")) ||
  e.company_name.includes("Universidad")
);
const eduProj = projects.filter(p => p.name === "OERWF");


// ---------------------------------------------------------------------------
// SPATIAL LAYOUT CONFIGURATION
// Edit these className strings to move elements across the canvas
// ---------------------------------------------------------------------------

export const homeNode = {
  id: "node-home",
  className: "w-full max-w-4xl flex flex-col items-start justify-center p-4 bg-transparent z-50",
  mobileClassName: "w-full max-w-xl flex flex-col items-start justify-center p-4 bg-transparent z-50"
};

export const spatialIslands = [
  {
    id: "node-apple",
    title: "Apple_Ecosystem",
    subtitle: "SYS.NODE.01 // CORE",
    color: "#22d3ee",
    containerClass: "relative w-[1000px] h-[2300px] shrink-0 lg:scale-100",
    mobileContainerClass: "relative w-full h-[2300px] shrink-0",
    cards: [
      {
        id: genExpId(appleExp[0]?.title),
        data: appleExp[0],
        type: "experience",
        className: "absolute top-[180px] left-[150px] w-[440px] -rotate-2 z-20"
      },
      {
        id: genExpId(appleExp[1]?.title),
        data: appleExp[1],
        type: "experience",
        className: "absolute top-[550px] left-[380px] w-[380px] rotate-1 z-10"
      },
      {
        id: genExpId(appleExp[2]?.title),
        data: appleExp[2],
        type: "experience",
        className: "absolute top-[1050px] left-[100px] w-[520px] rotate-2 z-10"
      },
      {
        id: genProjId(appleProj[1]?.name),
        data: appleProj[1],
        type: "project",
        className: "absolute top-[1500px] left-[420px] w-[340px] -rotate-1 z-30"
      },
      {
        id: genProjId(appleProj[0]?.name),
        data: appleProj[0],
        type: "project",
        marginClass: "mt-24 md:mt-48"
      }
    ]
  },
  {
    id: "node-ai",
    title: "Machine_Intelligence",
    subtitle: "SYS.NODE.02 // RESEARCH",
    color: "#60a5fa",
    containerClass: "relative w-[1000px] h-[1600px] shrink-0 lg:scale-100",
    mobileContainerClass: "relative w-full h-[1600px] shrink-0",
    cards: [
      {
        id: genExpId(aiExp[0]?.title),
        data: aiExp[0],
        type: "experience",
        className: "absolute top-[180px] left-[200px] w-[480px] rotate-2 z-10"
      },
      {
        id: genProjId(aiProj[0]?.name),
        data: aiProj[0],
        type: "project",
        className: "absolute top-[550px] left-[450px] w-[340px] rotate-3 z-30"
      },
      {
        id: genProjId(aiProj[2]?.name),
        data: aiProj[2],
        type: "project",
        className: "absolute top-[920px] left-[150px] w-[440px] -rotate-2 z-40"
      }
    ]
  },
  {
    id: "node-edu",
    title: "Education",
    subtitle: "SYS.NODE.03 // COMMUNITY",
    color: "#a78bfa",
    containerClass: "relative w-[1000px] h-[1600px] shrink-0 lg:scale-100",
    mobileContainerClass: "relative w-full h-[1600px] shrink-0",
    cards: [
      {
        id: genExpId(eduExp[0]?.title || "jrdev"),
        data: eduExp[0],
        type: "experience",
        className: "absolute top-[180px] left-[150px] w-[420px] -rotate-1 z-10"
      },
      {
        id: genExpId(eduExp[1]?.title || "udlap"),
        data: eduExp[1],
        type: "experience",
        className: "absolute top-[550px] left-[400px] w-[520px] rotate-2 z-30"
      },

      /*{
        id: genProjId(eduProj[0]?.name || "oerwf"),
        data: eduProj[0],
        type: "project",
        className: "absolute top-[1290px] left-[450px] w-[400px] -rotate-3 z-20"
      }*/
    ]
  }
];

// ---------------------------------------------------------------------------
// SVG Path math removed for vertical scrolling whiteboard mode
// ---------------------------------------------------------------------------
