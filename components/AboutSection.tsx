import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function AboutSection({
  title,
  text,
  image,
  reverse,
}: {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 max-w-6xl mx-auto py-24 px-6`}
    >
      <MotionWrapper delay={0.1}>
        <div className="relative w-full md:w-1/2 h-[420px] rounded-2xl overflow-hidden bg-[#F7F2EB] shadow-sm">
          <Image src={image} alt={title} fill className="object-cover rounded-2xl" />
        </div>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-playfair mb-4">{title}</h2>
          <p className="text-[#3C2A1E]/80 leading-relaxed text-lg">{text}</p>
        </div>
      </MotionWrapper>
    </section>
  );
}
