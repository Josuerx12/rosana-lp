"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const segmentos = [
  "Serviços",
  "Comércio",
  "Indústria",
  "Profissional liberal",
  "Marca pessoal",
  "Comunicação e marketing",
  "Tecnologia",
  "Saúde",
  "Educação",
  "Outro",
];

const funcionarios = [
  "Somente eu",
  "Dois a cinco",
  "Seis a dez",
  "Onze a vinte",
  "Vinte e um a cinquenta",
  "Cinquenta e um a cem",
  "Mais de cem",
];

const faturamentos = [
  "Ainda não possuo faturamento (estou começando agora)",
  "Até dez mil reais",
  "De dez a trinta mil reais",
  "De trinta a cinquenta mil reais",
  "De cinquenta a cem mil reais",
  "De cem a trezentos mil reais",
  "Acima de trezentos mil reais",
];

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  segmento: string;
  funcionarios: string;
  faturamento: string;
  mensagem: string;
};

const inputClass =
  "w-full bg-background-surface border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    segmento: "",
    funcionarios: "",
    faturamento: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="bg-background text-foreground py-16 md:py-24"
    >
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            CONTATO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Solicitar{" "}
            <span className="text-primary">diagnóstico estratégico</span>
          </h2>
          <p className="text-muted-foreground">
            Preencha o formulário abaixo e entraremos em contato para o próximo
            passo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-background-surface border border-border rounded-2xl p-6 md:p-8 space-y-5"
          >
            {/* Dados de contato */}
            <p className="text-primary text-xs font-semibold uppercase tracking-wider pb-1 border-b border-border">
              Dados de contato
            </p>

            <div>
              <label htmlFor="nome" className={labelClass}>
                Nome completo <span className="text-primary">*</span>
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className={labelClass}>
                  E-mail profissional <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className={labelClass}>
                  WhatsApp (com DDD) <span className="text-primary">*</span>
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Informações do negócio */}
            <p className="text-primary text-xs font-semibold uppercase tracking-wider pb-1 border-b border-border pt-2">
              Informações do negócio
            </p>

            <div>
              <label htmlFor="empresa" className={labelClass}>
                Nome da empresa ou marca <span className="text-primary">*</span>
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                placeholder="Nome da sua empresa ou marca"
                value={form.empresa}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="segmento" className={labelClass}>
                Segmento de atuação <span className="text-primary">*</span>
              </label>
              <select
                id="segmento"
                name="segmento"
                required
                value={form.segmento}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Selecione seu segmento</option>
                {segmentos.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Estrutura */}
            <p className="text-primary text-xs font-semibold uppercase tracking-wider pb-1 border-b border-border pt-2">
              Estrutura da empresa
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="funcionarios" className={labelClass}>
                  Quantidade de funcionários
                </label>
                <select
                  id="funcionarios"
                  name="funcionarios"
                  value={form.funcionarios}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Selecionar</option>
                  {funcionarios.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="faturamento" className={labelClass}>
                  Faturamento mensal aproximado
                </label>
                <select
                  id="faturamento"
                  name="faturamento"
                  value={form.faturamento}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Selecionar</option>
                  {faturamentos.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground mt-1">
                  Essa informação nos ajuda a entender o momento do negócio e
                  orientar melhor o contato.
                </p>
              </div>
            </div>

            {/* Mensagem */}
            <p className="text-primary text-xs font-semibold uppercase tracking-wider pb-1 border-b border-border pt-2">
              Motivo do contato
            </p>

            <div>
              <label htmlFor="mensagem" className={labelClass}>
                Como posso ajudar você? <span className="text-primary">*</span>
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                placeholder="Descreva brevemente o que você busca em comunicação, marketing, gestão ou vendas."
                value={form.mensagem}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Descreva brevemente o que você busca em comunicação, marketing,
                gestão ou vendas.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-3.5 font-semibold text-base rounded-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
            >
              👉 Enviar contato
            </button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              🔒 As informações enviadas são tratadas com confidencialidade e
              utilizadas exclusivamente para retorno do contato.
            </p>
          </form>

          {/* WhatsApp button */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5522998510161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-lg rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5b] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-background-surface border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Mensagem enviada com sucesso!
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Recebemos o seu contato. Entraremos em breve para dar continuidade
              ao diagnóstico estratégico.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
