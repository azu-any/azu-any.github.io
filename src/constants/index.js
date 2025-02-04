import { o } from "maath/dist/index-0332b2ed.esm";
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
    micai,
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
      title: "App Developer",
      icon: web,
    },
    {
      title: "AI/ML Developer",
      icon: mobile,
    },
    {
      title: "Novice Researcher",
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
      title: "Apple Ecosystem Development - Student",
      company_name: "Apple Developer Academy @ UNINA ",
      icon: apple,
      iconBg: "#000",
      date: "September 2024 - June 2025",
      points: [
        "Designing, crafting and developing applications for Apple ecosystem.",
        "Challenge Based Learning (CBL) academy that teaches Coding, Graphical User Interface Design (GUI), and Business",
        "Collaborating with cross-functional teams from different backgrounds and cultures.",
      ],
    },
    {
      title: "AI Intern",
      company_name: "Abat Northamerica",
      icon: abat,
      iconBg: "#fff",
      date: "January 2024 - August 2024",
      points: [
        "Enhanced an attendance registry with a facial and emotion recognition through the use of OpenCV, Keras, and TensorFlow.",
        "Achieved a reduction in internal operational costs by 30% through machine learning models on Jetson Nano and Raspberry Pi 4.",
        "Trained AI models for object recognition to detect damages and count pallets with YOLOv5, YOLOv8 and MMDetection.",
        "Designed and connected the front-end of an AI system using sockets and Streamlit.",
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
      name: "Easy for Us, Complex for AI: Assessing the Coherence of Generated Realistic Images",
      description:
        "(Published in Springer) The paper presents a survey of current metrics and criteria for assessing the coherence of AI-generated images in terms of realism and quality.",
        tags: [
          {
            name: "AI",
            color: "blue-text-gradient",
          },
        {
          name: "Realism",
          color: "green-text-gradient",
        },
        {
          name: "ScientificPaper",
          color: "pink-text-gradient",
        },
      ],
      image: micai,
      source_code_link: "https://link.springer.com/chapter/10.1007/978-3-031-75540-8_15",
    },
    {
      name: "Open Educational Resources for the Wave Function - OERWF",
      description:
        "An open educational resource for high school students for learning about the wave function, a topic  in quantum mechanics using GeoGebra and eXeLearning.",
      tags: [
        {
          name: "eXeLearning",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: oerwf,
      source_code_link: "https://azuanymila.me/reafo/home.html",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };