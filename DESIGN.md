# Dev Alphaspace redesign

## Source and scope
Source: https://www.devalphaspace.in/ — retrieved November 3, 2026 with Firecrawl (markdown, branding, screenshot). This is a new design direction implemented in the existing local Next.js checkout, not a reproduction or deployment.

The branding extraction reports orange #FF5F2D, dark #0F051D, background #F7F7F7, Inter body and Poppins heading fonts. Extracted font roles are inconsistent with returned font stacks, so exact typography is not asserted. Screenshot was returned but not visually inspected; no claims of visual fidelity are made.

Retained: orange arrow logo geometry, organization name, published work@devalphaspace.in contact, Slugy and Kusum Palace portfolio projects. Local project images come from /images/project1.webp on the source domain and https://res.cloudinary.com/dcsouj6ix/image/upload/v1745388154/Dev%20Alpha/11_hyxkct.png.

## Proposed design system
- Warm ivory #F8F7F3 background, charcoal #24251F text, burnt orange #EC572B action color, dark olive #292E25 panels, pale sage #D6DFB5 accents.
- Arial/Helvetica display and body, italic Georgia for expressive phrases, existing Geist Mono for small labels.
- Max-width 1280px container, 56px desktop side gutters, 20px on mobile; generous section spacing and thin neutral rules.
- Oversized editorial heading, bespoke CSS product-workspace illustration, numbered service grid, real project imagery, distinct hiring panel, four-step process, native accessible FAQ disclosures, email contact.
- Compact 4–5px corner radii; avoid generic floating rounded cards, gradients, inflated metrics, and invented testimonials.
- Responsive layouts at 1100, 800 and 480px. Reduced motion and keyboard focus support.

## Behavior
Section navigation and native mobile menu/FAQ disclosures require no client JavaScript. Service and hiring links compose enquiries to the published email; this is an enquiry-led hiring entry point, not an implemented talent marketplace. Slugy opens the published external product URL. No invented applicant records, client metrics, or hiring availability claims.


## Featherflow-inspired refinement ? November 3, 2026

Reference: https://featherflow.com/. Inspected Firecrawl full-page screenshot saved in `.design/featherflow.png`, alongside branding and page-content extraction. The reference uses open white space, a product-image strip near the hero, a compact services explorer, soft neutral panels, and stacked process cards. Extracted colors: #6160FF accent, #151526 text, #FFFFFF background; reported typography: Manrope. These are reference values, not adopted tokens. Navigation was not visible in the screenshot, so the existing independently designed sticky navigation is retained.

Adaptation: warm ivory and orange identity retained; existing Geist used for body type; two-column editorial hero with original copy and real Slugy/Kusum Palace previews; keyboard-operable service buttons with a live detail panel; softer portfolio and hiring panels; two-column process cards; muted final contact section. Component-specific hero/services styles use CSS Modules. Shared lower-page refinements live in app/studio.css. No Featherflow client claims, imagery, testimonials, pricing, or wording reused. Responsive breakpoints are implementation choices, not measured reference values.


## Horizontal project showcase
Expanded the shared project data from https://www.devalphaspace.in/projects: Slugy, Indohype website, Indohype App, Kusum Palace App, Event Wizard, and Hotel Kusum Palace website. Four additional source images are stored in public/projects. The hero uses a continuous native-scroll carousel inspired by the previously inspected Featherflow product strip, with pause/play, previous/next controls, touch scrolling, focus/hover pause, and reduced-motion support. Duplicate slides are inert and hidden from assistive technology. The work section uses the same six project records. No unverified external product URLs added.
