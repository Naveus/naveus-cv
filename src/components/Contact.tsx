"use client";
import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section className="py-32 w-full max-w-4xl mx-auto px-6 relative z-10 text-center" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">İletişime Geçelim</h2>
                <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                    Bir sorunuz, bir proje fikriniz varsa veya sadece merhaba demek isterseniz, mesaj kutum her zaman açık.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="mailto:keremkaan099@gmail.com" className="group">
                        <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-[0_0_30px_-5px_theme(colors.indigo.500)]">
                            <Mail className="text-indigo-400 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-200 font-medium">keremkaan099@gmail.com</span>
                        </div>
                    </Link>

                    <Link href="https://www.instagram.com/kerem.kaan0/" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_-5px_theme(colors.purple.500)]">
                            <Instagram className="text-purple-400 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-200 font-medium">@kerem.kaan0</span>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
