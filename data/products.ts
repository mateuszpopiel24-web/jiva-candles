// data/products.ts

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  images: string[];    // pełna galeria
  scents: string[];    // nuty zapachowe
  burnTime: number;    // czas palenia w godzinach
  description: string; // długi opis rytuału
};

const products: Product[] = [
  {
    slug: "jiva-morning-ritual",
    name: "JIVA Morning Ritual",
    shortDescription:
      "Sojowa świeca z nutą cytrusów i białych kwiatów na dobry początek dnia.",
    price: 79,
    images: ["/images/jiva-morning.jpg"],
    scents: ["Cytrusy", "Białe kwiaty", "Świeża herbata"],
    burnTime: 40,
    description:
      "Delikatny rytuał na dobry początek dnia. Zapal świecę przy porannej kawie, planowaniu dnia albo krótkiej praktyce wdzięczności. Kompozycja cytrusów i białych kwiatów delikatnie pobudza, ale nie przytłacza, więc sprawdzi się także w pracy lub domowym biurze.",
  },
  {
    slug: "jiva-evening-calm",
    name: "JIVA Evening Calm",
    shortDescription:
      "Lawendowa świeca z nutą drzewa sandałowego do wieczornego wyciszenia.",
    price: 79,
    images: ["/images/jiva-evening.jpg"],
    scents: ["Lawenda", "Drzewo sandałowe", "Wanilia"],
    burnTime: 45,
    description:
      "Wieczorny rytuał pomagający odciąć się od dnia. Idealna do kąpieli, czytania książki lub spokojnej jogi. Lawenda i drzewo sandałowe wyciszają układ nerwowy, a wanilia dodaje poczucia ciepła i bezpieczeństwa.",
  },
  {
    slug: "jiva-winter-magic",
    name: "JIVA Winter Magic",
    shortDescription:
      "Zimowa świeca z nutą pomarańczy, goździków i świerku – domowa magia świąt.",
    price: 79,
    images: ["/images/jiva-winter.jpg"],
    scents: ["Pomarańcza", "Cynamon", "Świerk"],
    burnTime: 40,
    description:
      "Limitowany zapach przywołujący klimat zimowych wieczorów: mandarynki, przyprawy korzenne i świerkowe gałązki. Dobra do rodzinnych kolacji, świątecznych przygotowań i spokojnych wieczorów z filmem.",
  },
  {
    slug: "zestaw-prezentowy-jiva",
    name: "Zestaw prezentowy JIVA",
    shortDescription:
      "Trzy mini rytuały w jednym pudełku – idealny prezent dla kogoś, kto potrzebuje chwili dla siebie.",
    price: 159,
    images: ["/images/jiva-ritual.jpg"],
    scents: ["Poranny rytuał", "Wieczorne wyciszenie", "Domowe spa"],
    burnTime: 60,
    description:
      "Zestaw trzech mini świec, które pozwalają przetestować różne rytuały JIVA albo podarować komuś czas tylko dla siebie. W pudełku znajduje się krótka karta z propozycjami rytuałów i wskazówkami, jak korzystać ze świec w bezpieczny sposób.",
  },
];

export default products;
