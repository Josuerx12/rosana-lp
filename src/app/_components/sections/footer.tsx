import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer className="bg-background-surface border-t border-border text-foreground py-10">
      <div className="container-main">
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src="/assets/logo.png"
            width={160}
            height={24}
            alt="Rosana Miranda"
            className="shadow-none object-contain"
          />

          <p className="text-muted-foreground text-sm">
            Comunicação, Marketing, Conteúdo, Gestão e Vendas
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
            <span>Diagnóstico estratégico</span>
            <span className="text-primary">·</span>
            <span>Posicionamento</span>
            <span className="text-primary">·</span>
            <span>Plano de ação</span>
          </div>

          <div className="border-t border-border w-full pt-6 mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>CNPJ: 63.971.018/0001-50</span>
            <span>
              © {new Date().getFullYear()} Rosana Miranda. Todos os direitos
              reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
