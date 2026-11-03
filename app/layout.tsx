import type { Metadata, Viewport } from "next";
import SiteHeader from "./_components/site-header";
import SiteFooter from "./_components/site-footer";
import JsonLd from "./_components/json-ld";
import { Geist, Geist_Mono } from "next/font/google";
import {
  defaultTitle,
  keywords,
  logoImage,
  metaDescription,
  ogImage,
  siteLocale,
  siteName,
  siteUrl,
  socialHandles,
} from "./_data/site";
import { siteGraph } from "./_lib/schema";
import "./globals.css";
import "./studio.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,
  applicationName: siteName,
  keywords: keywords.join(", "),
  category: "Software Development",
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    siteName,
    locale: siteLocale,
    url: "/",
    title: defaultTitle,
    description: metaDescription,
    images: [{ ...ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    site: socialHandles.x,
    creator: socialHandles.x,
    title: defaultTitle,
    description: metaDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    apple: [{ url: logoImage.url, sizes: "180x180", type: "image/png" }],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={siteGraph()} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
