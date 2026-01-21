"use client";
import Hero from "@/sections/heroSection";
import About from "@/sections/aboutSection";
import Skills from "@/sections/skillSection";
import Portfolio from "@/sections/portfolioSection";
import Contact from "@/sections/contactSection";
import Footer from "@/sections/footer";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
import Aibou from "@/components/aibou";
import Bulletin from "@/components/bulletin";

export default function Home() {
  const [loading, setLoading] = useState(true);

  {
    /* ———————————————————————————————————— loader ——— */
  }
  useEffect(() => {
    const handleLoad = async () => {
      await new Promise((resolve) =>
        setTimeout(() => resolve("done loading"), 4000)
      );
      setLoading(false);
    };

    handleLoad();
  }, []);

  return (
    <main>
      {/* ———————————————————————————————————— loader ——— */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* ———————————————————————————————————— chatbot ——— */}
      <Aibou loading={loading} />

      {/* ———————————————————————————————————— hero section ——— */}
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <Hero loading={loading} />
      </section>

      {/* ———————————————————————————————————— about section ——— */}
      <section id="about" className="bg-second p-8 md:p-16 lg:p-32 xl:px-72">
        <About loading={loading} />
      </section>

      {/* ———————————————————————————————————— about section ——— */}
      <div className="bg-second">
        <Bulletin loading={loading} />
      </div>

      {/* ———————————————————————————————————— skills section ——— */}
      <section id="skills" className="bg-second p-8 md:p-16 lg:p-32 xl:px-72">
        <Skills loading={loading} />
      </section>

      {/* ———————————————————————————————————— portfolio section ——— */}
      <section
        id="portfolio"
        className="bg-second p-8 md:p-16 lg:p-32 xl:px-72"
      >
        <Portfolio loading={loading} />
      </section>

      {/* ———————————————————————————————————— contact section ——— */}
      <section id="contact" className="bg-second p-8 md:p-16 lg:p-32 xl:px-72">
        <Contact loading={loading} />
      </section>

      {/* ———————————————————————————————————— footer ——— */}
      <section className="flex justify-center h-auto w-full bg-panel py-4">
        <Footer loading={loading} />
      </section>
    </main>
  );
}