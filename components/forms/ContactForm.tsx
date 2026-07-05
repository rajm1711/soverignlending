"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required").regex(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed"),
  lastName: z.string().min(2, "Last name is required").regex(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required").regex(/^\d+$/, "Only digits allowed"),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  loanAmount: z.string().regex(/^\d*$/, "Only digits allowed").optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      enquiryType: "",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      toast.success("Enquiry Submitted", {
        description: "One of our senior brokers will be in touch shortly.",
      });
      reset();
    } catch (error) {
      toast.error("Error", {
        description: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-background p-8 rounded-2xl border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName", { onChange: (e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className={errors.firstName ? "border-destructive" : ""} />
          {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName", { onChange: (e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className={errors.lastName ? "border-destructive" : ""} />
          {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" {...register("phone", { onChange: (e) => e.target.value = e.target.value.replace(/\D/g, "") })} className={errors.phone ? "border-destructive" : ""} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="enquiryType">How can we help?</Label>
          <Select onValueChange={(val) => setValue("enquiryType", (val as string) || "")}>
            <SelectTrigger className={errors.enquiryType ? "border-destructive" : ""}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy_home">Buying a Home</SelectItem>
              <SelectItem value="invest">Property Investment</SelectItem>
              <SelectItem value="refinance">Refinancing</SelectItem>
              <SelectItem value="commercial">Commercial Loan</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.enquiryType && <p className="text-sm text-destructive">{errors.enquiryType.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="loanAmount">Estimated Loan Amount (Optional)</Label>
          <Input id="loanAmount" type="text" placeholder="$" {...register("loanAmount", { onChange: (e) => e.target.value = e.target.value.replace(/\D/g, "") })} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Details (Optional)</Label>
        <textarea 
          id="message" 
          {...register("message")}
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base rounded-xl" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Callback"
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting this form, you agree to our Privacy Policy and Terms of Service. Your information is secure.
      </p>
    </form>
  );
}
