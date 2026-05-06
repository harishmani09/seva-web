import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import WhatWeDo from "@/components/WhatWeDo";
import SocialProjects from "@/components/SocialProjects";
import NewsEvents from "@/components/NewsEvents";
import GurujiSection from "@/components/GurujiSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <VisionMission />
        <WhatWeDo />
        <SocialProjects />
        <NewsEvents />
        <GurujiSection />

        {/* CTA Strip */}
        <section className="bg-saffron-400 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be a Part of This Sacred Mission
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join hands with Seva Foundation — donate, volunteer, or connect with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donation"
                className="px-7 py-3 bg-white text-saffron-500 font-semibold rounded-full hover:bg-saffron-50 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
