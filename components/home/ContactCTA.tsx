"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import { COMPANY, TEXTURE_IMAGE } from "@/lib/constants";

export default function ContactCTA() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <img src={TEXTURE_IMAGE} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-obsidian/90" />
            </div>

            <div
                ref={ref}
                className={`relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <span className="inline-block text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                    Ready to Get Started?
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Let's Find the Right Loan for Your Future
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Book a free, no-obligation consultation with one of our senior lending
                    specialists. We'll review your position and map out the best path forward.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20"
                    >
                        Book Free Consultation
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-white/80 border border-white/20 px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                    >
                        <Phone className="w-4 h-4" /> Call {COMPANY.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}
