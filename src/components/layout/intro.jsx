import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Bell from "../../assets/bell.png";

export default function Intro() {
  return (
    <div className="flex justify-end">
      <div className="relative z-40 p-4 right-[5vw] lg:right-[16vw] xl:right-[26vw] top-[60vh] h-full rounded-xl bg-panel w-70">
        <div className="absolute bottom-24 -left-10 z-10">
          <Image
            src={Bell}
            alt="bell"
            className="w-16 h-auto overflow-auto -rotate-45"
          />
        </div>

        <div className="flex flex-col w-full h-full justify-center mt-2">
          <h1 className="relative text-5xl text-header text-right leading-7">
            JOVEN BATALLER
          </h1>
          <p className="text-right text-2xl text-normal">
            full-stack developer
          </p>
          <div className="flex justify-end gap-2 pt-2 text-normal overflow-visible">
            <a href="https://www.facebook.com/joven.serdanbataller">
              <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)] cursor-pointer">
                <FaFacebookF className="text-4xl" />
              </button>
            </a>
            <a href="https://www.instagram.com/wakamonoooo/">
              <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)] cursor-pointer">
                <FaInstagram className="text-4xl" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/joven-bataller-085761350/">
              <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)] cursor-pointer">
                <FaLinkedinIn className="text-4xl" />
              </button>
            </a>
            <a href="https://github.com/wakamonoo">
              <button className="transition-all duration-300 hover:scale-125 hover:text-[var(--color-accent)] active:scale-125 focus:text-[var(--color-accent)] cursor-pointer">
                <FaGithub className="text-4xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
