import products from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <ProductDetails product={product} />

      <section className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-playfair mb-5">O świecy</h2>
        <p className="text-[#3C2A1E]/70 leading-relaxed whitespace-pre-line">
          {product.description}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-playfair mb-5">Rytuał</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.ritualSteps.map((step, idx) => (
            <li
              key={`${product.id}-step-${idx}`}
              className="rounded-3xl border border-[#EBD8C3] bg-white p-6 shadow-sm"
            >
              <p className="text-sm tracking-[0.14em] uppercase text-[#3C2A1E]/60">
                Krok {idx + 1}
              </p>
              <p className="mt-2 text-[#3C2A1E]/80 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
