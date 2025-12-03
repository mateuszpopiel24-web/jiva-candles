// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
  badge?: "NOWOŚĆ" | "BESTSELLER" | "LIMITOWANA EDYCJA";
  ritual:
    | "poranny-spokoj"
    | "wieczorne-wyciszenie"
    | "domowe-spa"
    | "swieta-sezonowe";
  scentLabel?: string;
  colorLabel?: string;
  colorSwatches?: string[]; // hexy kolorów świecy
};

export default function ProductCard({ product }: { product: Product }) {
  const {
    slug,
    name,
    shortDescription,
    price,
    image,
    badge,
    scentLabel,
    colorLabel,
    colorSwatches,
  } = product;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[rgba(179,140,104,0.16)] bg-[#FFFDF9] p-4 pb-5 shadow-[0_10px_35px_rgba(57,35,20,0.06)] transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(57,35,20,0.12)]">
      <Link href={`/sklep/${slug}`} className="relative block overflow-hidden rounded-2xl">
        {/* Zdjęcie */}
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* Badge w rogu */}
        {badge && (
          <span
            className="absolute left-3 top-3 rounded-full bg-[#F6D7D2] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[#5C3A32] shadow-sm"
            aria-label={badge}
          >
            {badge}
          </span>
        )}
      </Link>

      {/* Treść karty */}
      <div className="mt-4 flex flex-1 flex-col gap-3">
        <header>
          <h3 className="text-lg font-semibold tracking-[0.03em] text-[#3E2723]">
            {name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-[#7A5C54]">
            {shortDescription}
          </p>
        </header>

        {/* Zapach / kolor */}
        {(scentLabel || colorLabel || (colorSwatches && colorSwatches.length)) && (
          <div className="flex items-start justify-between gap-4 text-xs text-[#7A5C54]">
            <div className="space-y-1">
              {scentLabel && (
                <p>
                  <span className="font-semibold uppercase tracking-[0.12em]">
                    Zapach:
                  </span>{" "}
                  {scentLabel}
                </p>
              )}
              {colorLabel && (
                <p>
                  <span className="font-semibold uppercase tracking-[0.12em]">
                    Kolor:
                  </span>{" "}
                  {colorLabel}
                </p>
              )}
            </div>

            {/* Swatche kolorów */}
            {colorSwatches && colorSwatches.length > 0 && (
              <div className="flex items-center gap-1.5">
                {colorSwatches.map((color) => (
                  <span
                    key={color}
                    className="h-4 w-4 rounded-full border border-white shadow-sm"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Cena + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <div className="text-base font-semibold text-[#4A2E26]">
            {price.toFixed(2).replace(".00", "")} zł
          </div>

          <div className="flex flex-col items-end gap-1">
            <Link
              href={`/sklep/${slug}`}
              className="inline-flex items-center justify-center rounded-full bg-[#C88B52] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFF7EF] shadow-sm transition-colors duration-150 hover:bg-[#b1743b]"
            >
              Dodaj do rytuału ✨
            </Link>
            <Link
              href={`/sklep/${slug}`}
              className="text-xs font-medium text-[#7A5C54] underline-offset-4 hover:underline"
            >
              Szczegóły świecy →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
