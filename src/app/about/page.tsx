import type { Metadata } from "next";
import { Building2, Users, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established in 1940 by Carmen J. Perrone, Stelton Lumber is a family-owned and operated business servicing central Jersey for over 83 years.",
  openGraph: {
    title: "About Stelton Lumber Company Inc.",
    description:
      "Established in 1940 by Carmen J. Perrone, Stelton Lumber is a family-owned and operated business servicing central Jersey for over 83 years.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Stelton Lumber"
        description="Family-owned and operated since 1940, serving Central New Jersey for over three generations."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-main">
                Our Story
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              <div className="flex items-start gap-4 rounded-2xl bg-bg p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-text-main">Since 1940</p>
                  <p className="text-sm text-text-muted">Three generations of service</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-bg p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-text-main">Family Owned</p>
                  <p className="text-sm text-text-muted">Locally operated business</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-bg p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-text-main">Expert Staff</p>
                  <p className="text-sm text-text-muted">Knowledgeable &amp; courteous</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
