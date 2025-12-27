"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-900">
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Naturalne świece <span className="text-amber-600">Jiva Candles</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg mb-8 text-gray-700"
        >
          Odkryj kolekcję ręcznie robionych świec sojowych, tworzonych z miłością i dbałością o każdy detal.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/sklep"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Przejdź do sklepu
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
