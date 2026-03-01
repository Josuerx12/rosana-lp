import Image from "next/image";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import RequestDiagnosticButton from "../ui/request-diagnostic-button";

export const AboutSection = () => {
  return (
    <Section id="sobre" background="light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="order-2 lg:order-1">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            QUEM CONDUZ O TRABALHO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-section-light-foreground">
            Quem está por trás da{" "}
            <span className="text-primary">direção estratégica</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Rosana Miranda atua com consultoria estratégica em comunicação,
            marketing, criação de conteúdo, gestão e vendas, com foco em
            clareza, posicionamento e resultado.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Seu trabalho integra estratégia e prática, organizando o que precisa
            ser ajustado, priorizado e executado para que o negócio avance com
            consistência.
          </p>

          <RequestDiagnosticButton text="Solicitar diagnóstico estratégico" />
        </div>

        {/* Right image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/assets/hero-portrait.png"
              alt="Rosana Miranda – Consultora Estratégica"
              width={420}
              height={500}
              className="rounded-2xl object-cover shadow-none w-full max-w-sm"
            />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </Section>
  );
};
