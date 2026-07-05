"use client";

import React from "react";
import ContactCTA from "@/components/home/ContactCTA";
import { Shield, Target, Heart, Award } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import { ABOUT_IMAGE } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  { icon: Shield, title: "Integrity First", description: "We recommend what's right for you — even when it means directing you to a product that earns us less commission. Our reputation is built on honest advice." },
  { icon: Target, title: "Precision", description: "Every application we submit is meticulously structured. We understand each lender's credit appetite and position your file for the highest chance of approval." },
  { icon: Heart, title: "Client Obsession", description: "Buying property is deeply personal. We treat every client's goals with the care and urgency they deserve, from first conversation to settlement day and beyond." },
  { icon: Award, title: "Excellence", description: "We continuously invest in training, technology, and relationships to ensure our clients receive the most current advice and the most competitive outcomes available." },
];

const milestones = [
  { year: "2012", event: "Founded in Sydney with a vision to make premium mortgage advice accessible" },
  { year: "2015", event: "Expanded to a panel of 30+ lenders and settled $100M in residential loans" },
  { year: "2018", event: "Recognised by MFAA as a top-performing brokerage in New South Wales" },
  { year: "2021", event: "Launched digital application platform, reducing approval times by 40%" },
  { year: "2024", event: "Surpassed $500M in total settlements across 2,000+ Australian families" },
];

function ValueCard({ value, index }: { value: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }, index: number }) {
  const [ref, isVisible] = useScrollAnimation(0.15);
  return (
    <div
      ref={ref}
      className={`p-8 rounded-2xl border border-neutral-100 bg-white transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center mb-6">
        <value.icon className="w-5 h-5 text-gold-500" />
      </div>
      <h3 className="font-semibold text-lg text-obsidian mb-3">{value.title}</h3>
      <p className="text-sm text-graphite leading-relaxed">{value.description}</p>
    </div>
  );
}

export default function About() {
  const [imgRef, imgVisible] = useScrollAnimation();
  const [tlRef, tlVisible] = useScrollAnimation();

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                About Sovereign Lending
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-6">
                We Exist to Simplify the Most Important Financial Decision of Your Life
              </h1>
              <p className="text-graphite text-lg leading-relaxed mb-6">
                Founded in 2012, Sovereign Lending was built on a simple belief: Australians
                deserve mortgage advice that's independent, transparent, and genuinely in their
                best interest. Not advice shaped by a bank's product targets — advice shaped by
                your goals.
              </p>
              <p className="text-graphite leading-relaxed mb-6">
                Today, we manage over $500 million in residential lending across a panel of more
                than 40 Australian lenders. From first home buyers taking their initial step onto
                the property ladder to seasoned investors building multi-property portfolios, our
                team has the depth of experience to navigate every scenario.
              </p>
              <p className="text-graphite leading-relaxed">
                We're licenced under the National Consumer Credit Protection Act and are proud
                members of the Mortgage & Finance Association of Australia (MFAA).
              </p>
            </div>
            <div
              ref={imgRef}
              className={`rounded-2xl overflow-hidden transition-all duration-700 ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Modern sun-drenched office interior"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-platinum">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="The Principles Behind Every Recommendation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="A Decade of Delivering Results"
            light
          />
          <div
            ref={tlRef}
            className={`relative max-w-4xl mx-auto transition-all duration-700 ${tlVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-transparent -translate-x-1/2" />
            <div className="space-y-10 md:space-y-4">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${i > 0 ? "md:mt-4" : ""}`}
                >
                  <div
                    className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gold-500 ring-4 ring-obsidian z-10`}
                  />
                  <div className={i % 2 === 0 ? "md:col-start-1 md:text-right md:pr-14" : "md:col-start-2 md:pl-14"}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/40 transition-colors duration-300">
                      <span className="text-2xl font-semibold text-gold-500 tracking-tight">{m.year}</span>
                      <p className="text-sm text-neutral-300 leading-relaxed mt-2">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}