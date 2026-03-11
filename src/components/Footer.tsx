import Link from "next/link";
import { MapPin, Phone, Printer, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-main text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-xl font-bold hover:text-primary transition-colors duration-200">
              Stelton Lumber
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Serving the Central New Jersey area for three generations with the
              highest quality products &amp; service since 1940.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-white/80">
                  1354 Stelton Road, Piscataway, NJ 08854
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:7329851770"
                  className="text-sm text-white/80 transition-colors duration-200 hover:text-primary"
                >
                  732-985-1770
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-white/80">732-985-6251</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Hours of Operation
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-white/80">
                  <p>Mon-Fri: 7:30 AM - 4:00 PM</p>
                  <p className="mt-1">Sat &amp; Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Stelton Lumber Company Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
