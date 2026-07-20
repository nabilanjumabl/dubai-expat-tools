import type { Metadata } from "next";
import RentEstimatorClient from "./RentEstimatorClient";

const url = "https://dubaiexpattools.vercel.app/tools/rent-estimator";

export const metadata: Metadata = {
  title: "Dubai Rent Estimator 2026 — Average Rent by Neighbourhood | Dubai Expat Tools",
  description:
    "Compare average annual rents across 15+ Dubai neighbourhoods including Marina, Downtown, JVC and Palm Jumeirah. Updated for 2026.",
  keywords: "Dubai rent calculator, Dubai rent by area, Dubai Marina rent, JVC rent, average rent Dubai 2026, Downtown Dubai rent",
  alternates: { canonical: url },
  openGraph: {
    title: "Dubai Rent Estimator 2026 — Average Rent by Neighbourhood",
    description: "Compare average annual rents across 15+ Dubai neighbourhoods, updated for 2026.",
    url,
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

const faqs = [
  {
    q: "What's the cheapest area to rent in Dubai?",
    a: "Budget and affordable areas like International City, Deira, Discovery Gardens, and JVC tend to have the lowest rents, especially for studios and 1-bedroom apartments.",
  },
  {
    q: "How much is rent in Dubai Marina?",
    a: "Dubai Marina is a premium area, with 1-bedroom apartments typically averaging around AED 80,000/year and 2-bedrooms around AED 115,000/year, though exact prices vary by building and view.",
  },
  {
    q: "Are Dubai rents paid monthly or annually?",
    a: "Most residential leases in Dubai are annual contracts, though rent is often split into 1-4 post-dated cheques rather than paid as a single lump sum. Monthly payment plans exist but usually carry a premium.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Dubai Rent Estimator",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      description: "Free tool showing average annual rents across 15+ Dubai neighbourhoods, updated for 2026.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RentEstimatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RentEstimatorClient />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>
            Frequently asked questions
          </h3>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginBottom: "1.1rem" }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-dark)", marginBottom: 4 }}>{f.q}</p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
