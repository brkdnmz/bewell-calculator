import React from "react";

interface CircledNumberProps {
  num: number;
  size?: number;
  className?: string;
}

function CircledNumber({ num, size = 10, className }: CircledNumberProps) {
  return (
    <span
      className={"text-center " + className}
      style={{
        borderRadius: "80%",
        fontSize: size + "px",
        width: "1.5em",
        lineHeight: "1.5em",
        background: "#EA1F25",
        color: "white",
      }}
    >
      {num}
    </span>
  );
}

export default CircledNumber;
