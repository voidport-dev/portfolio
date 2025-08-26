import { MailIcon } from "lucide-react";
import GithubIcon from "@assets/github.svg?react";
import LinkedInIcon from "@assets/linkedin.svg?react";
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useSetAtom } from "jotai";
import { cursorAtom } from "@/store";

const AnimationStage = {
  INITIAL: 0,
  CENTERED: 1,
  ENDED: 2,
} as const;

type AnimationStage = (typeof AnimationStage)[keyof typeof AnimationStage];

type AnimationStyle = {
  position?: string;
  top?: string;
  left?: string;
  transform?: string;
  fontSize?: string;
  opacity?: number;
  y?: number;
  filter?: string;
};

const ANIMATION_DURATIONS: Record<AnimationStage, number> = {
  [AnimationStage.INITIAL]: 0,
  [AnimationStage.CENTERED]: 1500,
  [AnimationStage.ENDED]: 1000,
};

const TITLE_ANIMATIONS: Record<AnimationStage, AnimationStyle> = {
  [AnimationStage.INITIAL]: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "12px",
  },
  [AnimationStage.CENTERED]: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "28px",
  },
  [AnimationStage.ENDED]: {
    position: "fixed",
    top: "16px",
    left: "16px",
    transform: "unset",
    fontSize: "24px",
  },
};

const CHAR_ANIMATIONS: Record<AnimationStage, AnimationStyle> = {
  [AnimationStage.INITIAL]: {
    opacity: 0,
    y: 100,
    filter: "blur(10px)",
  },
  [AnimationStage.CENTERED]: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transform: "scale(1.1)",
  },
  [AnimationStage.ENDED]: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transform: "scale(1)",
  },
};

const NAME = "Alexander Prokopenko";
const CHARS = NAME.split("");

export const Header = () => {
  const setCursor = useSetAtom(cursorAtom);
  const setCursorRef = useRef(setCursor);
  const [animationStage, setAnimationStage] = useState<AnimationStage>(
    AnimationStage.INITIAL
  );
  const titleControls = useAnimation();

  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTitleAnimation = useCallback(
    (stage: AnimationStage): AnimationStyle => {
      switch (stage) {
        case AnimationStage.INITIAL:
          return {
            ...TITLE_ANIMATIONS[stage],
            fontSize: isSmallScreen ? "12px" : "16px",
          };
        case AnimationStage.CENTERED:
          return {
            ...TITLE_ANIMATIONS[stage],
            fontSize: isSmallScreen ? "18px" : "24px",
          };
        case AnimationStage.ENDED:
          return {
            ...TITLE_ANIMATIONS[stage],
            fontSize: isSmallScreen ? "18px" : "24px",
          };
        default:
          return TITLE_ANIMATIONS[stage];
      }
    },
    [isSmallScreen]
  );

  useEffect(() => {
    setCursorRef.current = setCursor;
  }, [setCursor]);

  useLayoutEffect(() => {
    let cumulativeDelay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    const stages: AnimationStage[] = [
      AnimationStage.INITIAL,
      AnimationStage.CENTERED,
      AnimationStage.ENDED,
    ];

    stages.forEach((stage, index) => {
      const durationOfPreviousStage =
        index > 0 ? ANIMATION_DURATIONS[stages[index - 1]] : 0;
      cumulativeDelay += durationOfPreviousStage;

      const timeoutId = setTimeout(() => {
        setAnimationStage(stage);
        titleControls.start(getTitleAnimation(stage));
      }, cumulativeDelay);
      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 50;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {animationStage !== AnimationStage.ENDED && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black blur-3xl opacity-100 z-10"
              initial={{ opacity: 0, backdropFilter: "blur(16px)" }}
              animate={{ opacity: 0.8, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            ></motion.div>
            <motion.div
              className="absolute inset-0 opacity-40 z-9"
              style={{
                backgroundImage: `
               linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
             `,
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </>
        )}
      </AnimatePresence>

      <motion.h1
        className="z-11 text-xs flex gap-0.25 fixed top-4 left-4"
        initial={getTitleAnimation(AnimationStage.INITIAL)}
        animate={titleControls}
      >
        {CHARS.map((char, index) => (
          <motion.span
            key={index}
            className={`inline-block ${char === " " ? "w-2" : ""}`}
            initial={CHAR_ANIMATIONS[animationStage]}
            animate={CHAR_ANIMATIONS[animationStage]}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{
              color: getRandomColor(),
              transition: { duration: 0.05 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <div className="fixed top-8 left-0 md:top-0 md:left-[unset] md:right-0 flex gap-2 mt-2 md:mt-4 md:m-4 z-2">
        <motion.a
          href="mailto:axndrpr@gmail.com"
          target="_blank"
          className="flex items-center justify-center gap-2 hover:opacity-80 px-4 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-none ease-in-out duration-300"
          onMouseEnter={() =>
            setCursorRef.current({ isHovering: true, isGrabbing: false })
          }
          onMouseLeave={() =>
            setCursorRef.current({ isHovering: false, isGrabbing: false })
          }
        >
          <MailIcon size={18} className="text-gray-400" />
          axndrpr@gmail.com
        </motion.a>
        <a
          href="https://github.com/xndrpr"
          target="_blank"
          className="cursor-none ease-in-out duration-300 w-8 h-8 flex items-center justify-center hover:shadow-gray-400 hover:opacity-80 hover:shadow-md rounded-full"
          onMouseEnter={() =>
            setCursorRef.current({ isHovering: true, isGrabbing: false })
          }
          onMouseLeave={() =>
            setCursorRef.current({ isHovering: false, isGrabbing: false })
          }
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/xndrpr/"
          target="_blank"
          className="cursor-none ease-in-out duration-300 w-8 h-8 flex items-center justify-center hover:shadow-blue-400 hover:opacity-80 hover:shadow-md rounded-full"
          onMouseEnter={() =>
            setCursorRef.current({ isHovering: true, isGrabbing: false })
          }
          onMouseLeave={() =>
            setCursorRef.current({ isHovering: false, isGrabbing: false })
          }
        >
          <LinkedInIcon />
        </a>
      </div>
    </>
  );
};
