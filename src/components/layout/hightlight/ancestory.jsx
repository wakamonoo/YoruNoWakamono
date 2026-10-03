import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function AnceStory({ inView }) {
  const [count, setCount] = useState({
    storiesCount: 0,
  });
  const [countLoading, setCountLoading] = useState(true);

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
        });
      } finally {
        setCountLoading(false);
      }
    };

    fetchCounts();
  }, []);


  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <motion.div
        variants={cardVariants}
        className="bg-panel rounded-2xl p-5 border border-[var(--color-army)] flex flex-col gap-2 h-fit w-full"
      >
        <div>
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
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
            Statistics
          </p>
          {countLoading ? (
            <div className="flex-1 min-w-[120px] h-20 rounded-xl bg-brand" />
          ) : (
            <div className="flex-1 min-w-[120px] rounded-xl bg-brand p-3 text-center transition duration-100 flex flex-col items-center justify-center">
              <CountUp
                start={inView ? undefined : 0}
                startOnMount={false}
                redraw={inView}
                end={count.storiesCount}
                duration={1.5}
                className="block text-2xl font-extrabold text-accent"
              />
              <p className="mt-2 text-xs uppercase tracking-[0.25em] opacity-70">
                Stories
              </p>
            </div>
          )}
        </div>
        <div className="w-full h-px bg-second my-4" />
        <p className="text-normal text-justify text-base font-normal leading-tight">
          <strong>AnceStory</strong> is a digital archive for local folklore,
          ancestral tales, traditions, and memories rooted in people and places.
          It gives these narratives a place to be documented, explored by
          location, and passed on beyond the communities where they began.
        </p>
      </motion.div>
    </div>
  );
}