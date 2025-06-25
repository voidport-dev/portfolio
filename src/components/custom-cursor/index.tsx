import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { cursorAtom } from "../../store";

export const CustomCursor = () => {
  const cursor = useAtomValue(cursorAtom);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  if (cursor.isGrabbing) {
    return null;
  }

  return (
    <motion.div
      className="z-[9999] fixed top-0 left-0 w-4 h-4 bg-white rounded-full border-2 border-black pointer-events-none"
      animate={{
        x: position.x,
        y: position.y,
        filter: cursor.isHovering ? "blur(1px)" : "blur(0px)",
        opacity: cursor.isHovering ? 0.8 : 1,
      }}
      transition={{
        duration: 0,
      }}
    />
  );
};
