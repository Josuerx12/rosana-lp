"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problemas que resolvo", href: "#problemas" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const HeaderSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            width={160}
            height={24}
            alt="Rosana Miranda"
            className="shadow-none object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contato"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 font-semibold text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 whitespace-nowrap"
        >
          Solicitar diagnóstico
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Abrir menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-background border-t border-border px-4 space-y-1 overflow-hidden transition-all duration-200 ease-in-out ${
          mobileOpen
            ? "opacity-100 max-h-96 py-4 pointer-events-auto"
            : "opacity-0 max-h-0 py-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-background-surface"
          >
            {link.label}
          </a>
        ))}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              window.location.href = "#contato";
            }}
            className="w-full text-center px-6 py-2.5 font-semibold text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Solicitar diagnóstico
          </button>
        </div>
      </div>
    </header>
  );
};
