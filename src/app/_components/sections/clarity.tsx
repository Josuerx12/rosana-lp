import { Sparkles } from "lucide-react";

export const ClaritySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal pink accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary transform skew-x-12 origin-top-right" />

      <div className="relative bg-background py-16 md:py-20">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Quando a clareza chega,
                <br />
                <span className="text-primary">a empresa muda de nível</span>
              </h2>
            </div>

            {/* Right - Quote card */}
            <div className="relative z-10">
              <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground relative">
                <Sparkles className="absolute top-4 right-4 w-6 h-6 opacity-60" />
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  "Com o diagnóstico empresarial, eu finalmente entendi onde
                  estava errando. Parei de tentar resolver tudo ao mesmo tempo e
                  foquei nas decisões certas."
                </p>
                <div className="mt-4 text-sm opacity-80">
                  — Depoimento de empresário
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
