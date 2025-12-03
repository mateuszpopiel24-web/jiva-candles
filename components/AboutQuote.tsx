import MotionWrapper from "./MotionWrapper";

export default function AboutQuote({ quote }: { quote: string }) {
  return (
    <MotionWrapper delay={0.2}>
      <section className="py-20 bg-[#F7F2EB] text-center">
        <blockquote className="max-w-3xl mx-auto text-2xl font-playfair italic text-[#3C2A1E]/90">
          “{quote}”
        </blockquote>
      </section>
    </MotionWrapper>
  );
}
