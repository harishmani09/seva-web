import Link from "next/link";

const areas = [
  {
    icon: "📚",
    title: "We Educate",
    href: "/education",
    description:
      'Following Swami Vivekananda\'s vision "If the poor boy cannot come to education, education must go to him," SEVA Foundation takes education to the poor children of India. Schools in Littipara (since 2002) and Deoghar (since 2012) serve children from over thirteen villages with free education, books, stationery, uniforms, and food.',
  },
  {
    icon: "🏥",
    title: "We Cure",
    href: "/health",
    description:
      "If SEVA is service to mankind on the way to explore God, there could be no better service than health care. We organize health camps and open Primary Health Centers to provide medical support to the needy and poor sections of Indian society.",
  },
  {
    icon: "🌱",
    title: "We Train",
    href: "/self-reliance",
    description:
      'Guided by the teaching "Even he is happy who earns his food by his own efforts," we run self-reliance projects in tribal villages of Littipara to equip communities with vocational skills for economic independence.',
  },
  {
    icon: "🙏",
    title: "We Spiritualize",
    href: "/spirituality",
    description:
      'Service to the Jan (people) is the medium to reach Janardan (God). With the motto "Do Service for Bhakti, Do Bhajans while doing Service," we connect communities through devotion and shared values.',
  },
  {
    icon: "🕉️",
    title: "We Rejuvenate",
    href: "/ram-katha",
    description:
      "SEVA Foundation is establishing MangalDham — a spiritual centre where all will find peace, purpose, and rejuvenation through devotion and satsang.",
  },
  {
    icon: "🤝",
    title: "We Volunteer",
    href: "/volunteer",
    description:
      "Helping others is humanity. None of this is possible without the selfless effort of our volunteers. We welcome all who wish to be part of this sacred mission of service.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 text-center mb-4">
          What We Do
        </h2>
        <p className="text-apple-gray-600 text-lg text-center max-w-2xl mx-auto mb-16">
          Six pillars of service that form the heart of SEVA Foundation's mission across India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group bg-apple-gray-50 hover:bg-saffron-50 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-apple-gray-900 group-hover:text-saffron-500 mb-3 transition-colors">
                {area.title}
              </h3>
              <p className="text-apple-gray-600 text-sm leading-relaxed line-clamp-4">
                {area.description}
              </p>
              <span className="inline-flex items-center gap-1 text-saffron-400 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
