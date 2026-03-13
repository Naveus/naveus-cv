"use client";
import { motion } from "framer-motion";
import { Code2, Compass, Layers, Zap } from "lucide-react";

export function About() {
    const skills = [
        { name: "Frontend Development", icon: <Layers className="text-indigo-400" /> },
        { name: "UI/UX & 3D Design", icon: <Compass className="text-purple-400" /> },
        { name: "Modern Web APIs", icon: <Code2 className="text-blue-400" /> },
        { name: "Performance Optimization", icon: <Zap className="text-cyan-400" /> },
    ];

    return (
        <section className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Me</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        I am a passionate developer with a deep interest in creating visually stunning and highly interactive web applications. My focus is on blending beautiful aesthetics with robust functionality to build products that stand out.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
                                {skill.icon}
                                <span className="text-slate-200 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-panel border border-slate-800/50 p-1 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                >
                    <div className="w-full h-full rounded-xl bg-[#0a0a1a] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
                        <h3 className="text-3xl font-bold text-white mb-4 z-10">Experience</h3>
                        <p className="text-slate-400 z-10 max-w-sm">From conceptualization to deployment, I ensure every detail is refined to perfection.</p>
                        <div className="mt-8 flex gap-4 z-10">
                            <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 font-bold text-xl text-indigo-400">3+</div>
                            <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 font-bold text-xl text-purple-400">50+</div>
                        </div>
                        <div className="mt-2 flex gap-12 z-10 text-xs text-slate-500 uppercase tracking-widest">
                            <span>Years</span>
                            <span>Projects</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
