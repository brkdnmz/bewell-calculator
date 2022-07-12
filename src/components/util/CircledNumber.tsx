import React from "react";

interface CircledNumberProps {
  num: number;
  size?: number;
  className: string;
}

function CircledNumber({ num, size = 10, className }: CircledNumberProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: "50%",
        width: size + "px",
        height: size + "px",
        padding: size / 4 + "px",
        background: "#EA1F25",
        color: "white",
        textAlign: "center",
        fontSize: size * 0.65 + "px",
        boxSizing: "unset",
      }}
    >
      {num}
    </div>
  );
}

export default CircledNumber;
