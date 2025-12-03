import AboutSection from "../../components/AboutSection";
import AboutQuote from "../../components/AboutQuote";
import MotionWrapper from "../../components/MotionWrapper";

export default function AboutPage() {
  return (
    <div className="bg-[#F9F6F2]">
      <section className="max-w-4xl mx-auto pt-24 md:pt-32 pb-16 px-6 text-center">
        <MotionWrapper>
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">O JIVA Candles</h1>
          <p className="text-[#3C2A1E]/80 leading-relaxed text-lg">
            JIVA narodziła się z potrzeby zatrzymania – chwili tylko dla siebie,
            przy ciepłym świetle świecy i zapachu, który otula jak ulubiony koc.
            Każdą świecę tworzę ręcznie w małej pracowni, traktując ją jak osobisty rytuał intencji.
          </p>
        </MotionWrapper>
      </section>

      <AboutSection
        title="Pracownia, w której rodzą się rytuały"
        text="W mojej pracowni nic nie dzieje się przypadkiem. Wybieram wosk sojowy, bawełniane knoty i kompozycje zapachów, które mają nie tylko pięknie pachnieć, ale też wspierać Twój nastrój. Każdą świecę wylewam małymi partiami, dbając o detale – od pierwszej kropli wosku po ostatnie muśnięcie etykiety."
        image="/images/jiva-workspace.jpg"
      />

      <AboutSection
        title="Światło dla Twojej codzienności"
        text="Wierzę, że małe rytuały potrafią zmienić cały dzień. Poranna świeca do kawy, płomień towarzyszący wieczornej kąpieli, zapach, który pomaga wyciszyć myśli po intensywnym dniu. JIVA ma być właśnie tym – delikatnym przypomnieniem, że możesz zwolnić i wrócić do siebie."
        image="/images/jiva-founder.jpg"
        reverse
      />

      <AboutQuote quote="Moja intencja jest prosta – żeby każda świeca JIVA przypominała Ci, że zasługujesz na czułość, spokój i czas tylko dla siebie." />
    </div>
  );
}
