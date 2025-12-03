import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: 1,
    slug: "jiva-morning-ritual",
    name: "JIVA Morning Ritual",
    price: 79,
    image: "/images/jiva-morning.jpg",
  },
  {
    id: 2,
    slug: "jiva-evening-calm",
    name: "JIVA Evening Calm",
    price: 79,
    image: "/images/jiva-evening.jpg",
  },
  {
    id: 3,
    slug: "jiva-winter-light",
    name: "JIVA Winter Light",
    price: 89,
    image: "/images/jiva-winter.jpg",
  },
];

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-playfair text-center mb-12">Sklep JIVA Candles</h1>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
