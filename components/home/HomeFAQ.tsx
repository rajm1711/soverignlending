"use client";
import React from "react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import useScrollAnimation from "@/lib/useScrollAnimation";

const faqs = [
    {
        q: "How much does it cost to use a mortgage broker?",
        a: "Our service is entirely free for you. We're paid a commission by the lender upon successful settlement of your loan. This means our incentive is to find you the best deal — because we only get paid when you do."
    },
    {
        q: "How long does the home loan approval process take?",
        a: "Pre-approval typically takes 1–3 business days once we have your documents. Full (unconditional) approval usually follows within 5–10 business days, depending on the lender and complexity of your application."
    },
    {
        q: "Can you help if I've been declined by a bank?",
        a: "Absolutely. A decline from one lender doesn't mean you can't borrow. Every lender has different credit criteria — we know which lenders are most likely to approve your specific situation and can restructure your application accordingly."
    },
    {
        q: "What documents do I need to apply for a home loan?",
        a: "Generally, you'll need proof of income (pay slips or tax returns), identification (driver's licence, passport), bank statements (2–3 months), and details of any existing debts. We'll provide a tailored checklist based on your situation."
    },
    {
        q: "Should I refinance my current home loan?",
        a: "If your current rate is more than 0.5% above today's competitive rates, or if your circumstances have changed (higher income, more equity), refinancing could save you thousands. We'll run a no-obligation comparison to show you exactly what you could save."
    },
];

export default function HomeFAQ() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Common Questions"
                    title="Answers You Can Trust"
                    description="Clear, honest answers to the questions we hear most from clients across Australia."
                />

                <div
                    ref={ref}
                    className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <Accordion className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`faq-${i}`}
                                className="border border-neutral-100 rounded-xl px-6 data-[state=open]:border-gold-200 data-[state=open]:shadow-sm transition-all"
                            >
                                <AccordionTrigger className="text-sm font-medium text-obsidian hover:text-gold-500 py-5 text-left [&[data-state=open]]:text-gold-500">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-graphite leading-relaxed pb-5">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="text-center mt-10">
                        <Link
                            href="/faqs"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors"
                        >
                            View all FAQs <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
