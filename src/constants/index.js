import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  iBartsLogo,
  empLifeLogo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const personalInfo = {
  name: "Amarnath Ghosh",
  role: "Software Developer",
  tagline: "I build MERN stack applications, AI agents, and intelligent automation systems.",
  location: "Kolkata, West Bengal",
  phone: "+91 9907779569",
  email: "ghoshamarnath06@gmail.com",
  github: "https://github.com/not-amarnath",
  linkedin: "https://linkedin.com/in/amarnath-ghosh-in/",
  portfolio: "https://maybe-amar.vercel.app",
  education: {
    institution: "Sister Nivedita University, Kolkata",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 - 2026",
    cgpa: "7.27/10",
  },
};

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI & Automation Engineer",
    icon: creator,
  },
  {
    title: "Software & Desktop Dev",
    icon: mobile,
  },
  {
    title: "MERN Stack Specialist",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Graduate Engineer Trainee",
    company_name: "iB Arts Private Limited",
    icon: iBartsLogo,
    iconBg: "#1d1836",
    date: "June 2026 - Present (Onsite)",
    points: [
      "Contributed to the development and customization of company websites using WordPress and the Divi page builder, focusing on responsive and user-friendly layouts.",
      "Assisted in testing and quality assurance of MERN stack applications by verifying responsiveness across devices and identifying minor UI and functionality issues.",
      "Performed basic testing of application features and provided feedback to improve usability, consistency, and overall user experience.",
      "Gained hands-on exposure to MERN stack development workflows, collaborating with the team during feature validation and website testing activities.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Expm Learning India Private Limited",
    icon: empLifeLogo,
    iconBg: "#383E56",
    date: "October 2025 - December 2025 (Onsite)",
    points: [
      "Designed and implemented an intelligent automation pipeline for BigBlueButton, reducing manual documentation effort by 70% (2 hours saved per week) and enabling focus on client deliverables.",
      "Built an AI-powered audio intelligence pipeline integrating Gemini models to automate speaker identification and transcript generation, improving accuracy by 35%.",
      "Integrated speech analytics module enabling automated sentiment analysis and participation tracking, delivering 50% improvement in operational insight coverage.",
      "Collaborated cross-functionally to deliver the full pipeline end-to-end in 8 weeks, contributing to project documentation and knowledge sharing in an Agile delivery workflow.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "HackerRank Verified Certifications in REST API, CSS, and Python programming.",
    name: "HackerRank",
    designation: "Certified Skill",
    company: "HackerRank",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Cybersecurity - Security Testing of a Vulnerable API certification.",
    name: "Employability.life",
    designation: "Certified Specialist",
    company: "Employability.life",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Introduction to Data Analytics & People and Soft Skills for Professional Success.",
    name: "IBM",
    designation: "Professional Cert",
    company: "IBM",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    testimonial:
      "The Structured Query Language (SQL) Advanced Database Engineering.",
    name: "UC Boulder",
    designation: "Database Cert",
    company: "University of Colorado Boulder",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const projects = [
  {
    name: "Energy-IoT System",
    description:
      "Automated IoT monitoring system built with Next.js 14, NodeMCU, and Firebase. Features real-time alerting, predictive energy analytics, and automated threshold notifications, reducing manual monitoring effort by 70% and improving visibility by 40%.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nodemcu",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://energy-iot.vercel.app/",
  },
  {
    name: "XMeetBot AI Assistant",
    description:
      "Scalable AI meeting assistant engineered with Electron, Next.js, WebSockets, and OpenAI pipelines. Features headless browser automation for transcriptions with 95% accuracy and automated meeting summarization reducing effort by 80%.",
    tags: [
      {
        name: "electron",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://xmeetbot.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
