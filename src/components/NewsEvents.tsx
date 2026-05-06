const news = [
  {
    date: "12th April 2025",
    text: "श्री मंगल धाम में स्थापित होगी हनुमान जी की 108 फीट की प्रतिमा।",
    highlight: true,
  },
  {
    date: "15th August 2025",
    text: "Flag Hoisting, Books and Stationery distribution to School Students at Ashram.",
    highlight: false,
  },
];

export default function NewsEvents() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* YouTube Video */}
          <div>
            <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">Watch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-gray-900 mb-8">See Our Work in Action</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eu7gSU-tyC8"
                title="Seva Foundation – Our Work"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* News */}
          <div>
            <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Latest
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-gray-900 mb-8">News & Events</h2>

            <div className="space-y-4">
              {news.map((item) => (
                <div
                  key={item.date}
                  className={`rounded-2xl p-5 border ${
                    item.highlight
                      ? "border-saffron-200 bg-saffron-50"
                      : "border-apple-gray-100 bg-apple-gray-50"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
                      item.highlight ? "text-saffron-500" : "text-apple-gray-600"
                    }`}
                  >
                    {item.date}
                  </p>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      item.highlight ? "text-saffron-700" : "text-apple-gray-900"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="/events"
                className="inline-flex items-center gap-2 text-saffron-400 font-semibold text-sm hover:text-saffron-500 transition-colors"
              >
                View all upcoming events
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
