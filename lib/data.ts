import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaSlack } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiReactquery,
  SiSolid,
  SiStyledcomponents,
  SiChakraui,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiMui,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiDocker,
  SiHackerrank,
  SiVercel,
  SiNetlify,
  SiStorybook,
  SiPostman,
  SiUdemy,
} from "react-icons/si";
import { FaCertificate, FaMobileAlt } from "react-icons/fa";


export const personalInfo = {
  name: "Md Rizwan",
  title: "Senior Frontend Engineer",
  roles: [
    "Full-Stack Developer",
    "React.js Developer",
    "React Native Developer",
    "Frontend Architect",
  ],
  tagline: "Architecting and shipping scalable web and mobile applications with React.js, Next.js, React Native, and TypeScript. Specialized in frontend system design, state management, and performance optimization across SaaS, FinTech, E-commerce, and Enterprise products.",
  location: "Hisar, Haryana, India",
  phone: "+91 83839-44926",
  email: "rizwan.react.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/rizwan-react-dev/",
  github: "https://github.com/rizwan01506",
  hackerrank: "https://www.hackerrank.com/profile/mdrizwan83839441",
  resumeUrl: "/Md_Rizwan_Senior_Frontend_Engineer_6_YOE.pdf"
};

export const about = {
  summary: "Senior Frontend Engineer with 6+ years of experience architecting and shipping scalable web and mobile applications using React.js, Next.js, React Native, TypeScript, and JavaScript (ES6+). Specialized in frontend system design, component-driven architecture, state management (Redux Toolkit, React Query), SSR/SSG, and performance optimization (Core Web Vitals, code splitting, bundle optimization). Track record of leading feature delivery end-to-end, integrating REST/GraphQL APIs and secure payment systems, mentoring engineers, and driving measurable improvements in performance, reliability, and user engagement across SaaS, FinTech, E-commerce, and Enterprise products.",
  highlights: [
    "6+ years of professional experience in frontend development with React.js and React Native",
    "Led design, development, and deployment of 12+ scalable web and mobile applications serving 100K+ users",
    "Expert in component-driven architecture, Redux Toolkit, React Query, and micro-frontend design patterns",
    "Reduced redundant API calls by 40% through React Query, code-splitting, lazy loading, and memoization",
    "Improved Core Web Vitals (LCP, CLS, FCP) and SEO performance through rendering and load-time optimization",
    "Integrated RESTful APIs, GraphQL services, JWT authentication, and Role-Based Access Control (RBAC)",
    "Implemented Stripe, PayPal, and Razorpay payment integrations supporting 10,000+ monthly transactions with zero critical security incidents",
    "Implemented Firebase Cloud Messaging (FCM)-based push notifications for real-time updates across Android and iOS",
    "Built and maintained a 50+ component design system library using TypeScript, Material UI, and Storybook",
    "Delivered production-ready Android and iOS applications published on Play Store and App Store",
    "Ran code reviews, established frontend coding standards, and mentored 3+ junior developers",
    "Collaborative team player in Agile/Scrum environments using Jira and GitHub"
  ]
};

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "BRCM College of Engineering & Technology",
    location: "Haryana, India",
    period: "2021 - 2024"
  },
  {
    degree: "Diploma (Polytechnic)",
    field: "Computer Science & Engineering",
    institution: "Government Polytechnic, Hisar",
    location: "Haryana, India",
    period: "2017 - 2020"
  }
];

export const certifications = [
  {
    title: "Problem Solving (Intermediate) Certificate",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/8eed4d843ab3",
    icon: FaCertificate
  },
  {
    title: "React JS - Complete Guide for Frontend Web Development",
    issuer: "Udemy",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-3302e4e4-e919-41d4-a247-134668b73418.jpg",
    icon: SiUdemy
  },
  {
    title: "Successfully developed, deployed, and maintained mobile applications on Google Play Store and Apple App Store",
    issuer: "Repozitory Technologies",
    url: null,
    icon: FaMobileAlt
  }
];

export const skills = {
  frontend: [
    { name: "React.js", icon: FaReact },
    { name: "React Native", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript (ES6+)", icon: SiJavascript },
    { name: "Redux / RTK", icon: SiRedux },
    { name: "React Query", icon: SiReactquery },
    { name: "SolidJS", icon: SiSolid },
    { name: "Styled Components", icon: SiStyledcomponents },
    { name: "Chakra UI", icon: SiChakraui },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "SCSS / Sass", icon: SiSass },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Material UI (MUI)", icon: SiMui },
  ],

  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "RESTful APIs", icon: SiExpress },
    { name: "GraphQL", icon: SiGraphql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firebase", icon: SiFirebase },
    { name: "Firebase Cloud Messaging (FCM)", icon: SiFirebase },
    { name: "Prisma ORM", icon: SiPrisma },
  ],

  tools: [
    { name: "Git / GitHub", icon: FaGitAlt },
    { name: "GitHub Actions / CI-CD", icon: FaGitAlt },
    { name: "Docker", icon: SiDocker },
    { name: "Jest", icon: SiJest },
    { name: "React Testing Library", icon: SiTestinglibrary },
    { name: "Cypress", icon: SiCypress },
    { name: "Storybook", icon: SiStorybook },
    { name: "Postman", icon: SiPostman },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Agile / Scrum" },
    { name: "Jira" },
    { name: "Slack", icon: FaSlack },
  ],
};

export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  summary?: string;
  achievements: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Repozitory Technologies Pvt. Ltd",
    companyUrl: "https://www.repozitory.com",
    role: "Software Development Engineer (Frontend)",
    duration: "July 2020 - Present",
    location: "Hisar, Haryana, India",
    type: "Full-Time",
    summary: "Service-based organization delivering custom web & mobile solutions across SaaS, E-commerce, FinTech, and Enterprise domains",
    achievements: [
      "Led design, development, and deployment of 12+ scalable web and mobile applications using React.js, Next.js, React Native, and TypeScript, serving 100K+ users across SaaS, E-commerce, FinTech, and Enterprise platforms",
      "Architected reusable, component-driven frontend systems and design patterns, cutting new-feature development time and improving cross-project code maintainability",
      "Built high-performance UIs with React Query, Redux Toolkit, code splitting, lazy loading, and memoization, reducing redundant API calls by 40% and improving perceived responsiveness",
      "Improved Core Web Vitals (LCP, CLS, FCP) and SEO performance through rendering and load-time optimization, lifting organic search visibility and user engagement",
      "Integrated and secured RESTful APIs, GraphQL services, JWT authentication, and Role-Based Access Control (RBAC) across production applications",
      "Implemented Stripe, PayPal, and Razorpay payment integrations supporting 10,000+ monthly transactions with zero critical security incidents",
      "Implemented Firebase Cloud Messaging (FCM)-based push notifications for real-time status updates across Android and iOS applications in React Native apps",
      "Built and maintained a 50+ component design system library using TypeScript, Material UI, and Storybook, cutting new-feature build time through component reuse",
      "Ran code reviews, established frontend coding standards, and mentored 3+ junior developers, improving code quality and delivery consistency"
    ]
  }
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  achievements: string[];
  links?: {
    live?: string;
    android?: string;
    ios?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Elegant - Role-Based Mobile Platform",
    description: "Multi-role mobile application for Distributors, Salespersons, and Influencers to manage sales entries, site verification, and reward point distribution, published on Android and iOS.",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase Cloud Messaging (FCM)"],
    role: "Full Stack Developer",
    achievements: [
      "Implemented a multi-role RBAC system for Influencers, Salespersons, and Distributors with role-specific permissions, authentication, authorization, and approval workflows",
      "Implemented Firebase Cloud Messaging (FCM)-based push notifications for real-time updates related to request approvals, sales/site activities, rewards, and other important events",
      "Built sales/sites and incentive workflows, enabling Influencers to submit requests, Salespersons to approve them, and automatically awarding reward points based on predefined sales criteria",
      "Managed production deployment and app publishing for Android and iOS, successfully releasing the application on the Google Play Store and Apple App Store"
    ],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.elegantsteel.app",
      ios: "https://apps.apple.com/in/app/elegantsteel/id6755589469"
    }
  }, {
    title: "SkillSense - Employee HRMS Mobile App",
    description: "Employee-focused HRMS mobile application for attendance tracking, leave & loan requests, document uploads, profile management, and company announcements.",
    techStack: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Geolocation", "React Query"],
    role: "Mobile Developer / Frontend Developer",
    achievements: [
      "Implemented location-based attendance check-ins with geolocation verification",
      "Built leave and loan application workflows with real-time status updates",
      "Implemented secure document upload and profile verification flows",
      "Integrated push notifications and announcement feeds for internal communications",
      "Used React Query for efficient data caching, keeping attendance and leave records in sync across screens",
      "Designed reusable UI components across attendance, leave, and profile modules for a consistent cross-screen experience"
    ],
    links: {
      live: "https://skillsense.repozitory.com/login",
      android: "https://play.google.com/store/apps/details?id=com.repozitory.skillsense",
      ios: "https://apps.apple.com/in/app/skillsense-hrms/id6756061118"
    }
  }, {
    title: "3DX Labs - 3D Printing & Customization",
    description: "Marketing and product site for 3DX Labs offering 3D printing, product customization, and STL file printing services. Includes product catalog, customization flows, and contact/pricing pages.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "React Query"],
    role: "Full Stack Developer",
    achievements: [
      "Built responsive landing and product catalog pages with SEO-friendly markup",
      "Implemented customization and STL upload flows for on-demand 3D printing",
      "Optimized images and media using Next/Image for faster load times",
      "Improved contact and conversion flows to increase inbound enquiries"
    ],
    links: {
      live: "https://3dxlabs.in/"
    }
  }, {
    title: "US-Based Healthcare E-Commerce Platform",
    description: "Full-featured e-commerce platform for healthcare products with secure payment processing and dynamic product data rendering",
    techStack: ["React.js", "Redux", "JavaScript", "Styled-Components", "Node.js", "MongoDB"],
    role: "Frontend Developer",
    achievements: [
      "Modernized the React application by migrating class-based components to functional components, improving maintainability and adopting modern React development patterns",
      "Contributed 30-40% toward integrating PayPal, Stripe, and Razorpay payment gateways, working on payment flows and frontend-backend integration",
      "Developed product listing/card pages and responsive UI components using React and Styled-Components, focusing on usability and consistent UI/UX",
      "Worked with REST APIs to fetch and render dynamic product data, connecting frontend components with backend services and displaying real-time data in the application"
    ],
    links: {
      live: "https://www.eargo.com/"
    }
  }, {
    title: "Smart Building Automation & Indoor Climate Control",
    description: "IoT-based building automation system for climate control with role-based dashboards and real-time monitoring",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "NestJS", "MySQL", "Cypress", "React Query"],
    role: "Frontend Developer",
    achievements: [
      "Implemented React Query for efficient API data fetching and caching",
      "Designed dynamic UI rendering based on multiple user roles (Super Admin, Company Admin, User)",
      "Integrated Cypress E2E testing for critical business workflows",
      "Implemented lazy loading for optimized initial page load time",
      "Authored comprehensive test cases ensuring application stability",
      "Built real-time indoor climate monitoring dashboards visualizing live sensor data (temperature, humidity, air quality) for facility operators",
      "Worked with a NestJS-based REST API to manage device telemetry and role-based dashboard access control"
    ],
    links: {
      live: "https://www.fidelix.com/"
    }
  }, {
    title: "CastCrew - Casting & Talent Management Platform",
    description: "Comprehensive platform for managing casting calls, auditions, and talent profiles with role-based access control for Actors, Production Teams, and Admins",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "React Query", "Node.js", "MongoDB"],
    role: "Full-Stack Developer",
    achievements: [
      "Designed and developed the web application end-to-end, including frontend development, UI/UX, REST API development, database design, and business logic implementation",
      "Implemented authentication, authorization, and Role-Based Access Control (RBAC) for Actors, Production Teams, and Admins with role-specific permissions and workflows",
      "Developed talent discovery and casting features, including actor profile management, talent search, filtering, shortlisting, and casting request management",
      "Implemented admin workflow management for talent approval, availability management, casting requests, and casting lifecycle tracking"
    ],
    links: {
      live: "https://www.cast-crew.com/"
    }
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/rizwan01506",
    icon: FaGithub,
    color: "#333"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rizwan-react-dev",
    icon: FaLinkedin,
    color: "#0077b5"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/rizwanreactdev",
    icon: SiHackerrank,
    color: "#00EA64"
  },
  {
    name: "Email",
    url: "mailto:rizwan.react.dev@gmail.com",
    icon: FaEnvelope,
    color: "#ea4335"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/918383944926",
    icon: FaWhatsapp,
    color: "#25D366"
  }
];

export const faqs = [
  {
    question: "What does Md Rizwan specialize in?",
    answer: "Md Rizwan is a Senior Frontend Engineer with 6+ years of experience architecting and shipping scalable web and mobile applications using React.js, Next.js, React Native, and TypeScript. He specializes in frontend system design, component-driven architecture, state management (Redux Toolkit, React Query), SSR/SSG, and performance optimization (Core Web Vitals, code splitting, bundle optimization)."
  },
  {
    question: "Is Md Rizwan available for new opportunities?",
    answer: "Yes. He is actively seeking new full-time roles in India and the Gulf Region (Qatar, UAE, Saudi Arabia, Oman, Kuwait) and is available to join immediately."
  },
  {
    question: "What technologies does Md Rizwan work with?",
    answer: "React.js, React Native, Next.js, TypeScript, Redux Toolkit, React Query, GraphQL, and Tailwind CSS on the frontend, along with Node.js, Express.js, RESTful APIs, MongoDB, MySQL, PostgreSQL, and Firebase (including Firebase Cloud Messaging for push notifications) on the backend."
  },
  {
    question: "What kind of impact has Md Rizwan delivered in his current role?",
    answer: "At Repozitory Technologies, he has led design and development of 12+ scalable web and mobile applications serving 100K+ users across SaaS, E-commerce, FinTech, and Enterprise domains - reducing redundant API calls by 40%, supporting 10,000+ monthly transactions via Stripe, PayPal, and Razorpay with zero critical security incidents, and mentoring 3+ junior developers."
  },
  {
    question: "Does Md Rizwan have experience with mobile app development?",
    answer: "Yes. He has built and published production React Native applications on both the Google Play Store and Apple App Store, including role-based sales platforms with Firebase Cloud Messaging push notifications and HRMS attendance apps with geolocation-based check-ins."
  },
  {
    question: "How can I contact Md Rizwan?",
    answer: `You can reach him by email at ${personalInfo.email}, by phone at ${personalInfo.phone}, or through the contact form on this site.`
  },
];

export const seo = {
  title: "Md Rizwan - Senior Frontend Engineer | React.js & React Native Developer",
  description: "Senior Frontend Engineer with 6+ years architecting and shipping scalable web and mobile applications using React.js, Next.js, React Native, and TypeScript. Specialized in component-driven architecture, Redux Toolkit, React Query, GraphQL, and Core Web Vitals performance optimization across SaaS, FinTech, E-commerce, and Enterprise products.",
  keywords: "Md Rizwan, Senior Frontend Engineer, React Developer, React Native Developer, Next.js Developer, TypeScript, JavaScript, Redux Toolkit, React Query, GraphQL, Core Web Vitals, RBAC, Firebase Cloud Messaging, Full Stack Developer, Mobile App Development, Web Development, Hisar, India",
  author: "Md Rizwan",
  url: "https://www.mdrizwan.dev"
};
