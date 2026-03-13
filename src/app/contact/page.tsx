import type { Metadata } from "next";
import { MapPin, Phone, Printer, Clock, Navigation, Send } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

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

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
                Send Us a Message
              </h2>
              <p className="mt-3 text-text-muted text-lg mb-10">
                Have a question about a product or need a quote? Fill out the form below and we&apos;ll get back to you.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
                Find Us
              </h2>
              <p className="mt-3 text-text-muted text-lg mb-10">
                1354 Stelton Road, Piscataway, NJ 08854
              </p>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <iframe
                  title="Stelton Lumber location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d-74.42297!3d40.539468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7f61cdca3cb%3A0xdc701739f085f5ef!2sStelton%20Lumber%20Co!5e0!3m2!1sen!2sus!4v1710000000000"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
