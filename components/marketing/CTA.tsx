import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent blur-[120px]"></div>
      </div>
      
      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Secure Your Financial Future?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of Australians who have achieved their property goals with Apex Mortgages. Get started today with a free, no-obligation consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-14 text-lg")}>
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="/calculators" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 h-14 text-lg border-primary-foreground/20 bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground")}>
              Try Our Calculators
          </Link>
        </div>
      </Container>
    </section>
  );
}
