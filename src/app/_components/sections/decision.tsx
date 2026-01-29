/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

const benefits = [
  "Sua situação real fica clara para você",
  "Você visualiza as melhores jogadas",
  "Clareza sobre prioridades e direção",
  "Redução de erros nas decisões",
];

export const DecisionSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Pink diagonal background */}
      <div className="absolute inset-0 bg-primary transform -skew-y-3 origin-top-left scale-y-[1.1]" />

      <div className="relative bg-background py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Chess image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative">
                <img
                  src={`/assets/chess-strategy.jpg`}
                  alt="Estratégia empresarial"
                  className="w-full rounded-2xl shadow-2xl"
                />
                {/* Pink overlay accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                O ponto de partida para decisões{" "}
                <span className="text-primary">
                  empresariais mais inteligentes
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Um olhar externo, técnico e estratégico sobre o seu negócio.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary">Quero mais clareza e estratégia</Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
