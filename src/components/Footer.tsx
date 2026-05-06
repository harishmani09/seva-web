import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/education" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery/photos" },
  { label: "Contact Us", href: "/contact" },
];

const social = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/sfdeoghar", label: "Facebook" },
  { icon: <FaXTwitter />, href: "https://x.com/Seva_Deoghar", label: "Twitter / X" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCFNBNWPNvbiYmhVMi1s-cgw", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Info */}
          <div>
            <Image
              src="/images/Seva-Foundation-Logo.png"
              alt="Seva Foundation"
              width={130}
              height={55}
              className="h-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              SEVA Foundation is an organization with its primary objective to serve humanity, society, and
              nation with value-based education, health services, and self-reliance embedded with spiritualism.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <h4 className="text-saffron-400 font-semibold text-sm uppercase tracking-widest mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-saffron-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="text-saffron-400 font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 text-sm leading-relaxed mb-5">
              Seva Foundation,<br />
              Dumka Road, Near Railway over bridge,<br />
              Kabilaspur, Deoghar – 814112<br />
              (Jharkhand)<br />
              <a href="tel:9430302369" className="hover:text-saffron-400 transition-colors">📞 9430302369</a>
              {" / "}
              <a href="tel:9835888245" className="hover:text-saffron-400 transition-colors">9835888245</a>
            </address>

            <h4 className="text-saffron-400 font-semibold text-sm uppercase tracking-widest mb-3">Stay Connected</h4>
            <div className="flex gap-3 md:justify-end">
              {social.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-saffron-400 text-white transition-colors text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-apple-gray-900 text-center py-3 text-xs">
        COPYRIGHT © SEVA FOUNDATION. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
