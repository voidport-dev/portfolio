import { motion } from "motion/react";
import FlintRobotLogo from "@assets/flint.png";
import ZgcLogo from "@assets/zgc.jpg";
import GuiderLogo from "@assets/guider.ico";
import DuckWalletLogo from "@assets/duck-wallet.jpg";
import FlappyDuckLogo from "@assets/flappy-duck.jpg";
import ProjectCard from "../project-card";
import {
  DUCK_WALLET_IMAGES,
  FLINT_IMAGES,
  FLAPPY_DUCK_IMAGES,
  FREELANCE_IMAGES,
  GUIDER_IMAGES,
  OTHERS_IMAGES,
  ZGC_IMAGES,
} from "./images";

const calculateDuration = (start: Date, end: Date) => {
  const diffMs = end.getTime() - start.getTime();
  const diffMonths = diffMs / (1000 * 60 * 60 * 24 * 30.4375);

  if (diffMonths >= 12) {
    const years = Math.floor(diffMonths / 12);
    const months = Math.round(diffMonths % 12);
    const yearStr = `${years} year${years > 1 ? "s" : ""}`;
    const monthStr =
      months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : "";
    return `${yearStr}${monthStr}`;
  } else {
    return `${Math.round(diffMonths)} month${
      Math.round(diffMonths) > 1 ? "s" : ""
    }`;
  }
};

const projectsData = [
  {
    isTypescript: true,
    badges: [
      "React Native",
      "Expo",
      "gRPC",
      "WebRTC",
      "Native Modules",
      "styled-components/native",
    ],
    logo: FlintRobotLogo,
    title: "Flint Robot Control App",
    description:
      "A mobile app for controlling a robot using a mobile app.. \n\nKey achievements:\n • Implemented a gRPC-based communication between the app and the robot\n • Implemented WebRTC-based video and audio streaming(push/pull) both locally and remotely \n• Implemented Native Modules for the app to interact with the Tencent SDK",
    images: FLINT_IMAGES,
    dates: "Mar. 2025 - Present",
    company: "React Native Developer at Flint Robotics",
    employmentType: "Full-time",
    duration: calculateDuration(new Date(2025, 2, 1), new Date()),
  },
  {
    isTypescript: true,
    badges: [
      "React",
      "emotion",
      "react spring",
      "OpenAPI",
      "react-query",
      "jotai",
      "TMA",
    ],
    logo: DuckWalletLogo,
    title: "Duck Wallet",
    description:
      "A Telergam Mini App-based Custodial Wallet in Duck Ecosystem\n\nKey Achievements:\n • Created basic components of app\n • Implemented communcation with backend\n • Implemented the UI\n • Wrote Unit Tests to make sure the user's finances are safe.",
    images: DUCK_WALLET_IMAGES,
    dates: "June 2025 - Present",
    company: "React Frontend Developer at Duck Coin",
    companyUrl: "https://www.linkedin.com/company/duck-coin/",
    employmentType: "Part-time",
    duration: calculateDuration(new Date(2025, 5, 1), new Date()),
  },
  {
    isTypescript: true,
    badges: [
      "React",
      "emotion",
      "react spring",
      "OpenAPI",
      "react-query",
      "jotai",
      "TMA",
    ],
    logo: FlappyDuckLogo,
    title: "Flappy Duck",
    description:
      "A Flappy Bird-like game built with React as a Telegram Mini App\n\nKey achievements:\n • Implemented most of the UI including: store, wallet, events, etc.\n• Implemented optimized communcation with Backend using React Query\n• Used telegram sdk to use features like: haptic feedback, theme change, safe area, etc.\n• Used react-spring to create smooth animations for modals/botoomsheets/tabs/etc.\n • Created flexible themeing system that works across multiple apps in the Duck ecosystem, and is integrated with telegram themes.",
    images: FLAPPY_DUCK_IMAGES,
    dates: "Aug. 2024 - Present",
    company: "React Frontend Developer at Duck Coin",
    companyUrl: "https://www.linkedin.com/company/duck-coin/",
    employmentType: "Part-time",
    duration: calculateDuration(new Date(2024, 7, 1), new Date()),
  },
  {
    isTypescript: true,
    badges: ["Next", "redux-toolkit", "SASS", "firebase"],
    logo: GuiderLogo,
    title: "Guider",
    description:
      "Costa Rican Guide to dining, diverse services, and spots to explore \n\nKey achievements:\n• Fixed dozens of bug\n• Participated in team meetings\n• Made several reviews\n• Migrated the whole app from Firebase to C# Backend\n• Integrated PWA",
    images: GUIDER_IMAGES,
    dates: "May 2024 - Aug. 2024",
    company: "Next Frontend Developer at Bogoda Digital Pro",
    companyUrl: "https://www.bogoda.pro/",
    employmentType: "Intership",
    duration: calculateDuration(new Date(2024, 4, 1), new Date(2024, 7, 1)),
  },
  {
    isTypescript: true,
    badges: [
      "Rust",
      "Tauri",
      "React",
      "CSS Modules",
      "xray-core",
      "clash (mihomo)",
    ],
    logo: ZgcLogo,
    title: "Desktop VPN App",
    description:
      "A cross-platform VPN client for Windows, macOS, and Linux\n\nKey achievements:\n• Created the UI of the desktop application\n• Integrated xray-core and clash(mihomo) as proxy servers\n• Integrated debug tools into the app\n•Wrote software for integrating the VPN on OpenWRT routers using Clash",
    images: ZGC_IMAGES,
    dates: "Sep 2023 - Sep 2024",
    company: "Desktop Developer at ZGC VPN",
    companyUrl: "https://zgcvpn.com",
    employmentType: "Project-based",
    duration: calculateDuration(new Date(2023, 8, 1), new Date(2024, 8, 1)),
  },
  {
    isTypescript: false,
    badges: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Freelance",
      "TMA",
      "Telegram Bot API",
      "JWT Authentication",
      "CI/CD",
      "OpenAI",
      "Stripe",
      "Recaptcha",
      "Cloudflare",
      "Redux Toolkit",
      "Nest.js",
    ],
    logo: undefined,
    title: "Freelance Projects",
    description:
      "Various freelance projects for clients, focusing on web development, UI/UX, and rapid prototyping. Delivering fast, functional, and fearless solutions since August 2022.\n\nKey achievements:\n• Made fully functional ai-chat full stack app\n• Integrated with OpenAI API for AI chat experience\n• Integrated stripe for subcsriptions\n• Integrated recaptcha and cloudflare for security\n• Implemented CI/CD pipeline for the app\n• Created JWT Authentication system for the app at both backend and fronted with access and refresh tokens",

    dates: "Aug. 2022 - Present",
    company: "Self-employed",
    employmentType: "Freelance",
    duration: calculateDuration(new Date(2022, 7, 1), new Date()),
    images: FREELANCE_IMAGES,
  },
  {
    images: OTHERS_IMAGES,
    isTypescript: false,
    badges: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Nest",
      "OpenAI",
      "Telegram Bot API",
      "JWT Authentication",
    ],
    title: "Others",
    description: "Various pet projects",
    dates: "Apr. 2021 - Present",
    employmentType: "Pet-projects",
    duration: calculateDuration(new Date(2021, 3, 1), new Date()),
  },
];

export const Projects = () => {
  return (
    <motion.div className="w-screen flex flex-col justify-center items-start gap-4 px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full">
        Projects I've built over the past{" "}
        {calculateDuration(new Date(2021, 3, 1), new Date())}
      </h1>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          images={project.images}
          logo={project.logo}
          badges={project.badges}
          isTypescript={project.isTypescript}
          dates={project.dates}
          duration={project.duration}
          company={project.company}
          companyUrl={project.companyUrl}
          employmentType={project.employmentType}
        />
      ))}
    </motion.div>
  );
};
