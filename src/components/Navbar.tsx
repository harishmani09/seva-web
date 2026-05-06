"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "About",
    items: [
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Our Mission", href: "/about#mission" },
    ],
  },
  {
    title: "Our Work",
    items: [
      { label: "Education", href: "/education" },
      { label: "Health", href: "/health" },
      { label: "Self-Reliance", href: "/self-reliance" },
      { label: "Spirituality", href: "/spirituality" },
    ],
  },
  {
    title: "Associate With Us",
    items: [
      { label: "Ram Katha & Hanuman Katha", href: "/ram-katha" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donation", href: "/donation" },
    ],
  },
  {
    title: "Gallery",
    items: [
      { label: "Photos", href: "/gallery/photos" },
      { label: "Videos", href: "/gallery/videos" },
      { label: "Media Highlights", href: "/gallery/media" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const handleMouseEnter = (title: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Seva-Foundation-Logo.png"
              alt="Seva Foundation"
              width={140}
              height={60}
              className="w-28 md:w-36 h-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-saffron-400"
                  : scrolled
                  ? "text-apple-gray-900 hover:text-saffron-400"
                  : "text-white hover:text-saffron-400"
              }`}
            >
              Home
            </Link>

            <Link
              href="/events"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/events"
                  ? "text-saffron-400"
                  : scrolled
                  ? "text-apple-gray-900 hover:text-saffron-400"
                  : "text-white hover:text-saffron-400"
              }`}
            >
              Events
            </Link>

            {navItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-apple-gray-900 hover:text-saffron-400"
                      : "text-white hover:text-saffron-400"
                  }`}
                >
                  {menu.title}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openMenu === menu.title && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-apple-gray-900 hover:bg-apple-gray-50 hover:text-saffron-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-saffron-400 rounded-full hover:bg-saffron-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-apple-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="py-3 space-y-1">
            <Link href="/" className="block px-3 py-2.5 text-sm font-medium text-apple-gray-900 hover:text-saffron-400 rounded-lg hover:bg-apple-gray-50">
              Home
            </Link>
            <Link href="/events" className="block px-3 py-2.5 text-sm font-medium text-apple-gray-900 hover:text-saffron-400 rounded-lg hover:bg-apple-gray-50">
              Events
            </Link>

            {navItems.map((menu) => (
              <div key={menu.title}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === menu.title ? null : menu.title)
                  }
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-apple-gray-900 hover:text-saffron-400 rounded-lg hover:bg-apple-gray-50"
                >
                  {menu.title}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileExpanded === menu.title ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === menu.title && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-saffron-100 pl-3">
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-2 py-2 text-sm text-apple-gray-600 hover:text-saffron-400"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="block mt-3 text-center px-4 py-2.5 text-sm font-semibold text-white bg-saffron-400 rounded-full hover:bg-saffron-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
