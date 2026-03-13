"use client";

import { GlobeView } from "@/components/GlobeView";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const globeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30 font-sans relative">
      {/* FIXED 3D GLOBE BACKGROUND */}
      <motion.div
        style={{ opacity: globeOpacity }}
        className="fixed inset-0 z-0 pointer-events-auto flex items-center justify-center pointer-events-none"
      >
        <div className="w-full h-full max-w-5xl pointer-events-auto">
          <GlobeView />
        </div>
      </motion.div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10">
        <Hero />

        {/* Slightly darkened background for content sections to stand out against globe */}
        <div className="bg-[#020617]/80 backdrop-blur-md border-t border-slate-800/50">
          <About />
          <Projects />
          <Contact />
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 bg-[#020617]">
          <p>© {new Date().getFullYear()} Kerem Kaan. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
