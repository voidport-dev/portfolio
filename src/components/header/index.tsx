import { MailIcon } from "lucide-react";
import GithubIcon from "@assets/github.svg?react";
import LinkedInIcon from "@assets/linkedin.svg?react";

export const Header = () => {
  return (
    <>
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
    </>
  );
};
