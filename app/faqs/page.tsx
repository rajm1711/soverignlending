"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";

const faqData = [
  {
    category: "General",
    items: [
      { q: "What does a mortgage broker do?", a: "A mortgage broker acts as an intermediary between you and potential lenders. We assess your financial situation, compare loan products from our panel of 40+ lenders, and negotiate on your behalf to find the most suitable loan at the best available rate. We handle the application process from start to finish." },
      { q: "How much does it cost to use Sovereign Lending?", a: "Our service is completely free to you. We receive a commission from the lender upon successful settlement of your loan. This commission does not affect your interest rate or fees — it's built into the lender's business model regardless of whether you apply directly or through a broker." },
      { q: "How is a broker different from going to a bank directly?", a: "A bank can only offer their own products. We compare products from over 40 lenders — including major banks, second-tier banks, non-bank lenders, and credit unions — to find the best fit. We also negotiate rates, manage the application process, and provide ongoing loan reviews." },
    ],
  },
  {
    category: "Home Loans",
    items: [
      { q: "What deposit do I need to buy a home?", a: "A minimum 5% deposit is required for most lenders, though you may need to pay Lenders Mortgage Insurance (LMI) with less than 20%. Government schemes like the First Home Guarantee can help you avoid LMI with just a 5% deposit. We'll assess your specific eligibility during our initial consultation." },
      { q: "What is Lenders Mortgage Insurance (LMI)?", a: "LMI is a one-off insurance premium that protects the lender (not you) if you default on your loan. It's typically required when your deposit is less than 20% of the property value. The cost depends on your loan amount and deposit size, and can range from a few thousand to over $40,000." },
      { q: "What is pre-approval and how long does it last?", a: "Pre-approval (also called conditional approval) is an indication from a lender of how much they're willing to lend you, subject to a property valuation and final checks. It typically lasts 3–6 months and gives you confidence when making offers. We can usually secure pre-approval within 48 hours." },
    ],
  },
  {
    category: "Refinancing",
    items: [
      { q: "When should I consider refinancing my home loan?", a: "Consider refinancing if your current rate is more than 0.5% above competitive market rates, your fixed term has expired, your financial circumstances have improved, you want to access equity, or you want to consolidate other debts. We recommend reviewing your loan at least annually." },
      { q: "Are there costs involved in refinancing?", a: "Potential costs include discharge fees from your current lender ($150–$400), government registration fees, and potentially break costs if you're on a fixed rate. Many lenders offer cash-back incentives that can offset these costs. We'll calculate whether switching makes financial sense before you commit." },
      { q: "Will refinancing affect my credit score?", a: "A refinance application does result in a credit enquiry, which may have a minor short-term impact on your credit score. However, if approved and settled, the long-term benefit of a better rate and structure typically outweighs any temporary score impact. We can discuss this further during your consultation." },
    ],
  },
  {
    category: "First Home Buyers",
    items: [
      { q: "What is the First Home Guarantee?", a: "The First Home Guarantee allows eligible first home buyers to purchase with as little as 5% deposit without paying LMI. The government guarantees up to 15% of the property value. Eligibility is based on income thresholds ($125,000 for singles, $200,000 for couples) and property price caps that vary by location." },
      { q: "Am I eligible for the First Home Owner Grant?", a: "Eligibility varies by state but generally requires that you're an Australian citizen or permanent resident, you or your partner haven't previously owned property in Australia, and the property is a new build below a certain value. We'll confirm your eligibility based on your state and circumstances." },
      { q: "Can I use my super for a home deposit?", a: "Yes, through the First Home Super Saver Scheme (FHSSS), you can withdraw voluntary super contributions (up to $50,000) to put toward your first home deposit. This can provide tax advantages compared to saving outside super. Your super fund can provide details on your eligible withdrawal amount." },
    ],
  },
  {
    category: "Process",
    items: [
      { q: "How long does the home loan process take?", a: "Pre-approval typically takes 1–3 business days. Once you've found a property and received full approval, settlement usually occurs within 6–8 weeks (sometimes sooner). We keep you informed at every stage and proactively manage the timeline to avoid delays." },
      { q: "What documents will I need to provide?", a: "Generally: proof of identity (driver's licence, passport), proof of income (2 recent payslips or 2 years of tax returns for self-employed), bank statements (2–3 months), details of existing debts and assets, and the property contract once you have one. We'll provide a personalised document checklist." },
      { q: "Can you help with complex applications?", a: "Absolutely. We specialise in scenarios that mainstream banks may find challenging — self-employed borrowers, foreign income, trust structures, multiple investment properties, and prior credit issues. Our knowledge of individual lender policies allows us to match complex situations with the right credit team." },
    ],
  },
  {
    category: "Rates & Fees",
    items: [
      { q: "What is the current average home loan interest rate?", a: "Variable rates from competitive lenders currently range from approximately 5.89% to 6.39% p.a. for owner-occupied principal and interest loans. Fixed rates range from 5.69% to 6.29% for 2-year terms. Rates change frequently — contact us for the most current comparison." },
      { q: "What fees should I budget for when buying a home?", a: "Beyond the deposit, budget for: stamp duty (varies by state and property value), legal/conveyancing fees ($1,500–$3,000), building and pest inspections ($500–$800), loan establishment fees (often $0 with competitive lenders), and Lenders Mortgage Insurance if applicable. We'll provide a complete cost estimate." },
      { q: "Do you charge any fees for your service?", a: "No. Our service is 100% free to you. We're compensated by the lender through a commission upon settlement. This arrangement is standard across the Australian mortgage broking industry and is fully transparent — we'll disclose all commissions in writing as required by law." },
    ],
  },
];

export default function FAQs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqData.map((c) => c.category)];

  const filteredData = faqData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          (activeCategory === "All" || cat.category === activeCategory) &&
          (item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-6">
              Everything You Need to Know
            </h1>
            <p className="text-graphite text-lg leading-relaxed">
              Clear, honest answers to the questions we hear most. Can't find what you're looking for? Get in touch and we'll help.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 mb-10">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="pl-10 h-11 border-neutral-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${activeCategory === c ? "bg-obsidian text-white" : "bg-platinum text-graphite hover:bg-neutral-200"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {filteredData.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-lg font-semibold text-obsidian mb-4">{cat.category}</h2>
                <Accordion className="space-y-2">
                  {cat.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.category}-${i}`}
                      className="border border-neutral-100 rounded-xl px-6 data-[state=open]:border-gold-200 data-[state=open]:shadow-sm transition-all"
                    >
                      <AccordionTrigger className="text-sm font-medium text-obsidian hover:text-gold-500 py-5 text-left [&[data-state=open]]:text-gold-500">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-graphite leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="text-center py-16">
                <p className="text-graphite">No questions match your search. Try a different term or contact us directly.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}