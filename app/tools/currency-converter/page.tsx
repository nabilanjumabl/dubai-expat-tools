import type { Metadata } from "next";
import CurrencyConverterClient from "./CurrencyConverterClient";

const url = "https://dubaiexpattools.vercel.app/tools/currency-converter";

export const metadata: Metadata = {
  title: "AED Currency Converter — Live UAE Dirham Exchange Rates | Dubai Expat Tools",
  description:
    "Convert AED to PKR, INR, PHP, USD, GBP and 5 more currencies with live exchange rates. Free tool for UAE expats sending money home.",
  keywords: "AED to PKR, AED to INR, AED converter, UAE dirham exchange rate, currency converter UAE, dirham to rupee",
  alternates: { canonical: url },
  openGraph: {
    title: "AED Currency Converter — Live UAE Dirham Exchange Rates",
    description: "Convert AED to PKR, INR, PHP, USD, GBP and more with live exchange rates.",
    url,
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the AED to PKR exchange rate?",
    a: "The AED to PKR rate fluctuates with the Pakistani Rupee's movement against the US Dollar, since AED is pegged to USD. Use the live rate shown in the converter above for the current figure.",
  },
  {
    q: "Is the AED pegged to the US Dollar?",
    a: "Yes. The UAE Dirham has been pegged to the US Dollar at a fixed rate of 3.6725 since 1997, making it one of the most stable currencies in the world.",
  },
  {
    q: "What's the best way to send money from the UAE to India or Pakistan?",
    a: "Licensed exchange houses and bank transfers typically offer better rates than card-based remittance apps for larger amounts. Compare rates across 2-3 providers before transferring, since spreads vary.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "AED Currency Converter",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      description: "Free tool to convert UAE Dirhams (AED) to PKR, INR, PHP, USD, GBP and 5 more currencies with live rates.",
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

export default function CurrencyConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CurrencyConverterClient />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
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
