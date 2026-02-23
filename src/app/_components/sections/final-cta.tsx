import { Button } from "../ui/button";

export const FinalCTASection = () => {
  return (
    <section className="bg-section-light text-section-light-foreground py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            ROSANA MIRANDA
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-section-light-foreground">
            Se você quer crescer com clareza,
            <br />
            <span className="text-primary">
              o primeiro passo não é fazer mais.
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            É entender o que realmente precisa ser feito.
          </p>

          <Button variant="primary" className="text-lg px-10 py-4">
            Solicitar diagnóstico estratégico agora
          </Button>
        </div>
      </div>
    </section>
  );
};
