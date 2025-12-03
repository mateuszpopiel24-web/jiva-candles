import Link from "next/link";
import Image from "next/image";
import MotionWrapper from "../components/MotionWrapper";
import FadeIn from "../animations/FadeIn";
import RevealText from "../animations/RevealText";
import ParallaxSection from "../animations/ParallaxSection";

export default function HomePage() {
  return (
    <div className="bg-[#F9F6F2]">
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center">
        <ParallaxSection src="/images/jiva-ritual.jpg" alt="Rytuał JIVA" height={900} />
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

      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <MotionWrapper delay={0.2}>
          <h2 className="text-3xl font-playfair mb-6">Tworzone z intencją</h2>
          <p className="text-[#3C2A1E]/80 leading-relaxed mb-12">
            Każda świeca JIVA powstaje w małej pracowni – z wosku sojowego, bawełnianego knota
            i z ciepła dłoni. Każdy zapach to historia, każdy płomień to zaproszenie do zatrzymania się.
          </p>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {["jiva-morning.jpg", "jiva-evening.jpg", "jiva-winter.jpg"].map((img, i) => (
            <MotionWrapper key={img} delay={i * 0.1}>
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-sm">
                <Image src={`/images/${img}`} alt={img} fill className="object-cover" />
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
