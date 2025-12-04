import Image from "next/image";
import products from "@/data/products";
import { notFound } from "next/navigation";

// >>> KLUCZOWE – jawny typ propsów strony produktu
export type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* GRID: zdjęcia + panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* GALERIA */}
        <div>
          <div className="relative w-full aspect-square mb-6 rounded-3xl overflow-hidden bg-[#f5eee8]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.gallery?.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#f5eee8]"
              >
                <Image
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* PANEL DANYCH PRODUKTU */}
        <section className="space-y-6">
          <p className="tracking-[0.3em] text-xs uppercase text-[#b48a5a]">
            ŚWIECA W SŁOIKU
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#3d2b23]">
            {product.name}
          </h1>

          <p className="text-lg text-[#6b5140] leading-relaxed">
            {product.shortDescription}
          </p>

          <p className="text-2xl font-semibold text-[#3d2b23]">
            {product.price} zł
          </p>

          <div className="space-y-1 text-sm text-[#6b5140]">
            <p>
              <span className="font-semibold">Pojemność:</span>{" "}
              {product.capacity}
            </p>
            <p>
              <span className="font-semibold">Nuty zapachowe:</span>{" "}
              {product.notes}
            </p>
            <p>
              <span className="font-semibold">Czas palenia:</span>{" "}
              {product.burnTime}
            </p>
          </div>

          <button className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#d6a96c] text-white text-sm font-semibold tracking-wide hover:bg-[#c59656] transition">
            Dodaj do rytuału ✨
          </button>

          <div className="pt-6 border-t border-[#eadfd4] text-sm text-[#6b5140] space-y-2">
            <p className="font-semibold">Jak palić świecę bezpiecznie?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Nie zostawiaj świecy bez nadzoru.</li>
              <li>Przytnij knot do ok. 0,5 cm przed każdym paleniem.</li>
              <li>Nie pal dłużej niż 3–4 godziny jednorazowo.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* INNE RYTUAŁY */}
      <section className="mt-16 border-t border-[#eadfd4] pt-10">
        <h2 className="text-2xl font-serif text-[#3d2b23] mb-6">
          Inne rytuały JIVA, które możesz pokochać
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products
            .filter((p) => p.slug !== product.slug)
            .slice(0, 3)
            .map((p) => (
              <a
                key={p.slug}
                href={`/sklep/${p.slug}`}
                className="group block p-4 rounded-2xl bg-[#f8f2ec] hover:bg-[#f2e5da] transition"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <p className="font-medium text-[#3d2b23]">{p.name}</p>
                <p className="text-sm text-[#6b5140]">{p.price} zł</p>
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
