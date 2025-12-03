"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollGlow() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 0.6]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none bg-[#D2A85E]/30 blur-3xl"
    />
  );
}
