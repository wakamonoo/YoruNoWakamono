"use client";
import Hero from "@/components/sections/heroSection";
import About from "@/components/sections/aboutSection";
import Skills from "@/components/sections/skillSection";
import Contact from "@/components/sections/contactSection";
import Footer from "@/components/sections/footer";
import Aibou from "@/components/layout/aibou";
import Activity from "@/components/sections/activitySection";
import Portfolio from "@/components/sections/portfolioSection";
import NavMenu from "@/components/layout/navMenu";

export default function Home() {
  return (
    <main>
      <NavMenu />
      <Aibou />
      <Hero />
      <div className="">
        <About />
        <Portfolio />
        <Activity />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
