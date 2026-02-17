import { Container } from "../ui/container";
import { Button } from "../ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-background min-h-screen text-foreground relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full opacity-60" />
      <div className="absolute top-32 right-24 w-2 h-2 bg-primary rounded-full opacity-40" />
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-primary rounded-full opacity-50" /> */}

      <Image
        src={"/assets/fundo1.png"}
        alt="fundo1"
        className="object-cover absolute top-0 shadow-none -left-37.5 sm:-left-45 md:-left-50 lg:-left-62.5 z-0"
        width={891}
        height={1337}
      />
      <Image
        src={"/assets/fundo2.png"}
        alt="fundo2"
        className="object-cover absolute top-0 shadow-none -right-75 sm:-right-87.5 md:-right-100 lg:-right-75 z-0"
        width={891}
        height={1337}
      />
      {/* Separador central para suavizar a junção das imagens */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20 pt-8 md:pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Brand name */}
            <Image
              src={"/assets/logo.png"}
              width={240}
              height={35}
              className="object-cover mb-6 shadow-none"
              alt="Logomarca"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] mb-5 md:mb-8 lg:mb-10">
              Crescimento empresarial não começa com ações isoladas.
              <br />
              <span className="text-primary">Começa com diagnóstico.</span>
            </h1>

            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-lg leading-relaxed">
              Empresas que crescem com consistência sabem exatamente onde estão,
              o que precisa ser ajustado e quais decisões tomar.
            </p>

            <Button variant="primary">Solicitar diagnóstico</Button>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative z-30">
            <Image
              src="/assets/hero-portrait.png"
              alt="Rosana Leite - Consultora Empresarial"
              width={832}
              height={984}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl object-cover shadow-none"
            />
            {/* Decorative pink circle */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80" />
          </div>
        </div>
      </Container>
    </section>
  );
};
