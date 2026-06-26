import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PopupForm from "@/components/ui/popup-form";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "YAYA General Contractor Inc. — Calgary's All-In-One Electrical, Plumbing & Appliance Specialist",
  description: "Certified electrician, licensed plumber & appliance technician in Calgary, AB. No extra charge for after-hours or emergency calls. Certified since 2007. Call (403) 400-3055.",
  keywords: ["electrician Calgary", "plumber Calgary", "appliance repair Calgary", "emergency electrician", "YAYA contractor"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full flex flex-col" style={{ background: "#0a0a0a" }}>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  );
}
