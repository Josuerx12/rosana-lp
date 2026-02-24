/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */

import { XCircle } from "lucide-react";
import { Section } from "../ui/section";

const problems = [
  "Comunicação sem posicionamento claro",
  "Conteúdo constante, mas sem retorno em vendas",
  'Marketing "rodando", porém sem estratégia definida',
  "Processo comercial desalinhado e difícil de escalar",
  "Equipe executando tarefas sem prioridade",
  "Falta de previsibilidade de receita",
  "Crescimento travado por gargalos invisíveis",
];

export const ProblemSection = () => {
  return (
    <Section
      id="problemas"
      background="light"
      className="relative overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto w-full mb-12 md:mb-16">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          PROBLEMAS QUE RESOLVO
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-4 text-section-light-foreground">
          Você sente que faz muito, <br className="hidden sm:block" />
          <span className="text-primary">mas o resultado não acompanha?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          No dia a dia, alguns cenários são mais comuns do que parecem:
        </p>
      </div>

      {/* Problems Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/60 hover:border-primary/30 transition-colors"
          >
            <div className="shrink-0 mt-0.5">
              <XCircle className="w-5 h-5 text-primary opacity-70" />
            </div>
            <span className="text-sm font-medium text-muted-foreground leading-snug">
              {problem}
            </span>
          </div>
        ))}
      </div>

      {/* Highlight strip */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-primary/10 border border-primary/30 rounded-2xl px-6 py-5 text-center">
          <p className="text-primary font-bold text-lg md:text-xl">
            Sem diagnóstico, o negócio vira tentativa e erro.
          </p>
        </div>
      </div>
    </Section>
  );
};
