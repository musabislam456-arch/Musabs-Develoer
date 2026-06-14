import {
  FiCode,
  FiServer,
  FiCpu,
  FiLayout,
  FiSmartphone,
  FiZap,
  FiGithub,
  FiLinkedin,
  FiBriefcase,
  FiUser,
  FiGrid,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import { IconType } from "react-icons";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "AI-Powered Web Developer",
  "Full-Stack Engineer",
  "Next.js Specialist",
  "UI/UX Focused Builder",
];

export const stats = [
  { label: "Projects Delivered", value: 30, suffix: "+" },
  { label: "Happy Clients", value: 25, suffix: "+" },
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Avg. Response Time", value: 2, suffix: "h" },
];

export type SkillCategory = {
  title: string;
  icon: IconType;
  description: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: FiCode,
    description: "Building fast, accessible, pixel-perfect interfaces.",
    skills: [
      { name: "React / Next.js", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend Development",
    icon: FiServer,
    description: "Designing scalable APIs and reliable server logic.",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Firebase / Firestore", level: 88 },
      { name: "REST & GraphQL APIs", level: 85 },
      { name: "Authentication & Security", level: 87 },
    ],
  },
  {
    title: "AI Integration",
    icon: FiCpu,
    description: "Embedding intelligent features into modern products.",
    skills: [
      { name: "OpenAI / Claude APIs", level: 93 },
      { name: "AI Chatbots & Assistants", level: 90 },
      { name: "Automation Workflows", level: 86 },
      { name: "Prompt Engineering", level: 91 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: FiLayout,
    description: "Crafting intuitive flows with premium visual polish.",
    skills: [
      { name: "Figma Prototyping", level: 89 },
      { name: "Design Systems", level: 90 },
      { name: "Micro-interactions", level: 92 },
      { name: "Accessibility (WCAG)", level: 85 },
    ],
  },
  {
    title: "Responsive Design",
    icon: FiSmartphone,
    description: "Pixel-perfect experiences across every screen size.",
    skills: [
      { name: "Mobile-First Layouts", level: 96 },
      { name: "Cross-Browser Testing", level: 90 },
      { name: "Performance Optimization", level: 92 },
      { name: "Core Web Vitals", level: 88 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  tag: string;
};
export type ProjectExperience = {
  challenge?: string;
  solution?: string;
  results?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  tag?: string;
  screenshot?: string;
  experience?: ProjectExperience;
};

export const projects: Project[] = [
  {
    title: "Creator AI",
    description:
      "An AI-powered content creation platform that helps users generate creative and professional content through intelligent automation and a modern UX.",
    tech: ["Next.js", "React", "Tailwind CSS", "AI Integration", "Vercel"],
    liveUrl: "https://ai-create-pi.vercel.app",
    githubUrl: "",
    tag: "AI Platform",
    screenshot: "",
    experience: {
      challenge:
        "Enable non-technical users to rapidly produce professional content at scale.",
      solution:
        "Built an intuitive editor and AI-assisted templates that generate copy and ideas with a streamlined UX.",
      results: "Faster content production and higher user engagement via AI automation.",
    },
  },
  {
    title: "AuraCV",
    description:
      "An AI-powered resume builder that helps users create professional ATS-friendly resumes and CVs using smart templates and automation.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "AI Integration"],
    liveUrl: "https://auracv.vercel.app",
    githubUrl: "",
    tag: "Resume Builder",
    screenshot: "",
    experience: {
      challenge: "Create ATS-compliant resumes without manual formatting headaches.",
      solution:
        "Developed template-driven export, live preview, and AI-suggested phrasing for professional results.",
      results: "Higher conversion for users creating polished CVs, improved time-to-ready resumes.",
    },
  },
  {
    title: "Zaragoza Restaurant",
    description:
      "A modern restaurant website designed to showcase menus, services, food items, and customer information through a visually appealing and responsive experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "Responsive UI"],
    liveUrl: "https://zaragoza-delta.vercel.app",
    githubUrl: "",
    tag: "Restaurant",
    screenshot: "",
    experience: {
      challenge: "Increase online reservations and showcase menu visually.",
      solution:
        "Built a mobile-first landing experience with prominent CTAs, interactive menu, and contact integration.",
      results: "Improved user engagement and easier customer reach via clear CTAs.",
    },
  },
  {
    title: "Future AI Tech",
    description:
      "A futuristic technology website focused on AI solutions, innovation, and modern digital experiences with a premium UI.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://futureaitech.site",
    githubUrl: "",
    tag: "Technology",
    screenshot: "",
    experience: {
      challenge: "Convey a cutting-edge brand identity while keeping clarity.",
      solution:
        "Implemented immersive animations, clear service messaging, and interactive demos to highlight offerings.",
      results: "Stronger brand perception and improved visitor time-on-site.",
    },
  },
];

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "AI Websites",
    description:
      "Smart websites with built-in AI chatbots, content generation, and automation that work for your business around the clock.",
    icon: FiCpu,
  },
  {
    title: "Business Websites",
    description:
      "Polished, conversion-focused websites that build trust and represent your brand with a premium, professional feel.",
    icon: FiBriefcase,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into leads, with fast load times and clear calls to action.",
    icon: FiZap,
  },
  {
    title: "Portfolio Websites",
    description:
      "Personal and creative portfolios that showcase your work beautifully, with interactive galleries and smooth animations.",
    icon: FiUser,
  },
  {
    title: "Web Applications",
    description:
      "Full-stack web apps with authentication, databases, dashboards, and custom features tailored to your workflow.",
    icon: FiGrid,
  },
];

export type WhyItem = {
  title: string;
  description: string;
  icon: IconType;
};

export const whyChooseMe: WhyItem[] = [
  {
    title: "Fast Delivery",
    description: "Efficient workflows mean your project ships on time, every time.",
    icon: FiZap,
  },
  {
    title: "Modern Design",
    description: "Clean, futuristic interfaces that feel premium and on-trend.",
    icon: FiLayout,
  },
  {
    title: "Mobile Responsive",
    description: "Flawless experiences across phones, tablets, and desktops.",
    icon: FiSmartphone,
  },
  {
    title: "SEO Friendly",
    description: "Built with best practices so your site ranks and gets found.",
    icon: FiTrendingUp,
  },
  {
    title: "AI Integrations",
    description: "Smart features that automate tasks and delight your users.",
    icon: FiCpu,
  },
  {
    title: "Clean Code",
    description: "Maintainable, scalable code that's easy to extend later.",
    icon: FiCheckCircle,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Studio",
    quote:
      "Musab delivered a stunning website ahead of schedule. The AI features he added have genuinely improved how our customers interact with us.",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Marketing Director, Northwind",
    quote:
      "Communication was clear from day one, and the final product looked far more premium than what we briefed. Highly recommend his work.",
    rating: 5,
  },
  {
    name: "Aisha Khan",
    role: "Founder, Aisha Designs",
    quote:
      "He understood my vision instantly and translated it into a sleek, fast portfolio site. The animations feel incredibly polished.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Product Manager, Lumen",
    quote:
      "Our web app needed a complex dashboard with real-time data. Musab built it cleanly and explained every step along the way.",
    rating: 5,
  },
];

export const aboutHighlights = [
  "Building production-ready web apps with Next.js & React",
  "Integrating AI tools to automate and enhance user experiences",
  "Designing clean, conversion-focused interfaces for businesses",
];

export const contactLinks = {
  whatsapp: "https://wa.me/00000000000",
  email: "mailto:hello@musab.dev",
  linkedin: "https://www.linkedin.com/in/musab/",
  github: "https://github.com/",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/musab/", icon: FiLinkedin },
];
