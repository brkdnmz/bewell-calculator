import React from "react";
import { motion } from "framer-motion";

function AnimatedOpacity({ key, children, duration = 0.25 }: any) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: duration,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedOpacity;
