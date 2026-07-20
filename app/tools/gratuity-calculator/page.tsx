import type { Metadata } from "next";
import GratuityCalculatorClient from "./GratuityCalculatorClient";

const url = "https://dubaiexpattools.vercel.app/tools/gratuity-calculator";

export const metadata: Metadata = {
  title: "UAE Gratuity Calculator 2026 — End of Service Benefits | Dubai Expat Tools",
  description:
    "Calculate your UAE end-of-service gratuity for resignation or termination, based on UAE Labour Law (Federal Law No. 33 of 2021). Free and instant.",
  keywords: "UAE gratuity calculator, end of service benefits UAE, gratuity calculation UAE, UAE labour law gratuity, resignation gratuity UAE",
  alternates: { canonical: url },
  openGraph: {
    title: "UAE Gratuity Calculator 2026 — End of Service Benefits",
    description: "Calculate your end-of-service gratuity for resignation or termination under UAE Labour Law.",
    url,
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

const faqs = [
  {
    q: "How is gratuity calculated in the UAE?",
    a: "Gratuity is based on your basic salary only. You earn 21 days of basic pay per year of service for the first 5 years, and 30 days per year for each year beyond that, up to a cap of 2 years' total salary.",
  },
  {
    q: "Do I still get gratuity if I resign?",
    a: "It depends on your length of service. Under 1 year: no gratuity. 1-3 years: 1/3 of the calculated gratuity. 3-5 years: 2/3. 5+ years: full gratuity. This applies to unlimited contracts under UAE Federal Law No. 33 of 2021.",
  },
  {
    q: "Is gratuity calculated on basic salary or total salary?",
    a: "Basic salary only. Housing, transport, and other allowances are excluded from the gratuity calculation, which is why your basic-to-total salary ratio matters when negotiating a package.",
  },
  {
    q: "Is there a maximum gratuity payout in the UAE?",
    a: "Yes. Total gratuity is capped at two years' worth of salary, regardless of how many years you've worked beyond that.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "UAE Gratuity Calculator",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      description: "Free tool to calculate UAE end-of-service gratuity for resignation or termination, based on UAE Labour Law.",
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

export default function GratuityCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GratuityCalculatorClient />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>
            How UAE gratuity works
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            End-of-service gratuity is a mandatory benefit for private-sector employees in the UAE, governed by
            Federal Law No. 33 of 2021. It rewards years of service and is paid out when your employment ends,
            whether through resignation, termination, or contract expiry. The calculation depends on your basic
            salary, total years of service, and — for resignations — how long you've worked before leaving.
          </p>
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
