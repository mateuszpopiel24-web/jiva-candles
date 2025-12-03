import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="text-center py-32">
      <h2 className="text-2xl font-playfair mb-4">
        Twój rytuał jeszcze się nie rozpoczął 💫
      </h2>
      <p className="text-[#3C2A1E]/70 mb-6">
        Koszyk jest pusty – wybierz świecę, która rozświetli Twój spokój.
      </p>
      <Link
        href="/sklep"
        className="bg-[#D2A85E] text-white px-6 py-3 rounded-full hover:bg-[#E7C38D] transition-all"
      >
        Zobacz kolekcję JIVA
      </Link>
    </div>
  );
}
