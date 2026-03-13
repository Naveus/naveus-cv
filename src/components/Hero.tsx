"use client";
import { motion } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden pt-20">
            <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ perspective: 1000 }}
                className="text-center max-w-4xl px-4 z-20 pointer-events-none"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
                        Kerem Kaan
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
                        Software Developer building modern web and mobile applications with stunning interactive aesthetics.
                    </p>

                    <Link href="https://github.com/keremkaan099" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                        <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 py-3 px-6 rounded-full transition-all">
                            <Github className="w-5 h-5" />
                            <span>View GitHub Repos</span>
                        </div>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 z-20 pointer-events-none"
            >
                <ChevronDown className="w-8 h-8 text-slate-400 animate-bounce" />
            </motion.div>
        </section>
    );
}
