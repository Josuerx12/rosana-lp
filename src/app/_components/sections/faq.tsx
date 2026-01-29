/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */

"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { Section } from "../ui/section";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "O multisetor estratégico empresarial tem custo?",
    answer:
      "Sim, o processo tem um investimento que varia conforme a complexidade do negócio. Entre em contato para saber mais.",
  },
  {
    question: "Quanto tempo leva para realizar o diagnóstico?",
    answer:
      "O processo completo leva em média de 2 a 4 semanas, dependendo do tamanho e complexidade da empresa.",
  },
  {
    question: "É necessário ter redes sociais ativas?",
    answer:
      "Não necessariamente. O diagnóstico avalia todos os aspectos do negócio, não apenas presença digital.",
  },
  {
    question: "Vocês atendem empresas de qualquer parte?",
    answer:
      "Sim, atendemos empresas de todo o Brasil de forma remota ou presencial conforme a necessidade.",
  },
  {
    question: "Existe obrigação após o diagnóstico?",
    answer:
      "Não. O diagnóstico entrega clareza para você decidir os próximos passos. A decisão é sempre sua.",
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
    <Section background="dark">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left title */}
        <div>
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">Dúvidas frequentes</h2>
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
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
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
