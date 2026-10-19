"use client";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect, useContext } from "react";
import { BiLeftArrow, BiSolidStar } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";

export default function NexusCommunityFeedback() {
  const [nexusUsers, setNexusUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const feedBackNumbers = useRef(new Map());
  const { loading } = useContext(LoaderContext);
  const router = useRouter();

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

  feedbacks.forEach((feedback) => {
    if (!feedBackNumbers.current.has(feedback.feedbackId)) {
      feedBackNumbers.current.set(
        feedback.feedbackId,
        feedBackNumbers.current.size + 1,
      );
    }
  });

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const loadedVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      className="p-8 md:p-16 lg:px-32 xl:px-72"
    >
      <div>
        <motion.button
          variants={cardVariants}
          onClick={() => router.back()}
          className="cursor-pointer flex items-center gap-2 hover:brightness-90 active:brightness-90"
        >
          <BiLeftArrow className="text-sm text-muted shrink-0" />
          <p className="uppercase text-sm text-muted whitespace-nowrap">Back</p>
        </motion.button>
      </div>
      <motion.div
        variants={itemVariants}
        className="flex gap-2 items-center w-full mt-4"
      >
        <h1 className="text-2xl text-header uppercase">
          Nexus Community Feedbacks
        </h1>
        <div className="w-12 h-px bg-accent shrink-0" />
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-normal text-justify text-base  font-normal leading-tight"
      >
        What the community say about nexus.
      </motion.p>

      {loading ? null : userLoading || feedbackLoading ? (
        <motion.div
          variants={containerVariants}
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <motion.div
            variants={cardVariants}
            className="animate-pulse w-full h-[200px] bg-panel rounded-2xl"
          />
          <motion.div
            variants={cardVariants}
            className="animate-pulse w-full h-[200px] bg-panel rounded-2xl"
          />
          <motion.div
            variants={cardVariants}
            className="animate-pulse w-full h-[200px] bg-panel rounded-2xl"
          />
        </motion.div>
      ) : feedbacks?.length === 0 ? (
        <motion.div
          variants={cardVariants}
          className="mt-4 bg-panel rounded-2xl px-2 py-4"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-8 h-8 shrink-0">
              <FaQuoteLeft className="text-2xl text-muted" />
            </div>
            <p className="text-base text-muted leading-tight line-clamp-2 mt-2">
              no community feedback yet
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div variants={containerVariants} className="mt-4">
          <Masonry
            breakpointCols={{
              default: 3,
              768: 2,
              640: 1,
            }}
            className="flex gap-2"
            columnClassName="flex flex-col gap-2"
          >
            {feedbacks.map((feedback) => {
              const user = nexusUsers.find((u) => u.uid === feedback.userId);
              return (
                <motion.div
                  variants={loadedVariants}
                  key={feedback.feedbackId}
                  className="flex flex-col h-fit rounded-2xl bg-panel shadow-2xl p-4"
                >
                  <div className="flex items-center">
                    <FaQuoteLeft className="text-base shrink-0" />
                  </div>
                  <p className="mt-4 flex-1 text-justify text-base">
                    {feedback.review}
                  </p>

                  <div className="w-full h-px bg-accent my-4" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 overflow-hidden rounded-full shrink-0">
                      <img
                        src={user?.picture}
                        alt={user?.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-semibold">{user?.name}</p>
                      <StarRating value={feedback.rating} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Masonry>
        </motion.div>
      )}
    </motion.div>
  );
}
