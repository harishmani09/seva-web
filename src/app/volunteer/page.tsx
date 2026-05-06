import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = { title: "Volunteer | Seva Foundation" };

const ways = [
  { icon: "📚", title: "Teach", desc: "Spend time with children at our schools in Littipara or Deoghar. Your knowledge is a gift." },
  { icon: "🏥", title: "Provide Medical Care", desc: "Doctors, nurses, and health workers can join our health camp initiatives across rural areas." },
  { icon: "🌱", title: "Train Skills", desc: "Share vocational expertise to help communities become self-reliant and economically independent." },
  { icon: "📣", title: "Spread Awareness", desc: "Help us communicate our mission through social media, community outreach, and events." },
  { icon: "💻", title: "Support Remotely", desc: "Help with website, documentation, content creation, or fundraising from wherever you are." },
  { icon: "💰", title: "Fundraise", desc: "Organise local events or campaigns to raise funds that directly support our on-ground work." },
];

export default function VolunteerPage() {
  return (
    <PageLayout
      breadcrumb="Associate With Us"
      title="Volunteer with Us"
      subtitle="Your time and skills are the most powerful gift you can give."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl">
          <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
            Helping others is humanity. SEVA Foundation cannot fulfil its mission without the
            selfless contribution of volunteers who believe in the power of service.
          </p>
          <p className="text-apple-gray-600 text-lg leading-relaxed">
            Whether you have a few hours a week or can commit full-time, there is a place for you in the
            SEVA family. Every contribution — however small — creates ripples of change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map((way) => (
            <div key={way.title} className="bg-apple-gray-50 rounded-2xl p-7 border border-apple-gray-100 hover:border-saffron-200 hover:bg-saffron-50 transition-colors">
              <div className="text-3xl mb-3">{way.icon}</div>
              <h3 className="text-lg font-bold text-apple-gray-900 mb-2">{way.title}</h3>
              <p className="text-apple-gray-600 text-sm leading-relaxed">{way.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-saffron-400 rounded-3xl p-10 md:p-14 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
            Fill out our contact form and let us know how you'd like to volunteer. We'll be in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-saffron-500 font-semibold rounded-full hover:bg-saffron-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
