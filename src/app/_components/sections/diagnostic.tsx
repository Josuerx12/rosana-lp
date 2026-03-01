/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */

import { Clock, DollarSign, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import RequestDiagnosticButton from "../ui/request-diagnostic-button";

const risks = [
  {
    icon: Clock,
    label: "Tempo perdido",
    description: "Decisões sem base consomem semanas de operação.",
  },
  {
    icon: DollarSign,
    label: "Dinheiro desperdiçado",
    description: "Investimentos sem estratégia não geram retorno.",
  },
  {
    icon: Users,
    label: "Desgaste da equipe",
    description: "Times sem prioridade executam muito sem avançar.",
  },
];

export const DiagnosticSection = () => {
  return (
    <Section
      id="diagnostico"
      background="dark"
      className="relative overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          RISCO E PROTEÇÃO
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
          Quando a empresa cresce sem direção, o preço aparece{" "}
          <span className="text-primary">em três lugares:</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        {risks.map((risk, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-surface border border-border hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <risk.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{risk.label}</h3>
            <p className="text-sm text-muted-foreground">{risk.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-primary/10 border border-primary/30 rounded-2xl px-6 py-5 mb-8">
          <p className="text-foreground font-semibold text-lg">
            Diagnóstico não é custo.{" "}
            <span className="text-primary">
              É a forma mais rápida de parar de errar caro.
            </span>
          </p>
        </div>
        <RequestDiagnosticButton text="Solicitar diagnóstico estratégico agora" />
      </div>
    </Section>
  );
};
