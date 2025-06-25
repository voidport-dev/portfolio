import { atom } from "jotai";

export const cursorAtom = atom({
  isHovering: false,
  isGrabbing: false,
});
