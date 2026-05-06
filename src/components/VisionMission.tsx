import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="bg-apple-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Our Purpose
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 text-center mb-16">
          Vision & Mission
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left – content */}
          <div className="bg-saffron-400 rounded-3xl p-8 md:p-12 text-white">
            <blockquote className="text-xl md:text-2xl font-semibold italic leading-snug mb-4">
              "हम उनके लिए जियें, जो हमसे कम सौभाग्यशाली हैं"।
            </blockquote>
            <p className="text-saffron-100 text-sm mb-8">~ Shri Pradeep Bhaiya Ji Maharaj</p>

            <p className="text-white/90 text-base leading-relaxed mb-5">
              SEVA Foundation's mission is <strong>Social Empowerment</strong> through walking on the path
              of spirituality to provide:
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Quality Education",
                  desc: "Value-based education that imparts wisdom alongside knowledge required for a dignified life.",
                },
                {
                  title: "Health Services",
                  desc: "Health camps and Primary Health Centers to help people live healthy and fulfilling lives.",
                },
                {
                  title: "Self-Reliance (Swawlamban)",
                  desc: "Skill development providing better economic opportunities and fulfillment of life roles.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold">{item.title}: </span>
                    <span className="text-white/90 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] max-h-[540px] mx-auto w-full">
            <Image
              src="/images/Hanuman.jpeg"
              alt="Lord Hanuman – Symbol of Devotion and Strength"
              fill
              className="object-contain bg-apple-gray-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
