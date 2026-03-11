import { Scissors, Truck, DoorOpen, Fence } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Cutting Services",
    description:
      "Professional cutting services for lumber, plywood, and other materials to meet your exact specifications.",
  },
  {
    icon: Truck,
    title: "Delivery Service",
    description:
      "Prompt delivery across our service areas for large and small orders to keep your project on schedule.",
  },
  {
    icon: DoorOpen,
    title: "Door Prehanging & Custom Fitting",
    description:
      "In-house door machine to prehang interior doors from stock quickly, specializing in custom heights often needed for basement remodeling.",
  },
  {
    icon: Fence,
    title: "Deck Project Planning",
    description:
      "We discuss your entire project, provide take-home color samples, and create comprehensive material lists for framing, fasteners, layouts, and rails.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg py-20 sm:py-24">
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
          {services.map((service) => {
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
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
