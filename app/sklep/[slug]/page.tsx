"use client";
import { useParams } from "next/navigation";
import ProductDetails from "../../../components/ProductDetails";

const products = [
  {
    id: 1,
    slug: "jiva-morning-ritual",
    name: "JIVA Morning Ritual",
    description:
      "Świeca, która budzi Cię delikatnymi cytrusowymi nutami. Idealna do porannej jogi, medytacji lub spokojnej kawy w ciszy.",
    price: 79,
    image: "/images/jiva-morning.jpg",
    scents: ["Cytrusowy poranek", "Wanilia", "Zielona herbata"],
    colors: ["Naturalny beż", "Pudrowy róż", "Złamana biel"],
  },
  {
    id: 2,
    slug: "jiva-evening-calm",
    name: "JIVA Evening Calm",
    description:
      "Lawendowa świeca do wieczornego wyciszenia. Jej delikatny zapach koi zmysły i tworzy atmosferę głębokiego relaksu.",
    price: 79,
    image: "/images/jiva-evening.jpg",
    scents: ["Lawenda", "Bursztyn", "Drzewo sandałowe"],
    colors: ["Beż", "Kremowy", "Fioletowy"],
  },
];

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div className="text-center py-20">Nie znaleziono produktu.</div>;

  return <ProductDetails product={product} />;
}
