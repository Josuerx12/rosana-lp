import { ReactNode } from "react";

import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  background?: "dark" | "surface" | "light";
  className?: string;
  id?: string;
}

export const Section = ({
  children,
  background = "dark",
  className = "",
  id,
}: SectionProps) => {
  const bgStyles = {
    dark: "bg-background text-foreground",
    surface: "bg-background-surface text-foreground",
    light: "bg-section-light text-section-light-foreground",
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgStyles[background]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};
