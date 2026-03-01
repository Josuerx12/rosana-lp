"use client";

import { Button } from "./button";

const KnowMethodButton = () => {
  return (
    <Button
      variant="outline"
      onClick={() => {
        document
          .getElementById("metodo")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Conhecer o método
    </Button>
  );
};

export default KnowMethodButton;
