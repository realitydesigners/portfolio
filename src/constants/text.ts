import { FaYoutube, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiPrisma,
  SiBlender,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

export const skills = {
  Core: [
    { name: "Next.js 15+", icon: TbBrandNextjs },
    { name: "React", icon: SiReact },
    { name: "Astro", icon: SiAstro },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
  ],
  "3D & Graphics": [
    { name: "Three.js", icon: TbBrandThreejs },
    { name: "React-Three-Fiber", icon: TbBrandThreejs },
    { name: "Shaders", icon: DiCss3 },
    { name: "Blender", icon: SiBlender },
    { name: "Spline", icon: BiLogoFigma },
    { name: "D3", icon: TbBrandThreejs },
  ],
  Backend: [
    { name: "Headless CMS", icon: TbBrandNextjs },
    { name: "Sanity.io", icon: SiReact },
    { name: "Prisma", icon: SiPrisma },
    { name: "Auth Systems", icon: TbBrandNextjs },
    { name: "Server Components", icon: SiReact },
  ],
  Expertise: [
    { name: "3D Web Development", icon: TbBrandThreejs },
    { name: "Interactive Scenes", icon: TbBrandThreejs },
    { name: "Content Modeling", icon: SiReact },
    { name: "UI/UX Design", icon: BiLogoFigma },
    { name: "SEO Optimization", icon: TbBrandNextjs },
  ],
} as const;

export const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@realitydesigners",
    icon: FaYoutube,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/realitydesignrs",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/raymondreamer",
    icon: FaInstagram,
  },
  {
    name: "Github",
    url: "https://github.com/realitydesigners",
    icon: FaGithub,
  },
  {
    name: "Portfolio",
    url: "https://app.spline.design/@realitydesigners",
    icon: BiLogoFigma,
  },
];

export const projects = [
  {
    title: "Reality Designers",
    url: "https://reality-designers.com",
    image: "/images/Reality-Designers.png",
    alt: "Reality Designers",
  },
  {
    title: "Rthmn",
    url: "https://rthmn.com",
    image: "/images/Rythm.png",
    alt: "Rythm",
  },
];
