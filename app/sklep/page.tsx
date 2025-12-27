"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

// Lista filtrów rytuałów
const FILTERS = [
  { id: "all", label: "Wszystkie rytuały" },
  { id: "poranny-spokoj", label: "Poranny spokój" },
  { id: "wieczorne-wyciszenie", label: "Wieczorne wyciszenie" },
  { id: "domowe-spa", label: "Domowe spa" },
  { id: "swieta-sezonowe", label: "Święta / sezonowe" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter((p) => p.ritual === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#FCF7F1]">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        {/* HERO */}
        <header className="mb-10 text-center sm:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9A7B67]">Sklep</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[0.04em] text-[#3E2723] sm:text-4xl">
            Sklep ze świecami JIVA
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#7A5C54] sm:text-base">
            Wybierz świecę, która dopasuje się do Twojego nastroju i rytuału.
            Każda z nich to mały moment spokoju tylko dla Ciebie.
          </p>
        </header>

        {/* FILTRY */}
        <section className="mb-10 flex flex-col gap-4 rounded-3xl border border-[rgba(179,140,104,0.15)] bg-[#FFF9F3] px-4 py-4 shadow-[0_10px_35px_rgba(57,35,20,0.05)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#9A7B67]">
              Filtruj rytuał:
            </span>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={[
                      "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150",
                      isActive
                        ? "bg-[#C88B52] text-[#FFF7EF]"
                        : "border border-[rgba(179,140,104,0.35)] bg-white/70 text-[#7A5C54] hover:bg-[#F8ECE0]",
                    ].join(" ")}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* GRID PRODUKTÓW */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pasek benefitów */}
          <div className="mt-12 grid gap-4 rounded-3xl border border-[rgba(179,140,104,0.18)] bg-[#FFF9F3] px-5 py-4 text-xs text-[#7A5C54] shadow-[0_8px_30px_rgba(57,35,20,0.06)] sm:grid-cols-3 sm:text-sm">
            <BenefitItem emoji="💧" title="100% wosk sojowy">
              Delikatny płomień i czystsze spalanie, bez parafiny.
            </BenefitItem>
            <BenefitItem emoji="🕯️" title="Ręcznie robione">
              Każda świeca powstaje w małej pracowni, w niewielkich partiach.
            </BenefitItem>
            <BenefitItem emoji="🚚" title="Wysyłka 3–5 dni">
              Świece pakowane z uważnością, wysyłka na terenie Polski.
            </BenefitItem>
          </div>
        </section>
      </section>
    </main>
  );
}

/* --- Pomocnicze komponenty --- */

function BenefitItem({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-lg">{emoji}</div>
      <div>
        <p className="font-semibold text-[#4A2E26]">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-[#7A5C54]">{children}</p>
      </div>
    </div>
  );
}
