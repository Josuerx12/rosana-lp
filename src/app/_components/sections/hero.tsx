import { Container } from "../ui/container";
import { Button } from "../ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-background text-foreground relative overflow-hidden py-10 lg:py-0"
    >
      {/* Decorative elements */}
      <div className="absolute sm:hidden top-10 right-10 w-3 h-3 bg-primary rounded-full opacity-60" />
      <div className="absolute sm:hidden top-32 right-24 w-2 h-2 bg-primary rounded-full opacity-40" />
      <div className="absolute sm:hidden bottom-20 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />

      <Image
        src={"/assets/fundo1.png"}
        alt="fundo1"
        className="object-cover hidden lg:block absolute top-0 shadow-none -left-37.5 sm:-left-45 md:-left-50 lg:-left-62.5 z-0"
        width={891}
        height={1337}
      />
      <Image
        src={"/assets/fundo2.png"}
        alt="fundo2"
        className="object-cover hidden lg:block absolute top-0 shadow-none -right-75 sm:-right-87.5 md:-right-100 lg:-right-75 z-0"
        width={891}
        height={1337}
      />
      {/* Separador central para suavizar a junção das imagens */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-background to-transparent pointer-events-none z-10" />

      {/* Hero portrait – absolutely pinned to bottom-right, in front of everything */}
      <div
        className="absolute bottom-0 right-0  xl:right-30 hidden lg:block z-40 w-[52%] max-w-160 pointer-events-none select-none"
        style={{ filter: "drop-shadow(-18px 0 40px rgba(0,0,0,0.38))" }}
      >
        <Image
          src="/assets/hero-portrait.png"
          alt="Rosana Leite - Consultora Empresarial"
          width={832}
          height={984}
          className="w-full h-auto object-contain object-bottom shadow-none"
        />
      </div>

      <Container className="relative z-20 pt-8 md:pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Brand name */}
            <Image
              src={"/assets/logo.png"}
              width={240}
              height={35}
              className="object-cover mb-6 shadow-none"
              alt="Logomarca"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] mb-5 md:mb-8 lg:mb-10">
              Consultoria estratégica em comunicação, marketing e vendas para
              quem precisa de{" "}
              <span className="text-primary">direção, não de tentativas</span>
            </h1>

            <p className="text-muted-foreground text-sm md:text-base mb-4 max-w-lg leading-relaxed">
              Diagnóstico empresarial com foco em clareza, posicionamento e
              execução. Comunicação, conteúdo, gestão e vendas trabalhando de
              forma integrada para destravar crescimento com consistência.
            </p>

            <p className="text-muted-foreground/70 text-xs md:text-sm mb-8 max-w-lg leading-relaxed">
              Diagnóstico estratégico, consultoria de marketing, posicionamento
              de marca, estratégia de conteúdo, gestão comercial e vendas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary">Solicitar diagnóstico</Button>

              <a href={"#metodo"} className="w-max">
                <Button variant="outline">Conhecer o método</Button>
              </a>
            </div>
          </div>

          {/* Spacer – keeps left content from stretching full width */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
};
