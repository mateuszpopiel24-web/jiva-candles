"use client";
import Image from "next/image";
import SelectOption from "./SelectOption";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useState } from "react";

export default function ProductDetails({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [selectedScent, setSelectedScent] = useState(product.scents[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAdd = () => {
    addToCart({
      id: `${product.id}-${selectedScent}-${selectedColor}`,
      name: product.name,
      image: product.image,
      price: product.price,
      selectedScent,
      selectedColor,
      quantity: 1,
    });
    showToast("🕯️ Dodano świecę do rytuału!");
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative h-[480px] w-full rounded-2xl overflow-hidden bg-[#F7F2EB] shadow-sm">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      <div>
        <h1 className="text-4xl font-playfair mb-3">{product.name}</h1>
        <p className="text-[#3C2A1E]/80 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-8">{product.price} zł</p>

        <div className="space-y-5 mb-8">
          <SelectOption
            label="Zapach świecy"
            options={product.scents}
            selected={selectedScent}
            setSelected={setSelectedScent}
          />
          <SelectOption
            label="Kolor świecy"
            options={product.colors}
            selected={selectedColor}
            setSelected={setSelectedColor}
          />
        </div>

        <button
          onClick={handleAdd}
          className="bg-[#D2A85E] text-white px-8 py-3 rounded-full hover:bg-[#E7C38D] transition-all"
        >
          Dodaj do rytuału ✨
        </button>

        <div className="mt-10 pt-8 border-t border-[#EBD8C3]">
          <h3 className="font-playfair text-lg mb-2">O świecy</h3>
          <p className="text-sm text-[#3C2A1E]/70 leading-relaxed">
            Każda świeca JIVA powstaje w małej pracowni, z wosku sojowego i bawełnianego knota.
            To więcej niż dekoracja – to rytuał spokoju, tworzony z intencją, aby towarzyszyć Ci w codziennych chwilach ciszy.
          </p>
        </div>
      </div>
    </div>
  );
}
