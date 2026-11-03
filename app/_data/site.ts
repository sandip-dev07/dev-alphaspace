// Single source of truth for verified, site-wide facts and SEO defaults.

export const siteUrl = "https://devalphaspace.in";
export const siteName = "Dev Alphaspace";
export const siteTagline = "Design, Build & Grow";
export const siteLocale = "en_US";
export const contactEmail = "work@devalphaspace.in";

export const defaultTitle =
  "Dev Alphaspace — Web, App & AI Product Studio";

export const siteDescription =
  "Dev Alphaspace is a product studio in Bengaluru, India. We design, build, and scale web and mobile products, AI features, data solutions, and MVPs.";

export const metaDescription =
  "Dev Alphaspace designs and builds web and mobile products, AI features, data solutions, and MVPs. A product studio based in Bengaluru, India.";

// Verified brand assets published by Dev Alphaspace.
export const ogImage = {
  url: "https://res.cloudinary.com/dcsouj6ix/image/upload/v1745411980/Dev%20Alpha/Screenshot_344_1_bb0bmr.png",
  width: 1200,
  height: 630,
  alt: "Dev Alphaspace — web, app and AI product studio",
  type: "image/png",
};

export const logoImage = {
  url: "https://res.cloudinary.com/dcsouj6ix/image/upload/v1743621210/Dev%20Alpha/logo-dev-alphaspace_xt51fq.png",
  width: 512,
  height: 512,
  alt: "Dev Alphaspace logo",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devalphaspaces",
  },
  { label: "X (Twitter)", href: "https://twitter.com/dev_alphaspace" },
];

export const socialHandles = {
  x: "@dev_alphaspace",
};

export const postalAddress = {
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  addressCountry: "IN",
};

export const foundingDate = "2023";

export const keywords = [
  "product studio",
  "UI/UX design",
  "web development",
  "mobile app development",
  "AI product development",
  "data solutions",
  "MVP development",
  "Next.js development",
  "React development",
  "software development India",
  "hire designers and engineers",
  "Bengaluru",
  "Karnataka",
];

// Bump when page content meaningfully changes; feeds sitemap lastModified.
export const contentUpdated = "2026-11-03";

export const sitemapRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/hire-talent", priority: 0.8, changeFrequency: "monthly" },
  { path: "/approach", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
