import Link from "next/link";
import Image from "next/image";
import MotionWrapper from "../components/MotionWrapper";
import FadeIn from "../animations/FadeIn";
import RevealText from "../animations/RevealText";
import ParallaxSection from "../animations/ParallaxSection";

export default function HomePage() {
  return (
    <div className="bg-[#F9F6F2]">
      {/* HERO */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center">
        <ParallaxSection
          src="/images/jiva-ritual.jpg"
          alt="Rytuał JIVA"
          height={900}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-playfair mb-4">
              Świece, które niosą intencję
            </h1>
          </FadeIn>
          <RevealText
            text="Każda chwila może stać się rytuałem spokoju 🌸"
            delay={0.3}
            className="text-lg md:text-xl text-[#3C2A1E]/80 mb-8"
          />
          <Link
            href="/sklep"
            className="bg-[#D2A85E] text-white px-8 py-3 rounded-full hover:bg-[#E7C38D] transition-all"
          >
            Zobacz kolekcję
          </Link>
        </div>
      </section>

      {/* NOWA SEKCJA – WYBÓR INTENCJI */}
      <section id="kolekcje-intencje" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-playfair mb-4">
            Wybierz swoją intencję
          </h2>
          <p className="text-center text-[#3C2A1E]/80 max-w-2xl mx-auto mb-12">
            Każda świeca JIVA powstaje z myślą o konkretnym stanie, którego
            szukasz. Wybierz intencję, która najbardziej z Tobą rezonuje.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Intencja 1 – Poranny rytuał */}
            <article className="bg-white/80 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="mb-4">
                <div className="w-full h-48 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/jiva-morning.jpg"
                    alt="JIVA Morning Ritual"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Poranny rytuał</h3>
              <p className="text-sm text-[#3C2A1E]/80 mb-4">
                Świeca, która budzi zmysły i delikatnie wprowadza Cię w nowy
                dzień.
              </p>
              <Link
                href="/sklep/jiva-morning-ritual"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-[#3C2A1E] px-4 py-2 text-sm font-medium hover:bg-[#3C2A1E] hover:text-[#F9F6F2] transition-colors"
              >
                Zobacz świecę
              </Link>
            </article>

            {/* Intencja 2 – Wieczorne wyciszenie */}
            <article className="bg-white/80 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="mb-4">
                <div className="w-full h-48 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/jiva-evening.jpg"
                    alt="JIVA Evening Calm"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wieczorne wyciszenie</h3>
              <p className="text-sm text-[#3C2A1E]/80 mb-4">
                Rytuał, który pomaga odciąć się od dnia i wrócić do siebie.
              </p>
              <Link
                href="/sklep/jiva-evening-calm"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-[#3C2A1E] px-4 py-2 text-sm font-medium hover:bg-[#3C2A1E] hover:text-[#F9F6F2] transition-colors"
              >
                Zobacz świecę
              </Link>
            </article>

            {/* Intencja 3 – Zimowa magia */}
            <article className="bg-white/80 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="mb-4">
                <div className="w-full h-48 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/jiva-winter.jpg"
                    alt="JIVA Winter Magic"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Magia zimowych wieczorów
              </h3>
              <p className="text-sm text-[#3C2A1E]/80 mb-4">
                Zimowa świeca, która wprowadza do domu ciepło, przyprawy i
                odrobinę magii.
              </p>
              <Link
                href="/sklep/jiva-winter-magic"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-[#3C2A1E] px-4 py-2 text-sm font-medium hover:bg-[#3C2A1E] hover:text-[#F9F6F2] transition-colors"
              >
                Zobacz świecę
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ISTNIEJĄCA SEKCJA – „Tworzone z intencją” */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <MotionWrapper delay={0.2}>
          <h2 className="text-3xl font-playfair mb-6">Tworzone z intencją</h2>
          <p className="text-[#3C2A1E]/80 leading-relaxed mb-12">
            Każda świeca JIVA powstaje w małej pracowni – z wosku sojowego,
            bawełnianego knota i z ciepła dłoni. Każdy zapach to historia,
            każdy płomień to zaproszenie do zatrzymania się.
          </p>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {["jiva-morning.jpg", "jiva-evening.jpg", "jiva-winter.jpg"].map(
            (img, i) => (
              <MotionWrapper key={img} delay={i * 0.1}>
                <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={`/images/${img}`}
                    alt={img}
                    fill
                    className="object-cover"
                  />
                </div>
              </MotionWrapper>
            )
          )}
        </div>
      </section>
    </div>
  );
}
