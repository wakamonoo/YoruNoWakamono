"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";
import CountUp from "react-countup";
import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";

export default function Report({ statsInView }) {
  const [nexusCount, setNexusCount] = useState({
    usersCount: 0,
    titlesCount: 0,
    reviewsCount: 0,
  });
  const [anceStoryCount, setAnceStoryCount] = useState({
    storiesCount: 0,
    contributorsCount: 0,
  });
  const [nexusUsers, setNexusUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [countLoading, setCountLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const { loading } = useContext(LoaderContext);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch("/api/nexus/getData");
        const data = await res.json();
        setNexusCount(data);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setNexusCount({
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
    const fetchCounts = async () => {
      try {
        const res = await fetch("/api/ancestory/getData");
        const data = await res.json();
        setAnceStoryCount(data);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setAnceStoryCount({
          storiesCount: 0,
          contributorsCount: 0,
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
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.h2
        variants={itemVariants}
        className="text-xl p-2 bg-brand rounded text-header mb-4"
      >
        MISSION REPORT
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-normal text-justify text-base  font-normal leading-tight mb-4"
      >
        These platforms have grown a community, received valuable feedback, and
        continue to make an impact even after launch.
      </motion.p>

      <div>
        <motion.p
          variants={itemVariants}
          className="mb-2 text-xs uppercase tracking-[0.25em]"
        >
          Statistics
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <motion.div
            variants={cardVariants}
            className="rounded-xl bg-panel p-2"
          >
            <iframe
              src="https://appbuildersph.com/embed/apps/Nexus"
              title="Nexus votes on App Builders PH"
              className="w-full"
              height="72"
              style={{ border: 0 }}
              loading="lazy"
              scrolling="no"
            />
            <div className="mt-2 flex w-full flex-col items-start gap-2 px-4">
              <div className="flex items-center justify-start gap-2">
                {statsInView ? (
                  <CountUp
                    start={0}
                    end={nexusCount.usersCount}
                    duration={1.5}
                    className="block text-base font-extrabold text-accent"
                  />
                ) : (
                  <p className="block text-base font-extrabold text-accent">
                    0
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.25em]">
                  Members
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                {statsInView ? (
                  <CountUp
                    start={0}
                    end={nexusCount.titlesCount}
                    duration={1.5}
                    className="block text-base font-extrabold text-accent"
                  />
                ) : (
                  <p className="block text-base font-extrabold text-accent">
                    0
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.25em]">
                  Titles
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                {statsInView ? (
                  <CountUp
                    start={0}
                    end={nexusCount.reviewsCount}
                    duration={1.5}
                    className="block text-base font-extrabold text-accent"
                  />
                ) : (
                  <p className="block text-base font-extrabold text-accent">
                    0
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.25em]">
                  Reviews
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="rounded-xl bg-panel p-2"
          >
            <iframe
              src="https://appbuildersph.com/embed/apps/ancestory"
              title="AnceStory votes on App Builders PH"
              className="w-full"
              height="72"
              style={{ border: 0 }}
              loading="lazy"
              scrolling="no"
            />
            <div className="mt-2 flex w-full flex-col items-start gap-2 px-4">
              <div className="flex items-center justify-start gap-2">
                {statsInView ? (
                  <CountUp
                    start={0}
                    end={anceStoryCount.storiesCount}
                    duration={1.5}
                    className="block text-base font-extrabold text-accent"
                  />
                ) : (
                  <p className="block text-base font-extrabold text-accent">
                    0
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.25em]">
                  Stories
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                {statsInView ? (
                  <CountUp
                    start={0}
                    end={anceStoryCount.contributorsCount}
                    duration={1.5}
                    className="block text-base font-extrabold text-accent"
                  />
                ) : (
                  <p className="block text-base font-extrabold text-accent">
                    0
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.25em]">
                  Contributors
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-2">
        <motion.p
          variants={itemVariants}
          className="mb-2 text-xs uppercase tracking-[0.25em]"
        >
          Community Feedback
        </motion.p>

        <motion.div variants={cardVariants}>
          {userLoading || feedbackLoading ? (
            <div className="animate-pulse w-full h-32 bg-[var(--color-army)] rounded-xl" />
          ) : feedbacks?.length === 0 ? (
            <div className="bg-[var(--color-army)] rounded-xl px-2 py-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 shrink-0">
                  <FaQuoteLeft className="text-xs" />
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
                    <a
                      href="https://ournexus.space/communityFeedback"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={feedback.feedbackId}
                      className="block bg-[var(--color-army)] rounded-xl px-2 py-4"
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
                            <div>
                              <p className="text-sm">
                                <span className="font-bold">{user?.name}</span>{" "}
                                on Nexus
                              </p>
                            </div>
                            <StarRating value={feedback.rating} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-8 h-8 shrink-0">
                          <FaQuoteLeft className="text-xs" />
                        </div>
                        <p className="cursor-pointer mt-2 text-base text-vibe leading-tight line-clamp-3">
                          {feedback.review}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
