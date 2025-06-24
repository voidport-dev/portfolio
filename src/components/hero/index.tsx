import { ArrowDown } from "lucide-react";

const HighLightedText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-sky-700">{children}</span>;
};

export const Hero = () => {
  return (
    <div className="relative z-1 h-full px-4 md:px-12 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center">
          — Turning ideas into products —
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-center">
          <HighLightedText>fast</HighLightedText>,{" "}
          <HighLightedText>functional</HighLightedText>, and{" "}
          <HighLightedText>fearless</HighLightedText>.
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
  );
};
