"use client";
import React from "react";
import { Shield, Clock, TrendingDown, Users, Handshake, Award } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import SectionHeader from "../shared/SectionHeader";

const reasons = [
    {
        icon: TrendingDown,
        title: "Competitive Rates",
        description: "We negotiate hard on your behalf. Our volume-based relationships with 40+ lenders mean you get rates that walk-in customers simply can't access."
    },
    {
        icon: Shield,
        title: "Independent Advice",
        description: "We're not tied to any single bank. Our recommendations are based entirely on what's right for your financial position, goals, and timeline."
    },
    {
        icon: Clock,
        title: "Fast Approvals",
        description: "Our streamlined digital process and direct relationships with credit teams mean most pre-approvals are returned within 48 hours."
    },
    {
        icon: Users,
        title: "Dedicated Specialist",
        description: "You'll work with a single experienced broker from first call to settlement — no hand-offs, no call centres, no repeating your story."
    },
    {
        icon: Handshake,
        title: "No Cost to You",
        description: "Our service is completely free. We're paid by the lender upon successful settlement, so our interests are aligned with finding you the best deal."
    },
    {
        icon: Award,
        title: "Award-Winning Service",
        description: "Recognised by the MFAA and AFG for excellence in client outcomes. Our 4.9-star rating reflects a commitment to going beyond the expected."
    },
];

function ReasonCard({ reason, index }: any) {
    const [ref, isVisible] = useScrollAnimation(0.15);

    return (
        <div
            ref={ref}
            className={`group p-8 rounded-2xl border border-neutral-100 bg-white hover:border-gold-200 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center mb-6 group-hover:bg-gold-50 transition-colors duration-300">
                <reason.icon className="w-5 h-5 text-graphite group-hover:text-gold-500 transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-lg text-obsidian mb-3 tracking-tight">{reason.title}</h3>
            <p className="text-sm text-graphite leading-relaxed">{reason.description}</p>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Why Choose Us"
                    title="Built on Trust, Driven by Results"
                    description="Every decision we make is guided by one principle: securing the best possible outcome for your financial future."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, i) => (
                        <ReasonCard key={reason.title} reason={reason} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}