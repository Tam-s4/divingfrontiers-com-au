import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Diving Frontiers",
    default: "Diving Frontiers – The Complete Guide to Scuba Diving in Perth",
  },
  description:
    "Diving Frontiers is Perth's trusted destination for scuba diving courses, dive charters to Rottnest Island, dive travel, equipment and servicing. SSI Instructor Training Centre, Balcatta WA. Est. 1993.",
  openGraph: {
    siteName: "Diving Frontiers",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
