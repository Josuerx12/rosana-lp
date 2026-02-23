/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */
import { CheckCircle2 } from "lucide-react";

const proofs = [
  "Estratégia aplicada ao cenário real do negócio",
  "Diagnóstico objetivo com prioridades claras",
  "Integração entre comunicação, marketing, gestão e vendas",
  "Método com plano de ação, não apenas análise",
  "Foco em execução orientada e acompanhamento por metas",
];

export const QuickProofSection = () => {
  return (
    <section className="bg-primary py-8 md:py-10">
      <div className="container-main">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {proofs.map((proof, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-foreground/80 shrink-0" />
              <span className="text-primary-foreground text-sm font-medium">
                {proof}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
