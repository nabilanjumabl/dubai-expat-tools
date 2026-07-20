import type { Metadata } from "next";
import VATCalculatorClient from "./VatCalculatorClient";

const url = "https://dubaiexpattools.vercel.app/tools/vat-calculator";

export const metadata: Metadata = {
  title: "UAE VAT Calculator — Add or Remove 5% VAT Instantly | Dubai Expat Tools",
  description:
    "Free UAE VAT calculator. Add 5% VAT to a price or extract VAT from a VAT-inclusive amount in seconds. Built for UAE businesses, freelancers, and individuals.",
  keywords: "UAE VAT calculator, Dubai VAT calculator, 5% VAT UAE, add VAT UAE, remove VAT UAE, reverse VAT calculator",
  alternates: { canonical: url },
  openGraph: {
    title: "UAE VAT Calculator — Add or Remove 5% VAT Instantly",
    description: "Add 5% VAT to a price or extract VAT from a VAT-inclusive amount in seconds. Free, no sign-up.",
    url,
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the VAT rate in the UAE?",
    a: "The UAE applies a standard Value Added Tax (VAT) rate of 5% on most goods and services, in effect since January 1, 2018.",
  },
  {
    q: "How do I add VAT to a price in the UAE?",
    a: "Multiply the price before VAT by 1.05 to get the VAT-inclusive total. For example, AED 1,000 becomes AED 1,050 after adding 5% VAT.",
  },
  {
    q: "How do I remove VAT from a total price?",
    a: "Divide the VAT-inclusive total by 1.05 to get the price before VAT. For example, AED 1,050 divided by 1.05 gives a pre-VAT price of AED 1,000.",
  },
  {
    q: "Are all goods and services in the UAE subject to VAT?",
    a: "No. Some categories, such as certain healthcare, education, and residential real estate transactions, are zero-rated or exempt. Most retail, dining, and professional services are subject to the standard 5% rate.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "UAE VAT Calculator",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      description: "Free tool to add or remove UAE's 5% VAT from any price instantly.",
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

export default function VATCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VATCalculatorClient />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>
            Understanding UAE VAT
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            The UAE introduced a standard 5% Value Added Tax on January 1, 2018, applying to most goods and services
            sold within the country. Businesses registered for VAT must charge it on taxable supplies and can
            usually reclaim VAT paid on business expenses. This calculator helps you quickly add VAT to a
            pre-tax price, or work backwards from a VAT-inclusive total to find the original price.
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
