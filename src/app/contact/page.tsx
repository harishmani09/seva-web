import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us | Seva Foundation" };

const details = [
  {
    icon: "📍",
    title: "Address",
    content: "Seva Foundation, Dumka Road, Near Railway over bridge, Kabilaspur, Deoghar – 814112 (Jharkhand)",
  },
  {
    icon: "📞",
    title: "Phone",
    content: "9430302369 / 9835888245",
    href: "tel:9430302369",
  },
  {
    icon: "🌐",
    title: "Social",
    content: "Find us on Facebook, YouTube & X (Twitter)",
    socialLinks: [
      { label: "Facebook", href: "https://www.facebook.com/sfdeoghar" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UCFNBNWPNvbiYmhVMi1s-cgw" },
      { label: "X / Twitter", href: "https://x.com/Seva_Deoghar" },
    ],
  },
];

export default function ContactPage() {
  return (
    <PageLayout
      breadcrumb="Connect"
      title="Contact Us"
      subtitle="We'd love to hear from you — whether you want to volunteer, donate, or just say hello."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-apple-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {details.map((detail) => (
                <div key={detail.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-saffron-50 border border-saffron-100 flex items-center justify-center text-xl flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-apple-gray-600 mb-1">
                      {detail.title}
                    </p>
                    {detail.href ? (
                      <a href={detail.href} className="text-apple-gray-900 hover:text-saffron-400 transition-colors">
                        {detail.content}
                      </a>
                    ) : detail.socialLinks ? (
                      <div className="flex flex-wrap gap-3 mt-1">
                        {detail.socialLinks.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-saffron-400 hover:text-saffron-500 font-medium underline-offset-2 hover:underline"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-apple-gray-900">{detail.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-apple-gray-100 aspect-[4/3] bg-apple-gray-50 flex items-center justify-center">
              <div className="text-center text-apple-gray-600">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-sm">Deoghar, Jharkhand – 814112</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-apple-gray-900 mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
