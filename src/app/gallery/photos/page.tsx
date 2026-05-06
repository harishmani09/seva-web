import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Photo Gallery | Seva Foundation" };

const photos = [
  { src: "/images/Activity4.jpeg", alt: "Educating children across India" },
  { src: "/images/Guruji2.png", alt: "Shri Pradeep Bhaiya Ji Maharaj" },
  { src: "/images/slider3.jpg", alt: "Community service activities" },
  { src: "/images/slider4.jpeg", alt: "Spreading smiles" },
  { src: "/images/Hanuman.jpeg", alt: "Lord Hanuman – Devotion and Strength" },
  { src: "/images/3rd.jpeg", alt: "Self-reliance programme" },
  { src: "/images/dhyan.jpg", alt: "Guruji in meditation" },
  { src: "/images/slide7.jpg", alt: "Spiritual gathering" },
];

export default function PhotosPage() {
  return (
    <PageLayout
      breadcrumb="Gallery"
      title="Photo Gallery"
      subtitle="Glimpses of service, devotion, and transformation."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
