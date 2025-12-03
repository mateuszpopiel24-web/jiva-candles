import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/sklep/${product.slug}`}>
      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-[#FDF9F5]">
        <div className="relative w-full h-[320px]">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div className="p-5 text-center">
          <h3 className="font-playfair text-lg mb-2">{product.name}</h3>
          <p className="text-[#3C2A1E]/70 mb-2">{product.price} zł</p>
          <span className="text-sm text-[#D2A85E] uppercase tracking-wide">Zobacz szczegóły</span>
        </div>
      </div>
    </Link>
  );
}
