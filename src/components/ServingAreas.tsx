import { MapPin } from "lucide-react";

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

export default function ServingAreas() {
  return (
    <section id="service-areas" className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main">
            Serving Areas
          </h2>
          <p className="mt-4 text-text-muted text-lg">
            Proudly serving communities across Central New Jersey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {counties.map((county) => (
            <div
              key={county.name}
              className="rounded-2xl bg-surface p-8 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-text-main">
                  {county.name}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {county.towns.map((town) => (
                  <span
                    key={town}
                    className="rounded-lg bg-bg px-3 py-1.5 text-sm text-text-muted"
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
  );
}
