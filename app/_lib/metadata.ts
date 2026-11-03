import type { Metadata } from "next";
import {
  defaultTitle,
  metaDescription,
  ogImage,
  siteDescription,
  siteLocale,
  siteName,
  socialHandles,
} from "../_data/site";

type PageMetadataInput = {
  /**
   * Page title. The root layout's title template appends the brand name,
   * unless `absolute` is set.
   */
  title: string;
  /** Route path used for the canonical URL and Open Graph URL. */
  path: string;
  description?: string;
  /** Skip the brand suffix, used for the homepage. */
  absolute?: boolean;
};

/**
 * Builds per-page metadata that inherits `metadataBase` from the root layout.
 * Every page sets its own canonical so no route can inherit the wrong one.
 */
export function pageMetadata({
  title,
  path,
  description = metaDescription,
  absolute = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${siteName}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: siteLocale,
      images: [{ ...ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      site: socialHandles.x,
      creator: socialHandles.x,
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

/** Homepage metadata, using the default title without a brand suffix. */
export const homeMetadata: Metadata = pageMetadata({
  title: defaultTitle,
  path: "/",
  description: siteDescription,
  absolute: true,
});
