import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Media Highlights | Seva Foundation" };

export default function MediaPage() {
  return (
    <PageLayout
      breadcrumb="Gallery"
      title="Media Highlights"
      subtitle="Coverage and features about Seva Foundation's work."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-apple-gray-50 rounded-3xl p-12 text-center border border-apple-gray-100">
          <div className="text-5xl mb-4">📰</div>
          <h3 className="text-2xl font-bold text-apple-gray-900 mb-3">Coming Soon</h3>
          <p className="text-apple-gray-600">
            We are compiling our media coverage and press features. Check back soon, or follow us on
            social media to stay updated.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
