"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function RepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [repaymentFrequency, setRepaymentFrequency] = useState("monthly");

  const calculateRepayment = () => {
    const r = interestRate / 100;
    let n = loanTerm * 12; // monthly periods
    let r_per_period = r / 12;

    if (repaymentFrequency === "fortnightly") {
      n = loanTerm * 26;
      r_per_period = r / 26;
    } else if (repaymentFrequency === "weekly") {
      n = loanTerm * 52;
      r_per_period = r / 52;
    }

    if (r === 0) return loanAmount / n;

    const repayment = (loanAmount * r_per_period * Math.pow(1 + r_per_period, n)) / (Math.pow(1 + r_per_period, n) - 1);
    return repayment;
  };

  const repaymentAmount = calculateRepayment();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-background p-6 md:p-8 rounded-2xl border border-border shadow-sm max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Loan Details</h3>
          <p className="text-muted-foreground text-sm">Adjust the sliders to see how your repayments change.</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="loan-amount">Loan Amount</Label>
            <span className="font-semibold">{formatCurrency(loanAmount)}</span>
          </div>
          <Slider
            id="loan-amount"
            min={100000}
            max={2000000}
            step={10000}
            value={[loanAmount]}
            onValueChange={(val) => setLoanAmount(Array.isArray(val) ? val[0] : (val as unknown as number))}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="interest-rate">Interest Rate (p.a.)</Label>
            <span className="font-semibold">{interestRate.toFixed(2)}%</span>
          </div>
          <Slider
            id="interest-rate"
            min={1}
            max={10}
            step={0.1}
            value={[interestRate]}
            onValueChange={(val) => setInterestRate(Array.isArray(val) ? val[0] : (val as unknown as number))}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="loan-term">Loan Term</Label>
            <span className="font-semibold">{loanTerm} Years</span>
          </div>
          <Slider
            id="loan-term"
            min={5}
            max={40}
            step={1}
            value={[loanTerm]}
            onValueChange={(val) => setLoanTerm(Array.isArray(val) ? val[0] : (val as unknown as number))}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="repayment-frequency">Repayment Frequency</Label>
          <Select value={repaymentFrequency} onValueChange={(val) => setRepaymentFrequency(val || "monthly")}>
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="fortnightly">Fortnightly</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-muted/30 p-8 rounded-xl flex flex-col justify-center items-center text-center border border-border/50">
        <h4 className="text-lg font-medium text-muted-foreground mb-4">Estimated {repaymentFrequency} repayment</h4>
        <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          {formatCurrency(repaymentAmount)}
        </div>
        <p className="text-sm text-muted-foreground max-w-xs mt-4">
          Total Interest over {loanTerm} years: <span className="font-semibold text-foreground">{formatCurrency((repaymentAmount * (repaymentFrequency === 'monthly' ? 12 : repaymentFrequency === 'fortnightly' ? 26 : 52) * loanTerm) - loanAmount)}</span>
        </p>
        <div className="mt-8 pt-8 border-t border-border/50 w-full">
          <p className="text-xs text-muted-foreground/80 leading-relaxed text-left">
            * This calculator provides an estimate only and does not constitute a quote or offer of finance. Actual rates and repayments may vary based on your personal circumstances and lender criteria.
          </p>
        </div>
      </div>
    </div>
  );
}
