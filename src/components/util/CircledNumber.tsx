import React from "react";

interface CircledNumberProps {
  num: number;
  size?: number;
  className?: string;
}

function CircledNumber({ num, size = 10, className = "" }: CircledNumberProps) {
  return (
    <div
      className={
        className + " d-flex justify-content-center align-items-center"
      }
      style={{
        borderRadius: "50%",
        width: size + "px",
        height: size + "px",
        padding: size / 4 + "px",
        fontSize: size + "px",
        background: "#EA1F25",
        color: "white",
        boxSizing: "unset",
      }}
    >
      {num}
    </div>
  );
}

export default CircledNumber;
