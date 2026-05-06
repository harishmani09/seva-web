import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/images/Activity4.jpeg",
    title: "Educating Children from Various Places of India",
    href: "/education",
    alt: "Children receiving education",
  },
  {
    image: "/images/slider3.jpg",
    title: "Convoy of Hope Responds on Hunger Crisis",
    href: "/health",
    alt: "Health and humanitarian work",
  },
  {
    image: "/images/3rd.jpeg",
    title: "Self-Reliance: Skills, Values & Responsibilities",
    href: "/self-reliance",
    alt: "Self-reliance training",
  },
];

export default function SocialProjects() {
  return (
    <section className="bg-apple-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest text-center mb-3">
          Impact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-900 text-center mb-16">
          Social Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 className="text-apple-gray-900 font-semibold text-lg leading-snug mb-5">
                  {project.title}
                </h3>
                <Link
                  href={project.href}
                  className="mt-auto px-6 py-2.5 bg-saffron-400 text-white text-sm font-semibold rounded-full hover:bg-saffron-500 transition-colors"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
