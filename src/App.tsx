import { AnimatedBackground } from "./components/animated-background";
import { Projects } from "./components/projects";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <div className="h-screen">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
