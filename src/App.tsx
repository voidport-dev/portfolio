import { AnimatedBackground } from "./components/animated-background";
import { Projects } from "./components/projects";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { CustomCursor } from "./components/custom-cursor";
import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import { cursorAtom } from "./store";

const isGrabbingAtom = selectAtom(cursorAtom, (c) => c.isGrabbing);

function App() {
  const isGrabbing = useAtomValue(isGrabbingAtom);

  return (
    <div
      className={`h-screen ${
        isGrabbing ? "cursor-grabbing" : "cursor-none"
      } select-none`}
    >
      <CustomCursor />
      <AnimatedBackground />
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
