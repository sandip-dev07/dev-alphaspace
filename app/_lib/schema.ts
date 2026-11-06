import { services } from "../_data/services";
import { faqs } from "../_data/home";
import { projects } from "../_data/projects";
import {
  absoluteUrl,
  contactEmail,
  foundingDate,
  logoImage,
  ogImage,
  postalAddress,
  siteDescription,
  siteName,
  siteUrl,
  socialLinks,
} from "../_data/site";

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;
export const businessId = `${siteUrl}/#localbusiness`;

const sameAs = socialLinks.map(({ href }) => href);

export const serviceCatalog = services.map(({ id, name, description }) => ({ id, name, description }));

const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteName,
  alternateName: "DevAlphaspace",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: logoImage.url,
    width: logoImage.width,
    height: logoImage.height,
  },
  description: siteDescription,
  foundingDate,
  email: contactEmail,
  address: {
    "@type": "PostalAddress",
    ...postalAddress,
  },
  sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contactEmail,
      url: absoluteUrl("/contact"),
      availableLanguage: ["English"],
    },
  ],
  knowsAbout: serviceCatalog.map(({ name }) => name),
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en",
  publisher: { "@id": organizationId },
};

const professionalService = {
  "@type": "ProfessionalService",
  "@id": businessId,
  name: siteName,
  url: siteUrl,
  image: ogImage.url,
  description: siteDescription,
  email: contactEmail,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...postalAddress,
  },
  areaServed: ["India", "Worldwide"],
  parentOrganization: { "@id": organizationId },
  sameAs,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product and engineering services",
    itemListElement: serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.name,
        provider: { "@id": organizationId },
      },
    })),
  },
};

/** Organization, WebSite, and ProfessionalService as a single linked graph. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, professionalService],
  };
}

/** Services offered, for the services page. */
export function servicesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteName} services`,
    itemListElement: serviceCatalog.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.name,
        url: absoluteUrl(`/services#${service.id}`),
        provider: { "@id": organizationId },
      },
    })),
  };
}

/** Selected projects, described for the work page. */
export function workItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteName} selected work`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        genre: project.category,
        image: absoluteUrl(project.image),
        creator: { "@id": organizationId },
      },
    })),
  };
}

/** FAQPage for pages that render the visible FAQ list. */
export function faqSchema(path = "/", items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}
