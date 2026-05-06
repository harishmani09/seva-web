import Image from "next/image";

export default function GurujiSection() {
  return (
    <section className="bg-apple-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[560px]">
            <Image
              src="/images/dhyan.jpg"
              alt="Shri Pradeep Bhaiya Ji Maharaj in meditation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Guiding Light
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-gray-900 mb-6 leading-tight">
              Shri Pradeep Bhaiya Ji Maharaj
            </h2>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-5">
              Born in Teghra village of Begusarai district of Bihar, the life of{" "}
              <strong className="text-apple-gray-900">Acharya Shri Pradeep Kaushik Ji Maharaj</strong> is
              dedicated to service to humanity through SEVA activities.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-5">
              One of the finest Hanuman Katha Vachaks, Shri Pradeep Bhaiya Ji Maharaj took Sanyas
              Deeksha on 27th January 2015 from Param Pujya Gurudev Shri Vijay Kaushal Ji Maharaj in
              Vrindavan.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              In his pre-sanyas life, he was a Rashtriya Swayamsevak Sangha Pracharak working in tribal
              areas of Jharkhand state, where he founded the SEVA organization in the year 2002.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
