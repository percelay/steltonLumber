import type { Metadata } from "next";
import { MapPin, Phone, Printer, Clock, Navigation } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Stelton Lumber at 1354 Stelton Road, Piscataway, NJ 08854. Call 732-985-1770. Open Mon-Fri 7:30 AM - 4:00 PM.",
  openGraph: {
    title: "Contact | Stelton Lumber Company Inc.",
    description:
      "Contact Stelton Lumber at 1354 Stelton Road, Piscataway, NJ 08854. Call 732-985-1770. Open Mon-Fri 7:30 AM - 4:00 PM.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We're here to help with your next building or repair project. Reach out today."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Address */}
            <div className="rounded-2xl bg-bg p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 font-heading text-lg font-semibold text-text-main">
                Address
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                1354 Stelton Road
                <br />
                Piscataway, NJ 08854
              </p>
              <a
                href="https://www.google.com/maps?ll=40.539468,-74.42297&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=15884221423351625199"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary/80"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Phone & Fax */}
            <div className="rounded-2xl bg-bg p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 font-heading text-lg font-semibold text-text-main">
                Phone &amp; Fax
              </h2>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="tel:7329851770"
                    className="text-text-muted transition-colors duration-200 hover:text-primary"
                  >
                    732-985-1770
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Printer className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-text-muted">732-985-6251</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-bg p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 font-heading text-lg font-semibold text-text-main">
                Hours of Operation
              </h2>
              <div className="mt-3 space-y-2 text-text-muted">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-text-main">7:30 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday &amp; Sunday</span>
                  <span className="font-medium text-text-main">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
