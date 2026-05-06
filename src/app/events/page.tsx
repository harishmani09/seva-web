import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Upcoming Events | Seva Foundation" };

const events = [
  {
    date: "12 Apr 2025",
    title: "स्थापना — 108 फीट हनुमान प्रतिमा",
    location: "श्री मंगल धाम, Deoghar",
    description:
      "Auspicious ceremony for the installation of a 108-feet Hanuman Ji statue at Shri Mangal Dham. Join us for this historic and spiritual occasion.",
    highlight: true,
  },
  {
    date: "15 Aug 2025",
    title: "Independence Day Celebration & Distribution",
    location: "SEVA Ashram, Deoghar",
    description:
      "Flag hoisting ceremony followed by distribution of books and stationery to school students at the Ashram. Celebrate freedom with seva.",
    highlight: false,
  },
];

export default function EventsPage() {
  return (
    <PageLayout
      breadcrumb="Events"
      title="Upcoming Events"
      subtitle="Join us in celebrating service, spirituality, and community."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.title}
              className={`rounded-2xl p-8 border ${
                event.highlight
                  ? "bg-saffron-50 border-saffron-200"
                  : "bg-white border-apple-gray-100 shadow-sm"
              }`}
            >
              <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                <div>
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
                      event.highlight
                        ? "bg-saffron-400 text-white"
                        : "bg-apple-gray-100 text-apple-gray-600"
                    }`}
                  >
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold text-apple-gray-900">{event.title}</h3>
                </div>
                <p className="text-sm text-apple-gray-600 flex items-center gap-1">
                  📍 {event.location}
                </p>
              </div>
              <p className="text-apple-gray-600 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-apple-gray-50 rounded-2xl p-8">
          <p className="text-apple-gray-600 mb-4">
            Want to be notified about upcoming events? Reach out to us.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-400 text-white font-semibold rounded-full hover:bg-saffron-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
