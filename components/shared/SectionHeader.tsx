"use client";
import React from "react";
import useScrollAnimation from "@/lib/useScrollAnimation";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({ label, title, description, align = "center", light = false }: SectionHeaderProps) {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${align === "center" ? "text-center max-w-2xl mx-auto" : "text-left max-w-2xl"
                }`}
        >
            {label && (
                <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    {label}
                </span>
            )}
            <h2
                className={`text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15] mb-4 ${light ? "text-white" : "text-obsidian"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p className={`text-base md:text-lg leading-relaxed ${light ? "text-neutral-400" : "text-graphite"}`}>
                    {description}
                </p>
            )}
        </div>
    );
}