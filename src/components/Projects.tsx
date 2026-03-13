"use client";
import { motion } from "framer-motion";
import { Smartphone, MonitorPlay, Code, GitBranch } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Mobil Uygulama Geliştirme",
            description: "React Native ile çapılı platform mobil uygulamalar geliştirme, akıcı performans ve güzel arayüzlere odaklanma.",
            icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
            tag: "Mobil Geliştirme"
        },
        {
            title: "Web Platformları",
            description: "Next.js ve React kullanarak ölçeklenebilir web platformları ve CMS sistemleri mimarisi. SEO ve yüksek Lighthouse skorlarına önem verme.",
            icon: <MonitorPlay className="w-6 h-6 text-purple-400" />,
            tag: "Web Geliştirme"
        },
        {
            title: "Açık Kaynak Projeler",
            description: "GitHub'da UI bileşenlerinden yardımcı kütüphanelere kadar çeşitli depolarda aktif katkı sağlayıcı ve yaratıcı.",
            icon: <GitBranch className="w-6 h-6 text-blue-400" />,
            tag: "Açık Kaynak"
        },
        {
            title: "Etkileşimli Arayüzler",
            description: "Unutulmaz dijital deneyimler tasarlamak için WebGL, Framer Motion ve karmaşık animasyonlarda uzmanlık.",
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
                    Neler <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Yapıyorum?</span>
                </h2>
                <p className="text-center text-slate-400 max-w-2xl mx-auto text-lg">
                    Fikir aşamasından yayına kadar, sağlam uygulamalar ve web siteleri oluşturmak için tam yığın (full stack) çözümler üretiyorum. Detaylı kod depolarım için GitHub'ıma göz atın.
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
