import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Donate | Seva Foundation" };

const impacts = [
  { amount: "₹500", impact: "Provides a month of stationery for one child" },
  { amount: "₹1,000", impact: "Covers one child's books and uniform for a year" },
  { amount: "₹5,000", impact: "Supports a free health camp serving 50+ patients" },
  { amount: "₹10,000", impact: "Funds a month of self-reliance skill training" },
];

export default function DonationPage() {
  return (
    <PageLayout
      breadcrumb="Associate With Us"
      title="Support Our Mission"
      subtitle="Your donation transforms lives and empowers communities."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl">
          <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
            SEVA Foundation is a registered non-profit charitable trust. Every rupee donated goes
            directly to education, healthcare, and skill development for those who need it most.
          </p>
          <p className="text-apple-gray-600 text-lg leading-relaxed">
            Donations to SEVA Foundation are eligible for tax exemption under applicable sections of the
            Income Tax Act. Please contact us for your 80G certificate.
          </p>
        </div>

        {/* Impact Grid */}
        <div>
          <h3 className="text-2xl font-bold text-apple-gray-900 mb-8">Your Donation, Your Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impacts.map((item) => (
              <div key={item.amount} className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-apple-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-saffron-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 text-center leading-tight px-1">
                  {item.amount}
                </div>
                <p className="text-apple-gray-700 font-medium">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bank details CTA */}
        <div className="bg-apple-gray-50 rounded-3xl p-10 md:p-14 border border-apple-gray-100">
          <h3 className="text-2xl font-bold text-apple-gray-900 mb-4">How to Donate</h3>
          <p className="text-apple-gray-600 mb-6">
            To make a donation or for bank transfer details, please contact us directly. We will provide
            you with all necessary information including our bank account details and receipt.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-saffron-400 text-white font-semibold rounded-full hover:bg-saffron-500 transition-colors"
            >
              Contact Us to Donate
            </a>
            <a
              href="tel:9430302369"
              className="px-6 py-3 border-2 border-saffron-400 text-saffron-400 font-semibold rounded-full hover:bg-saffron-50 transition-colors"
            >
              Call: 9430302369
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
