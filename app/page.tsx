import CalculatorPreview from "@/components/home/CalculatorPreview";
import ContactCTA from "@/components/home/ContactCTA";
import HeroSection from "@/components/home/HeroSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import LatestArticles from "@/components/home/LatestArticle";
import LoanServices from "@/components/home/LoanService";
import TestimonialsSection from "@/components/home/TestemonialsSection";
import ValueProposition from "@/components/home/ValueProposition";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <WhyChooseUs />
      <LoanServices />
      <CalculatorPreview />
      <LatestArticles />
      <TestimonialsSection />
      <HomeFAQ />
      <ContactCTA />
    </>
  );
}
