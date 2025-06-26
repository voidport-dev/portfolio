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
    <div
      className={`z-[9999] fixed top-0 left-0 w-4 h-4 bg-white rounded-full border-2 border-black pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${
        cursor.isHovering ? "opacity-60" : "opacity-100"
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};
