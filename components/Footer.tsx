import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7F2EB] py-10 mt-24 text-center border-t border-[#EBD8C3]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-playfair text-xl mb-4">JIVA Candles</p>
        <div className="flex justify-center gap-6 mb-6">
          <Link href="/sklep" className="hover:text-[#D2A85E]">Sklep</Link>
          <Link href="/o-mnie" className="hover:text-[#D2A85E]">O mnie</Link>
          <Link href="/kontakt" className="hover:text-[#D2A85E]">Kontakt</Link>
        </div>
        <p className="text-sm text-[#3C2A1E]/70">
          © {new Date().getFullYear()} JIVA Candles. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
