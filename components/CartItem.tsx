"use client";
import Image from "next/image";

export default function CartItem({ item, updateQuantity, removeFromCart }: any) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center border-b border-[#EBD8C3] pb-6">
      <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-[#F7F2EB]">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-playfair text-lg mb-2">{item.name}</h3>
        <p className="text-sm text-[#3C2A1E]/70">Zapach: {item.selectedScent}</p>
        <p className="text-sm text-[#3C2A1E]/70 mb-2">Kolor: {item.selectedColor}</p>
        <p className="font-semibold mb-2">{item.price} zł</p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 bg-[#E7C38D]/50 rounded-full"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-[#D2A85E] text-white rounded-full"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-3 text-sm text-red-500 underline"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}
