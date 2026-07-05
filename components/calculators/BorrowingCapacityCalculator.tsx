"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BorrowingCapacityCalculator() {
  const [applicants, setApplicants] = useState("1");
  const [income1, setIncome1] = useState(100000);
  const [income2, setIncome2] = useState(0);
  const [dependents, setDependents] = useState("0");
  const [livingExpenses, setLivingExpenses] = useState(3000);
  const [otherLoans, setOtherLoans] = useState(0);
  const [creditCardLimit, setCreditCardLimit] = useState(0);

  // Very simplified borrowing capacity formula for demonstration purposes
  const calculateCapacity = () => {
    const totalIncome = income1 + (applicants === "2" ? income2 : 0);
    const monthlyIncome = totalIncome / 12;
    
    // Estimate tax (rough 25% average for simplicity)
    const netMonthlyIncome = monthlyIncome * 0.75;
    
    // Dependent factor (reduces capacity)
    const dependentCost = parseInt(dependents) * 500;
    
    // Credit card liability (approx 3% of limit per month)
    const ccLiability = creditCardLimit * 0.03;
    
    // Other loans monthly repayment
    const loanLiability = otherLoans; // assuming otherLoans is monthly repayment
    
    const totalMonthlyExpenses = livingExpenses + dependentCost + ccLiability + loanLiability;
    
    const availableForMortgage = netMonthlyIncome - totalMonthlyExpenses;
    
    if (availableForMortgage <= 0) return 0;
    
    // Assuming 6.5% interest rate, 30 year term to find present value
    const r = 0.065 / 12;
    const n = 30 * 12;
    const capacity = availableForMortgage * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
    
    return Math.max(0, capacity * 0.9); // 10% buffer
  };

  const borrowingCapacity = calculateCapacity();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-background p-6 md:p-8 rounded-2xl border border-border shadow-sm max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Your Details</h3>
          <p className="text-muted-foreground text-sm">Enter your income and expenses to estimate how much you can borrow.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="applicants">Number of Applicants</Label>
            <Select value={applicants} onValueChange={(val) => setApplicants(val || "1")}>
              <SelectTrigger id="applicants">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Just Me</SelectItem>
                <SelectItem value="2">Two Applicants</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="dependents">Dependents</Label>
            <Select value={dependents} onValueChange={(val) => setDependents(val || "0")}>
              <SelectTrigger id="dependents">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="income1">Applicant 1 Annual Income (Gross)</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input 
              id="income1" 
              type="number" 
              className="pl-8" 
              value={income1} 
              onChange={(e) => setIncome1(Number(e.target.value))} 
            />
          </div>
        </div>

        {applicants === "2" && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="income2">Applicant 2 Annual Income (Gross)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input 
                id="income2" 
                type="number" 
                className="pl-8" 
                value={income2} 
                onChange={(e) => setIncome2(Number(e.target.value))} 
              />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Label htmlFor="livingExpenses">Monthly Living Expenses</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input 
              id="livingExpenses" 
              type="number" 
              className="pl-8" 
              value={livingExpenses} 
              onChange={(e) => setLivingExpenses(Number(e.target.value))} 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="otherLoans">Other Loans (Monthly)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input 
                id="otherLoans" 
                type="number" 
                className="pl-8" 
                value={otherLoans} 
                onChange={(e) => setOtherLoans(Number(e.target.value))} 
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="ccLimit">Total Credit Card Limits</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input 
                id="ccLimit" 
                type="number" 
                className="pl-8" 
                value={creditCardLimit} 
                onChange={(e) => setCreditCardLimit(Number(e.target.value))} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 p-8 rounded-xl flex flex-col justify-center items-center text-center border border-accent/20">
        <h4 className="text-lg font-medium text-muted-foreground mb-4">Estimated Borrowing Capacity</h4>
        <div className="text-5xl md:text-6xl font-bold text-accent mb-4">
          {formatCurrency(borrowingCapacity)}
        </div>
        <p className="text-sm text-muted-foreground max-w-xs mt-4">
          Based on a standard 30-year term at current average rates, factoring in an assessment buffer.
        </p>
        <div className="mt-8 pt-8 border-t border-accent/20 w-full">
          <p className="text-xs text-muted-foreground/80 leading-relaxed text-left">
            * This calculator provides a rough estimate only. Lending criteria vary significantly between banks. Contact us for a precise borrowing assessment.
          </p>
        </div>
      </div>
    </div>
  );
}
