import { AboutSection } from "./_components/sections/about";
import { ClaritySection } from "./_components/sections/clarity";
import { ContactSection } from "./_components/sections/contact";
import { DecisionSection } from "./_components/sections/decision";
import { DiagnosticSection } from "./_components/sections/diagnostic";
import { FAQSection } from "./_components/sections/faq";
import { FinalCTASection } from "./_components/sections/final-cta";
import { FooterSection } from "./_components/sections/footer";
import { HeaderSection } from "./_components/sections/header";
import { HeroSection } from "./_components/sections/hero";
import { HowItWorksSection } from "./_components/sections/how-it-works";
import { ProblemSection } from "./_components/sections/problem";
import { ProcessSection } from "./_components/sections/process";
import { QuickProofSection } from "./_components/sections/quick-proof";
import { WhySection } from "./_components/sections/why";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <QuickProofSection />
        <ProblemSection />
        <DiagnosticSection />
        <ProcessSection />
        <WhySection />
        <DecisionSection />
        <ClaritySection />
        <AboutSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Home;
