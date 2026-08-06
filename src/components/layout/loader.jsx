import { useEffect, useState } from "react";
import wkmn from "@/assets/logo.webp";
import Image from "next/image";

export default function Loader({ onFinish }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleLoad = () => setShow(true);

    if (document.readyState === "complete") {
      setShow(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);
  return (
    <div className="fixed inset-0 z-100 backdrop-blur-2xl flex justify-center items-center w-screen h-screen ">
      {show && (
        <>
          <Image
            src={wkmn}
            alt="wakamono-logo"
            priority
            className="absolute object-cover w-36 h-auto animate-[center-left_1s_ease-in-out_forwards] [animation-delay:1000ms]"
          />
          <h1
            onAnimationEnd={onFinish}
            className="absolute font-tall text-6xl ml-24 opacity-0 text-black animate-[wkmn-fade_1s_ease-in-out_forwards] [animation-delay:1200ms]"
          >
            WKMN
          </h1>
        </>
      )}
    </div>
  );
}