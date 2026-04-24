export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  accent: string;
  note?: string;
  placeholder?: boolean;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "fa-house" },
  { id: "about", label: "About", icon: "fa-user" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "projects", label: "Projects", icon: "fa-laptop-code" },
  { id: "education", label: "Education", icon: "fa-graduation-cap" },
  { id: "journey", label: "Journey", icon: "fa-award" },
  { id: "contact", label: "Contact", icon: "fa-envelope" },
];

export const profile = {
  name: "Avanish Kumar",
  tagline: "Frontend Developer | MERN Stack Learner | Responsive UI Builder",
  headline: "Building clean, job-ready web experiences from the ocean floor up.",
  availability: "Open to Frontend and MERN developer opportunities",
  summary:
    "Motivated and detail-oriented fresher with strong frontend development skills and ongoing MERN stack training from CETPA Infotech. I enjoy crafting responsive, user-friendly experiences that feel polished, fast, and memorable.",
  about:
    "I am currently pursuing MCA through distance education while strengthening my practical web development skills through hands-on React, Tailwind CSS, JavaScript, Node.js, Express.js, and MongoDB learning. My focus is to ship interfaces that feel modern, smooth, and easy to use.",
  email: "xavieriteavanish@gmail.com",
  phoneDisplay: "+91 95652 65563",
  phoneRaw: "919565265563",
  location: "Azamgarh, Uttar Pradesh, India",
  photo: "/avanish.jpeg",
  resume: "/resume.pdf",
  github: "https://github.com/avanish-23",
  linkedin: "https://www.linkedin.com/in/avanish-kumar-131419257/",
  instagram: "https://www.instagram.com/your-instagram-handle/",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: profile.github,
    icon: "fab fa-github",
    accent: "from-white/50 to-cyan-200/10",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "fab fa-linkedin-in",
    accent: "from-cyan-300/60 to-sky-500/10",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phoneRaw}`,
    icon: "fab fa-whatsapp",
    accent: "from-emerald-300/60 to-cyan-300/10",
  },
  {
    label: "Instagram",
    href: profile.instagram,
    icon: "fab fa-instagram",
    accent: "from-sky-300/50 to-white/10",
    placeholder: true,
    note: "Replace this placeholder with your real Instagram link in src/data/portfolio.ts",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "fas fa-envelope",
    accent: "from-blue-200/60 to-cyan-400/10",
  },
];

export const heroStats = [
  { value: "2", label: "Portfolio Projects" },
  { value: "7", label: "Certifications" },
  { value: "Ongoing", label: "MERN Training" },
];

export const strengths = [
  "Quick learner and adaptable",
  "Strong problem-solving mindset",
  "Self-motivated and disciplined",
];

export const languages = ["Hindi (Native)", "English (Intermediate)"];

export const aboutHighlights = [
  {
    title: "Frontend First",
    text: "Strong focus on responsive interfaces built with React, Tailwind CSS, HTML, CSS, and JavaScript.",
    icon: "fas fa-layer-group",
  },
  {
    title: "Career Ready",
    text: "Designed for company applications with clear sections, polished CTAs, resume access, and fast contact options.",
    icon: "fas fa-briefcase",
  },
  {
    title: "Learning in Public",
    text: "Currently deepening MERN stack skills through CETPA training and practical project building.",
    icon: "fas fa-seedling",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "fas fa-code",
    accent: "from-sky-300/35 to-cyan-400/10",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript", level: "Strong" },
      { name: "HTML5", level: "Strong" },
      { name: "CSS3", level: "Strong" },
      { name: "Tailwind CSS", level: "Strong" },
    ],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    accent: "from-cyan-200/35 to-blue-500/10",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
    ],
  },
  {
    title: "Database",
    icon: "fas fa-database",
    accent: "from-white/25 to-sky-400/10",
    skills: [
      { name: "MongoDB", level: "Learning" },
      { name: "Database Basics", level: "Learning" },
    ],
  },
  {
    title: "Tools",
    icon: "fas fa-screwdriver-wrench",
    accent: "from-slate-100/30 to-cyan-300/10",
    skills: [
      { name: "Git", level: "Working" },
      { name: "GitHub", level: "Working" },
      { name: "VS Code", level: "Daily" },
    ],
  },
];

export const projects = [
  {
    title: "School Website",
    status: "Built",
    icon: "fas fa-school",
    description:
      "A modern responsive school website built with reusable React components and Tailwind CSS for a clean, accessible experience.",
    bullets: [
      "Responsive layout for desktop and mobile users",
      "Reusable UI sections for announcements, academics, and admissions",
      "Clean structure that is easy to extend and maintain",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    accent: "from-sky-300/30 via-cyan-300/10 to-transparent",
  },
  {
    title: "Portfolio Website",
    status: "Built",
    icon: "fas fa-id-card",
    description:
      "A personal portfolio website designed to showcase skills, resume, and recruiter-friendly contact options in a polished way.",
    bullets: [
      "Smooth scrolling single-page experience",
      "Clear sections for projects, education, and certifications",
      "Resume download and social profile integration",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    accent: "from-cyan-200/30 via-sky-300/10 to-transparent",
  },
  {
    title: "MERN Practice Lab",
    status: "Ongoing",
    icon: "fas fa-flask",
    description:
      "Hands-on training work from CETPA focused on learning MongoDB, Express.js, React.js, and Node.js through real-world practice builds.",
    bullets: [
      "Focused on practical CRUD and full-stack learning patterns",
      "Strengthening API understanding and app structure",
      "Turning training concepts into portfolio-ready work",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accent: "from-white/20 via-blue-300/10 to-transparent",
  },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institute: "Andhra University (Distance Education)",
    duration: "2025 - Present",
    note: "1st semester completed",
  },
  {
    title: "Bachelor of Arts in English",
    institute: "Maharaja Suhel Dev State University, Azamgarh",
    duration: "2022 - 2024",
    note: "Graduated",
  },
  {
    title: "ITI Electrician (NSQF Diploma)",
    institute: "Vocational Training",
    duration: "2021 - 2023",
    note: "Technical diploma",
  },
  {
    title: "Class 12th (CBSE)",
    institute: "St. Xavier's High School",
    duration: "2021",
    note: "School education",
  },
  {
    title: "Class 10th (ICSE)",
    institute: "Jyoti Niketan School",
    duration: "2019",
    note: "School education",
  },
];

export const journey = {
  training: {
    title: "MERN Stack Development Training",
    org: "CETPA Infotech",
    status: "Ongoing",
    summary:
      "Currently learning MongoDB, Express.js, React.js, and Node.js with real-world project practice and frontend-to-backend integration.",
    modules: [
      "React component architecture",
      "Node.js and Express.js basics",
      "MongoDB learning track",
      "Project-focused full-stack workflows",
    ],
  },
  certifications: [
    { title: "Python Basics", issuer: "University of Michigan (Coursera)", date: "Jan 2023" },
    { title: "Introduction to Artificial Intelligence", issuer: "IBM (Coursera)", date: "Feb 2023" },
    { title: "Human-Centered Design", issuer: "University of Toronto (Coursera)", date: "May 2023" },
    { title: "Python for Data Science", issuer: "IBM (Coursera)", date: "May 2023" },
    { title: "Hackathon Participation", issuer: "Studlence", date: "Jan 2023" },
    { title: "Python Certificate", issuer: "GUVI", date: "Aug 2023" },
    { title: "CCC (Course on Computer Concepts)", issuer: "Certification", date: "2022" },
  ],
};
