"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

export default function FadeInImage({
  src,
  alt,
  height,
  width,
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={className}
      />
    </motion.div>
  );
}
