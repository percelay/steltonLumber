import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  heading?: string;
  description?: string;
}

export default function CtaBanner({
  heading = "Ready to Start Your Project?",
  description = "Our friendly, courteous, and knowledgeable staff is ready to help you build on your ideas with competitive prices and expert advice.",
}: CtaBannerProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
          {heading}
        </h2>
        <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
          {description}
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
  );
}
