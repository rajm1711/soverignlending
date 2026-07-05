import { Container } from "@/components/layout/Container";
import { CheckCircle2, Shield, TrendingDown, Clock, Lightbulb, Users } from "lucide-react";

const features = [
  {
    name: "Unbeatable Rates",
    description: "We negotiate fiercely with over 50+ lenders to secure interest rates you won't find advertised to the general public.",
    icon: TrendingDown,
  },
  {
    name: "Expert Guidance",
    description: "Our senior brokers have decades of combined experience in the Australian property market, navigating complex financial structures.",
    icon: Lightbulb,
  },
  {
    name: "Fast Approvals",
    description: "We streamline the application process, utilizing priority channels to get your loan approved in record time.",
    icon: Clock,
  },
  {
    name: "Completely Free Service",
    description: "Our premium service doesn't cost you a cent. We are paid by the lender you choose, ensuring our advice remains unbiased.",
    icon: Shield,
  },
  {
    name: "Tailored Structures",
    description: "Every financial situation is unique. We build bespoke loan structures that minimize tax and maximize borrowing capacity.",
    icon: Users,
  },
  {
    name: "Lifetime Support",
    description: "Our relationship doesn't end at settlement. We conduct annual rate reviews to ensure you're always on the best possible deal.",
    icon: CheckCircle2,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50 border-y border-border/50">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Apex Mortgages?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just find you a loan; we engineer a financial strategy. Experience the difference of a premium mortgage brokerage.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-8 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 mb-6 text-accent">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
