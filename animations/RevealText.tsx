"use client";
import { motion } from "framer-motion";

export default function RevealText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
      className={`overflow-hidden ${className}`}
    >
      <span className="inline-block">{text}</span>
    </motion.div>
  );
}
