"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/lib/constants";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
}

function AnimatedCounter({ end, suffix = "", prefix = "" }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let start = 0;
                const duration = 2000;
                const step = (timestamp: number) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.floor(eased * end));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
}

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden -mt-20">
            <div className="absolute inset-0">
                <img
                    src={HERO_IMAGE}
                    alt="Contemporary Australian luxury residence at dusk"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="inline-block text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                            Australian Mortgage Specialists
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-[1.08] mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        Your Australian Legacy,{" "}
                        <span className="text-gold-400">Financed</span> with Precision
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        We compare home loans from over 40 leading Australian lenders to find the
                        structure that fits your life — not just your borrowing capacity.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-start gap-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-gold-600 transition-all duration-300 shadow-lg shadow-gold-500/20"
                        >
                            Get Your Free Assessment
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/calculators"
                            className="inline-flex items-center gap-2 text-white/80 border border-white/20 px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            Explore Calculators
                        </Link>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-3 gap-8 max-w-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div>
                            <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                                <AnimatedCounter end={500} prefix="$" suffix="M+" />
                            </div>
                            <p className="text-xs text-neutral-400">Loans Settled</p>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                                <AnimatedCounter end={40} suffix="+" />
                            </div>
                            <p className="text-xs text-neutral-400">Lender Panel</p>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                                <AnimatedCounter end={2000} suffix="+" />
                            </div>
                            <p className="text-xs text-neutral-400">Happy Clients</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
