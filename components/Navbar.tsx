"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <nav className="w-full bg-[#F9F6F2]/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl">
          JIVA <span className="text-[#D2A85E]">Candles</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/sklep" className="hover:text-[#D2A85E] transition-all">Sklep</Link>
          <Link href="/o-mnie" className="hover:text-[#D2A85E] transition-all">O mnie</Link>
          <Link href="/kontakt" className="hover:text-[#D2A85E] transition-all">Kontakt</Link>
          <Link href="/zamowienie" className="relative hover:text-[#D2A85E] transition-all">
            Koszyk
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#D2A85E] text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <div className="w-6 h-[2px] bg-[#3C2A1E] mb-1"></div>
          <div className="w-6 h-[2px] bg-[#3C2A1E] mb-1"></div>
          <div className="w-6 h-[2px] bg-[#3C2A1E]"></div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#F9F6F2] md:hidden flex flex-col items-center py-4 gap-4 border-t border-[#EBD8C3]"
          >
            <Link href="/sklep" onClick={() => setMenuOpen(false)}>Sklep</Link>
            <Link href="/o-mnie" onClick={() => setMenuOpen(false)}>O mnie</Link>
            <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
            <Link href="/zamowienie" onClick={() => setMenuOpen(false)}>
              Koszyk ({cartCount})
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
