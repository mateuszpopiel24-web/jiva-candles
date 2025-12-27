// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({
  id,
  slug,
  name,
  shortDescription,
  price,
  image,
  badge,
  scentLabel,
  colorLabel,
  colorSwatches,
}: Product) {
  return (
    <article className="group rounded-3xl border border-[#EBD8C3] bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/sklep/${slug}`} className="relative block overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#F4E6D2] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[#3C2A1E]">
            {badge}
          </span>
        )}
      </Link>

      <div className="p-6">
        <h3 className="font-playfair text-xl leading-snug">{name}</h3>
        <p className="mt-2 text-sm text-[#3C2A1E]/70 leading-relaxed">{shortDescription}</p>

        <div className="mt-4 space-y-1">
          {scentLabel && <p className="text-xs text-[#3C2A1E]/70">Zapach: {scentLabel}</p>}
          {colorLabel && <p className="text-xs text-[#3C2A1E]/70">Kolor: {colorLabel}</p>}

          {colorSwatches && colorSwatches.length > 0 && (
            <div className="flex items-center gap-2 pt-2">
              {colorSwatches.slice(0, 4).map((hex) => (
                <span
                  key={`${id}-${hex}`}
                  className="h-4 w-4 rounded-full border border-[#EBD8C3]"
                  style={{ backgroundColor: hex }}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="font-semibold">{price} zł</p>
          <Link
            href={`/sklep/${slug}`}
            className="rounded-full bg-[#D2A85E] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#E7C38D]"
          >
            Zobacz
          </Link>
        </div>
      </div>
    </article>
  );
}
