import Image from "next/image";
import products from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* GRID: zdjęcia + panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* GALERIA */}
        <div>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={800}
            height={800}
            className="rounded-xl shadow-sm"
          />

          {/* Miniatury */}
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${product.name} ${i}`}
                width={100}
                height={100}
                className="rounded-lg cursor-pointer border hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>

        {/* PANEL ZAKUPOWY */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-serif mb-2">{product.name}</h1>

          <p className="text-lg text-gray-600 mb-4">{product.shortDescription}</p>

          <p className="text-3xl font-semibold mb-6">{product.price} zł</p>

          {/* Wybór zapachu */}
          <div className="mb-6">
            <h3 className="text-sm font-medium tracking-wide mb-2">ZAPACH</h3>

            <div className="flex gap-3 flex-wrap">
              {product.scents.map(scent => (
                <button
                  key={scent}
                  className="
                    px-4 py-2 rounded-full border 
                    hover:bg-gray-100 transition
                    text-sm
                  "
                >
                  {scent}
                </button>
              ))}
            </div>
          </div>

          {/* Ilość + Koszyk */}
          <button className="
            bg-black text-white py-3 rounded-lg text-center 
            text-lg font-medium hover:bg-gray-900 transition mb-4
          ">
            Dodaj do koszyka
          </button>

          {/* Ikony korzyści */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>• 100% wosk sojowy</p>
            <p>• Ręcznie robiona w Polsce</p>
            <p>• Naturalne olejki eteryczne</p>
            <p>• Czas palenia: {product.burnTime}h</p>
          </div>
        </div>
      </div>

      {/* Opis */}
      <section className="mt-20 max-w-3xl">
        <h2 className="text-3xl font-serif mb-6">O świecy</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {product.description}
        </p>
      </section>

      {/* Rytuał */}
      <section className="mt-20">
        <h2 className="text-3xl font-serif mb-6">Rytuał</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { name: "Zapal", icon: "🕯️" },
            { name: "Oddychaj", icon: "🌬️" },
            { name: "Skup intencję", icon: "✨" },
            { name: "Wycisz się", icon: "🌿" }
          ].map(step => (
            <div key={step.name}>
              <div className="text-4xl mb-2">{step.icon}</div>
              <p className="text-sm">{step.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Powiązane produkty */}
      <section className="mt-28">
        <h2 className="text-3xl font-serif mb-8">Może spodoba Ci się także</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {products.slice(0, 3).map(p => (
            <a key={p.slug} href={`/sklep/${p.slug}`} className="group">
              <Image
                src={p.images[0]}
                alt={p.name}
                width={400}
                height={400}
                className="rounded-xl shadow-sm group-hover:opacity-80 transition"
              />
              <p className="mt-4 font-medium">{p.name}</p>
              <p className="text-gray-600">{p.price} zł</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
