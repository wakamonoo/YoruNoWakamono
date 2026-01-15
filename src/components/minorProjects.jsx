"use client";
import Image from "next/image";
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import Work4 from "../assets/work-4.png";
import Work5 from "../assets/work-5.png";
import Work6 from "../assets/work-6.png";
import Work7 from "../assets/work-7.png";
import Work8 from "../assets/work-8.png";
import Work9 from "../assets/work-9.png";
import Work10 from "../assets/work-10.png";

export default function MinorProjects() {
  return (
    <>
      <div className="contents">
        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work4}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                SORA
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                Web-application for tracking weather, time, temperature, sunset
                and sunrise time in various locations.
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://sora-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/Sora">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work5}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                DEBTFLIX
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                A useful but naughty way of Debt-Tracking.
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
                <SiFirebase />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://debtflix-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/Debtflix">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work6}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                KANDILI
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                Your cute and aesthetic digital diary, be private or connect
                with friends.
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
                <SiFirebase />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://kandili-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/Kandili">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work7}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                TODOCHAN
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                A minimalist to-do list web app focused on simplicity and ease
                of use
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://todochan-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/Todochan">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work8}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                POINTCITY
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                Online and offline basketball stats-tracker.
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://pointcity-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/PointCity">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work9}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                RINA
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                A browser extension for youtube assistance. Primary use of voice
                commands for tab control
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://rina-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/Rina">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-xl focus:shadow-2xl focus:-translate-y-2 hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out">
          <div className="flex justify-between">
            <Image
              src={Work10}
              alt="project"
              className="w-[8rem] sm:w-[11rem] md:w-[14rem] h-auto rounded"
            />
            <div className="w-full ml-2 sm:ml-4">
              <h4 className="text-xl sm:text-3xl md:text-4xl text-header">
                616-INITIATIVE
              </h4>
              <p className="text-sm sm:text-xl md:text-2xl leading-4 sm:leading-5.5 md:leading-6.5 sm:mt-2 text-normal">
                A simple website for watch tracking the chronological order of
                the Marvel Cinematic Universe.
              </p>
              <div className="flex gap-2 mt-2 text-2xl sm:text-3xl md:text-4xl text-normal">
                <SiHtml5 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <a href="https://dcxvi-initiative-wakamonoo.vercel.app">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Advance Beyond Walls
                </button>
              </a>
              <a href="https://github.com/wakamonoo/DCXVI-Initiative">
                <button
                  className="text-center font-normal text-sm sm:text-xl md:text-2xl p-2 sm:p-4 bg-panel rounded text-normal w-full cursor-pointer transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
                >
                  Open War Archives
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}