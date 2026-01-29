/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { Section } from "../ui/section";
import { XCircle, HelpCircle, Target, AlertTriangle, Zap } from "lucide-react";

const diagramItems = [
  { icon: XCircle, label: "Decisões sem direção", position: "top-left" },
  { icon: Target, label: "Metas desconectadas", position: "top-right" },
  { icon: HelpCircle, label: "Falta de prioridade", position: "bottom-left" },
  {
    icon: AlertTriangle,
    label: "Retrabalho constante",
    position: "bottom-right",
  },
  { icon: Zap, label: "Ações reativas", position: "bottom" },
];

export const ProblemSection = () => {
  return (
    <Section background="light" className="relative overflow-hidden">
      {/* Decorative star */}
      <div className="absolute top-8 right-8 text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="text-center max-w-212.5 mx-auto w-full mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-4">
          Você sente que sua empresa faz muito,{" "}
          <span className="bg-primary">mas avança pouco?</span>
        </h2>
        <p className="max-w-2xl mx-auto">
          No dia a dia empresarial, alguns cenários{" "}
          <span className="underline">são mais comuns do que parecem:</span>
        </p>
      </div>

      {/* Radial Diagram */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center hexagon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Hexagon shape with center text */}
            <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-border"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm md:text-base font-semibold text-center px-4 text-section-light-foreground">
                  Falta de clareza
                  <br />
                  sobre o caminho
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Diagram items in a grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {diagramItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-section-light hover:bg-muted/20 transition-colors border border-border/50"
            >
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-3 bg-background text-foreground">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs md:text-sm font-medium text-section-light-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Connecting lines (decorative) */}
        <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 w-full">
          <svg
            className="w-full h-32 text-border opacity-30"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
          >
            <line
              x1="400"
              y1="0"
              x2="100"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4"
            />
            <line
              x1="400"
              y1="0"
              x2="250"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4"
            />
            <line
              x1="400"
              y1="0"
              x2="400"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4"
            />
            <line
              x1="400"
              y1="0"
              x2="550"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4"
            />
            <line
              x1="400"
              y1="0"
              x2="700"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
};
