// data/products.ts

export type ProductBadge = "NOWOŚĆ" | "BESTSELLER" | "LIMITOWANA EDYCJA";

export type RitualKey =
  | "poranny-spokoj"
  | "wieczorne-wyciszenie"
  | "domowe-spa"
  | "swieta-sezonowe";

export type ScentOption = {
  id: string;
  name: string;
  notes: string; // krótkie nuty zapachowe
  story: string; // 1-2 zdania storytelling
};

export type ColorOption = {
  id: string;
  name: string;
  hex: string;
  story: string; // opis/znaczenie koloru
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  image: string;

  badge?: ProductBadge;
  ritual: RitualKey;

  // do listy /sklep (ma być czytelnie na kafelku)
  scentLabel?: string;
  colorLabel?: string;
  colorSwatches?: string[];

  // do strony produktu
  images: string[];
  description: string;
  ritualSteps: string[];

  scents: ScentOption[];
  colors: ColorOption[];
};

const DEFAULT_SCENTS: ScentOption[] = [
  {
    id: "morning-citrus",
    name: "Morning Citrus",
    notes: "cytrusy • białe kwiaty",
    story: "Lekki start dnia. Klarowna głowa i miękki oddech.",
  },
  {
    id: "forest-calm",
    name: "Forest Calm",
    notes: "sosna • cedr • mech",
    story: "Spokój jak spacer w lesie. Uziemienie i cisza w środku.",
  },
  {
    id: "vanilla-ritual",
    name: "Vanilla Ritual",
    notes: "wanilia • tonka • bursztyn",
    story: "Ciepło, domowo i bez pośpiechu. Rytuał wieczornego otulenia.",
  },
  {
    id: "unscented",
    name: "Bezzapachowa",
    notes: "czysta soja",
    story: "Dla wrażliwych. Tylko światło, bez nut zapachowych.",
  },
];

const DEFAULT_COLORS: ColorOption[] = [
  {
    id: "natural",
    name: "Naturalny",
    hex: "#F5E9D6",
    story: "Czystość i prostota. Światło w najspokojniejszej formie.",
  },
  {
    id: "beige",
    name: "Beżowy",
    hex: "#DCC7A1",
    story: "Miękkość, ciepło, codzienna równowaga.",
  },
  {
    id: "warm-brown",
    name: "Ciepły brąz",
    hex: "#8A5A3C",
    story: "Uziemienie i stabilność. Kolor spokojnego „tu i teraz”.",
  },
  {
    id: "pine-green",
    name: "Sosnowy zielony",
    hex: "#2F5D50",
    story: "Leśna energia. Oddech, przestrzeń, regeneracja.",
  },
];

const products: Product[] = [
  {
    id: "morning-ritual",
    slug: "jiva-morning-ritual",
    name: "JIVA Morning Ritual",
    shortDescription:
      "Sojowa świeca tworzona z intencją – lekka, jasna energia na dobry początek dnia.",
    price: 79,
    image: "/images/jiva-morning.jpg",
    images: ["/images/jiva-morning.jpg", "/images/jiva-ritual.jpg", "/images/jiva-evening.jpg"],
    badge: "BESTSELLER",
    ritual: "poranny-spokoj",
    scentLabel: "cytrusy, białe kwiaty",
    colorLabel: "krem + ciepłe beże",
    colorSwatches: ["#F5E9D6", "#DCC7A1"],
    description:
      "JIVA Morning Ritual to świeca, która wprowadza spokój bez spowalniania. Zapalasz ją, gdy chcesz zacząć dzień miękko i świadomie.\n\nNaturalny wosk sojowy, czyste palenie i forma, która pasuje do codziennych rytuałów – kawy, journalingu, planowania dnia.",
    ritualSteps: [
      "Zapal świecę i weź 3 spokojne oddechy.",
      "Zapisz jedną intencję na dziś (jedno zdanie).",
      "Zrób pierwszy mały krok – bez pośpiechu.",
    ],
    scents: DEFAULT_SCENTS,
    colors: DEFAULT_COLORS,
  },
  {
    id: "evening-calm",
    slug: "jiva-evening-calm",
    name: "JIVA Evening Calm",
    shortDescription:
      "Wieczorna świeca do wyciszenia – ciepło, oddech i miękkie domowe światło.",
    price: 79,
    image: "/images/jiva-evening.jpg",
    images: ["/images/jiva-evening.jpg", "/images/jiva-ritual.jpg", "/images/jiva-morning.jpg"],
    badge: "NOWOŚĆ",
    ritual: "wieczorne-wyciszenie",
    scentLabel: "wanilia, tonka, bursztyn",
    colorLabel: "krem + ciepły brąz",
    colorSwatches: ["#F5E9D6", "#8A5A3C"],
    description:
      "JIVA Evening Calm powstała po to, żeby dom miał swój wieczorny znak: „już możesz odpuścić”. To świeca do rytuałów ciszy, kąpieli, czytania i powrotu do siebie.",
    ritualSteps: [
      "Przygaś światło i zapal świecę.",
      "Zrób 60 sekund ciszy (bez telefonu).",
      "Zamknij dzień jedną myślą wdzięczności.",
    ],
    scents: DEFAULT_SCENTS,
    colors: DEFAULT_COLORS,
  },
  {
    id: "winter-magic",
    slug: "jiva-winter-magic",
    name: "JIVA Winter Magic",
    shortDescription:
      "Zimowa kolekcja – domowa magia świąt i spokojne światło na długie wieczory.",
    price: 79,
    image: "/images/jiva-winter.jpg",
    images: ["/images/jiva-winter.jpg", "/images/jiva-ritual.jpg", "/images/jiva-evening.jpg"],
    badge: "LIMITOWANA EDYCJA",
    ritual: "swieta-sezonowe",
    scentLabel: "pomarańcza, przyprawy, las",
    colorLabel: "sosnowa zieleń + ciepłe beże",
    colorSwatches: ["#2F5D50", "#DCC7A1"],
    description:
      "JIVA Winter Magic to świeca, która robi klimat bez przesady. Ma być ciepło, spokojnie i trochę nostalgicznie – jak wieczór z herbatą i kocem.",
    ritualSteps: [
      "Zapal świecę i przygotuj ciepły napój.",
      "Ustaw jedno małe „zimowe” postanowienie (realne!).",
      "Zrób 10 minut czegoś, co Cię koi.",
    ],
    scents: DEFAULT_SCENTS,
    colors: DEFAULT_COLORS,
  },
  {
    id: "gift-set",
    slug: "zestaw-prezentowy-jiva",
    name: "Zestaw prezentowy JIVA",
    shortDescription:
      "Zestaw prezentowy: świeca + rytuał – gotowy prezent z uważnością.",
    price: 159,
    image: "/images/jiva-ritual.jpg",
    images: ["/images/jiva-ritual.jpg", "/images/jiva-morning.jpg", "/images/jiva-evening.jpg"],
    ritual: "domowe-spa",
    scentLabel: "wybierz zapach w wariantach",
    colorLabel: "wybierz kolor w wariantach",
    colorSwatches: ["#F5E9D6", "#DCC7A1", "#8A5A3C", "#2F5D50"],
    description:
      "Zestaw prezentowy JIVA to prosty sposób, żeby podarować komuś (albo sobie) mały rytuał spokoju. Wybierasz zapach i kolor – a my domykamy to w estetyczną formę.",
    ritualSteps: [
      "Otwórz pudełko powoli – jakbyś otwierał/a intencję.",
      "Zapal świecę i przeczytaj krótki manifest rytuału.",
      "Ustal jedną rzecz, którą chcesz wnieść w kolejny tydzień.",
    ],
    scents: DEFAULT_SCENTS,
    colors: DEFAULT_COLORS,
  },
];

export default products;
