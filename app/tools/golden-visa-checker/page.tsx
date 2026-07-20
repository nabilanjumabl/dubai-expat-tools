import type { Metadata } from "next";
import GoldenVisaCheckerClient from "./GoldenVisaCheckerClient";

const url = "https://dubaiexpattools.vercel.app/tools/golden-visa-checker";

export const metadata: Metadata = {
  title: "UAE Golden Visa Eligibility Checker 2026 | Dubai Expat Tools",
  description:
    "Find out if you qualify for the UAE's 10-year Golden Visa in under 2 minutes. Covers investors, professionals, specialised talent and property routes.",
  keywords: "UAE golden visa, golden visa eligibility, UAE golden visa checker, 10 year visa UAE, golden visa requirements UAE",
  alternates: { canonical: url },
  openGraph: {
    title: "UAE Golden Visa Eligibility Checker 2026",
    description: "Find out if you qualify for the UAE's 10-year Golden Visa in under 2 minutes.",
    url,
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the UAE Golden Visa?",
    a: "The Golden Visa is a long-term residence visa, typically valid for 10 years, granted to investors, entrepreneurs, specialised talents, scientists, outstanding students, and select professionals — without needing a national sponsor.",
  },
  {
    q: "Who qualifies for the UAE Golden Visa?",
    a: "Common routes include property investment of AED 2 million or more, business ownership, high-earning professionals in eligible fields, doctors and specialists, engineers and scientists, and holders of PhDs or exceptional academic records.",
  },
  {
    q: "Can I get a Golden Visa without a job?",
    a: "Yes, through the real estate investment route. Owning property worth AED 2 million or more (even without a job in the UAE) can qualify you for a 10-year Golden Visa.",
  },
  {
    q: "How long does the Golden Visa application take?",
    a: "Processing times vary by category, typically ranging from a few days to a few weeks once documents are submitted through GDRFA or the ICP (Federal Authority for Identity, Citizenship, Customs & Port Security).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "UAE Golden Visa Eligibility Checker",
      url,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      description: "Free tool to check eligibility for the UAE's 10-year Golden Visa based on profession, salary, education, and property ownership.",
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

export default function GoldenVisaCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GoldenVisaCheckerClient />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
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
