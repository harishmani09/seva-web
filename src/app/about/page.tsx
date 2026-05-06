import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = {
  title: "About Us | Seva Foundation",
};

export default function AboutPage() {
  return (
    <PageLayout
      breadcrumb="About"
      title="Who We Are"
      subtitle="A movement of spiritually enlightened individuals committed to serving humanity."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Who We Are */}
        <section id="who-we-are" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">Founded in 2002</p>
            <h2 className="text-3xl font-bold text-apple-gray-900 mb-5">Seva Foundation</h2>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              SEVA Foundation is an organization conceptualized, founded, and managed by a group of
              spiritually enlightened human beings under the able leadership and guidance of{" "}
              <strong className="text-apple-gray-900">Shri Pradeep Bhaiya Ji Maharaj</strong>.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed mb-4">
              Its primary objective is to serve humanity, society, and nation with value-based education,
              health services and self-reliance embedded with spiritualism.
            </p>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              Since its inception, SEVA Foundation is engaged in establishing, managing, and running
              schools, health centers and skill development centers in socially and economically deprived
              regions through Social Empowerment Voluntary Activity (SEVA).
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/Activity4.jpeg"
              alt="Seva Foundation activities"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="bg-apple-gray-50 rounded-3xl p-10 md:p-14">
          <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Vision</p>
          <h2 className="text-3xl font-bold text-apple-gray-900 mb-6">What We Strive For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <blockquote className="text-2xl font-semibold text-saffron-500 italic mb-3">
                "हम उनके लिए जियें, जो हमसे कम सौभाग्यशाली हैं"।
              </blockquote>
              <p className="text-apple-gray-600">~ Shri Pradeep Bhaiya Ji Maharaj</p>
            </div>
            <p className="text-apple-gray-600 text-lg leading-relaxed">
              We envision a society where every person — regardless of birth, income, or geography — has
              access to quality education, healthcare, economic opportunity, and spiritual growth. A society
              that rises together, leaving no one behind.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section id="mission">
          <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Mission</p>
          <h2 className="text-3xl font-bold text-apple-gray-900 mb-8">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Education",
                desc: "Quality and value-based education that imparts wisdom in addition to knowledge required for leading a dignified life.",
              },
              {
                icon: "🏥",
                title: "Health",
                desc: "Health camps and Primary Health Centers to help people live a healthy life and ensure a better economic, social, and political journey.",
              },
              {
                icon: "🌱",
                title: "Self-Reliance",
                desc: "Skill development providing better economic opportunity to do justice with Grihasth Ashram's roles and responsibilities.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm border border-apple-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-apple-gray-900 mb-2">{item.title}</h3>
                <p className="text-apple-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
