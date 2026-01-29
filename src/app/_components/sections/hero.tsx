import { Container } from "../ui/container";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-background min-h-screen text-foreground pt-8 pb-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full opacity-60" />
      <div className="absolute top-32 right-24 w-2 h-2 bg-primary rounded-full opacity-40" />
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />

      <Container>
        {/* Brand name */}
        <div className="mb-8 md:mb-12">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">
            ROSANA<span className="text-primary">MIRANDA</span>
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6">
              Crescimento empresarial não começa com ações isoladas.
              <br />
              <span className="text-primary">Começa com diagnóstico.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              Empresas que crescem com consistência sabem exatamente onde estão,
              o que precisa ser ajustado e quais decisões tomar.
            </p>

            <Button variant="primary">Solicitar diagnóstico</Button>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/assets/hero-portrait.jpg"
                alt="Rosana Leite - Consultora Empresarial"
                className="w-full max-w-sm lg:max-w-md rounded-2xl object-cover"
              />
              {/* Decorative pink circle */}
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
