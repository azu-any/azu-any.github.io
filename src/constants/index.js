
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  figma,
  oerwf,
  python,
  c,
  swift,
  java,
  latex,
  postgres,
  xampp,
  php,
  abat,
  udlap,
  apple,
  academy,
  micai,
  stomadida,
  colorscore,
  maia,
  jorge,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SWE Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Accessibility Engineer",
    icon: backend,
  },
  {
    title: "QC Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Xampp",
    icon: xampp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "LaTeX",
    icon: latex,
  },

];

const experiences = [
  {
    title: "Software Engineer Intern - Media Platforms Accessibility",
    company_name: "Apple",
    icon: apple,
    iconBg: "#000",
    date: "May 2026 - August 2026",
    points: [
      "Architected an end-to-end VoiceOver media feature on the Media Platforms Accessibility team, integrated platform-wide.",
      "Engineered a Swift-based multimodal LLM pipeline with structured prompting and safety guardrails.",
      "Reduced pipeline latency by 30% by building a custom parameter-optimization benchmarking harness.",
      "Defined the non-visual interaction model and authored comprehensive handoff specifications for the feature.",
      "Drove refinements to audio pacing and controls through cross-functional reviews with Accessibility, QA, and Design.",
    ],
    section: "Apple",
    images: [
      { src: "work/apple/rainbow-me.jpg", config: "-top-[60px] -left-[120px] -rotate-3", zIndex: 10, frame: "polaroid", size: "w-32 h-48 md:w-40 md:h-64" },
      { src: "work/apple/ax.jpg", config: "bottom-[120px] -right-[150px] rotate-6", zIndex: 20, frame: "glass", size: "w-32 h-48 md:w-40 md:h-64" },
      { src: "work/apple/summer.jpg", config: "-bottom-[100px] -right-[120px] rotate-2", zIndex: -1, frame: "rounded", size: "w-40 h-40 md:w-56 md:h-56" },
      { src: "work/apple/ml.jpg", config: "bottom-[0px] -left-[180px] -rotate-6", zIndex: 0, frame: "dashed", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "work/apple/logo.png", config: "-bottom-[320px] left-[60px] -rotate-6", zIndex: 50, size: "w-40 h-40 md:w-64 md:h-64", contain: true },
    ],
  },
  {
    title: "Instructor & Community Outreach Program Manager",
    company_name: "Jr. Developers Academy",
    icon: academy,
    iconBg: "#000",
    date: "August 2025 - Present",
    points: [
      "Designed and taught a programming curriculum for 200+ elementary students in an under-resourced community.",
      "Mentored students in Swift, breaking down complex programming topics to guide them in building their first app.",
    ],
    images: [
      { src: "/education/outreach/class.jpg", config: "-top-[50px] -right-[200px] rotate-3", zIndex: -1, frame: "polaroid", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "/education/outreach/kids.jpg", config: "bottom-[20px] -right-[180px] -rotate-6", zIndex: 10, frame: "glass", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "/education/outreach/playground.jpg", config: "-bottom-[200px] left-[80px] rotate-2", zIndex: 0, frame: "rounded", size: "w-40 h-40 md:w-56 md:h-56" },
    ],
  },
  {
    title: "Software Engineer Intern - Xcode Previews",
    company_name: "Apple",
    date: "June 2025 - August 2025",
    points: [
      "Built internal SwiftUI developer tools on the Xcode Previews team to extend the functionality of Previews.",
      "Resolved issues in the display of user code error messages, ensuring UI consistency during development.",
      "Integrated LLMs to extract and present contextual insights, reducing cognitive load and boosting developer efficiency.",
    ],
    section: "Apple",
    images: [
      { src: "/work/apple/rainbow.jpg", config: "-top-[180px] -right-[100px] -rotate-3", zIndex: 50, frame: "polaroid", size: "w-40 h-40 md:w-56 md:h-56" },
      { src: "/work/apple/pin.jpg", config: "-bottom-[20px] -left-[160px] rotate-12", zIndex: -1, frame: "glass" },
      { src: "/work/apple/view.jpg", config: "-bottom-[140px] -right-[120px] -rotate-6", zIndex: 0, frame: "rounded", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "/work/apple/ducks.jpg", config: "top-[20px] -right-[230px] rotate-6", zIndex: 20, frame: "dashed", size: "w-40 h-40 md:w-56 md:h-56" },
    ],
  },
  {
    title: "Apple Developer Academy",
    company_name: "UNINA",
    icon: academy,
    iconBg: "#000",
    date: "September 2024 - June 2025",
    points: [
      "Designing, crafting and developing applications for Apple ecosystem.",
      "Challenge Based Learning (CBL) academy that teaches Coding, Graphical User Interface Design (GUI), and Business",
      "Collaborating with cross-functional teams from different backgrounds and cultures.",
    ],
    section: "Apple",
    images: [
      { src: "education/apple/alley.jpg", config: "-bottom-[120px] -left-[130px] -rotate-6", zIndex: -1, frame: "polaroid", size: "w-32 h-48 md:w-48 md:h-64" },
      { src: "education/apple/food.JPG", config: "bottom-[180px] -right-[160px] rotate-6", zIndex: 0, frame: "glass", size: "w-40 h-40 md:w-48 md:h-48" },
      { src: "education/apple/mexicans.jpg", config: "-top-[140px] -left-[80px] -rotate-2", zIndex: 10, frame: "rounded", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "education/apple/profile.jpg", config: "-top-[140px] right-[20px] rotate-12", zIndex: 50, frame: "circle", size: "w-32 h-32 md:w-48 md:h-48" },
      { src: "education/apple/speaker.jpg", config: "top-[100px] -right-[160px] rotate-3", zIndex: -1, frame: "dashed", size: "w-32 h-48 md:w-40 md:h-64" },
      { src: "education/apple/team.jpg", config: "-bottom-[160px] right-[200px] -rotate-6", zIndex: 20, frame: "polaroid", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "education/apple/tourist.jpg", config: "top-[260px] -right-[20px] -rotate-3", zIndex: -1, frame: "dark", size: "w-48 h-32 md:w-64 md:h-48" },
      { src: "education/apple/udlap.png", config: "-top-[200px] right-[200px] rotate-2", zIndex: 0, frame: "rounded", size: "w-40 h-40 md:w-56 md:h-56" },
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Abat Northamerica",
    icon: abat,
    iconBg: "#fff",
    date: "January 2024 - August 2024",
    points: [
      "Cut internal operational costs by 30% by developing and deploying ML models on Jetson Nano and Raspberry Pi.",
      "Trained object recognition models (YOLOv5, YOLOv8, MMDetection) to automate pallet counting and damage detection.",
      "Implemented an OpenCV/TensorFlow facial recognition system to automate attendance tracking.",
    ],
    images: [
      { src: "work/abat/work.png", config: "-bottom-[120px] left-[20px] rotate-3", zIndex: -1, frame: "rounded", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "work/abat/pallets.jpg", config: "-bottom-[120px] -right-[140px] -rotate-6", zIndex: 10, frame: "dashed", size: "w-40 h-40 md:w-56 md:h-56" },
      { src: "work/abat/emotions.jpg", config: "top-[50px] -right-[150px] rotate-6", zIndex: 0, frame: "polaroid", size: "w-32 h-48 md:w-40 md:h-64" },
      { src: "work/abat/abat.png", config: "-bottom-[150px] left-[260px] -rotate-3", zIndex: 20, frame: "dark", size: "w-48 h-32 md:w-64 md:h-40" },
    ],
  },
  {
    title: "Computer Systems Engineering - Student",
    company_name: "Universidad de las Américas Puebla",
    icon: udlap,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2026 (expected)",
    points: [
      "GPA: 10.0/10.0",
      "Honors Program: Selected as part of the top 15% of the student body for academic excellence. Conducting research on artificial intelligence algorithms for realism assessment for image generated by AI under the supervision of a Ph.D professor.",
      "https://doi.org/10.1007/978-3-031-75540-8_15",
      "Programming Coursework: Algorithms and Programming, Object-Oriented Programming, Data Structures, Computational Architectures, Operating Systems, Databases.",
      "Math Coursework: Linear Algebra, Calculus I, Calculus II, Ordinary Diﬀerential Equations, Discrete Mathematics.",
    ],
    images: [
      { src: "education/udlap/hackathon.JPG", config: "-bottom-[150px] left-[50px] -rotate-6", zIndex: 10, frame: "polaroid", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "education/udlap/mesa.JPG", config: "-bottom-[150px] right-[30px] rotate-3", zIndex: -1, frame: "glass", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "education/udlap/quantum.jpg", config: "-bottom-[120px] -left-[150px] -rotate-3", zIndex: 0, frame: "rounded", size: "w-32 h-48 md:w-40 md:h-64" },
    ]
  },
];

const testimonials = [
  {
    testimonial: "During my time working with Azuany, I have discovered that despite her young age, she is a talented, hardworking, committed and highly capable computer systems engineering student who excels in artificial intelligence and python development. She has remarkably completed her tasks surpassing the performance of other interns and junior developers.",
    name: "Jorge García",
    designation: "AI Developer",
    company: "abat Northamerica",
    image: jorge
  },
];

const projects = [
  {
    name: "MAIA: Mobility AI Analytics",
    description:
      "Mobility & AI Hackathon 2025 (1st Place). An AI-powered platform transforming city transport by turning social feedback into actionable insights for authorities.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    images: [
      { src: maia, config: "top-[40px] -left-[240px] rotate-6", zIndex: 0, frame: "rounded", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "/projects/maia/win.jpg", config: "-bottom-[150px] -right-[60px] -rotate-3", zIndex: 50, frame: "polaroid", size: "w-48 h-32 md:w-64 md:h-40" },
    ],
    source_code_link: "https://github.com/JorgeVenegas/zepedapp.git",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "ColorScore",
    description:
      "Real-time iOS app for color-blind soccer fans. Utilizes Core ML and computer vision to distinguish players on the field.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "iOS",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    images: [
      { src: "/projects/colorscore/colorscore.png", config: "-top-[40px] right-[15px] rotate-2", zIndex: 50, size: "w-24 h-24 md:w-32 md:h-32" },
      { src: "/projects/colorscore/team-memoji.PNG", config: "-top-[80px] right-[95px] rotate-2", zIndex: 50, size: "w-24 h-24 md:w-32 md:h-32", frame: "circle" },
      { src: "/projects/colorscore/presentation.jpg", config: "-bottom-[150px] left-[50px] -rotate-2", zIndex: 0, size: "w-48 h-32 md:w-64 md:h-40", frame: "dark" },
      { src: "/projects/colorscore/detection.PNG", config: "-bottom-[150px] left-[300px] rotate-2", zIndex: -1, size: "w-48 h-32 md:w-64 md:h-40", frame: "rounded" },
      { src: "/projects/colorscore/win.png", config: "-bottom-[80px] -right-[150px] rotate-3", zIndex: 0, frame: "glass", size: "w-32 h-48 md:w-40 md:h-64" },
    ],
    source_code_link: "https://github.com/azu-any/AppAccesibilidad.git",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Stomadida",
    description:
      "Interactive 3D ostomy care tutorials on iPadOS & visionOS. Validated by international healthcare professionals (FAIS). Features multilingual support and geolocation.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "iPadOS",
        color: "green-text-gradient",
      },
      {
        name: "visionOS",
        color: "pink-text-gradient",
      },
    ],
    // image: stomadida,
    images: [
      { src: "/projects/stomadida/stomadida.png", config: "-top-[40px] right-[45px] rotate-2", zIndex: 50, frame: "rounded", size: "w-24 h-24 md:w-32 md:h-32" },
      { src: "/projects/stomadida/team-drawing.jpg", config: "bottom-[40px] -left-[340px] -rotate-2", zIndex: 0, frame: "glass" },
      { src: "/projects/stomadida/screenshot.jpg", config: "bottom-[30px] -left-[180px] -rotate-2", zIndex: -1, size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "/projects/stomadida/team-fais.jpg", config: "-bottom-[150px] -left-[240px] -rotate-2", frame: "polaroid", zIndex: 0 },
      { src: "/projects/stomadida/team.jpg", config: "-top-[80px] -left-40 rotate-6", frame: "polaroid", zIndex: -1 },
      { src: "/projects/stomadida/presentation-letter.jpg", config: "-bottom-[250px] -left-[60px] -rotate-3", zIndex: -1, frame: "rounded", size: "w-32 h-48 md:w-40 md:h-64" },
      { src: "/projects/stomadida/presentation.jpg", config: "-bottom-[280px] left-[100px] rotate-3", zIndex: 0, frame: "rounded", size: "w-32 h-48 md:w-40 md:h-64" },
      { src: "/projects/stomadida/poster.jpg", config: "-bottom-[250px] left-[260px] rotate-2", zIndex: 0, frame: "dashed", size: "w-32 h-48 md:w-40 md:h-64" }
    ],
    source_code_link: "https://apps.apple.com/us/app/stomadida-stoma-care-guide/id6746772397",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "QCourse 551-1",
    description:
      "Interactive quantum computing course with Classiq, featuring Jupyter notebooks and hands-on exercises for Grover's algorithm.",
    tags: [
      {
        name: "Quantum",
        color: "blue-text-gradient",
      },
      {
        name: "EduTech",
        color: "green-text-gradient",
      },
      {
        name: "Jupyter",
        color: "pink-text-gradient",
      },
    ],
    image: creator,
    source_code_link: "https://gitlab.com/alvarorgomez/introduction-to-quantum-computing-with-classiq/-/tree/72d0429a227c5666f5fa95bd04373479c0edf121/",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "AI Image Coherence",
    description:
      "Published Springer paper surveying metrics for assessing realism in AI-generated images.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    images: [
      { src: "/work/micai/micai.png", config: "-top-[150px] -left-[60px] -rotate-6", zIndex: 0, frame: "glass", size: "w-48 h-32 md:w-64 md:h-40" },
      { src: "/work/micai/real1.png", config: "bottom-[60px] -right-[180px] rotate-3", zIndex: 10, frame: "rounded", size: "w-40 h-40 md:w-48 md:h-48" },
      { src: "/work/micai/real2.png", config: "top-[240px] -right-[80px] -rotate-3", zIndex: -1, frame: "polaroid", size: "w-40 h-40 md:w-48 md:h-48" },
      { src: "/work/micai/unreal1.png", config: "-bottom-[140px] -left-[80px] rotate-6", zIndex: 20, frame: "dashed", size: "w-40 h-40 md:w-48 md:h-48" },
      { src: "/work/micai/unreal2.png", config: "-top-[140px] -right-[40px] rotate-12", zIndex: 50, frame: "circle", size: "w-32 h-32 md:w-48 md:h-48" },
    ],
    source_code_link: "https://link.springer.com/chapter/10.1007/978-3-031-75540-8_15",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    name: "OERWF",
    description:
      "Open educational resource for high school physics, modeling wave functions with GeoGebra.",
    tags: [
      {
        name: "EduTech",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
    ],
    image: oerwf,
    source_code_link: "https://azuanymila.me/reafo/home.html",
    className: "md:col-span-1 md:row-span-1",
  },
];

export { services, technologies, experiences, testimonials, projects };
