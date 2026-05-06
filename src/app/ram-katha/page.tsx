import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Ram Katha & Hanuman Katha | Seva Foundation" };

export default function RamKathaPage() {
  return (
    <PageLayout
      breadcrumb="Associate With Us"
      title="Ram Katha & Hanuman Katha"
      subtitle="Sacred storytelling that unites communities through devotion."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/Hanuman.jpeg"
              alt="Hanuman Katha by Shri Pradeep Bhaiya Ji Maharaj"
              fill
              className="object-contain bg-apple-gray-50"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              Shri Pradeep Bhaiya Ji Maharaj is one of the finest{" "}
              <strong>Hanuman Katha Vachaks</strong> in India. Through Ram Katha and Hanuman Katha
              Aayojan, SEVA Foundation brings together thousands of devotees in a shared experience of
              divine storytelling, bhajans, and spiritual wisdom.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              These events are not just spiritual gatherings — they are a vehicle for spreading
              SEVA's message of service, compassion, and nation-building through the power of our
              ancient scripture.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              If you wish to invite Shri Pradeep Bhaiya Ji Maharaj for a Katha programme or would like
              to participate in upcoming events, please reach out to us.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-400 text-white font-semibold rounded-full hover:bg-saffron-500 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
