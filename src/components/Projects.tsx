"use client";
import { motion } from "framer-motion";
import { Smartphone, MonitorPlay, Code, GitBranch } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Mobile App Development",
            description: "Building cross-platform mobile applications with React Native, focusing on smooth native-like performance and beautiful UIs.",
            icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
            tag: "App Dev"
        },
        {
            title: "Web Platforms",
            description: "Architecting scalable web platforms and CMS systems using Next.js and React. Emphasizing SEO and high Lighthouse scores.",
            icon: <MonitorPlay className="w-6 h-6 text-purple-400" />,
            tag: "Web Dev"
        },
        {
            title: "Open Source Repos",
            description: "Active contributor and creator of various repositories on GitHub, ranging from UI components to utility libraries.",
            icon: <GitBranch className="w-6 h-6 text-blue-400" />,
            tag: "Open Source"
        },
        {
            title: "Interactive UIs",
            description: "Specializing in WebGL, Framer Motion, and complex animations to craft memorable digital experiences.",
            icon: <Code className="w-6 h-6 text-pink-400" />,
            tag: "UI/UX"
        }
    ];

    return (
        <section className="py-32 w-full max-w-6xl mx-auto px-6 relative z-10" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
                    What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Do</span>
                </h2>
                <p className="text-center text-slate-400 max-w-2xl mx-auto text-lg">
                    From ideation to deployment, I cover the full stack to build robust apps and websites. Check out my GitHub for detailed code repositories.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 * idx }}
                        className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 hover:border-slate-700 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                                {project.icon}
                            </div>
                            <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded-full text-slate-300">
                                {project.tag}
                            </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
