import { LoaderContext } from "@/context/loaderContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect, useContext, use } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { BiChevronRight, BiSolidStar } from "react-icons/bi";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import {
  SiCloudinary,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

export default function Nexus({ statsInView }) {
  const [count, setCount] = useState({
    usersCount: 0,
    titlesCount: 0,
    postsCount: 0,
    listsCount: 0,
    messagesCount: 0,
    reviewsCount: 0,
  });
  const [nexusUsers, setNexusUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const feedBackNumbers = useRef(new Map());
  const { loading } = useContext(LoaderContext);
  const skeletonLoaderFired = useRef(false);
  const [feedbackSectionReady, setFeedbackSectionReady] = useState(false);
  const router = useRouter();

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
          postsCount: 0,
          listsCount: 0,
          messagesCount: 0,
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

  return (
    <div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <motion.h2
            variants={itemVariants}
            className="w-full text-xl p-2 bg-panel rounded text-header"
          >
            Nexus ● Every Marvel Story Connected.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-normal text-justify text-base font-normal leading-tight"
          >
            Nexus brings Marvel enthusiasts together to track watchlists, share
            opinions, and connect through shared love for the MCU.
          </motion.p>
        </div>
        <div className="flex flex-col">
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.25em]"
          >
            AppBuilders PH
          </motion.p>
          <motion.div variants={cardVariants} className="mt-2">
            <iframe
              src="https://appbuildersph.com/embed/apps/Nexus"
              title="Nexus votes on App Builders PH"
              className="w-full"
              height="72"
              style={{ border: 0 }}
              loading="lazy"
              scrolling="no"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={cardVariants}
        className="mt-4 bg-panel flex flex-col md:flex-row rounded-2xl shadow-2xl p-4 gap-2 h-fit w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-[4] md:min-w-0">
          <p className="text-xs uppercase tracking-[0.25em]">Project</p>
          <Marquee speed={50} className="cursor-pointer p-2">
            <div className="flex gap-4 px-4">
              <div className="w-6 h-6">
                <SiNextdotjs className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiReact className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiTailwindcss className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiNodedotjs className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiMongodb className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiFirebase className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiExpress className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiCloudinary className="w-full h-full" />
              </div>
              <div className="w-6 h-6">
                <SiSocketdotio className="w-full h-full" />
              </div>
            </div>
          </Marquee>
          <p className="text-muted text-sm font-normal leading-tight">
            A Marvel community for exploring stories, sharing opinions, and
            connecting with fellow fans.
          </p>
          <div className="mt-2 flex justify-end shrink-0 md:self-center md:ml-auto">
            <a
              href="https://ournexus.space"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center px-4 py-2 rounded-full border border-accent group transition-all duration-200
             hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)]"
            >
              <p className="text-sm text-header group-hover:text-(--color-panel) group-active:text-(--color-panel)">
                View Project
              </p>
              <FaArrowRight className="text-sm text-header group-hover:text-(--color-panel) group-active:text-(--color-panel) shrink-0" />
            </a>
          </div>
        </div>
        <div className="w-full h-px my-2 bg-accent opacity-40 block md:hidden" />
        <div className="w-px self-stretch mx-2 bg-accent opacity-40 hidden md:block" />

        <div className="flex flex-col md:flex-[6] md:min-w-0">
          <p className="text-xs uppercase tracking-[0.25em]">Statistics</p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-lg p-2 bg-army"
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
            </div>
            <div
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-lg p-2 bg-army"
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
            </div>
            <div
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-lg p-2 bg-army"
            >
              {statsInView ? (
                <CountUp
                  start={0}
                  end={count.postsCount}
                  duration={1.5}
                  className="block text-base font-extrabold text-accent"
                />
              ) : (
                <p className="block text-base font-extrabold text-accent">0</p>
              )}
              <p className="text-xs text-muted uppercase tracking-[0.25em]">
                Posts
              </p>
            </div>
            <div
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-lg p-2 bg-army"
            >
              {statsInView ? (
                <CountUp
                  start={0}
                  end={count.listsCount}
                  duration={1.5}
                  className="block text-base font-extrabold text-accent"
                />
              ) : (
                <p className="block text-base font-extrabold text-accent">0</p>
              )}
              <p className="text-xs text-muted uppercase tracking-[0.25em]">
                Lists
              </p>
            </div>
            <div
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-lg p-2 bg-army"
            >
              {statsInView ? (
                <CountUp
                  start={0}
                  end={count.messagesCount}
                  duration={1.5}
                  className="block text-base font-extrabold text-accent"
                />
              ) : (
                <p className="block text-base font-extrabold text-accent">0</p>
              )}
              <p className="text-xs text-muted uppercase tracking-[0.25em]">
                Chats
              </p>
            </div>
            <div
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-lg p-2 bg-army"
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
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-4 flex items-center justify-between">
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.25em] whitespace-nowrap"
        >
          Community Feedback
        </motion.p>
        <motion.button
          variants={cardVariants}
          onAnimationComplete={() => setFeedbackSectionReady(true)}
          onClick={() => router.push("/nexusCommunityFeedback")}
          className="cursor-pointer flex items-center gap-2 hover:brightness-90 active:brightness-90"
        >
          <p className="uppercase text-sm text-muted whitespace-nowrap">All</p>
          <BiChevronRight className="text-sm text-muted shrink-0" />
        </motion.button>
      </div>

      {loading ? null : userLoading || feedbackLoading ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={feedbackSectionReady ? "visible" : "hidden"}
          onAnimationStart={() => (skeletonLoaderFired.current = true)}
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
        <motion.div
          variants={containerVariants}
          initial={skeletonLoaderFired.current ? false : "hidden"}
          animate={
            skeletonLoaderFired.current
              ? "visible"
              : feedbackSectionReady
                ? "visible"
                : "hidden"
          }
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          {feedbacks.map((feedback) => {
            const user = nexusUsers.find((u) => u.uid === feedback.userId);
            return (
              <motion.div
                variants={cardVariants}
                key={feedback.feedbackId}
                onClick={() => router.push("/nexusCommunityFeedback")}
                className="cursor-pointer flex flex-col h-full rounded-2xl bg-panel shadow-2xl p-4"
              >
                <div className="flex items-center">
                  <FaQuoteLeft className="text-base shrink-0" />
                </div>
                <p className="mt-4 flex-1 text-justify text-base line-clamp-3">
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
        </motion.div>
      )}
    </div>
  );
}