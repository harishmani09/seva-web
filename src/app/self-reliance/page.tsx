import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Self-Reliance | Seva Foundation" };

export default function SelfReliancePage() {
  return (
    <PageLayout
      breadcrumb="Our Work"
      title="Self-Reliance"
      subtitle="Equipping communities with skills to stand on their own."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <blockquote className="text-xl font-semibold italic text-saffron-500 mb-6 leading-snug">
              "O Bhagwan, even he is happy who cooks only little leaves earned by his own efforts without
              having to depend on others."
            </blockquote>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              Started with a self-reliance project in the tribal villages of <strong>Littipara block</strong>{" "}
              of Pankur district, SEVA Foundation's Swawlamban initiative trains community members —
              particularly women and youth — in marketable vocational skills.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              The goal is simple but profound: when every individual can support themselves and their
              family through their own effort, the entire community gains dignity, stability, and hope.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/3rd.jpeg"
              alt="Self-reliance training at Seva Foundation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🪡", title: "Tailoring & Handicrafts", desc: "Women learn tailoring, embroidery, and local craft skills to generate sustainable livelihoods." },
            { icon: "🌾", title: "Agricultural Training", desc: "Modern farming techniques to improve yields and reduce dependence on intermediaries." },
            { icon: "💡", title: "Skill Development", desc: "Vocational training for youth across multiple trades matched to local economic opportunities." },
          ].map((item) => (
            <div key={item.title} className="bg-apple-gray-50 rounded-2xl p-7 border border-apple-gray-100">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-apple-gray-900 mb-2">{item.title}</h3>
              <p className="text-apple-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
