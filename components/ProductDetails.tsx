// components/ProductDetails.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [activeImage, setActiveImage] = useState<string>(product.images[0] ?? product.image);

  const [selectedScentId, setSelectedScentId] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  const selectedScent = useMemo(() => {
    if (!selectedScentId) return null;
    return product.scents.find((s) => s.id === selectedScentId) ?? null;
  }, [product.scents, selectedScentId]);

  const selectedColor = useMemo(() => {
    if (!selectedColorId) return null;
    return product.colors.find((c) => c.id === selectedColorId) ?? null;
  }, [product.colors, selectedColorId]);

  const canAdd = Boolean(selectedScent && selectedColor);

  const variantLabel = useMemo(() => {
    if (!selectedScent || !selectedColor) return "";
    return `${selectedScent.name} – ${selectedScent.notes} / ${selectedColor.name}`;
  }, [selectedScent, selectedColor]);

  const handleAdd = () => {
    if (!selectedScent || !selectedColor) return;

    addToCart({
      id: `${product.id}__${selectedScent.id}__${selectedColor.id}`,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedScent: selectedScent.name,
      selectedColor: selectedColor.name,
      variantLabel,
      quantity: 1,
    });

    showToast("Dodano do koszyka ✨");
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* GALERIA */}
      <div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#EBD8C3] bg-white">
          <Image src={activeImage} alt={product.name} fill className="object-cover" priority />
        </div>

        <div className="mt-4 flex gap-3">
          {(product.images.length ? product.images : [product.image]).slice(0, 4).map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(src)}
              className={`relative h-20 w-16 overflow-hidden rounded-2xl border transition ${
                activeImage === src ? "border-[#3C2A1E]" : "border-[#EBD8C3] hover:border-[#D2A85E]"
              }`}
              aria-label="Zmień zdjęcie produktu"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* PANEL */}
      <div>
        <h1 className="text-4xl font-playfair leading-tight">{product.name}</h1>
        <p className="mt-3 text-[#3C2A1E]/70 leading-relaxed">{product.shortDescription}</p>

        <p className="mt-6 text-2xl font-semibold">{product.price} zł</p>

        {/* ZAPACH */}
        <fieldset className="mt-10">
          <legend className="text-sm font-semibold text-[#3C2A1E] mb-3">
            Wybierz zapach (wymagane)
          </legend>

          <div className="flex flex-wrap gap-3">
            {product.scents.map((s) => {
              const inputId = `scent-${product.id}-${s.id}`;
              return (
                <div key={s.id}>
                  <input
                    id={inputId}
                    type="radio"
                    name={`scent-${product.id}`}
                    value={s.id}
                    checked={selectedScentId === s.id}
                    onChange={() => setSelectedScentId(s.id)}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor={inputId}
                    className="
                      inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-sm transition
                      border-[#EBD8C3] bg-white text-[#3C2A1E]
                      hover:bg-[#F7F2EB]
                      peer-checked:border-[#3C2A1E] peer-checked:bg-[#3C2A1E] peer-checked:text-[#F9F6F2]
                      focus-within:ring-2 focus-within:ring-[#D2A85E]/40
                    "
                    title={s.story}
                  >
                    {s.name}
                  </label>
                </div>
              );
            })}
          </div>

          {selectedScent && (
            <p className="mt-3 text-sm text-[#3C2A1E]/70">
              <span className="font-medium">{selectedScent.notes}</span> — {selectedScent.story}
            </p>
          )}
        </fieldset>

        {/* KOLOR */}
        <fieldset className="mt-10">
          <legend className="text-sm font-semibold text-[#3C2A1E] mb-3">
            Wybierz kolor (wymagane)
          </legend>

          <div className="flex flex-wrap gap-4 items-center">
            {product.colors.map((c) => {
              const inputId = `color-${product.id}-${c.id}`;
              return (
                <div key={c.id} className="flex flex-col items-center gap-2">
                  <input
                    id={inputId}
                    type="radio"
                    name={`color-${product.id}`}
                    value={c.id}
                    checked={selectedColorId === c.id}
                    onChange={() => setSelectedColorId(c.id)}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor={inputId}
                    className="
                      h-11 w-11 cursor-pointer rounded-full border transition
                      border-[#EBD8C3]
                      hover:border-[#D2A85E]
                      peer-checked:border-[#3C2A1E] peer-checked:ring-2 peer-checked:ring-[#D2A85E]/40
                    "
                    style={{ backgroundColor: c.hex }}
                    title={c.story}
                    aria-label={c.name}
                  />
                  <span className="text-xs text-[#3C2A1E]/70">{c.name}</span>
                </div>
              );
            })}
          </div>

          {selectedColor && (
            <p className="mt-3 text-sm text-[#3C2A1E]/70">{selectedColor.story}</p>
          )}
        </fieldset>

        {/* WALIDACJA + CTA */}
        <div className="mt-10">
          <p className="text-sm text-[#3C2A1E]/70" aria-live="polite">
            {canAdd ? `Gotowe: ${variantLabel}` : "Wybierz zapach i kolor, aby dodać świecę do koszyka."}
          </p>

          <button
            type="button"
            onClick={handleAdd}
            disabled={!canAdd}
            className={`
              mt-4 w-full rounded-full px-8 py-3 text-sm font-medium text-white transition
              ${canAdd ? "bg-[#D2A85E] hover:bg-[#E7C38D]" : "bg-[#D2A85E]/50 cursor-not-allowed"}
            `}
          >
            Dodaj do rytuału ✨
          </button>
        </div>
      </div>
    </section>
  );
}
