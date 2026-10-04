import { LoaderContext } from "@/context/loaderContext";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import {
  SiCloudinary,
  SiFirebase,
  SiLeaflet,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function AnceStory({ cardVariants }) {
  const [count, setCount] = useState({
    storiesCount: 0,
    contributorsCount: 0,
  });
  const [countLoading, setCountLoading] = useState(true);
  const [statsInView, setStatsInView] = useState(false);
  const { loading } = useContext(LoaderContext);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch("/api/ancestory/getData");
        const data = await res.json();
        setCount(data);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setCount({
          storiesCount: 0,
          contributorsCount: 0,
        });
      } finally {
        setCountLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      onAnimationComplete={() => setStatsInView(true)}
      className="bg-panel rounded-2xl py-6 border border-[var(--color-army)] flex flex-col gap-2 h-fit w-full"
    >
      <div className="px-4">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
          AppBuildersPH
        </p>
        <div className="rounded-xl bg-brand p-2">
          <iframe
            src="https://appbuildersph.com/embed/apps/ancestory"
            title="AnceStory votes on App Builders PH"
            className="w-full"
            height="72"
            style={{ border: 0 }}
            loading="lazy"
            scrolling="no"
          />
        </div>
      </div>
      <div className="px-4">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
          Statistics
        </p>
        {countLoading ? (
          <div className="flex flex-wrap gap-2 animate-pulse">
            <div className="flex-1 min-w-[120px] h-20 rounded-xl bg-brand" />
            <div className="flex-1 min-w-[120px] h-20 rounded-xl bg-brand" />
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            <div className="flex-1 min-w-[120px] rounded-xl bg-brand p-3 text-center transition duration-100 flex flex-col items-center justify-center">
              <CountUp
                start={0}
                end={count.storiesCount}
                duration={1.5}
                startOnMount={false}
                redraw={statsInView}
                className="block text-2xl font-extrabold text-accent"
              />
              <p className="mt-2 text-xs uppercase tracking-[0.25em] opacity-70">
                Stories
              </p>
            </div>
            <div className="flex-1 min-w-[120px] rounded-xl bg-brand p-3 text-center transition duration-100 flex flex-col items-center justify-center">
              <CountUp
                start={0}
                end={count.contributorsCount}
                duration={1.5}
                startOnMount={false}
                redraw={statsInView}
                className="block text-2xl font-extrabold text-accent"
              />
              <p className="mt-2 text-xs uppercase tracking-[0.25em] opacity-70">
                Contributors
              </p>
            </div>
          </div>
        )}
      </div>
      <div>
        <p className="px-4 mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
          Stack
        </p>
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="cursor-pointer p-2 bg-brand"
        >
          <div className="flex gap-4">
            <div className="w-8 h-8">
              <SiNextdotjs className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiReact className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiTypescript className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiLeaflet className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiTailwindcss className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiFirebase className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiMongodb className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <SiCloudinary className="w-full h-full" />
            </div>
          </div>
        </Marquee>
      </div>
      <div className="p-4">
        <div className="w-full h-px bg-second" />
      </div>
      <div className="px-4">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
          AnceStory
        </p>
        <p className="text-normal text-justify text-base font-normal leading-tight">
          A digital archive for preserving and discovering local stories and
          folklore.
        </p>
      </div>
    </motion.div>
  );
}
