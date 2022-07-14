import React from "react";

interface GradientTextProps {
  text: string;
}

function GradientText({ text }: GradientTextProps) {
  return (
    <span
      className="d-inline-flex"
      style={{
        background:
          "linear-gradient(254deg, rgb(107,107,107) 50%, rgb(234,31,37) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
}

export default GradientText;
