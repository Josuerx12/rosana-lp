/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Section } from "../ui/section";

const deliverables = [
  "Leitura completa do cenário e gargalos",
  "Diagnóstico de posicionamento e comunicação",
  "Direção de conteúdo e canais prioritários",
  "Recomendações de marketing e geração de demanda",
  "Ajustes práticos para vendas e processo comercial",
  "Plano de ação com prioridades e metas",
];

export const DecisionSection = () => {
  return (
    <Section id="oferta" background="dark" className="relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          OFERTA DE ENTRADA
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Diagnóstico Estratégico de{" "}
          <span className="text-primary">Comunicação, Marketing e Vendas</span>
        </h2>
        <p className="text-muted-foreground">
          Indicado para empresas e profissionais que precisam entender: onde
          estão, o que trava o crescimento e quais ações realmente devem vir
          primeiro.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-background-surface border border-border rounded-2xl p-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-6">
            Entregáveis mínimos
          </p>
          <ul className="space-y-4 mb-8">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mb-6">
            Formato: análise + devolutiva estratégica
          </p>
          <Button variant="primary" className="w-full justify-center">
            Solicitar diagnóstico estratégico
          </Button>
        </div>
      </div>
    </Section>
  );
};
