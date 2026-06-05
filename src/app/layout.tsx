import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { SiteNavigation } from "@/components/layout/SiteNavigation";

export const metadata: Metadata = {
  title: "Fakhri Fahrezi — Portfolio",
  description:
    "Portfolio of Fakhri Fahrezi, an Information System student focused on web development, business analysis, UI/UX, and AI-powered digital products.",
  openGraph: {
    title: "Fakhri Fahrezi — Portfolio",
    description:
      "Portfolio of Fakhri Fahrezi, an Information System student focused on web development, business analysis, UI/UX, and AI-powered digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
