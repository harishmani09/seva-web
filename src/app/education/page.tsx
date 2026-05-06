import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Education | Seva Foundation" };

export default function EducationPage() {
  return (
    <PageLayout
      breadcrumb="Our Work"
      title="Education"
      subtitle="Taking education to those who cannot come to it."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <blockquote className="text-xl font-semibold italic text-saffron-500 mb-4 leading-snug">
              "If the poor boy cannot come to education, education must go to him."
            </blockquote>
            <p className="text-apple-gray-600 text-sm mb-6">~ Swami Vivekananda</p>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              Following this timeless mantra, SEVA Foundation is taking education to the poor children of
              Mother India. After a successful run in <strong>Littipara starting 2002</strong>, a new school
              at <strong>Deoghar</strong> has been running since 2012.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              As of now, children from over <strong>thirteen villages</strong> are receiving free
              education, books, notebooks, pens, pencils, dress materials, and food — ensuring no child is
              left behind due to poverty.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/Activity4.jpeg"
              alt="Educating children across India"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "2002", label: "Year SEVA School was Founded" },
            { stat: "13+", label: "Villages Served" },
            { stat: "Free", label: "Education, Books & Meals" },
          ].map((item) => (
            <div key={item.label} className="bg-saffron-50 rounded-2xl p-8 text-center border border-saffron-100">
              <p className="text-4xl font-bold text-saffron-400 mb-2">{item.stat}</p>
              <p className="text-apple-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
