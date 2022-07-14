import React from "react";
import { motion } from "framer-motion";

interface CircledNumberProps {
  num: number;
  size?: number;
  className?: string;
}

function CircledNumber({ num, size = 10, className }: CircledNumberProps) {
  return (
    <span
      className={"text-centert " + className}
      style={{
        borderRadius: "80%",
        fontSize: size + "px",
        width: "1.5em",
        lineHeight: "1.5em",
        background: "#EA1F25",
        color: "white",
      }}
    >
      <motion.span
        key={num}
        initial={{ fontSize: 1.5 * size + "px" }}
        animate={{
          fontSize: size + "px",
        }}
      >
        {num}
      </motion.span>
    </span>
  );
}

export default CircledNumber;
