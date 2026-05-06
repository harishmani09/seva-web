import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Who We Are
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 text-center mb-16 leading-tight">
          Seva Foundation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/images/Guruji2.png"
              alt="Seva Foundation – Serving with Love"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-5">
              SEVA Foundation is an organization conceptualized, founded, and managed by a group of
              spiritually enlightened human beings under the able leadership and guidance of{" "}
              <strong className="text-apple-gray-900">Shri Pradeep Bhaiya Ji Maharaj</strong> with its
              primary objective to serve humanity, society, and nation with value-based education, health
              services and self-reliance embedded with spiritualism.
            </p>

            <p className="text-apple-gray-600 text-lg leading-relaxed mb-8">
              Since its inception, SEVA Foundation is engaged in establishing, managing, and running
              schools, health centers and skill development centers in social and economic deprived
              regions. Volunteers take a pledge to serve those who are not so fortunate.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-400 text-white font-semibold rounded-full hover:bg-saffron-500 transition-colors"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
