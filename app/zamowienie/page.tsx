"use client";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import EmptyCart from "../../components/EmptyCart";
import Link from "next/link";

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  if (items.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-playfair text-center mb-10">Twój rytuał JIVA</h1>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-8">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="bg-[#FDF9F5] border border-[#EBD8C3] rounded-2xl p-6 h-fit">
          <h3 className="font-playfair text-xl mb-4">Podsumowanie</h3>
          <p className="flex justify-between text-lg mb-4">
            <span>Razem:</span> <span>{total.toFixed(2)} zł</span>
          </p>
          <button
            onClick={() => alert("Dziękujemy za zamówienie 💛")}
            className="w-full bg-[#D2A85E] text-white py-3 rounded-full hover:bg-[#E7C38D] transition-all"
          >
            Finalizuj rytuał ✨
          </button>
          <button
            onClick={clearCart}
            className="w-full mt-3 text-sm text-[#3C2A1E]/70 underline"
          >
            Wyczyść koszyk
          </button>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link href="/sklep" className="underline text-[#3C2A1E]/70">
          ← Wróć do sklepu
        </Link>
      </div>
    </div>
  );
}
