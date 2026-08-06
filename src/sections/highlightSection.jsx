import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaQuoteLeft } from "react-icons/fa";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://yorunowakamono.onrender.com"
    : "http://localhost:4000";

export default function Highlight({ loading }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState({
    usersCount: 0,
    titlesCount: 0,
    reviewsCount: 0,
  });
  const carouselRef = useRef(null);

  const fetchCounts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/nexus/countData`);
      const data = await res.json();
      setCount(data);
    } catch (err) {
      console.error("failed to fetch count:", err);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      const cardWidth = carousel.clientWidth;

      const isAtEnd =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5;

      if (isAtEnd) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchCounts();
  }, []);

  useEffect(() => {
    if (loading) return;
    const current = containerRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(current);
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div ref={containerRef}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl mb-4 text-header"
        >
          SECTOR SHOWCASE ────
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
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
                  src="https://appbuildersph.com/embed/apps/nexus"
                  title="nexus votes on App Builders PH"
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
              <div className="grid grid-cols-3 gap-2">
                <div
                  className={`rounded-xl bg-brand p-3 text-center transtion duration-100 hover:-translate-y-1 flex flex-col items-center justify-center ${!count ? "animate-pulse" : "animate-none"}`}
                >
                  {count && (
                    <>
                      <CountUp
                        start={inView ? undefined : 0}
                        startOnMount={false}
                        redraw={inView}
                        end={count.usersCount}
                        duration={1.5}
                        className="block text-2xl font-extrabold text-accent"
                      />
                      <p className="mt-2 text-xs uppercase tracking-[0.25em] opacity-70">
                        Members
                      </p>
                    </>
                  )}
                </div>

                <div
                  className={`rounded-xl bg-brand p-3 text-center transtion duration-100 hover:-translate-y-1 flex flex-col items-center justify-center ${!count ? "animate-pulse" : "animate-none"}`}
                >
                  {count && (
                    <>
                      <CountUp
                        start={inView ? undefined : 0}
                        startOnMount={false}
                        redraw={inView}
                        end={count.titlesCount}
                        duration={1.5}
                        className="block text-2xl font-extrabold text-accent"
                      />
                      <p className="mt-2 text-xs uppercase tracking-[0.25em] opacity-70">
                        Titles
                      </p>
                    </>
                  )}
                </div>

                <div
                  className={`rounded-xl bg-brand p-3 text-center transtion duration-100 hover:-translate-y-1 flex flex-col items-center justify-center ${!count ? "animate-pulse" : "animate-none"}`}
                >
                  {count && (
                    <>
                      <CountUp
                        start={inView ? undefined : 0}
                        startOnMount={false}
                        redraw={inView}
                        end={count.reviewsCount}
                        duration={1.5}
                        className="block text-2xl font-extrabold text-accent"
                      />
                      <p className="mt-2 text-xs uppercase tracking-[0.25em] opacity-70">
                        Reviews
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
                Community Feedback
              </p>
              <div
                ref={carouselRef}
                className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-2 snap-x snap-mandatory"
              >
                <div className="min-w-full snap-start">
                  <div className="bg-[var(--color-army)] rounded-xl px-2 py-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 shrink-0">
                        <FaQuoteLeft className="text-xs opacity-60" />
                      </div>
                      <p className="text-base text-vibe leading-tight line-clamp-2 mt-2">
                        helloo super cool website
                      </p>
                    </div>
                    <p className="text-end text-xs opacity-60">
                      - Community Member
                    </p>
                  </div>
                </div>

                <div className="min-w-full snap-start">
                  <div className="bg-[var(--color-army)] rounded-xl px-2 py-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 shrink-0">
                        <FaQuoteLeft className="text-xs opacity-60" />
                      </div>
                      <p className="text-base text-vibe leading-tight line-clamp-2 mt-2">
                        hi, this website is incredible, thanks for creating it!
                      </p>
                    </div>
                    <p className="text-end text-xs opacity-60">
                      - Community Member
                    </p>
                  </div>
                </div>

                <div className="min-w-full snap-start">
                  <div className="bg-[var(--color-army)] rounded-xl px-2 py-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 shrink-0">
                        <FaQuoteLeft className="text-xs opacity-60" />
                      </div>
                      <p className="text-base text-vibe leading-tight line-clamp-2 mt-2">
                        thanks so much, this web is awesome!!
                      </p>
                    </div>
                    <p className="text-end text-xs opacity-60">
                      - Community Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <motion.p
              variants={itemVariants}
              className="text-normal text-justify text-base font-normal leading-tight"
            >
              <strong>nexus</strong> is an unofficial, independent Marvel fan
              platform built with the MERN stack and Next.js. It allows fans to
              track their watch progress in release or chronological order, rate
              and review titles, discover community rankings, and share posts
              with other Marvel enthusiasts.
            </motion.p>
            <br />
            <motion.p
              variants={itemVariants}
              className="text-normal text-justify text-base font-normal leading-tight"
            >
              Powered by REST APIs, Socket.io, MongoDB, Render, and Vercel,
              <strong> nexus</strong> provides an interactive experience with
              real-time chat and notifications. It is a fan-made project and is
              not affiliated with or endorsed by Marvel or The Walt Disney
              Company, or any other studios, publishers, or rights holders whose
              content appears on the platform.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
