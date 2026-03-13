import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import { ArrowRight, Scissors, Truck, DoorOpen, Fence } from "lucide-react";

const serviceHighlights = [
  { icon: Scissors, title: "Cutting Services" },
  { icon: Truck, title: "Delivery Service" },
  { icon: DoorOpen, title: "Door Prehanging & Custom Fitting" },
  { icon: Fence, title: "Deck Project Planning" },
];

const productHighlights = [
  "Lumber & Boards",
  "Decking & Porch",
  "Doors & Windows",
  "Mouldings & Stair Parts",
  "Sheet Goods & Hardware",
  "Cabinets & Countertops",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
                About Stelton Lumber
              </h2>
              <p className="mt-6 text-text-muted text-lg leading-relaxed">
                Established in 1940 by Carmen J. Perrone, Stelton Lumber is a
                family-owned and operated business servicing central Jersey for
                over 83 years. We service commercial and industrial contractors,
                home owners, and remodelers.
              </p>
              <p className="mt-4 text-text-muted text-lg leading-relaxed">
                Our friendly, courteous, and knowledgeable staff is ready to help
                you build on your ideas with competitive prices and expert advice.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold transition-colors duration-200 hover:text-primary/80"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/storefront.png"
                alt="Stelton Lumber storefront"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
              Our Services
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              Professional building supply services to support your project from
              start to finish.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl bg-bg border border-surface p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-text-main">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold transition-colors duration-200 hover:text-primary/80"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
              Our Products
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              A comprehensive selection of building materials for every project.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {productHighlights.map((name) => (
              <span
                key={name}
                className="rounded-xl bg-bg px-6 py-3 text-sm font-medium text-text-main shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold transition-colors duration-200 hover:text-primary/80"
            >
              Browse all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Our friendly, courteous, and knowledgeable staff is ready to help
            you build on your ideas with competitive prices and expert advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:7329851770"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-text-main/10 px-7 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-1"
            >
              Call 732-985-1770
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
