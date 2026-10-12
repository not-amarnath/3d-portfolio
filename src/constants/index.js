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
  tailwind,
  nodejs,
  mongodb,
  git,
  wordpress,
  webflow,
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
  status: "Open to Software Developer Roles · Kolkata, India · IST (UTC+5:30)",
  location: "Kolkata, West Bengal",
  hostname: "amar-dev.local",
  timezone: "Asia/Kolkata (UTC+5:30)",
  availability: "Open to Work / Immediate",
  workType: "On-site · Hybrid · Remote",
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

export const heroStats = [
  {
    value: "3+",
    label: "Industry Roles",
    detail: "iB Arts · Expm · EmpLife",
  },
  {
    value: "10+",
    label: "Projects Shipped",
    detail: "Production & AI Agents",
  },
  {
    value: "4+",
    label: "Verified Credentials",
    detail: "IBM · HackerRank · XPMC",
  },
  {
    value: "100%",
    label: "Mobile Optimized",
    detail: "Zero-Lag WebGL & Touch",
  },
];

export const systemProfile = [
  { key: "hostname", val: "amar-dev.local", highlight: false },
  { key: "location", val: "Kolkata, WB · India", highlight: false },
  { key: "timezone", val: "Asia/Kolkata (UTC+5:30)", highlight: false },
  { key: "education", val: "B.Tech CSE · SNU · 2026", highlight: false },
  { key: "specialization", val: "Full Stack (MERN) · AI Agents", highlight: false },
  { key: "current-role", val: "Graduate Eng. Trainee @ iB Arts", highlight: false },
  { key: "availability", val: "● Open to Opportunities", highlight: true, color: "text-emerald-400" },
  { key: "work-type", val: "On-site · Hybrid · Remote", highlight: false },
  { key: "email", val: "ghoshamarnath06@gmail.com", highlight: false },
];

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
    id: "education",
    title: "Education",
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
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "Webflow",
    icon: webflow,
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
    date: "June 2026 - Present",
    status: "ACTIVE",
    type: "Full-time · On-site",
    tags: ["WordPress", "Webflow", "Divi Builder", "MERN Stack", "Responsive UI"],
    points: [
      "Developed and customized company websites in WordPress/Divi, delivering responsive, user-friendly layouts.",
      "Tested MERN stack applications for cross-device responsiveness, catching UI and functionality issues pre-release.",
      "Upskilled in Webflow through hands-on practice, expanding front-end development capabilities for future client projects.",
      "Gained hands-on exposure to MERN stack development workflows, collaborating with the team during feature validation.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Expm Learning India Private Limited",
    icon: backend,
    iconBg: "#383E56",
    date: "October 2025 - December 2025",
    type: "Internship · Onsite",
    tags: ["BigBlueButton", "Gemini AI", "Speech Analytics", "Automation", "Node.js"],
    points: [
      "Built an automation pipeline for BigBlueButton, cutting manual documentation effort by 70% (~2 hrs/week saved).",
      "Developed an AI audio intelligence pipeline (Gemini) for speaker ID and transcript generation, boosting accuracy by 35% and eliminating manual note-taking.",
      "Added speech analytics for automated sentiment analysis and participation tracking, lifting operational insight coverage by 50% with zero manual input.",
      "Delivered the end-to-end pipeline in 8 weeks in an Agile workflow, cross-functional collaboration.",
    ],
  },
  {
    title: "Cybersecurity & API Testing Intern",
    company_name: "Employability.life",
    icon: empLifeLogo,
    iconBg: "#1d1836",
    date: "September 2024 - November 2024",
    type: "Internship · Remote",
    tags: ["REST API", "Postman", "Curl", "Vulnerability Testing", "SDLC"],
    points: [
      "Troubleshot and resolved RESTful API vulnerabilities and endpoint failures using Postman and curl.",
      "Ran security-focused API testing across environments, improving endpoint performance and SLA reliability.",
      "Documented incidents per SDLC standards; earned XPMC (XPro) certification in cybersecurity and API security testing.",
    ],
  },
];

export const education = [
  {
    institution: "Sister Nivedita University, Kolkata",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 – 2026",
    grade: "CGPA: 7.27/10",
    location: "Kolkata, West Bengal",
    highlights: [
      "Comprehensive coursework across Data Structures and Algorithms, Object-Oriented Programming, and Operating Systems.",
      "Specialized in Software Engineering, Computer Networks, and Full-Stack MERN application architectures.",
    ],
  },
];

export const certifications = [
  {
    title: "REST API & CSS Verification",
    issuer: "HackerRank",
    badge: "Verified Skill",
    desc: "Verified proficiency in modern CSS layouts, responsive design, and standard RESTful API development principles.",
    tags: ["REST API", "CSS3", "Python"],
  },
  {
    title: "Cybersecurity – Vulnerable API Security Testing",
    issuer: "Employability.life",
    badge: "Certified Specialist (XPMC / XPro)",
    desc: "Rigorous incident documentation, API vulnerability scanning, Postman testing, and secure SDLC standards.",
    tags: ["API Security", "Postman", "Curl", "SDLC"],
  },
  {
    title: "Data Analytics & Professional Soft Skills",
    issuer: "IBM",
    badge: "Professional Certification",
    desc: "Specialized in data analysis workflows, actionable insight extraction, and cross-functional Agile delivery.",
    tags: ["Data Analytics", "Agile", "Business Communication"],
  },
  {
    title: "The Structured Query Language (SQL)",
    issuer: "University of Colorado Boulder",
    badge: "Advanced Database Cert",
    desc: "Advanced relational database engineering, complex queries, indexing strategies, and database optimization.",
    tags: ["SQL", "Relational DB", "Schema Design"],
  },
];

export const skillCategories = [
  {
    category: "Automation & AI",
    skills: ["Gemini AI", "OpenAI API", "Vapi ai", "REST API", "SOAP API", "Automation Pipelines"],
  },
  {
    category: "Web & Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Electron.js", "Three.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "CMS & Platforms",
    skills: ["WordPress", "Webflow", "Divi Builder", "REST APIs", "Responsive UI"],
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "SQL / MySQL", "Firebase", "Google Cloud"],
  },
  {
    category: "Tools & Core CS",
    skills: ["GitHub", "Postman", "Jira", "DSA", "OOP", "Operating Systems", "Computer Networks"],
  },
];

const projects = [
  {
    name: "Energy-IoT System",
    year: "2024",
    category: "IoT · Next.js · Cloud",
    description:
      "Automated IoT energy telemetry platform built with Next.js 14, NodeMCU hardware, and Firebase. Features real-time alerting, predictive consumption analytics, and automated threshold alarms, reducing manual tracking overhead by 70%.",
    metrics: [
      { val: "70%", label: "Manual Effort Saved" },
      { val: "40%", label: "Visibility Boost" },
      { val: "<1s", label: "Telemetry Latency" },
    ],
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
    source_code_link: "https://github.com/not-amarnath",
    live_link: "https://energy-iot.vercel.app/",
  },
  {
    name: "XMeetBot AI Assistant",
    year: "2024",
    category: "AI · Electron · WebSockets",
    description:
      "Cross-platform AI meeting assistant engineered with Electron, Next.js, WebSockets, and OpenAI pipelines. Features headless browser automation for transcriptions with 95% accuracy and automated meeting summarization reducing effort by 80%.",
    metrics: [
      { val: "95%", label: "Transcription Acc." },
      { val: "80%", label: "Meeting Time Saved" },
      { val: "Real-time", label: "WebSockets Stream" },
    ],
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
    source_code_link: "https://github.com/not-amarnath",
    live_link: "https://xmeetbot.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
