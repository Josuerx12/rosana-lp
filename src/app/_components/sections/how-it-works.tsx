/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */
import { Section } from "../ui/section";

const steps = [
  {
    number: "1",
    title: "Você solicita o diagnóstico",
    description: "Pelo WhatsApp ou formulário de contato nesta página.",
  },
  {
    number: "2",
    title: "Realizamos o levantamento e a análise do cenário",
    description: "Leitura aprofundada da situação atual do negócio.",
  },
  {
    number: "3",
    title: "Identificamos gargalos e prioridades",
    description: "O que trava o crescimento e o que deve vir primeiro.",
  },
  {
    number: "4",
    title: "Entregamos a devolutiva estratégica com plano de ação",
    description: "Direcionamento claro: o que fazer, em qual ordem e por quê.",
  },
  {
    number: "5",
    title: "Definimos próximos passos com clareza",
    description:
      "Sem decisões no impulso. Sem obrigação de continuidade após o diagnóstico.",
  },
];

export const HowItWorksSection = () => {
  return (
    <Section id="como-funciona" background="surface">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          COMO FUNCIONA
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          O processo é{" "}
          <span className="text-primary">simples e sem surpresas</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 relative pb-10 last:pb-0">
            {/* Vertical connector line */}
            {index < steps.length - 1 && (
              <div className="absolute left-5.5 top-11 w-0.5 h-full bg-border" />
            )}

            {/* Step number */}
            <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center z-10">
              <span className="text-primary font-bold text-sm">
                {step.number}
              </span>
            </div>

            {/* Step content */}
            <div className="flex-1 pt-1.5">
              <h3 className="font-bold text-foreground mb-1 leading-snug">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-10 italic">
        Sem obrigação de continuidade após o diagnóstico.
      </p>
    </Section>
  );
};
