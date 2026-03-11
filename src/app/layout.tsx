import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stelton Lumber Company Inc. | Building & Repair Supplies Since 1940",
    template: "%s | Stelton Lumber Company Inc.",
  },
  description:
    "Serving the Central New Jersey area for three generations with the highest quality lumber, building materials, and expert service since 1940.",
  openGraph: {
    title: "Stelton Lumber Company Inc. | Building & Repair Supplies Since 1940",
    description:
      "Serving the Central New Jersey area for three generations with the highest quality lumber, building materials, and expert service since 1940.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
