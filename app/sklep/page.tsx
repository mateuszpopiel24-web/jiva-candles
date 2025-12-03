// app/sklep/page.tsx
"use client";

import { useState } from "react";
import ProductCard, { type Product } from "@/components/ProductCard";

const PRODUCTS: Product[] = [
  {
    id: "morning-ritual",
    slug: "jiva-morning-ritual",
    name: "JIVA Morning Ritual",
    shortDescription:
      "Sojowa świeca z nutą cytrusów i białych kwiatów na dobry początek dnia.",
    price: 79,
    image: "/images/jiva-morning.jpg",
    badge: "BESTSELLER",
    ritual: "poranny-spokoj",
    scentLabel: "Cytrusy, białe kwiaty, świeża herbata",
    colorLabel: "Ciepły krem z pudrowym różem",
    colorSwatches: ["#FDF3E7", "#F6D7D2"],
  },
  {
    id: "evening-calm",
    slug: "jiva-evening-calm",
    name: "JIVA Evening Calm",
    shortDescription:
      "Lawendowa świeca z nutą drzewa sandałowego do wieczornego wyciszenia.",
    price: 79,
    image: "/images/jiva-evening.jpg",
    badge: "NOWOŚĆ",
    ritual: "wieczorne-wyciszenie",
    scentLabel: "Lawenda, drzewo sandałowe, wanilia",
    colorLabel: "Przygaszony liliowy z ciepłym beżem",
    colorSwatches: ["#E7DDF1", "#F4E6D6"],
  },
  {
    id: "winter-magic",
    slug: "jiva-winter-magic",
    name: "JIVA Winter Magic",
    shortDescription:
      "Zimowa świeca z nutą pomarańczy, goździków i świerku – domowa magia świąt.",
    price: 79,
    image: "/images/jiva-winter.jpg",
    badge: "LIMITOWANA EDYCJA",
    ritual: "swieta-sezonowe",
    scentLabel: "Pomarańcza, cynamon, świerk",
    colorLabel: "Głęboka zieleń z rozgrzewającą czerwienią",
    colorSwatches: ["#254233", "#C8483A"],
  },
  {
    id: "gift-set",
    slug: "zestaw-prezentowy-jiva",
    name: "Zestaw prezentowy JIVA",
    shortDescription:
      "Trzy mini rytuały w jednym pudełku – idealny prezent dla kogoś, kto potrzebuje chwili dla siebie.",
    price: 159,
    image: "/images/jiva-ritual.jpg",
    badge: "BESTSELLER",
    ritual: "domowe-spa",
    scentLabel: "Mieszanka nut z kolekcji JIVA",
    colorLabel: "Pastelowa mieszanka kolorów kolekcji",
    colorSwatches: ["#F6D7D2", "#C6D6C2", "#F3E1B5"],
  },
];

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

  const filteredProducts =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.ritual === activeFilter);

  return (
    <main className="min-h-screen bg-[#FCF7F1]">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK / MINI HERO */}
        <header className="mb-10 text-center sm:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9A7B67]">
            Sklep
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[0.04em] text-[#3E2723] sm:text-4xl">
            Sklep ze świecami JIVA
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#7A5C54] sm:text-base">
            Wybierz świecę, która dopasuje się do Twojego nastroju, rytuału i
            przestrzeni. Każda z nich to mały moment spokoju tylko dla Ciebie.
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

          <div className="flex items-center gap-2 text-xs text-[#7A5C54]">
            <label
              htmlFor="sort"
              className="whitespace-nowrap font-semibold uppercase tracking-[0.16em]"
            >
              Sortuj:
            </label>
            <select
              id="sort"
              className="rounded-full border border-[rgba(179,140,104,0.35)] bg-white px-3 py-1.5 text-xs text-[#7A5C54] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C88B52]/40"
              defaultValue="default"
              // Możemy później dopiąć logikę sortowania – na razie tylko wygląd
            >
              <option value="default">Domyślnie</option>
              <option value="price-asc">Cena rosnąco</option>
              <option value="price-desc">Cena malejąco</option>
            </select>
          </div>
        </section>

        {/* GRID PRODUKTÓW */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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

        {/* SEKCJA „NIE WIESZ OD CZEGO ZACZĄĆ?” */}
        <section className="mt-14 rounded-3xl bg-[#F5E6D9] px-6 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-[0.04em] text-[#3E2723]">
              Nie wiesz od czego zacząć?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#7A5C54] sm:text-base">
              Wybierz jedną z gotowych propozycji rytuału – idealną na prezent
              albo na pierwszy raz z JIVA. Każdy rytuał prowadzi Cię do świecy,
              która najlepiej pasuje do Twojej chwili.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <SuggestionCard
              title="Poranny rytuał"
              description="Świeca, która budzi łagodnie – do kawy, porannej jogi albo planowania dnia."
              productSlug="jiva-morning-ritual"
              cta="Zobacz świecę"
            />
            <SuggestionCard
              title="Wieczorne wyciszenie"
              description="Lawendowy płomień, który pomaga odłożyć telefon i wrócić do siebie."
              productSlug="jiva-evening-calm"
              cta="Zamknij dzień łagodnie"
            />
            <SuggestionCard
              title="Domowe spa"
              description="Zestaw rytuałów, który zmieni zwykły wieczór w małe spa w domu."
              productSlug="zestaw-prezentowy-jiva"
              cta="Poznaj zestaw"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

// Pomocnicze komponenty na dole pliku:

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
        <p className="mt-0.5 text-xs leading-relaxed text-[#7A5C54]">
          {children}
        </p>
      </div>
    </div>
  );
}

function SuggestionCard({
  title,
  description,
  productSlug,
  cta,
}: {
  title: string;
  description: string;
  productSlug: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#FFF9F3] p-4 text-left shadow-[0_10px_30px_rgba(57,35,20,0.06)]">
      <h3 className="text-sm font-semibold tracking-[0.06em] text-[#3E2723]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-[#7A5C54]">
        {description}
      </p>
      <div className="mt-3">
        <a
          href={`/sklep/${productSlug}`}
          className="inline-flex items-center text-xs font-semibold text-[#7A5C54] underline-offset-4 hover:underline"
        >
          {cta} →
        </a>
      </div>
    </div>
  );
}
