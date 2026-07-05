import { Container } from "@/components/layout/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "Apex Mortgages achieved what our own bank said was impossible. They restructured our investment loans and saved us over $12,000 in interest in the first year alone. Their expertise is unmatched.",
    author: "David Chen",
    role: "Property Investor, Melbourne",
    rating: 5,
  },
  {
    content: "As first home buyers, we were overwhelmed by the process. The team at Apex held our hands from pre-approval to settlement. They negotiated a fantastic rate and made everything seamless and stress-free.",
    author: "Emma & Ryan",
    role: "First Home Buyers, Sydney",
    rating: 5,
  },
  {
    content: "The level of professionalism and financial acumen at Apex is incredible. They understood our complex business structures and secured commercial funding when others couldn't. Truly a premium service.",
    author: "Sarah Jenkins",
    role: "Business Owner, Brisbane",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Hundreds of Australians
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Read what our clients have to say about their experience working with our expert team.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic mb-8">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="border-t border-border/50 pt-6">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
