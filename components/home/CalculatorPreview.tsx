"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "@/lib/useScrollAnimation";
import SectionHeader from "../shared/SectionHeader";

function formatCurrency(num: number) {
    return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(num);
}

export default function CalculatorPreview() {
    const [loanAmount, setLoanAmount] = useState(800000);
    const [rate, setRate] = useState(6.2);
    const [term, setTerm] = useState(30);
    const [ref, isVisible] = useScrollAnimation();

    const monthlyPayment = useMemo(() => {
        const r = rate / 100 / 12;
        const n = term * 12;
        if (r === 0) return loanAmount / n;
        return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }, [loanAmount, rate, term]);

    const totalRepayment = monthlyPayment * term * 12;
    const totalInterest = totalRepayment - loanAmount;

    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Mortgage Calculator"
                    title="See Your Numbers in Real Time"
                    description="Get an instant estimate of your monthly repayments. Adjust the sliders to match your scenario."
                />

                <div
                    ref={ref}
                    className={`max-w-4xl mx-auto bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-100/50 overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 lg:p-12 space-y-8">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-sm font-medium text-obsidian">Loan Amount</label>
                                    <span className="text-sm font-semibold text-gold-500">{formatCurrency(loanAmount)}</span>
                                </div>
                                <Slider
                                    value={[loanAmount]}
                                    onValueChange={(v) => setLoanAmount(typeof v === 'number' ? v : v[0])}
                                    min={100000}
                                    max={3000000}
                                    step={10000}
                                    className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500"
                                />
                                <div className="flex justify-between mt-2 text-xs text-neutral-400">
                                    <span>$100K</span><span>$3M</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-sm font-medium text-obsidian">Interest Rate</label>
                                    <span className="text-sm font-semibold text-gold-500">{rate.toFixed(1)}%</span>
                                </div>
                                <Slider
                                    value={[rate]}
                                    onValueChange={(v) => setRate(typeof v === 'number' ? v : v[0])}
                                    min={2}
                                    max={10}
                                    step={0.1}
                                    className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500"
                                />
                                <div className="flex justify-between mt-2 text-xs text-neutral-400">
                                    <span>2%</span><span>10%</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-sm font-medium text-obsidian">Loan Term</label>
                                    <span className="text-sm font-semibold text-gold-500">{term} years</span>
                                </div>
                                <Slider
                                    value={[term]}
                                    onValueChange={(v) => setTerm(typeof v === 'number' ? v : v[0])}
                                    min={5}
                                    max={30}
                                    step={1}
                                    className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500"
                                />
                                <div className="flex justify-between mt-2 text-xs text-neutral-400">
                                    <span>5 yrs</span><span>30 yrs</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-obsidian p-8 lg:p-12 flex flex-col justify-center text-white">
                            <span className="text-xs text-neutral-400 font-medium tracking-[0.15em] uppercase mb-3">
                                Monthly Repayment
                            </span>
                            <div className="text-4xl lg:text-5xl font-semibold tracking-tight text-gold-400 mb-8">
                                {formatCurrency(Math.round(monthlyPayment))}
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between py-3 border-b border-neutral-800">
                                    <span className="text-sm text-neutral-400">Total Repayment</span>
                                    <span className="text-sm font-medium">{formatCurrency(Math.round(totalRepayment))}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-neutral-800">
                                    <span className="text-sm text-neutral-400">Total Interest</span>
                                    <span className="text-sm font-medium">{formatCurrency(Math.round(totalInterest))}</span>
                                </div>
                                <div className="flex justify-between py-3">
                                    <span className="text-sm text-neutral-400">Principal</span>
                                    <span className="text-sm font-medium">{formatCurrency(loanAmount)}</span>
                                </div>
                            </div>

                            <Link
                                href="/calculators"
                                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white py-3.5 rounded-lg text-sm font-medium hover:bg-gold-600 transition-all"
                            >
                                Advanced Calculators
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
