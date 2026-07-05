import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Check } from "lucide-react";

const loanProducts = [
    {
        name: "Variable Home Loan",
        lender: "Major Bank Panel",
        rate: "5.89%",
        comparisonRate: "5.93%",
        fees: "$0 annual fee",
        offset: true,
        redraw: true,
        extraRepayments: true,
        featured: false,
    },
    {
        name: "Fixed Rate (2yr)",
        lender: "Second-Tier Lender",
        rate: "5.69%",
        comparisonRate: "6.05%",
        fees: "$0 establishment",
        offset: false,
        redraw: false,
        extraRepayments: false,
        featured: false,
    },
    {
        name: "Premium Package",
        lender: "Non-Bank Lender",
        rate: "5.79%",
        comparisonRate: "5.86%",
        fees: "$395 annual fee",
        offset: true,
        redraw: true,
        extraRepayments: true,
        featured: true,
    },
    {
        name: "Investment Loan (IO)",
        lender: "Major Bank Panel",
        rate: "6.15%",
        comparisonRate: "6.24%",
        fees: "$0 annual fee",
        offset: true,
        redraw: true,
        extraRepayments: false,
        featured: false,
    },
];

function FeatureCell({ included }: any) {
    return included ? (
        <Check className="w-4 h-4 text-gold-500 mx-auto" />
    ) : (
        <span className="text-neutral-300 mx-auto block text-center">—</span>
    );
}

export default function LoanComparisonTable() {
    return (
        <section className="py-24 lg:py-32 bg-platinum">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Compare Loans"
                    title="Sample Loan Products at a Glance"
                    description="A snapshot of the type of products available across our panel. Actual rates depend on your profile — contact us for a personalised comparison."
                />

                <div className="overflow-x-auto rounded-2xl border border-neutral-100 bg-white shadow-sm">
                    <table className="w-full text-sm min-w-[760px]">
                        <thead>
                            <tr className="border-b border-neutral-100">
                                <th className="text-left font-medium text-graphite p-5 w-1/4">Loan Product</th>
                                <th className="text-center font-medium text-graphite p-5">Interest Rate</th>
                                <th className="text-center font-medium text-graphite p-5">Comparison Rate</th>
                                <th className="text-center font-medium text-graphite p-5">Fees</th>
                                <th className="text-center font-medium text-graphite p-5">Offset</th>
                                <th className="text-center font-medium text-graphite p-5">Redraw</th>
                                <th className="text-center font-medium text-graphite p-5">Extra Repayments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanProducts.map((loan) => (
                                <tr
                                    key={loan.name}
                                    className={`border-b border-neutral-100 last:border-0 ${loan.featured ? "bg-gold-50/40" : ""
                                        }`}
                                >
                                    <td className="p-5">
                                        <p className="font-semibold text-obsidian">{loan.name}</p>
                                        <p className="text-xs text-neutral-400 mt-0.5">{loan.lender}</p>
                                        {loan.featured && (
                                            <span className="inline-block mt-1.5 text-[10px] font-semibold tracking-wide uppercase text-gold-500 bg-gold-100 px-2 py-0.5 rounded-full">
                                                Popular
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-5 text-center font-semibold text-gold-500">{loan.rate}</td>
                                    <td className="p-5 text-center text-graphite">{loan.comparisonRate}</td>
                                    <td className="p-5 text-center text-graphite">{loan.fees}</td>
                                    <td className="p-5"><FeatureCell included={loan.offset} /></td>
                                    <td className="p-5"><FeatureCell included={loan.redraw} /></td>
                                    <td className="p-5"><FeatureCell included={loan.extraRepayments} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-xs text-neutral-400 mt-4 text-center">
                    Comparison rate based on a $150,000 loan over 25 years. Rates are indicative only, correct as of publication, and subject to change without notice.
                </p>
            </div>
        </section>
    );
}