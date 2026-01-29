import { ClaritySection } from "./_components/sections/clarity";
import { DecisionSection } from "./_components/sections/decision";
import { DiagnosticSection } from "./_components/sections/diagnostic";
import { FAQSection } from "./_components/sections/faq";
import { FinalCTASection } from "./_components/sections/final-cta";
import { HeroSection } from "./_components/sections/hero";
import { ProblemSection } from "./_components/sections/problem";
import { ProcessSection } from "./_components/sections/process";
import { WhySection } from "./_components/sections/why";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <DiagnosticSection />
      <ProcessSection />
      <DecisionSection />
      <ClaritySection />
      <WhySection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Home;
