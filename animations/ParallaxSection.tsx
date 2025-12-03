"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ParallaxSection({
  src,
  alt,
  height = 600,
  overlay = true,
}: {
  src: string;
  alt: string;
  height?: number;
  overlay?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </motion.div>
      {overlay && <div className="absolute inset-0 bg-black/20" />}
    </div>
  );
}
