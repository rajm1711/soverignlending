"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const goals = ["New Home", "Refinance", "Investment", "Construction", "Commercial", "Other"];

interface EnquiryFormProps {
    source?: string;
    compact?: boolean;
    onSuccess?: () => void;
}

export default function EnquiryForm({ source = "website", compact = false, onSuccess }: EnquiryFormProps) {
    const [form, setForm] = useState({
        first_name: "", last_name: "", email: "", phone: "",
        property_goal: "", loan_amount: "", message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (field: string, value: string) => {
        let newValue = value;
        if (field === "first_name" || field === "last_name") {
            newValue = value.replace(/[^a-zA-Z\s]/g, ""); // Only letters and spaces
        } else if (field === "phone" || field === "loan_amount") {
            newValue = value.replace(/\D/g, ""); // Only digits
        }
        setForm((p) => ({ ...p, [field]: newValue }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.first_name || !form.email || !form.property_goal) {
            setError("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        setSubmitting(true);
        try {
            const res = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, source })
            });
            if (!res.ok) throw new Error('Failed to submit');
            setSubmitted(true);
            onSuccess?.();
        } catch (err) {
            setError("Something went wrong. Please try again or call us directly.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-obsidian mb-2">Thank You</h3>
                <p className="text-graphite text-sm max-w-sm mx-auto">
                    We've received your enquiry and will be in touch within 2 business hours.
                    For urgent matters, call us on 02 8000 1234.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">First Name *</label>
                    <Input
                        value={form.first_name}
                        onChange={(e) => handleChange("first_name", e.target.value)}
                        placeholder="James"
                        className="h-11 border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">Last Name</label>
                    <Input
                        value={form.last_name}
                        onChange={(e) => handleChange("last_name", e.target.value)}
                        placeholder="Mitchell"
                        className="h-11 border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20"
                    />
                </div>
            </div>
            <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">Email *</label>
                    <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="james@email.com"
                        className="h-11 border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">Phone</label>
                    <Input
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="0412 345 678"
                        className="h-11 border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20"
                    />
                </div>
            </div>
            <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">Property Goal *</label>
                    <Select value={form.property_goal} onValueChange={(v) => handleChange("property_goal", (v as string) || "")}>
                        <SelectTrigger className="h-11 border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20">
                            <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                            {goals.map((g) => (
                                <SelectItem key={g} value={g}>{g}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">Estimated Loan Amount</label>
                    <Input
                        value={form.loan_amount}
                        onChange={(e) => handleChange("loan_amount", e.target.value)}
                        placeholder="$800,000"
                        className="h-11 border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20"
                    />
                </div>
            </div>
            {!compact && (
                <div>
                    <label className="block text-xs font-medium text-graphite mb-1.5">Message</label>
                    <Textarea
                        value={form.message}
                        onChange={(e: any) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your situation..."
                        rows={4}
                        className="border-neutral-200 focus:border-gold-500 focus:ring-gold-500/20 resize-none"
                    />
                </div>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 bg-obsidian text-white py-3.5 rounded-lg text-sm font-medium hover:bg-gold-500 transition-all duration-300 disabled:opacity-50"
            >
                {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                    <>
                        Submit Enquiry
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                )}
            </button>
            <p className="text-[11px] text-neutral-400 text-center">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-gold-500">Privacy Policy</a>.
                We'll never share your details.
            </p>
        </form>
    );
}