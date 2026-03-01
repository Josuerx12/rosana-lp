"use client";

import { Button } from "./button";

const RequestDiagnosticButton = ({
  text = "Solicitar diagnóstico",
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <Button
      onClick={() => {
        document
          .getElementById("contato")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      variant="primary"
      className={className}
    >
      {text}
    </Button>
  );
};

export default RequestDiagnosticButton;
