/** biome-ignore-all lint/suspicious/noArrayIndexKey: array index is safe as list is static */
/** biome-ignore-all lint/a11y/useButtonType: toggle button does not submit form */

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "../ui/section";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Este diagnóstico serve para qual tipo de negócio?",
    answer:
      "Para empresas e profissionais que precisam organizar comunicação, marketing e vendas para crescer com mais consistência.",
  },
  {
    question: "Quanto tempo leva o diagnóstico?",
    answer:
      "O prazo depende do nível de complexidade, e é informado após o primeiro alinhamento.",
  },
  {
    question: "O diagnóstico inclui plano de ação?",
    answer:
      "Sim. A devolutiva entrega prioridades e direcionamento prático para execução.",
  },
  {
    question: "Vocês também executam ou apenas orientam?",
    answer:
      "A execução pode ser avaliada após o diagnóstico, conforme necessidade do projeto.",
  },
  {
    question: "Quanto custa o diagnóstico?",
    answer:
      "O valor é informado após entendermos escopo, complexidade e objetivo.",
  },
  {
    question: "Preciso ter redes sociais ativas?",
    answer:
      "Não. O diagnóstico define o que faz sentido para o momento do negócio, inclusive presença digital.",
  },
  {
    question: "Como são medidos os resultados?",
    answer:
      "Por metas e indicadores alinhados ao objetivo: demanda, conversão, eficiência comercial e consistência de comunicação.",
  },
  {
    question: "Atende presencial ou remoto?",
    answer:
      "Atendimento remoto e presencial, conforme disponibilidade e região.",
  },
  {
    question: "Existe contrato de continuidade obrigatório?",
    answer: "Não. O diagnóstico é uma etapa independente.",
  },
  {
    question: "Como solicitar?",
    answer: "Pelo WhatsApp ou formulário de contato abaixo.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <Section id="faq" background="dark">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left title */}
        <div>
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Dúvidas comuns sobre o diagnóstico e o processo de trabalho.
          </p>
        </div>

        {/* Right FAQ items */}
        <div className="lg:col-span-2 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-background-surface/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-background-surface/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">
                  {openIndex === index ? "–" : "+"} {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ originY: 0 }}
                    className="overflow-hidden px-4 pb-4"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
