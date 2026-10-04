"use client";
import Hero from "@/components/sections/heroSection";
import About from "@/components/sections/aboutSection";
import Skills from "@/components/sections/skillSection";
import Portfolio from "@/components/sections/portfolioSection";
import Contact from "@/components/sections/contactSection";
import Footer from "@/components/sections/footer";
import Loader from "@/components/layout/loader";
import { useEffect, useState } from "react";
import Bulletin from "@/components/layout/bulletin";
import Highlight from "@/components/sections/highlightSection";
import Aibou from "@/components/layout/aibou";

export default function Home() {


  return (
    <main>

      {/* ———————————————————————————————————— chatbot ——— */}
      <Aibou/>

      {/* ———————————————————————————————————— hero section ——— */}
      <section id="hero" className="bg-brand h-screen relative overflow-hidden">
        <Hero />
      </section>

      {/* ———————————————————————————————————— about section ——— */}
      <section id="about" className="bg-second p-8 md:p-16 lg:px-32 xl:px-72">
        <About />
      </section>

      {/* ———————————————————————————————————— about section ——— */}
      <div className="bg-second py-8 md:py-16">
        <Bulletin />
      </div>

      <section
        id="highlight"
        className="bg-second p-8 md:p-16 lg:px-32 xl:px-72"
      >
        <Highlight />
      </section>

      {/* ———————————————————————————————————— portfolio section ——— */}
      <section
        id="portfolio"
        className="bg-second p-8 md:p-16 lg:px-32 xl:px-72"
      >
        <Portfolio />
      </section>

      {/* ———————————————————————————————————— skills section ——— */}
      <section id="skills" className="bg-second p-8 md:p-16 lg:px-32 xl:px-72">
        <Skills />
      </section>

      {/* ———————————————————————————————————— contact section ——— */}
      <section id="contact" className="bg-second p-8 md:p-16 lg:px-32 xl:px-72">
        <Contact />
      </section>

      {/* ———————————————————————————————————— footer ——— */}
      <section className="flex justify-center h-auto w-full bg-panel py-4">
        <Footer />
      </section>
    </main>
  );
}
