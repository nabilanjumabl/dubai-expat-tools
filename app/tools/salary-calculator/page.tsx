import type { Metadata } from "next";
import SalaryCalculatorClient from "./SalaryCalculatorClient";

const url = "https://dubaiexpattools.vercel.app/tools/salary-calculator";

export const metadata: Metadata = {
  title: "UAE Salary Calculator 2026 — Take-Home Pay & Gratuity | Dubai Expat Tools",
  description:
    "Free UAE salary calculator. Work out your monthly take-home pay, annual package, and end-of-service gratuity in AED, then convert to INR, PKR, PHP, USD or GBP.",
  keywords:
    "UAE salary calculator, Dubai salary calculator, monthly salary calculator UAE, UAE take home pay, AED to INR salary, AED to PKR salary",
  alternates: { canonical: url },
  openGraph: {
    title: "UAE Salary Calculator 2026 — Take-Home Pay & Gratuity",
    description: "Calculate your monthly take-home pay, annual package, and gratuity in AED, INR, PKR, PHP, USD or GBP.",
    url,
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

const faqs = [
  {
    q: "Is there income tax on salary in the UAE?",
    a: "No. The UAE does not levy personal income tax, so your gross monthly salary is also your net take-home pay, before any voluntary deductions like pension contributions for GCC nationals.",
  },
  {
    q: "What counts toward my UAE salary package?",
    a: "A typical UAE package includes basic salary, housing allowance, transport allowance, and other allowances (education, phone, annual flight tickets, medical top-ups). Employers structure these differently, which is why the split matters.",
  },
  {
    q: "Why does the basic salary matter more than the total package?",
    a: "End-of-service gratuity in the UAE is calculated on basic salary only, not your total package. A lower basic salary (even with a higher total package) usually means a lower gratuity payout.",
  },
  {
    q: "How accurate are the currency conversions?",
    a: "The calculator uses approximate 2026 reference rates for INR, PKR, PHP, USD, and GBP, intended for planning purposes. For exact remittance amounts, check live rates with your bank or exchange house at the time of transfer.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "UAE Salary Calculator",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      description:
        "Free tool to calculate UAE monthly take-home pay, annual package, and end-of-service gratuity, with currency conversion to INR, PKR, PHP, USD and GBP.",
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

export default function SalaryCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SalaryCalculatorClient />
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
