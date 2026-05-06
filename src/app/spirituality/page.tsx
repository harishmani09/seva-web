import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Spirituality | Seva Foundation" };

export default function SpiritualityPage() {
  return (
    <PageLayout
      breadcrumb="Our Work"
      title="Spirituality"
      subtitle="Service to the people is the path to reaching the divine."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/slide7.jpg"
              alt="Spiritual activities at Seva Foundation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <blockquote className="text-xl font-semibold italic text-saffron-500 mb-4">
              "Do Service for Bhakti, Do Bhajans while doing Service."
            </blockquote>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              Service to the Jan (people) is the medium to reach Janardan (God). SEVA Foundation
              believes that true spirituality expresses itself through selfless service — every act of
              seva is an act of devotion.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              The foundation plans to establish <strong>MangalDham</strong> — a spiritual centre where
              all will find peace, strength, and rejuvenation through devotion, satsang, and the guidance
              of Shri Pradeep Bhaiya Ji Maharaj.
            </p>
          </div>
        </div>

        <div className="bg-navy-900 rounded-3xl p-10 md:p-14 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Spirituality, Consciousness, Courage & Strength</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            For Everyone, Everywhere — this is the promise SEVA Foundation makes to every soul it touches.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
