import type { Metadata } from "next";
import Image from "next/image";
import {
  TreePine,
  Home,
  DoorOpen,
  Layers,
  Grid3X3,
  CookingPot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Lumber, boards, decking, doors, windows, mouldings, stair parts, sheet goods, hardware, cabinets, and countertops at Stelton Lumber.",
  openGraph: {
    title: "Products | Stelton Lumber Company Inc.",
    description:
      "Lumber, boards, decking, doors, windows, mouldings, stair parts, sheet goods, hardware, cabinets, and countertops at Stelton Lumber.",
  },
};

interface BrandLink {
  name: string;
  logo: string;
  url: string;
}

interface SubSection {
  label: string;
  details: string[];
}

interface ProductCategory {
  icon: LucideIcon;
  title: string;
  subsections: SubSection[];
  brands?: BrandLink[];
}

const categories: ProductCategory[] = [
  {
    icon: TreePine,
    title: "Lumber & Boards",
    subsections: [
      {
        label: "Lumber",
        details: [
          "Pressure-Treated",
          "Doug Fir",
          "Cedar",
          "Mahogany",
          "Spruce",
          "Fire-Rated",
          "Engineered & Laminated",
        ],
      },
      {
        label: "Boards",
        details: [
          "Eastern White Pine (Select & Premium)",
          "Idaho Pine",
          "Primed Pine",
          "Oak",
          "Cherry",
          "Maple",
          "PVC Trim",
        ],
      },
    ],
  },
  {
    icon: Home,
    title: "Decking & Porch",
    subsections: [
      {
        label: "Materials",
        details: [
          "Pressure-Treated",
          "Composite",
          "Cedar",
          "IPE",
          "HDPE",
          "PVC",
          "Azek",
          "LEED Certified & Recycled Material",
        ],
      },
      {
        label: "Brands",
        details: [
          "Moistureshield",
          "Timbertech",
          "Wolf",
          "Azek",
          "Sylvanix",
        ],
      },
      {
        label: "Railings",
        details: ["Vinyl", "Aluminum", "Wooden"],
      },
    ],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    subsections: [
      {
        label: "Doors",
        details: [
          "Interior & Exterior",
          "Wooden, Fiberglass, Metal",
          "Cellar (Gordon, Bilco)",
          "Patio & French",
          "Storm (Larson)",
          "Solid/Hollow Core",
          "Fire Ratings & Commercial Steel",
          "Custom sizes available",
          "Over 600 interior hollow doors in stock",
        ],
      },
      {
        label: "Windows",
        details: [
          "Insulated & Clear Glass Repair",
          "Vinyl, Wood, Aluminum",
          "New Construction & Replacement",
          "Roof Windows",
          "Brands: Silverline, Velux, Marvin Integrity, Jeld Wen",
        ],
      },
    ],
    brands: [
      {
        name: "Masonite",
        logo: "/logos/masonite.svg",
        url: "https://www.masonite.com/catalogs/",
      },
      {
        name: "Therma-Tru",
        logo: "/logos/therma-tru.svg",
        url: "https://www.thermatru.com/explore-products/door-collections/",
      },
      {
        name: "Gordon Cellar Doors",
        logo: "/logos/gordon.svg",
        url: "https://www.gordoncelladoor.com/",
      },
      {
        name: "Larson Storm Doors",
        logo: "/logos/larson.svg",
        url: "https://www.larsondoors.com/storm-doors",
      },
    ],
  },
  {
    icon: Layers,
    title: "Mouldings & Stair Parts",
    subsections: [
      {
        label: "Mouldings",
        details: [
          "Wood (any species, Pine stocked)",
          "Primed MDF",
          "Flexible & Architectural",
          "S4S & Red Oak",
          "Polystyrene & Polyurethane",
        ],
      },
      {
        label: "Stair Parts",
        details: [
          "Treads, Risers, Stringers",
          "Handrails & Balustrades",
          "Spindles (wood/iron)",
          "Newels & Fittings",
        ],
      },
    ],
    brands: [
      {
        name: "Garden State Lumber",
        logo: "/logos/garden-state-lumber.svg",
        url: "https://www.gardenstatelumber.com/products-programs/stock-mouldings/",
      },
      {
        name: "Monteath",
        logo: "/logos/monteath.svg",
        url: "https://www.monteath.com/moulding.html",
      },
      {
        name: "Azek",
        logo: "/logos/azek.svg",
        url: "https://azekexteriors.com/products/moulding",
      },
    ],
  },
  {
    icon: Grid3X3,
    title: "Sheet Goods & Hardware",
    subsections: [
      {
        label: "Sheet Goods",
        details: [
          "CDX Fir & AC Pine",
          "Furniture-Grade (Oak, Birch, Cherry, Maple)",
          "Lauan & Pressure-Treated",
          "Fire-Rated (In-Stock)",
          "MDF (Ultralite, Moisture-resistant, Flame-retardant)",
          "Particle Board, Melamine, Beadboard",
        ],
      },
      {
        label: "Hardware",
        details: [
          "Screws & Nails (Pneumatic, Stainless, Galvanized)",
          "Concealed Fastener Systems (Proplug, Mantis, Cortex)",
        ],
      },
      {
        label: "Fencing & Sheds",
        details: ["Cedar boards", "PVC boards"],
      },
    ],
  },
  {
    icon: CookingPot,
    title: "Cabinets & Countertops",
    subsections: [
      {
        label: "Cabinets",
        details: [
          "High-quality wooden kitchen cabinets",
          "Vanities (Parriott Wood)",
        ],
      },
      {
        label: "Countertops",
        details: ["Formica", "Corian", "Granite", "Silestone"],
      },
    ],
    brands: [
      {
        name: "Parriott Wood",
        logo: "/logos/parriott-wood.svg",
        url: "https://parriottwood.com",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="A comprehensive selection of building materials for every project."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="group flex flex-col rounded-2xl bg-bg p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-heading text-lg font-semibold text-text-main">
                      {cat.title}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-4 flex-1">
                    {cat.subsections.map((sub) => (
                      <div key={sub.label}>
                        <h3 className="text-sm font-bold text-text-main mb-1.5">
                          {sub.label}
                        </h3>
                        <ul className="space-y-1">
                          {sub.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-text-muted leading-relaxed"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {cat.brands && cat.brands.length > 0 && (
                    <div className="mt-6 border-t border-surface pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted/60 mb-3">
                        Featured Brands
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        {cat.brands.map((brand) => (
                          <a
                            key={brand.name}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={brand.name}
                            className="rounded-lg border border-surface bg-surface/50 p-2 transition-all duration-200 hover:border-primary/30 hover:shadow-sm grayscale hover:grayscale-0"
                          >
                            <Image
                              src={brand.logo}
                              alt={brand.name}
                              width={100}
                              height={28}
                              className="h-7 w-auto"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
