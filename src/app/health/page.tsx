import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Health | Seva Foundation" };

export default function HealthPage() {
  return (
    <PageLayout
      breadcrumb="Our Work"
      title="Health"
      subtitle="Because a healthy community is the foundation of every other achievement."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/slider3.jpg"
              alt="Health services by Seva Foundation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              If SEVA is service to mankind and the way forward to explore God, then there could be no
              better service than offering health services to the needy and poor section of our Indian
              society.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              SEVA Foundation organises regular <strong>health camps</strong> and works toward opening{" "}
              <strong>Primary Health Centers</strong> in underserved areas of Jharkhand and beyond —
              providing basic medical care, diagnostics, and awareness to communities that otherwise lack
              access to healthcare.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              A healthy body leads to a healthy society — and a healthy society is the foundation upon
              which SEVA's other pillars of education and self-reliance can truly flourish.
            </p>
          </div>
        </div>

        <div className="bg-saffron-50 rounded-3xl p-10 border border-saffron-100">
          <h3 className="text-2xl font-bold text-apple-gray-900 mb-6">Our Health Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Free medical check-up camps in tribal and rural areas",
              "Basic diagnostics and medicine distribution",
              "Health awareness sessions for women and children",
              "Yoga and wellness programs rooted in tradition",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <span className="mt-1 w-5 h-5 rounded-full bg-saffron-400 flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                <p className="text-apple-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
