"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";
import CountUp from "react-countup";
import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";

export default function Report({ statsInView }) {
  const [count, setCount] = useState({
    usersCount: 0,
    titlesCount: 0,
    reviewsCount: 0,
  });
  const [nexusUsers, setNexusUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
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
    if (
      userLoading ||
      feedbackLoading ||
      !Array.isArray(feedbacks) ||
      feedbacks.length < 2
    ) {
      return;
    }

    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      const slideWidth = carousel.clientWidth;

      const isAtEnd =
        carousel.scrollLeft + slideWidth >= carousel.scrollWidth - 5;

      carousel.scrollTo({
        left: isAtEnd ? 0 : carousel.scrollLeft + slideWidth,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [feedbacks, feedbackLoading, userLoading]);

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
        className="text-xl p-2 bg-panel rounded text-header"
      >
        MISSION REPORT
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mt-4 text-normal text-justify text-base font-normal leading-tight"
      >
        This platform have grown a community, received valuable feedback, and
        continue to make an impact even after launch.
      </motion.p>

      <div className="mt-4">
        <motion.p
          variants={itemVariants}
          className="mb-2 text-xs uppercase tracking-[0.25em]"
        >
          Statistics
        </motion.p>

        <div className="grid grid-cols-3 gap-2">
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-center rounded-lg p-2 bg-panel"
          >
            {statsInView ? (
              <CountUp
                start={0}
                end={count.usersCount}
                duration={1.5}
                className="block text-base font-extrabold text-accent"
              />
            ) : (
              <p className="block text-base font-extrabold text-accent">0</p>
            )}
            <p className="text-xs text-muted uppercase tracking-[0.25em]">
              Members
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-center rounded-lg p-2 bg-panel"
          >
            {statsInView ? (
              <CountUp
                start={0}
                end={count.titlesCount}
                duration={1.5}
                className="block text-base font-extrabold text-accent"
              />
            ) : (
              <p className="block text-base font-extrabold text-accent">0</p>
            )}
            <p className="text-xs text-muted uppercase tracking-[0.25em]">
              Titles
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-center rounded-lg p-2 bg-panel"
          >
            {statsInView ? (
              <CountUp
                start={0}
                end={count.reviewsCount}
                duration={1.5}
                className="block text-base font-extrabold text-accent"
              />
            ) : (
              <p className="block text-base font-extrabold text-accent">0</p>
            )}
            <p className="text-xs text-muted uppercase tracking-[0.25em]">
              Reviews
            </p>
          </motion.div>
        </div>
      </div>
      <div className="mt-4">
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
              className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
            >
              {feedbacks?.map((feedback) => {
                const user = nexusUsers.find((u) => u.uid === feedback.userId);

                return (
                  <div
                    key={feedback.feedbackId}
                    className="min-w-full w-full shrink-0 snap-start"
                  >
                    <a
                      href="https://ournexus.space/communityFeedback"
                      target="_blank"
                      rel="noopener noreferrer"
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
                              <p className="text-sm text-muted">
                                <span className="font-bold text-normal">
                                  {user?.name}
                                </span>{" "}
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
                        <p className="cursor-pointer mt-2 text-base text-vibe leading-tight line-clamp-4">
                          {feedback.review}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
