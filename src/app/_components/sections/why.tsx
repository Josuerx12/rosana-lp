/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { BarChart3, Shield, Clock, Target } from "lucide-react";
import { Section } from "../ui/section";

const reasons = [
  {
    icon: BarChart3,
    title: "Decidem com dados",
    subtitle: "não achismo",
  },
  {
    icon: Shield,
    title: "Executam com",
    subtitle: "mais segurança",
  },
  {
    icon: Clock,
    title: "Param de apagar",
    subtitle: "incêndios",
  },
  {
    icon: Target,
    title: "Ganham tempo",
    subtitle: "e foco",
  },
];

export const WhySection = () => {
  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          DIFERENCIAL
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Por que empresários escolhem esse processo
        </h2>
      </div>

      {/* Reasons grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-background-surface border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <reason.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              {reason.title}
            </h3>
            <p className="text-sm text-muted-foreground">{reason.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <p className="text-center text-muted-foreground mt-10 text-sm">
        Aqui você tem método para transformar sua realidade.
      </p>
    </Section>
  );
};
