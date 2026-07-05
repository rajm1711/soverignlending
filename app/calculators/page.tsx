"use client";
import React, { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ContactCTA from "@/components/home/ContactCTA";
import { Calculator, TrendingUp } from "lucide-react";

function formatCurrency(num: any) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(num);
}

function RepaymentCalculator() {
  const [amount, setAmount] = useState(800000);
  const [rate, setRate] = useState(6.2);
  const [term, setTerm] = useState(30);
  const [type, setType] = useState("principal_interest");

  const monthly = useMemo(() => {
    const r = rate / 100 / 12;
    const n = term * 12;
    if (type === "interest_only") return amount * r;
    if (r === 0) return amount / n;
    return (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [amount, rate, term, type]);

  const fortnightly = monthly / 2;
  const weekly = monthly / (52 / 12);
  const totalPaid = monthly * term * 12;
  const totalInterest = totalPaid - (type === "interest_only" ? 0 : amount);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Loan Amount</label>
            <span className="text-sm font-semibold text-gold-500">{formatCurrency(amount)}</span>
          </div>
          <Slider value={[amount]} onValueChange={(v) => setAmount(typeof v === 'number' ? v : v[0])} min={50000} max={5000000} step={10000}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
          <div className="flex justify-between mt-2 text-xs text-neutral-400"><span>$50K</span><span>$5M</span></div>
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Interest Rate (p.a.)</label>
            <span className="text-sm font-semibold text-gold-500">{rate.toFixed(2)}%</span>
          </div>
          <Slider value={[rate]} onValueChange={(v) => setRate(typeof v === 'number' ? v : v[0])} min={1} max={12} step={0.05}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
          <div className="flex justify-between mt-2 text-xs text-neutral-400"><span>1%</span><span>12%</span></div>
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Loan Term</label>
            <span className="text-sm font-semibold text-gold-500">{term} years</span>
          </div>
          <Slider value={[term]} onValueChange={(v) => setTerm(typeof v === 'number' ? v : v[0])} min={1} max={30} step={1}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
          <div className="flex justify-between mt-2 text-xs text-neutral-400"><span>1 yr</span><span>30 yrs</span></div>
        </div>
        <div>
          <label className="text-sm font-medium text-obsidian mb-2 block">Repayment Type</label>
          <Select value={type} onValueChange={(val) => { if (val) setType(val); }}>
            <SelectTrigger className="h-11 border-neutral-200"><SelectValue placeholder="Select Repayment Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="principal_interest">Principal & Interest</SelectItem>
              <SelectItem value="interest_only">Interest Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-obsidian rounded-2xl p-8 lg:p-10 text-white">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-6">Your Estimated Repayments</h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs text-neutral-500 mb-1">Monthly</p>
            <p className="text-4xl font-semibold text-gold-400 tracking-tight">{formatCurrency(Math.round(monthly))}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-800/50 rounded-xl p-4">
              <p className="text-xs text-neutral-500 mb-1">Fortnightly</p>
              <p className="text-lg font-semibold">{formatCurrency(Math.round(fortnightly))}</p>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-4">
              <p className="text-xs text-neutral-500 mb-1">Weekly</p>
              <p className="text-lg font-semibold">{formatCurrency(Math.round(weekly))}</p>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Total Repayment</span>
              <span className="font-medium">{formatCurrency(Math.round(totalPaid))}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Total Interest</span>
              <span className="font-medium">{formatCurrency(Math.round(totalInterest))}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Principal</span>
              <span className="font-medium">{formatCurrency(amount)}</span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-neutral-600 mt-8">
          This calculator provides estimates only. Actual repayments may vary based on lender policies, fees, and loan structure. Speak with us for a personalised quote.
        </p>
      </div>
    </div>
  );
}

function BorrowingCalculator() {
  const [income, setIncome] = useState(120000);
  const [partnerIncome, setPartnerIncome] = useState(0);
  const [expenses, setExpenses] = useState(3000);
  const [existingDebts, setExistingDebts] = useState(0);
  const [dependants, setDependants] = useState(0);

  const borrowingCapacity = useMemo(() => {
    const totalIncome = income + partnerIncome;
    const monthlyIncome = totalIncome / 12;
    const monthlyExpenses = expenses + (dependants * 400);
    const monthlyDebtPayments = existingDebts / 12;
    const surplus = monthlyIncome - monthlyExpenses - monthlyDebtPayments;
    const assessmentRate = 0.0825 / 12;
    const n = 30 * 12;
    const maxLoan = surplus > 0 ? (surplus * (Math.pow(1 + assessmentRate, n) - 1)) / (assessmentRate * Math.pow(1 + assessmentRate, n)) : 0;
    return Math.max(0, Math.round(maxLoan * 0.8));
  }, [income, partnerIncome, expenses, existingDebts, dependants]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Your Annual Income (before tax)</label>
            <span className="text-sm font-semibold text-gold-500">{formatCurrency(income)}</span>
          </div>
          <Slider value={[income]} onValueChange={(v) => setIncome(typeof v === 'number' ? v : v[0])} min={30000} max={500000} step={5000}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Partner's Annual Income</label>
            <span className="text-sm font-semibold text-gold-500">{formatCurrency(partnerIncome)}</span>
          </div>
          <Slider value={[partnerIncome]} onValueChange={(v) => setPartnerIncome(typeof v === 'number' ? v : v[0])} min={0} max={500000} step={5000}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Monthly Living Expenses</label>
            <span className="text-sm font-semibold text-gold-500">{formatCurrency(expenses)}</span>
          </div>
          <Slider value={[expenses]} onValueChange={(v) => setExpenses(typeof v === 'number' ? v : v[0])} min={1000} max={15000} step={100}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Annual Existing Debt Repayments</label>
            <span className="text-sm font-semibold text-gold-500">{formatCurrency(existingDebts)}</span>
          </div>
          <Slider value={[existingDebts]} onValueChange={(v) => setExistingDebts(typeof v === 'number' ? v : v[0])} min={0} max={100000} step={1000}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-medium text-obsidian">Dependants</label>
            <span className="text-sm font-semibold text-gold-500">{dependants}</span>
          </div>
          <Slider value={[dependants]} onValueChange={(v) => setDependants(typeof v === 'number' ? v : v[0])} min={0} max={6} step={1}
            className="[&_[role=slider]]:bg-gold-500 [&_[role=slider]]:border-gold-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_.range]:bg-gold-500" />
        </div>
      </div>

      <div className="bg-obsidian rounded-2xl p-8 lg:p-10 text-white flex flex-col justify-center">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-6">Estimated Borrowing Capacity</h3>
        <p className="text-5xl font-semibold text-gold-400 tracking-tight mb-4">{formatCurrency(borrowingCapacity)}</p>
        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
          Based on your income and expenses, you may be able to borrow approximately this amount.
          This is an estimate only — actual capacity depends on your credit history, lender policies, and application details.
        </p>
        <div className="bg-neutral-800/50 rounded-xl p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Combined Income</span>
            <span>{formatCurrency(income + partnerIncome)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Monthly Expenses</span>
            <span>{formatCurrency(expenses + dependants * 400)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Assessment Rate Used</span>
            <span>8.25%</span>
          </div>
        </div>
        <p className="text-[11px] text-neutral-600 mt-6">
          Lenders use a buffer rate above the actual rate to assess serviceability. Results are indicative only.
        </p>
      </div>
    </div>
  );
}

export default function Calculators() {
  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Mortgage Calculators
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-6">
              Crunch the Numbers Before You Commit
            </h1>
            <p className="text-graphite text-lg leading-relaxed">
              Use our interactive tools to estimate your repayments and borrowing capacity.
              For a personalised assessment, speak with one of our senior brokers.
            </p>
          </div>

          <Tabs defaultValue="repayment" className="w-full">
            <TabsList className="bg-platinum p-1 rounded-xl mb-10 flex flex-col sm:flex-row w-full sm:w-max !h-auto gap-1">
              <TabsTrigger value="repayment" className="w-full sm:w-auto data-[active]:bg-white data-[active]:shadow-sm rounded-lg px-6 py-3 sm:py-2.5 text-sm font-medium flex items-center justify-center !h-auto">
                <Calculator className="w-4 h-4 mr-2 shrink-0" /> Repayment Calculator
              </TabsTrigger>
              <TabsTrigger value="borrowing" className="w-full sm:w-auto data-[active]:bg-white data-[active]:shadow-sm rounded-lg px-6 py-3 sm:py-2.5 text-sm font-medium flex items-center justify-center !h-auto">
                <TrendingUp className="w-4 h-4 mr-2 shrink-0" /> Borrowing Capacity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="repayment"><RepaymentCalculator /></TabsContent>
            <TabsContent value="borrowing"><BorrowingCalculator /></TabsContent>
          </Tabs>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}