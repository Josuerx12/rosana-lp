/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */
import { Section } from "../ui/section";

const steps = [
  {
    number: "01",
    title: "Diagnóstico do momento atual",
    description:
      "Leitura completa do cenário, gargalos e posição atual do negócio.",
  },
  {
    number: "02",
    title: "Definição de posicionamento e prioridades",
    description:
      "Clareza sobre o que precisa ser ajustado e o que vem primeiro.",
  },
  {
    number: "03",
    title: "Estratégia de comunicação e conteúdo",
    description: "Direção de mensagem, canais e conteúdo com intenção.",
  },
  {
    number: "04",
    title: "Ajuste de marketing e geração de demanda",
    description:
      "Marketing alinhado ao objetivo do negócio, com campanha e direção.",
  },
  {
    number: "05",
    title: "Organização de vendas e rotina comercial",
    description: "Funil estruturado, rotina definida e processo escalável.",
  },
  {
    number: "06",
    title: "Plano de ação e acompanhamento por metas",
    description:
      "Prioridades claras, metas definidas e acompanhamento contínuo.",
  },
];

export const ProcessSection = () => {
  return (
    <Section id="metodo" background="light">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
          MÉTODO DE TRABALHO
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-section-light-foreground">
          Meu trabalho segue um{" "}
          <span className="text-primary">processo claro e aplicável</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
          >
            <span className="block text-3xl font-black text-primary/20 mb-3 group-hover:text-primary/40 transition-colors">
              {step.number}
            </span>
            <h3 className="font-bold text-section-light-foreground mb-2 leading-snug">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center font-semibold text-primary text-lg">
        Clareza primeiro. Execução depois. Ajuste contínuo.
      </p>
    </Section>
  );
};
