import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main leading-tight">
            Your One Stop Solution for all your building and repair needs
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl">
            Serving the Central New Jersey area for three generations with the
            highest quality products &amp; service since 1940.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-text-main/10 px-7 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-1"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
