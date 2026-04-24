"use client";

import { useCallback } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  const handleNavigate = useCallback((target) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Skills />
      <ProjectCarousel />
      <Contact />
    </>
  );
}
