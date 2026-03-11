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

interface ProductCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
  brands?: BrandLink[];
}

const categories: ProductCategory[] = [
  {
    icon: TreePine,
    title: "Lumber & Boards",
    items: [
      "Lumber: Pressure-Treated, Doug Fir, Cedar, Mahogany, Spruce, Fire-Rated, Engineered & Laminated.",
      "Boards: Eastern White Pine (Select & Premium), Idaho Pine, Primed Pine, Oak, Cherry, Maple, PVC Trim.",
    ],
  },
  {
    icon: Home,
    title: "Decking & Porch",
    items: [
      "Materials: Pressure-Treated, Composite, Cedar, IPE, HDPE, PVC, Azek, LEED Certified & Recycled Material.",
      "Brands: Moistureshield, Timbertech, Wolf, Azek, Sylvanix.",
      "Railings: Vinyl, Aluminum, Wooden.",
    ],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    items: [
      "Doors: Interior & Exterior, Wooden, Fiberglass, Metal, Cellar (Gordon, Bilco), Patio, French, Storm (Larson), Solid/Hollow Core, Fire Ratings, Commercial Steel. Custom sizes available. Over 600 interior hollow doors in stock. Brands include Anderson, Thermatru, Masonite.",
      "Windows: Insulated & Clear Glass Repair, Vinyl, Wood, Aluminum, New Construction, Replacement, Roof Windows. Brands include Silverline, Velux, Marvin Integrity, Jeld Wen.",
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
    items: [
      "Mouldings: Wood (any species, Pine stocked), Primed MDF, Flexible, Architectural, S4S, Red Oak, Polystyrene, Polyurethane. Brands include Azek, Spectis, Heritage, Accra, Garden State Lumber, Monteath.",
      "Stair Parts: Treads, Risers, Stringers, Handrails, Balustrades, Spindles (wood/iron), Newels, Fittings.",
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
    items: [
      "Sheet Goods: CDX Fir, AC Pine, Furniture-Grade (Oak, Birch, Cherry, Maple), Lauan, Pressure-Treated, Fire-Rated (In-Stock), MDF (Ultralite, Moisture-resistant, Flame-retardant), Particle Board, Melamine, Beadboard.",
      "Hardware: Screws, nails (Pneumatic, Stainless, Galvanized), Concealed Fastener Systems (Proplug, Mantis, Cortex).",
      "Fencing/Sheds: Cedar boards, PVC boards.",
    ],
  },
  {
    icon: CookingPot,
    title: "Cabinets & Countertops",
    items: [
      "Cabinets: High-quality wooden kitchen cabinets and vanities (Parriott Wood).",
      "Countertops: Formica, Corian, Granite, Silestone.",
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
                  <ul className="mt-5 space-y-3 flex-1">
                    {cat.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-muted leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

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
