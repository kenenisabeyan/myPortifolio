import edotImage from '../assets/edotpage.png';
import clientImage from '../assets/client.png';
import employeeImage from '../assets/employee.png';
import clientflowImage from '../assets/clientflow.jpg';

export const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Satisfied Clients", value: "200+" },
  { label: "Completed Projects", value: "108+" },
  { label: "Client Retention Rate", value: "90%" },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company: "Hostinger",
    period: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Docker",
    period: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker’s web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used within the Docker ecosystem.",
    ],
  },
  {
    title: "React Native Developer",
    company: "Appwrite",
    period: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite’s backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

export const skills = [
  "React Developer",
  "Python Developer",
  "Backend Developer",
  "Interactive Developer",
  "Project Manager",
];

export const testimonials = [
  {
    name: "Esther Howard",
    handle: "@estherhoward",
    text: "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    rating: 5,
  },
  {
    name: "Guy Hawkins",
    handle: "@guyhawkins",
    text: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    rating: 5,
  },
  {
    name: "Floyd Miles",
    handle: "@floydmiles",
    text: "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    rating: 5,
  },
  {
    name: "Wade Warren",
    handle: "@wadewarren",
    text: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    rating: 5,
  },
  {
    name: "Marvin McKinney",
    handle: "@marvincmckinney",
    text: "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    rating: 5,
  },
];

export const projects = [
  {
    title: "EDOT Platform",
    description: "An interactive educational platform designed for seamless learning experiences and course management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: edotImage,
    link: "#",
  },
  {
    title: "ClientFlow",
    description: "A comprehensive project and client management dashboard with dynamic theme support.",
    tech: ["React", "Vite", "TailwindCSS"],
    image: clientflowImage,
    link: "#",
  },
  {
    title: "FollowFlow (Employee Portal)",
    description: "An internal employee and task tracking system designed for optimal team productivity.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    image: employeeImage,
    link: "#",
  },
  {
    title: "Client Portal",
    description: "A tailored client gateway for tracking invoices, project progress, and centralized reporting.",
    tech: ["React", "Vite", "TailwindCSS"],
    image: clientImage,
    link: "#",
  },
];

export const clientLogos = [
  { name: "Adobe", logo: "https://via.placeholder.com/120x60?text=Adobe" },
  { name: "Appwrite", logo: "https://via.placeholder.com/120x60?text=Appwrite" },
  { name: "NVIDIA", logo: "https://via.placeholder.com/120x60?text=NVIDIA" },
  { name: "Vercel", logo: "https://via.placeholder.com/120x60?text=Vercel" },
  { name: "Linear", logo: "https://via.placeholder.com/120x60?text=Linear" },
  { name: "Loom", logo: "https://via.placeholder.com/120x60?text=Loom" },
  { name: "Shopify", logo: "https://via.placeholder.com/120x60?text=Shopify" },
];