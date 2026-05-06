import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageLayout({ children, title, subtitle, breadcrumb }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <div className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-apple-gray-50 to-white border-b border-apple-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {breadcrumb && (
              <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-3">
                {breadcrumb}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-apple-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-apple-gray-600 text-lg md:text-xl max-w-2xl">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Page Content */}
        <div className="py-16 md:py-20">{children}</div>
      </main>
      <Footer />
    </>
  );
}
