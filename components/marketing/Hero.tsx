"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted w-fit text-sm font-medium border border-border">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span>Australia's #1 Premium Mortgage Brokers</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Secure Your <span className="text-accent italic">Dream Home</span> with Expert Guidance
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We cut through the noise of the property market to bring you tailored mortgage solutions. Experience a seamless, transparent, and premium brokering service designed for your financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-base")}>
                  Get Your Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/calculators" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 h-12 text-base border-border hover:bg-muted")}>
                  Calculate Repayments
              </Link>
            </div>
            
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">50+</span>
                <span className="text-sm text-muted-foreground">Lenders Available</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">$2B+</span>
                <span className="text-sm text-muted-foreground">Loans Settled</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">4.9/5</span>
                <span className="text-sm text-muted-foreground">Client Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
          >
            {/* Minimalist modern luxury image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-muted to-background/50 flex flex-col justify-end p-8">
               <div className="h-full w-full absolute inset-0 -z-10 object-cover bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center brightness-90"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-10"></div>
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl max-w-sm">
                 <p className="text-white font-medium mb-1">"Apex Mortgages secured us a rate we didn't think was possible."</p>
                 <p className="text-white/70 text-sm">— Sarah & James, Sydney</p>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
