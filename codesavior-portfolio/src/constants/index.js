
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/codesaviour.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Founder & Full-Stack Developer",
    company_name: "Codesaviour",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2025 - present",
    points: [
     "Built and scaled CodeSavior as a trusted tech brand helping students with IT assignments, coding projects, and web development.",
      "Delivered full-stack solutions using React, Node.js, Express, and MongoDB — from sleek frontends to robust APIs.",
      "Developed automation tools and reusable components to accelerate client project delivery.",
      "Provided one-on-one technical mentorship to fellow students and early-career developers.",
      "Managed client communications, timelines, and quality control — wearing every hat with confidence.",
    
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "CodeSavior delivered my student web project in under a week and taught me more in 3 days than I learned in class all semester.",
    name: "Zahra Khan",
    designation: "Computer Science Student",
    company: "University of Karachi",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I sent Fatima a messy half-done Python script. She returned a fully working web tool with login and database — legend!",
    name: "Ali Raza",
    designation: "Freelancer & Client",
    company: "TechWiz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "We’ve used CodeSavior for 3 backend modules now. Every time, clean code, perfect docs, and early delivery. She’s the real deal.",
    name: "Dr. Hassan Mirza",
    designation: "Lecturer",
    company: "FAST NUCES",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Clara - Pacman-Style Java Game",
    description:
      "A fully custom Pacman-style game built using Clara Online's limited Java-based API. Features dynamic ghost AI, multiple levels, collectible items, and level transitions—all engineered within strict platform constraints.",
    tags: [
      
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "clara online",
        color: "pink-text-gradient",
      },
      {
        name: "game dev",
        color: "green-text-gradient",
      },
 
    ],
    image: project2, // 🔁 Replace with your actual image import
    source_code_link: "https://github.com/CodeSavior/clara-pacman-game",
  },
  {
    name: "Smart Inventory System",
    description:
      "A real-time inventory management solution designed for small businesses and student labs. Features barcode scanning, automated alerts, low-stock predictions, and smart dashboards powered by MySQL + Node.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Student Success Tracker",
    description:
      "An analytics dashboard that tracks academic performance, attendance, and behavioral trends. Built for educators to easily identify at-risk students and support personalized interventions early.",
    tags: [
       {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
