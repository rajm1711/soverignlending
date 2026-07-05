"use client";
import { LENDER_NAMES } from "@/lib/constants";
import useScrollAnimation from "@/lib/useScrollAnimation";
import React from "react";

export default function ValueProposition() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-16 bg-platinum border-y border-neutral-200/60">
            <div
                ref={ref}
                className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="text-center mb-10">
                    <p className="text-sm text-graphite font-medium">
                        Over <span className="text-gold-500 font-semibold">$500 Million</span> in
                        Australian Residential Loans Managed — Across{" "}
                        <span className="text-gold-500 font-semibold">40+ Lenders</span>
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {LENDER_NAMES.map((name) => (
                        <span
                            key={name}
                            className="text-sm font-medium text-neutral-400 hover:text-gold-500 transition-colors duration-200 cursor-default"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}