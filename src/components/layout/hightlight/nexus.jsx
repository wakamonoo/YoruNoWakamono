import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { BiSolidStar } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";

export default function Nexus({ inView }) {
  const [count, setCount] = useState({
    usersCount: 0,
    titlesCount: 0,
    reviewsCount: 0,
  });
  const [nexusUsers, setNexusUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [countLoading, setCountLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch("/api/nexus/getData");
        const data = await res.json();
        setCount(data);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setCount({
          usersCount: 0,
          titlesCount: 0,
          reviewsCount: 0,
        });
      } finally {
        setCountLoading(false);
      }
    };

    fetchCounts();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/nexus/getAllUsers");
        const data = await res.json();
        setNexusUsers(data.result);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setNexusUsers(null);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("/api/nexus/getFeedbacks");
        const data = await res.json();

        setFeedbacks(data.result);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setFeedbacks(null);
      } finally {
        setFeedbackLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

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

  function StarRating({ value }) {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const active = star <= value;

          return (
            <div
              key={star}
              className={`leading-none transition-opacity cursor-default ${active ? "text-[var(--color-nexus)]" : "text-vibe/20"}`}
            >
              <BiSolidStar />
            </div>
          );
        })}
      </div>
    );
  }

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
              src="https://appbuildersph.com/embed/apps/Nexus"
              title="Nexus votes on App Builders PH"
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
            <div className="flex flex-wrap gap-2 animate-pulse">
              <div className="flex-1 min-w-[120px] h-20 rounded-xl bg-brand" />
              <div className="flex-1 min-w-[120px] h-20 rounded-xl bg-brand" />
              <div className="flex-1 min-w-[120px] h-20 rounded-xl bg-brand" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <div className="flex-1 min-w-[120px] rounded-xl bg-brand p-3 text-center transition duration-100 flex flex-col items-center justify-center">
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
              </div>

              <div className="flex-1 min-w-[120px] rounded-xl bg-brand p-3 text-center transition duration-100 flex flex-col items-center justify-center">
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
              </div>

              <div className="flex-1 min-w-[120px] rounded-xl bg-brand p-3 text-center transition duration-100 flex flex-col items-center justify-center">
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
              </div>
            </div>
          )}
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
            Community Feedback
          </p>

          {userLoading || feedbackLoading ? (
            <div className="animate-pulse w-full h-32 bg-[var(--color-army)] rounded-xl" />
          ) : feedbacks?.length === 0 ? (
            <div className="bg-[var(--color-army)] rounded-xl px-2 py-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 shrink-0">
                  <FaQuoteLeft className="text-xs opacity-60" />
                </div>
                <p className="text-base text-vibe leading-tight line-clamp-2 mt-2">
                  no community feedback yet
                </p>
              </div>
            </div>
          ) : (
            <div
              ref={carouselRef}
              className="flex items-center overflow-x-auto scroll-smooth scrollbar-hide gap-2 snap-x snap-mandatory"
            >
              <div className="min-w-full snap-start">
                {feedbacks?.map((feedback) => {
                  const user = nexusUsers.find(
                    (u) => u.uid === feedback.userId,
                  );

                  return (
                    <div
                      key={feedback.feedbackId}
                      className="bg-[var(--color-army)] rounded-xl px-2 py-4"
                    >
                      <div className="flex gap-2">
                        <img
                          src={user?.picture}
                          alt={user?.name}
                          loading="lazy"
                          decoding="async"
                          className="w-10 h-10 shrink-0 object-cover rounded-full"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col">
                            <p className="text-sm font-bold text-vibe">
                              {user?.name}
                            </p>
                            <StarRating value={feedback.rating} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-8 h-8 shrink-0">
                          <FaQuoteLeft className="text-xs opacity-60" />
                        </div>
                        <a
                          href="https://ournexus.space/communityFeedback"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer mt-2 text-base text-vibe leading-tight line-clamp-2"
                        >
                          {feedback.review}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-px bg-second my-4" />
        <p className="text-normal text-justify text-base font-normal leading-tight">
          <strong>Nexus</strong> is a fan-made space for Marvel enthusiasts to
          follow their viewing journey, explore different watch orders, rate and
          review titles, and discover what other fans are watching. It brings
          tracking, discovery, and community interaction together around the
          Marvel universe.
        </p>
      </motion.div>
    </div>
  );
}