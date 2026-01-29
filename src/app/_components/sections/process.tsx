/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: <explanation> */
import { FileSearch, Map, Rocket } from "lucide-react";
import { Section } from "../ui/section";

const steps = [
  {
    number: "1",
    icon: FileSearch,
    title: "Análise do negócio",
    description: "Entendimento profundo da empresa e do mercado.",
  },
  {
    number: "2",
    icon: Map,
    title: "Mapeamento estratégico",
    description: "Identificação de gargalos e oportunidades.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Plano de ação",
    description: "Direcionamento claro para decisões futuras.",
  },
];

export const ProcessSection = () => {
  return (
    <Section background="light">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-section-light-foreground">
            Diagnóstico empresarial antes de{" "}
            <span className="text-primary">qualquer execução</span>
          </h2>
          <p className="text-muted-foreground">
            Um processo estruturado para você tomar decisões com clareza.
          </p>
        </div>

        {/* Right steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 relative">
              {/* Vertical line connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-16 bg-border" />
              )}

              {/* Step number circle */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                <span className="text-primary font-bold">{step.number}</span>
              </div>

              {/* Step content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg text-section-light-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
