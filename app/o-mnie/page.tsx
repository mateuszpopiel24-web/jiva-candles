"use client";

import Image from "next/image";

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-[#FBF5EC] text-[#3D2A20]">
      {/* Główna sekcja */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-12 items-center">
          {/* Tekst */}
          <div>
            <p className="text-sm tracking-[0.15em] uppercase text-[#B58E63] mb-3">
              O MNIE
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-serif mb-6">
              Światło dla Twojej codzienności
            </h1>
            <p className="text-[15px] leading-relaxed mb-4">
              Wierzę, że małe rytuały potrafią zmienić cały dzień. Poranna
              świeca do kawy, płomień towarzyszący wieczornej kąpieli, zapach,
              który pomaga wyciszyć myśli po intensywnym dniu. JIVA ma być
              właśnie tym – delikatnym przypomnieniem, że możesz zwolnić i
              wrócić do siebie.
            </p>
            <p className="text-[15px] leading-relaxed mb-4">
              Świece tworzę w małej pracowni, własnymi rękami, od pierwszej
              kropli wosku po ostatnie muśnięcie etykiety. Każda z nich powstaje
              z intencją – żeby wniosła do Twojego domu trochę ciepła, miękkości
              i spokoju.
            </p>
            <p className="text-[15px] leading-relaxed">
              Jestem bardziej ekspresyjna niż „idealnie minimalistyczna” –
              dlatego obok stonowanych klasyków znajdziesz u mnie też odważne
              kolory, nietypowe formy i świece, które potrafią być małą rzeźbą.
            </p>
          </div>

          {/* Zdjęcie „o mnie” */}
          <div className="relative h-[260px] md:h-[320px] rounded-3xl overflow-hidden bg-[#F2E2CF]">
            <Image
              src="/images/jiva-founder.jpg"
              alt="Twórczyni JIVA Candles w pracowni"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Pracownia / jak powstają świece */}
      <section className="border-y border-[#E4D5C2] bg-[#FDF7EF]">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-16">
          <h2 className="text-2xl md:text-[26px] font-serif mb-6">
            Pracownia, w której rodzą się rytuały
          </h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <StepCard
              title="Naturalne składniki"
              text="Sięgam po wosk sojowy, bawełniane knoty i kompozycje zapachowe wolne od zbędnej chemii. Dzięki temu płomień jest miękki, a zapach – przyjemny, nieprzytłaczający."
            />
            <StepCard
              title="Ręczna praca"
              text="Każdą świecę wylewam w małych partiach. To pozwala mi dopilnować detali – od temperatury wosku, przez barwę, aż po fakturę powierzchni."
            />
            <StepCard
              title="Świadomy design"
              text="Proste formy mieszają się tu z bardziej artystycznymi kształtami. Świece mają pasować do wnętrza, ale też potrafić przyciągnąć wzrok jak mały, dekoracyjny akcent."
            />
          </div>
        </div>
      </section>

      {/* Sekcja bardziej osobista */}
      <section className="max-w-5xl mx-auto px-4 py-14 md:py-16">
        <div className="grid md:grid-cols-[1fr,1.1fr] gap-10 items-center">
          <div className="relative h-[230px] md:h-[260px] rounded-3xl overflow-hidden bg-[#F2E2CF]">
            <Image
              src="/images/jiva-workspace.jpg"
              alt="Detale pracowni JIVA Candles"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-[22px] font-serif mb-4">
              Dlaczego JIVA?
            </h3>
            <p className="text-[15px] leading-relaxed mb-3">
              JIVA narodziła się z potrzeby zatrzymania – chwili tylko dla
              siebie, przy ciepłym świetle świecy i zapachu, który otula jak
              ulubiony koc. To miał być mój mały rytuał ukojenia. Z czasem
              stał się czymś, czym chciałam podzielić się z innymi.
            </p>
            <p className="text-[15px] leading-relaxed mb-3">
              Tworząc świece, łączę dwie rzeczy, które kocham: estetykę i
              uważność. Lubię, gdy przedmiot jest piękny, ale jeszcze bardziej
              lubię, gdy ma znaczenie – kiedy przypomina, żeby zrobić głębszy
              wdech, odłożyć telefon, zapalić knot i na chwilę zwolnić.
            </p>
            <p className="text-[15px] leading-relaxed">
              Jeśli JIVA ma być częścią Twojego domu, chcę, żeby była jak
              dobra przyjaciółka: taka, która delikatnie szepcze „zasługujesz
              na moment tylko dla siebie”.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

type StepCardProps = {
  title: string;
  text: string;
};

function StepCard({ title, text }: StepCardProps) {
  return (
    <div className="bg-white/80 rounded-3xl border border-[#E4D5C2] px-5 py-6 shadow-sm">
      <h3 className="text-[16px] font-semibold mb-3">{title}</h3>
      <p className="text-[14px] leading-relaxed text-[#5A4334]">{text}</p>
    </div>
  );
}
