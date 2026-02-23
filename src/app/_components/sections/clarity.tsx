import { Quote } from "lucide-react";

export const ClaritySection = () => {
  return (
    <section
      id="depoimentos"
      className="bg-background text-foreground py-16 md:py-24"
    >
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            DEPOIMENTOS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            O que muda quando estratégia{" "}
            <span className="text-primary">entra na operação</span>
          </h2>
          <p className="text-muted-foreground">
            A validação real aparece quando a empresa deixa de tentar de tudo e
            passa a executar com clareza, prioridade e método.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Testimonial card 1 */}
          <div className="relative bg-background-surface border border-border rounded-2xl p-8">
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">
              &ldquo;Com o diagnóstico estratégico, finalmente entendi onde
              estava errando. Parei de tentar resolver tudo ao mesmo tempo e
              foquei nas decisões certas.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">E</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Empresário
                </p>
                <p className="text-xs text-muted-foreground">
                  Setor de serviços
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial card 2 */}
          <div className="relative bg-primary rounded-2xl p-8 text-primary-foreground">
            <Quote className="w-8 h-8 text-primary-foreground/30 mb-4" />
            <p className="text-primary-foreground leading-relaxed mb-6">
              &ldquo;Antes eu fazia muita coisa mas não via resultado. Depois do
              trabalho com a Rosana, o marketing passou a ter objetivo e as
              vendas começaram a crescer com consistência.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  E
                </span>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm">
                  Profissional Liberal
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Marca pessoal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
