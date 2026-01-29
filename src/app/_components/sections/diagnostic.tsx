/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AlertTriangle, Settings, Target } from "lucide-react";
import { Section } from "../ui/section";

const features = [
  {
    icon: AlertTriangle,
    title: "Visão estratégica de alto nível",
    description: "Entenda exatamente onde estão os gargalos.",
  },
  {
    icon: Settings,
    title: "Ajustes precisos no negócio",
    description: "Decisões alinhadas ao momento do negócio.",
  },
  {
    icon: Target,
    title: "Clareza nas prioridades",
    description: "Foco no que realmente gera impacto.",
  },
];

export const DiagnosticSection = () => {
  return (
    <Section background="dark" className="relative">
      {/* Decorative elements */}
      <div className="absolute left-4 top-1/3 text-primary opacity-50">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div className="absolute right-8 bottom-1/4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted opacity-30"
        >
          <circle cx="16" cy="16" r="14" />
          <circle cx="16" cy="16" r="8" />
        </svg>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            O problema não é falta de tentativa.
            <br />
            <span className="text-primary">
              É falta de diagnóstico empresarial.
            </span>
          </h2>
        </div>

        {/* Right features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background-surface/50 hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
