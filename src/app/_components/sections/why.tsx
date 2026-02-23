/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */

import {
  BarChart3,
  FileText,
  Megaphone,
  TrendingUp,
  Target,
  RefreshCw,
} from "lucide-react";
import { Section } from "../ui/section";

const results = [
  {
    icon: Megaphone,
    title: "Mensagens mais claras",
    subtitle: "e posicionamento consistente",
  },
  {
    icon: FileText,
    title: "Conteúdo com intenção",
    subtitle: "atraindo público certo",
  },
  {
    icon: Target,
    title: "Marketing com objetivo",
    subtitle: "e direção de campanha",
  },
  {
    icon: TrendingUp,
    title: "Funil comercial organizado",
    subtitle: "e conversão melhor",
  },
  {
    icon: BarChart3,
    title: "Rotina de vendas",
    subtitle: "com acompanhamento e metas",
  },
  {
    icon: RefreshCw,
    title: "Redução de retrabalho",
    subtitle: "e aumento de eficiência",
  },
];

export const WhySection = () => {
  return (
    <Section id="resultados" background="dark">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          EVIDÊNCIAS E RESULTADOS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Resultados não são apenas curtidas ou “movimento”.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          O objetivo é crescimento mensurável e previsível.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-background-surface border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <result.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
              {result.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {result.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
