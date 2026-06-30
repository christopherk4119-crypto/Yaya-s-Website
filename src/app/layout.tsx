import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PopupForm from "@/components/ui/popup-form";
import LocalBusinessSchema from "@/components/ui/local-business-schema";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });

const siteUrl = "https://yayacontractor.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YAYA General Contractor Inc. | Electrician, Plumber & Appliance Repair Calgary",
    template: "%s | YAYA General Contractor Inc.",
  },
  description:
    "Experienced electrician, licensed plumber & appliance technician in Calgary, AB. No extra charge for after-hours or emergency calls. Available Mon–Fri 4:30PM–6AM and 24hrs on weekends. Call (403) 400-3055.",
  keywords: [
    "electrician Calgary",
    "plumber Calgary",
    "appliance repair Calgary",
    "emergency electrician Calgary",
    "after hours electrician Calgary",
    "panel upgrade Calgary",
    "YAYA contractor",
    "Yaya electrician",
    "Calgary contractor no extra fee",
  ],
  authors: [{ name: "YAYA General Contractor Inc." }],
  creator: "YAYA General Contractor Inc.",
  publisher: "YAYA General Contractor Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "YAYA General Contractor Inc.",
    title: "YAYA General Contractor Inc. | Electrician, Plumber & Appliance Repair Calgary",
    description:
      "On Call for electrical, plumbing AND appliances. Experienced since 2007. No extra charge after hours. Calgary, AB — (403) 400-3055.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YAYA General Contractor Inc. — Calgary's All-In-One Contractor",
    description: "Experienced electrician, plumber & appliance tech. No after-hours fee. Call (403) 400-3055.",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={inter.className}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "#0a0a0a" }}>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <PopupForm />
        <Script
          id="chatbase-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="txsR2_S6tR3tF8PitJWjY";script.domain="www.chatbase.co";document.body.appendChild(script);script.onload=function(){setTimeout(function(){if(window.chatbase&&window.chatbase("getState")==="initialized"){window.chatbase("open")}},4000)}};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </body>
    </html>
  );
}
