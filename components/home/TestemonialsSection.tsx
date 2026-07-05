"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import SectionHeader from "../shared/SectionHeader";

const testimonials = [
    {
        name: "Sarah & Michael Chen",
        location: "Mosman, NSW",
        quote: "We'd been knocked back by two banks before finding Sovereign Lending. They restructured our application, found a lender who understood dual-income self-employed borrowers, and we settled on our family home within six weeks. Exceptional service from start to finish.",
        rating: 5,
        loan_type: "Home Loan – $1.85M",
    },
    {
        name: "David Kowalski",
        location: "Toorak, VIC",
        quote: "As an investor with a portfolio of seven properties, I needed a broker who understood complex lending structures. Sovereign Lending restructured my entire portfolio, saving me $42,000 in annual interest and freeing up equity for my next acquisition.",
        rating: 5,
        loan_type: "Investment Refinance – $3.2M",
    },
    {
        name: "Priya Sharma",
        location: "Paddington, QLD",
        quote: "Being a first home buyer felt overwhelming until I spoke with the team at Sovereign. They walked me through every grant I was eligible for, found a rate 0.4% below what I'd been quoted directly, and made the entire process feel effortless.",
        rating: 5,
        loan_type: "First Home – $720K",
    },
];

function TestimonialCard({ testimonial, index }: any) {
    const [ref, isVisible] = useScrollAnimation(0.15);

    return (
        <div
            ref={ref}
            className={`p-8 rounded-2xl bg-white border border-neutral-100 hover:border-gold-200 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <Quote className="w-8 h-8 text-gold-200 mb-6" />
            <p className="text-graphite text-sm leading-relaxed mb-8">{testimonial.quote}</p>
            <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
            </div>
            <div>
                <p className="font-semibold text-sm text-obsidian">{testimonial.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{testimonial.location}</p>
                <p className="text-xs text-gold-500 mt-1">{testimonial.loan_type}</p>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Client Stories"
                    title="Trusted by Thousands of Australians"
                    description="Don't just take our word for it. Here's what our clients say about working with Sovereign Lending."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={t.name} testimonial={t} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}