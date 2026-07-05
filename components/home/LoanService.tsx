"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Home, RefreshCw, TrendingUp, Building, Hammer, Briefcase } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import SectionHeader from "../shared/SectionHeader";

const services = [
    {
        icon: Home,
        title: "Home Loans",
        description: "Whether you're purchasing your first home or upgrading to your dream property, we'll structure a loan that maximises your borrowing power while keeping repayments comfortable.",
        link: "/services",
    },
    {
        icon: Briefcase,
        title: "Commercial Lending",
        description: "From purchasing commercial office space to funding business expansion, our commercial lending specialists work with niche lenders who understand complex company structures.",
        link: "/services",
    },
    {
        icon: Building,
        title: "Industrial Finance",
        description: "Secure funding for warehouses, factories, and large-scale industrial properties. We understand the specific yields, LVRs, and lease requirements of the industrial sector.",
        link: "/services",
    },
    {
        icon: TrendingUp,
        title: "Property Investment",
        description: "Build long-term wealth through real estate with lending strategies designed for investors — including interest-only structures, offset optimisation, and portfolio reviews.",
        link: "/services",
    },
    {
        icon: Hammer,
        title: "Land & Construction",
        description: "Whether buying a vacant block of land or building from the ground up, we match you with lenders who offer flexible staged drawdowns and progress payments.",
        link: "/services",
    },
    {
        icon: RefreshCw,
        title: "Refinancing",
        description: "Market conditions change and so should your loan. We review your current position, compare alternatives across our entire panel, and manage the switch end to end.",
        link: "/services",
    },
];

function ServiceCard({ service, index }: any) {
    const [ref, isVisible] = useScrollAnimation(0.15);

    return (
        <div
            ref={ref}
            className={`group relative p-8 rounded-2xl bg-white border border-neutral-100 hover:border-gold-200 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center mb-6 group-hover:bg-gold-50 transition-colors">
                <service.icon className="w-5 h-5 text-graphite group-hover:text-gold-500 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg text-obsidian mb-3 tracking-tight">{service.title}</h3>
            <p className="text-sm text-graphite leading-relaxed mb-6">{service.description}</p>
            <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors"
            >
                Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
        </div>
    );
}

export default function LoanServices() {
    return (
        <section className="py-24 lg:py-32 bg-platinum">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Our Services"
                    title="Lending Solutions for Every Stage"
                    description="From your first apartment to a diversified investment portfolio, we provide expert guidance and access to Australia's most competitive lending products."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
