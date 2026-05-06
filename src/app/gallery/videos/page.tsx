import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Video Gallery | Seva Foundation" };

const videos = [
  {
    embedId: "eu7gSU-tyC8",
    title: "Seva Foundation – Our Work",
  },
];

export default function VideosPage() {
  return (
    <PageLayout
      breadcrumb="Gallery"
      title="Video Gallery"
      subtitle="Watch our story of service unfold."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.embedId} className="rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-white border-t border-apple-gray-100">
                <p className="font-semibold text-apple-gray-900">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-apple-gray-600 mb-4">See more videos on our YouTube channel.</p>
          <a
            href="https://www.youtube.com/channel/UCFNBNWPNvbiYmhVMi1s-cgw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Visit our YouTube Channel
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
