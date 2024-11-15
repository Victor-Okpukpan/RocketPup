"use client";

import { motion } from "framer-motion";
import { Dog } from "lucide-react";

export default function MascotAnimation() {
  return (
    <div className="relative w-full overflow-hidden h-[15rem] md:h-[16.5rem]">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center top-0 right-0 left-0 bottom-0"
      >
        <Dog className="w-32 h-32 text-primary" />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
      </motion.div>
    </div>
  );
}