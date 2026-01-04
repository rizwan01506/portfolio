import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiRedux, SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFirebase, SiJest, SiCypress } from 'react-icons/si';

export const personalInfo = {
  name: "Md Rizwan",
  title: "Senior Frontend Engineer",
  roles: [
    "React.js Developer",
    "React Native Developer",
    "Frontend Architect",
    "Full-Stack Developer"
  ],
  tagline: "Building scalable, high-performance web and mobile applications with modern technologies",
  location: "Hisar, Haryana, India",
  phone: "+91 83839-44926",
  email: "rizwan.react.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/mdrizwanreactdev",
  github: "https://github.com/mdrizwanreactdev",
  resumeUrl: "/resume.pdf"
};

export const about = {
  summary: "Frontend Developer with 5+ years of experience designing, developing, and maintaining high-performance web and mobile applications. I specialize in building component-driven architectures, reusable UI components, and scalable frontend solutions using React.js, React Native, TypeScript, and modern web technologies.",
  highlights: [
    "5+ years of professional experience in frontend development",
    "Expert in React.js, React Native, Next.js, and TypeScript",
    "Strong focus on performance optimization and scalable architecture",
    "Delivered production-ready Android and iOS applications",
    "Proven track record in reducing application load time and improving code quality",
    "Experience mentoring junior developers and conducting code reviews",
    "Collaborative team player in Agile/Scrum environments"
  ]
};

export const skills = {
  frontend: [
    { name: "React.js", icon: FaReact, level: 95 },
    { name: "React Native", icon: FaReact, level: 90 },
    { name: "Next.js", icon: SiNextdotjs, level: 88 },
    { name: "TypeScript", icon: SiTypescript, level: 90 },
    { name: "JavaScript (ES6+)", icon: SiJavascript, level: 95 },
    { name: "Redux / RTK", icon: SiRedux, level: 90 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
    { name: "HTML5 / CSS3", level: 95 },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, level: 85 },
    { name: "Express.js", icon: SiExpress, level: 85 },
    { name: "MongoDB", icon: SiMongodb, level: 80 },
    { name: "Firebase", icon: SiFirebase, level: 82 },
    { name: "REST APIs", level: 90 },
    { name: "JWT Authentication", level: 85 },
  ],
  tools: [
    { name: "Git / GitHub", icon: FaGitAlt, level: 92 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "Jest", icon: SiJest, level: 80 },
    { name: "Cypress", icon: SiCypress, level: 78 },
    { name: "Agile / Scrum", level: 90 },
    { name: "Jira", level: 88 },
  ]
};

export const experience = [
  {
    company: "Repozitory Technology",
    role: "Software Development Engineer",
    duration: "July 2020 - Present",
    location: "Hisar, Haryana, India",
    type: "Full-Time",
    achievements: [
      "Developed and maintained scalable web and mobile applications using React.js, React Native, TypeScript, Redux, and Node.js",
      "Led UI migration from Chakra UI to Tailwind CSS, reducing bundle size and improving page load performance by 30%",
      "Implemented secure role-based authentication, protected routes, and session management",
      "Optimized application performance using React Query, caching strategies, code-splitting, and lazy loading",
      "Integrated multiple payment gateways (PayPal, Stripe, Razorpay) and automated email notifications",
      "Designed and maintained reusable UI components, improving code architecture and scalability",
      "Collaborated with cross-functional teams in Agile environment using Jira and GitHub"
    ]
  }
];

export const projects = [
  {
    title: "Elegant Mobile App",
    description: "Role-based mobile application for Distributors, Salespersons, and Influencers to manage sales entries, site verification, and reward point distribution",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "React Navigation"],
    role: "Full Stack Developer",
    achievements: [
      "Designed and developed multi-role application improving operational efficiency",
      "Implemented rule-based reward points engine with automated calculations",
      "Built multi-level navigation architecture for seamless user experience",
      "Developed approval/rejection workflows with real-time notifications",
      "Successfully published apps on Google Play Store and Apple App Store"
    ],
    links: {
      android: "https://play.google.com/store",
      ios: "https://apps.apple.com"
    }
  },
  {
    title: "CastCrew - Casting & Audition Management Platform",
    description: "Comprehensive platform for managing casting calls, auditions, and talent profiles with role-based access control",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "React Query", "Node.js", "MongoDB"],
    role: "Full-Stack Developer",
    achievements: [
      "Engineered secure role-based routing with protected routes and access control",
      "Improved application performance by ~30% using React.lazy and component optimization",
      "Developed dynamic multi-step forms with auto-save functionality",
      "Integrated RESTful APIs for real-time data management",
      "Implemented efficient data fetching and caching strategies"
    ],
    links: {
      live: "https://castcrew.example.com"
    }
  },
  {
    title: "Smart Building Automation & Indoor Climate Control",
    description: "IoT-based building automation system for climate control with role-based dashboards and real-time monitoring",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "NestJS", "MySQL", "Cypress"],
    role: "Frontend Developer",
    achievements: [
      "Implemented React Query for efficient API data fetching and caching",
      "Designed dynamic UI rendering based on multiple user roles (Super Admin, Company Admin, User)",
      "Integrated Cypress E2E testing for critical business workflows",
      "Implemented lazy loading for optimized initial page load time",
      "Authored comprehensive test cases ensuring application stability"
    ]
  },
  {
    title: "US-Based Healthcare E-Commerce Platform",
    description: "Full-featured e-commerce platform for healthcare products with secure payment processing and order management",
    techStack: ["React.js", "Redux", "Styled-Components", "Node.js", "Express.js", "MongoDB"],
    role: "Frontend Developer",
    achievements: [
      "Implemented Redux for global state management and scalable data flow",
      "Refactored legacy codebase migrating class components to functional components with Hooks",
      "Developed responsive checkout UI with real-time cart updates",
      "Contributed to payment gateway integration (PayPal, Stripe, Razorpay)",
      "Built secure authentication flows with form validation and session management",
      "Configured Nodemailer for transactional emails and order confirmations"
    ]
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mdrizwanreactdev",
    icon: FaGithub,
    color: "#333"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mdrizwanreactdev",
    icon: FaLinkedin,
    color: "#0077b5"
  },
  {
    name: "Email",
    url: "mailto:rizwan.react.dev@gmail.com",
    icon: FaEnvelope,
    color: "#ea4335"
  },
  {
    name: "Download Resume",
    url: "/resume.pdf",
    icon: FaFileDownload,
    color: "#4caf50"
  }
];

export const seo = {
  title: "Md Rizwan - Senior Frontend Engineer | React.js & React Native Developer",
  description: "Experienced Frontend Engineer with 5+ years specializing in React.js, React Native, Next.js, and TypeScript. Building scalable web and mobile applications with focus on performance and user experience.",
  keywords: "Md Rizwan, Frontend Developer, React Developer, React Native Developer, Next.js, TypeScript, JavaScript, Full Stack Developer, Mobile App Development, Web Development, Hisar, India",
  author: "Md Rizwan",
  image: "/og-image.jpg",
  url: "https://www.mdrizwan.dev"
};
