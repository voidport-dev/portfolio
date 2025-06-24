import FlintRobotLogo from "@assets/flint.png";
import ZgcLogo from "@assets/zgc.jpg";
import GuiderLogo from "@assets/guider.ico";
import DuckWalletLogo from "@assets/duck-wallet.jpg";
import FlappyDuckLogo from "@assets/flappy-duck.jpg";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "./config";
import { ArrowDown, MailIcon } from "lucide-react";
import GithubIcon from "@assets/github.svg?react";
import LinkedInIcon from "@assets/linkedin.svg?react";

import ProjectCard from "./components/project-card";
import Flint1 from "@assets/images/flint/1.jpg";
import Flint2 from "@assets/images/flint/2.jpg";
import Flint3 from "@assets/images/flint/3.jpg";
import Flint4 from "@assets/images/flint/4.jpg";
import Flint5 from "@assets/images/flint/5.jpg";
import Flint6 from "@assets/images/flint/6.jpg";

import DuckWallet1 from "@assets/images/duck-wallet/1.png";
import DuckWallet2 from "@assets/images/duck-wallet/2.png";
import DuckWallet3 from "@assets/images/duck-wallet/3.png";
import DuckWallet4 from "@assets/images/duck-wallet/4.png";
import DuckWallet5 from "@assets/images/duck-wallet/5.png";
import DuckWallet6 from "@assets/images/duck-wallet/6.png";
import DuckWallet7 from "@assets/images/duck-wallet/7.png";

import FlappyDuck1 from "@assets/images/flappy-duck/1.png";
import FlappyDuck2 from "@assets/images/flappy-duck/2.png";
import FlappyDuck3 from "@assets/images/flappy-duck/3.png";
import FlappyDuck4 from "@assets/images/flappy-duck/4.png";
import FlappyDuck5 from "@assets/images/flappy-duck/5.png";
import FlappyDuck6 from "@assets/images/flappy-duck/6.png";
import FlappyDuck7 from "@assets/images/flappy-duck/7.png";
import FlappyDuck8 from "@assets/images/flappy-duck/8.png";

import Guider1 from "@assets/images/guider/1.png";
import Guider2 from "@assets/images/guider/2.png";
import Guider3 from "@assets/images/guider/3.png";

import Zgc1 from "@assets/images/zgc/1.png";
import Zgc2 from "@assets/images/zgc/2.png";
import Zgc3 from "@assets/images/zgc/3.png";
import Zgc4 from "@assets/images/zgc/4.png";

import Freelance1 from "@assets/images/freelance/1.png";
import Freelance2 from "@assets/images/freelance/2.png";
import Freelance3 from "@assets/images/freelance/3.jpg";
import Freelance4 from "@assets/images/freelance/4.png";
import Freelance5 from "@assets/images/freelance/5.png";

import Others1 from "@assets/images/others/1.png";
import Others2 from "@assets/images/others/2.jpg";
import Others3 from "@assets/images/others/3.jpg";
import Others4 from "@assets/images/others/4.png";
import Others5 from "@assets/images/others/5.jpeg";

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

const projects = [
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
      "A mobile app for controlling a robot using a mobile app.\n\nIn this project. \n\nKey achievements:\n • Implemented a gRPC-based communication between the app and the robot\n • Implemented WebRTC-based video and audio streaming(push/pull) both locally and remotely \n• Implemented Native Modules for the app to interact with the Tencent SDK",
    images: [Flint1, Flint2, Flint3, Flint4, Flint5, Flint6],
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
    images: [
      DuckWallet1,
      DuckWallet2,
      DuckWallet3,
      DuckWallet4,
      DuckWallet5,
      DuckWallet6,
      DuckWallet7,
    ],
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
    images: [
      FlappyDuck1,
      FlappyDuck2,
      FlappyDuck3,
      FlappyDuck4,
      FlappyDuck5,
      FlappyDuck6,
      FlappyDuck7,
      FlappyDuck8,
    ],
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
      "Costa Rican Guide to dining, diverse services, and spots to explore. Discover the Best Places to Eat, a variety of Services, and Explore the destinations of Costa Rica\n\nKey achievements:\n• Fixed dozens of bug\n• Participated in team meetings\n• Made several reviews\n• Migrated the whole app from Firebase to C# Backend\n• Integrated PWA",
    images: [Guider1, Guider2, Guider3],
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
    images: [Zgc1, Zgc2, Zgc3, Zgc4],
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
    images: [Freelance1, Freelance2, Freelance3, Freelance4, Freelance5],
  },
  {
    images: [Others1, Others2, Others3, Others4, Others5],
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

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="h-screen">
      <h1 className="fixed top-0 left-0 m-4 text-whitei text-2xl">
        Alexander Prokopenko
      </h1>
      <div className="fixed top-8 left-0 md:top-0 md:left-[unset] md:right-0 flex gap-2 m-4 z-2">
        <a
          href="mailto:axndrpr@gmail.com"
          target="_blank"
          className="flex items-center justify-center gap-2 hover:opacity-60  cursor-pointer ease-in-out duration-300"
        >
          <MailIcon />
          axndrpr@gmail.com
        </a>
        <a
          href="https://github.com/alexanderprokopenko"
          target="_blank"
          className="hover:opacity-60 cursor-pointer ease-in-out duration-300 w-8 h-8 flex items-center justify-center"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/axndrpr/"
          target="_blank"
          className="hover:opacity-60 cursor-pointer ease-in-out duration-300 w-8 h-8 flex items-center justify-center"
        >
          <LinkedInIcon />
        </a>
      </div>
      {init && (
        <Particles
          className="relative -z-1"
          id="tsparticles"
          options={particlesConfig}
        />
      )}
      <div className="relative z-1 h-full px-4 md:px-12 flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center">
            — Turning ideas into products —
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl text-center">
            <span className="text-sky-700">fast</span>,{" "}
            <span className="text-sky-700">functional</span>, and{" "}
            <span className="text-sky-700">fearless</span>.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400 text-center">
            Welcome to my portfolio, I am a{" "}
            <span className="font-bold text-gray-300">Frontend Developer</span>{" "}
            with 2+ years of experience
          </h2>
        </div>

        <div className="absolute bottom-48 left-1/2 -translate-x-1/2 flex justify-center items-center animate-up-down">
          <ArrowDown size={30} />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-4 p-4 md:p-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full">
          Projects I've built over the past{" "}
          {calculateDuration(new Date(2021, 3, 1), new Date())}
        </h1>
        {projects.map((project, index) => (
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
      </div>
    </div>
  );
}

export default App;
