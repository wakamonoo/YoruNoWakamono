import { MdClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { presetInfo } from "./presetInfo";
import AibouLoader from "./aibouLoader";
import ReactMarkdown from "react-markdown";
import Bot from "../assets/aibou.png";
import Image from "next/image";
import { motion } from "framer-motion";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://yorunowakamono.onrender.com"
    : "http://localhost:4000";

export default function Aibou({ loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [draftText, setDraftText] = useState("");
  const [sentText, setSentText] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [Preset, setPreset] = useState(true);
  const scrollEnd = useRef(null);
  const scrollStart = useRef(null);
  const divRef = useRef(null);
  const botRef = useRef(null);
  const [preRef1, setPreRef1] = useState(false);
  const [preRef2, setPreRef2] = useState(false);
  const [preRef3, setPreRef3] = useState(false);

  {
    /* ———————————————————————————————————— aibou, start. user, end ——— */
  }
  useEffect(() => {
    const lastText = sentText[sentText.length - 1];
    if (scrollEnd.current && lastText?.sender === "user") {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollStart.current && lastText?.sender === "aibou") {
      scrollStart.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sentText]);

  {
    /* ———————————————————————————————————— message modal closer ——— */
  }
  useEffect(() => {
    function handleOutClick(e) {
      if (
        divRef.current &&
        !divRef.current.contains(e.target) &&
        botRef.current &&
        !botRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleOutClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutClick);
    };
  }, []);

  {
    /* ———————————————————————————————————— contribution aware ——— */
  }
  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(`${BASE_URL}/api/git/contributions`);
        const data = await res.json();

        if (data.contributions?.length) {
          presetInfo.push({
            role: "system",
            content: `Today's GitHub contributions:\n- ${data.contributions.join(
              "\n- "
            )}`,
          });
        }
      } catch (err) {
        console.error("Failed to fetch GitHub contributions:", err);
      }
    }

    fetchContributions();
  }, []);

  {
    /* ———————————————————————————————————— aibou pre-message ——— */
  }
  const preMessage = (onDone) => {
    if (isOpen && sentText.length === 0) {
      setLoad(true);

      setTimeout(() => {
        setSentText((prev) => [
          ...prev,
          {
            sender: "aibou",
            text: "konnichiwa. i’m aibou, joven’s ai partner. how may i help?",
          },
        ]);
        setLoad(false);
        if (onDone) onDone();
      }, 1000);
    }
  };

  useEffect(() => {
    preMessage(() => {
      setTimeout(() => {
        setPreRef1(true);
      }, 400);
      setTimeout(() => {
        setPreRef2(true);
      }, 600);
      setTimeout(() => {
        setPreRef3(true);
      }, 800);
    });
  }, [isOpen, sentText]);

  {
    /* ———————————————————————————————————— sent handler ——— */
  }
  async function handleSent(textToSend) {
    const text = textToSend ?? draftText.trim();
    if (!text) return;
    setSentText((prev) => [...prev, { sender: "user", text }]);
    setDraftText("");
    setLoad(true);
    setError(null);
    setPreset(false);

    try {
      const response = await fetch(`${BASE_URL}/api/chatbot/aibou`, {
        method: "POST",
        headers: {
          "HTTP-Referer": "https://wakamonoo.vercel.app",
          "X-Title": "wakamonoofthenight",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...presetInfo,
            ...sentText.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            {
              role: "user",
              content: text,
            },
          ],
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const aiText = data.choices[0].message.content.trim();
        setSentText((prev) => [...prev, { sender: "aibou", text: aiText }]);
      } else {
        setSentText((prev) => [
          ...prev,
          { sender: "aibou", text: "sumemasen! server down!" },
        ]);
      }
    } catch (err) {
      setError("Error contacting aibou!");
      setSentText((prev) => [
        ...prev,
        { sender: "aibou", text: "Error contacting aibou!" },
      ]);
      console.error(err);
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-2xl pointer-events-none z-60" />
      )}

      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          ref={botRef}
          onClick={() => setIsOpen((open) => !open)}
          className="fixed bottom-4 p-2 right-4 flex rounded-full bg-army shadow-2xl z-60 cursor-pointer transform translate duration-200 hover:scale-110 active:scale-110"
        >
          <Image src={Bot} alt="bot" className="w-12 lg:w-14 h-auto" />
        </motion.div>
      )}

      {isOpen && (
        <div
          ref={divRef}
          className="fixed flex flex-col bottom-22 lg:bottom-25 right-4 z-100 bg-army shadow-2xl w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[70vh] rounded-2xl overflow-hidden"
        >
          <div className="py-2 px-4 flex justify-between items-center w-full h-fill bg-panel">
            <div className="flex items-center gap-2">
              <Image
                src={Bot}
                alt="bot"
                className="w-12 lg:w-14 bg-army p-2 rounded-full"
              />
              <div className="flex flex-col justify-center mt-1">
                <p className="text-lg md:text-xl font-semibold text-header leading-3">
                  Chat with <strong>Aibou</strong>
                </p>
                <p className="text-xs md:text-sm font-normal opacity-60">
                  powered by <strong>GLM-4.5</strong>
                </p>
              </div>
            </div>
            <div>
              <MdClose
                onClick={() => setIsOpen(false)}
                className="hover:scale-110 active:scale-110 cursor-pointer text-xl md:text-2xl"
              />
            </div>
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            {sentText.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 p-2 ${
                  msg.sender === "user"
                    ? "justify-end p-4"
                    : "justify-start p-4"
                }`}
              >
                {msg.sender === "user" ? (
                  <>
                    <p className="bg-brand w-fit max-w-[50vw] md:max-w-[30vw] lg:max-w-[25vw] xl:max-w-[16vw] p-2 text-normal text-base md:text-lg rounded-2xl">
                      {msg.text}
                    </p>
                    <FiUser className="text-4xl md:text-5xl bg-brand rounded-full p-2" />
                  </>
                ) : (
                  <>
                    <div ref={scrollStart} />
                    <Image
                      src={Bot}
                      alt="bot"
                      className="w-10 md:w-12 bg-panel p-2 rounded-full"
                    />
                    <div className="bg-panel w-fit max-w-[50vw] md:max-w-[30vw] lg:max-w-[25vw] xl:max-w-[16vw] p-2 text-normal text-base md:text-lg rounded-2xl">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </>
                )}
              </div>
            ))}
            {load && <AibouLoader />}
            {error && (
              <p className="text-center text-red-500 italic">{error}</p>
            )}
            <div ref={scrollEnd} />
          </div>

          {Preset && (
            <div className="flex flex-col items-end gap-2 lg:gap-4 p-4">
              {preRef1 && (
                <div className="contains">
                  <p
                    onClick={() =>
                      handleSent("Is Joven currently available for hire?")
                    }
                    className="bg-[var(--color-accent)] p-2 w-fit rounded-full text-[var(--color-bg)] text-base md:text-lg font-normal text-center cursor-pointer transition duration-100 hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] active:bg-[var(--color-bg)] active:text-[var(--color-accent)]"
                  >
                    is joven currently available for hire?
                  </p>
                </div>
              )}
              {preRef2 && (
                <div className="contains">
                  <p
                    onClick={() => handleSent("What is Joven's tech-stack?")}
                    className="bg-[var(--color-accent)] p-2 w-fit rounded-full text-[var(--color-bg)] text-base md:text-lg  font-normal text-center cursor-pointer transition duration-100 hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] active:bg-[var(--color-bg)] active:text-[var(--color-accent)]"
                  >
                    what is joven's tech-stack?
                  </p>
                </div>
              )}
              {preRef3 && (
                <div className="contains">
                  <p
                    onClick={() =>
                      handleSent(
                        "Joven's GitHub contributions today?",
                        "How many github contributions in all repositories did joven made today and what are those?"
                      )
                    }
                    className="bg-[var(--color-accent)] p-2 w-fit rounded-full text-[var(--color-bg)] text-base md:text-lg  font-normal text-center cursor-pointer transition duration-100 hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] active:bg-[var(--color-bg)] active:text-[var(--color-accent)]"
                  >
                    joven's gitHub contributions today?
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex bg-panel justify-between gap-2 items-center p-3">
            <textarea
              className="flex-1 text-[var(--color-bg)] placeholder-[var(--color-bg)] text-base md:text-lg bg-[var(--color-accent)] p-2 rounded-md"
              placeholder="hi, im aibou! how can i assist?"
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (!load) handleSent();
                }
              }}
              disabled={load}
            />

            <button
              onClick={() => {
                if (!load) handleSent();
              }}
              className="bg-[var(--color-accent)] p-2 flex items-center justify-center w-fit h-full rounded-md transition duration-100 hover:scale-110 active:scale-110"
            >
              <FiSend className="text-3xl lg:text-4xl text-[var(--color-bg)] shrink-0" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
