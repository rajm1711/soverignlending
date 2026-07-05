import Link from "next/link";
import { ArrowRight, Home, Building2, Wallet, Scale, LineChart, Briefcase } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "First Home Buyers",
    description: "Navigate government grants and find the perfect entry-level loan to secure your first property with confidence.",
    icon: Home,
    href: "/services/first-home-buyers",
  },
  {
    title: "Property Investment",
    description: "Leverage equity and structure your loans for tax efficiency to build a powerful, high-yielding property portfolio.",
    icon: Building2,
    href: "/services/investment",
  },
  {
    title: "Refinancing",
    description: "Stop paying the loyalty tax. We'll restructure your debt and secure a lower rate to save you thousands annually.",
    icon: Wallet,
    href: "/services/refinancing",
  },
  {
    title: "Commercial Loans",
    description: "Expand your business operations with bespoke commercial property finance solutions tailored to your cash flow.",
    icon: Briefcase,
    href: "/services/commercial",
  },
  {
    title: "Self-Managed Super Funds",
    description: "Complex SMSF lending made simple. We guide you through the strict compliance requirements of buying property through super.",
    icon: Scale,
    href: "/services/smsf",
  },
  {
    title: "Construction Loans",
    description: "Building from scratch or renovating? We manage progress drawdowns and ensure smooth funding throughout your build.",
    icon: LineChart,
    href: "/services/construction",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Financial Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're buying your first home or expanding a commercial portfolio, our expertise covers all facets of lending.
            </p>
          </div>
          <Link href="/services" className={cn(buttonVariants({ variant: "outline" }), "hidden md:flex")}>
            View All Services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block p-8 bg-background rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/services" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
