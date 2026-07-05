"use client";
import React from "react";
import Link from "next/link";
import ContactCTA from "@/components/home/ContactCTA";
import { Home, RefreshCw, TrendingUp, Building, Hammer, Briefcase, ArrowRight, Check } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import LoanComparisonTable from "@/components/services/LoanComparision";

const services = [
  {
    icon: Home,
    title: "Home Loans",
    description: "Whether you're purchasing your first home or upgrading to a larger property, we structure loans that maximise your borrowing power while keeping repayments comfortable.",
    features: [
      "Access to rates from 40+ lenders — not just the big four",
      "Pre-approval in as fast as 48 hours",
      "Fixed, variable, and split loan options",
      "Offset and redraw facility guidance",
      "End-to-end support from application to settlement",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "If you haven't reviewed your home loan in the last 12 months, there's a strong chance you're paying more than you need to. We handle the entire switching process.",
    features: [
      "Free rate comparison against your current loan",
      "Cash-back and bonus offers from competing lenders",
      "Equity release for renovations or investment",
      "Consolidation of multiple debts into one loan",
      "No-cost refinance assessment — no obligation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Loans",
    description: "Build long-term wealth through strategic property investment with lending structures specifically designed for portfolios of one to twenty properties.",
    features: [
      "Interest-only and principal & interest structures",
      "Offset account optimisation across multiple loans",
      "Cross-collateralisation vs standalone security advice",
      "Portfolio reviews and restructuring",
      "Tax-effective borrowing strategies",
    ],
  },
  {
    icon: Building,
    title: "First Home Buyers",
    description: "Your first home purchase should feel exciting, not overwhelming. We guide you through every step, making sure you access every grant and concession available.",
    features: [
      "First Home Owner Grant guidance by state",
      "Stamp duty concession and exemption advice",
      "First Home Guarantee (2% deposit scheme)",
      "Lenders Mortgage Insurance (LMI) alternatives",
      "Step-by-step timeline from pre-approval to keys",
    ],
  },
  {
    icon: Hammer,
    title: "Construction Loans",
    description: "Building your dream home requires a different kind of finance. We match you with construction-friendly lenders and manage staged drawdowns through every phase.",
    features: [
      "Progress payment management through each build stage",
      "Fixed-price and cost-plus contract support",
      "Land-and-build package financing",
      "Owner-builder lending options",
      "Interest-only during construction phase",
    ],
  },
  {
    icon: Briefcase,
    title: "Commercial Lending",
    description: "From commercial property purchases to business expansion funding, our specialists work with niche lenders who understand complex commercial structures.",
    features: [
      "Commercial property purchase and refinance",
      "SMSF lending for commercial assets",
      "Business cash flow and equipment finance",
      "Mixed-use property lending",
      "Development finance for small to mid-scale projects",
    ],
  },
];

function ServiceBlock({ service, index }: { service: { icon: React.ComponentType<{ className?: string }>; title: string; description: string; features: string[] }, index: number }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`py-16 lg:py-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${index > 0 ? "border-t border-neutral-100" : ""}`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isReversed ? "lg:direction-rtl" : ""}`}>
        <div className={isReversed ? "lg:order-2" : ""}>
          <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center mb-6">
            <service.icon className="w-5 h-5 text-gold-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-4">{service.title}</h3>
          <p className="text-graphite leading-relaxed mb-8">{service.description}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-obsidian text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gold-500 transition-all"
          >
            Enquire About {service.title} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className={isReversed ? "lg:order-1" : ""}>
          <div className="bg-platinum rounded-2xl p-8">
            <h4 className="text-sm font-semibold text-obsidian mb-5">What's Included</h4>
            <ul className="space-y-3">
              {service.features.map((f: string) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-graphite leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-6">
              Lending Solutions Tailored to Your Goals
            </h1>
            <p className="text-graphite text-lg leading-relaxed">
              No two borrowers are the same. That's why we take the time to understand your complete
              financial picture before recommending a lending strategy from our panel of 40+ lenders.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((s, i) => (
            <ServiceBlock key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <LoanComparisonTable />

      <ContactCTA />
    </>
  );
}
