/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { Button } from "../ui/button";

export const FinalCTASection = () => {
  return (
    <section className="bg-section-light text-section-light-foreground py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-10 right-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-primary opacity-50"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-10 left-10">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="text-primary opacity-40"
        >
          <circle cx="8" cy="8" r="8" fill="currentColor" />
        </svg>
      </div>

      <div className="container-main relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm mb-4 tracking-widest uppercase">
            ROSANA<span className="text-primary">MIRANDA</span>
          </p>

          <h2 className="text-3xl  sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Clareza empresarial vem
            <br />
            <span className="text-primary">antes do crescimento.</span>
          </h2>

          <div className="mt-10">
            <Button variant="primary" className="text-lg px-10 py-4">
              Falar com a Rosana
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
