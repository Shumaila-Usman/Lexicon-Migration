import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/navigation";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#063d42",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lexiconmigration.com"), // TODO: Set to production URL
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional guidance for immigration, citizenship, work permits, study visas, visit visas, and travel solutions. Your future starts here.",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Structured eligibility reviews, documentation assistance, and end-to-end support for global mobility goals.",
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full scroll-smooth`}>
      <body className="bg-app-gradient flex min-h-full min-w-0 flex-col overflow-x-clip font-sans text-brand-cream antialiased">
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
