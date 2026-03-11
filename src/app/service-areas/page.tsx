import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Stelton Lumber serves Middlesex County, Union County, and Somerset County in Central New Jersey with delivery and building supplies.",
  openGraph: {
    title: "Service Areas | Stelton Lumber Company Inc.",
    description:
      "Stelton Lumber serves Middlesex County, Union County, and Somerset County in Central New Jersey with delivery and building supplies.",
  },
};

interface County {
  name: string;
  towns: string[];
}

const counties: County[] = [
  {
    name: "Middlesex County",
    towns: [
      "Old Bridge", "Spotswood", "South River", "Parlin", "Sayreville",
      "East Brunswick", "New Brunswick", "South Brunswick", "North Brunswick",
      "South Amboy", "Monroe Twp.", "Milltown", "Perth Amboy", "Edison",
      "Metuchen", "Woodbridge", "Cranbury", "Iselin", "Piscataway",
      "South Plainfield", "Carteret",
    ],
  },
  {
    name: "Union County",
    towns: [
      "Rahway", "Clark", "Plainfield", "Linden", "Scotch Plains", "Fanwood",
      "Cranford", "Westfield",
    ],
  },
  {
    name: "Somerset County",
    towns: [
      "Bound Brook", "Rocky Hill", "Belle Mead", "Hillsborough",
      "Bridgewater", "Basking Ridge", "Bernardsville",
    ],
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader
        title="Serving Areas"
        description="Proudly serving communities across Central New Jersey."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {counties.map((county) => (
              <div
                key={county.name}
                className="rounded-2xl bg-bg p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="font-heading text-lg font-semibold text-text-main">
                    {county.name}
                  </h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {county.towns.map((town) => (
                    <span
                      key={town}
                      className="rounded-lg bg-surface px-3 py-1.5 text-sm text-text-muted"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
