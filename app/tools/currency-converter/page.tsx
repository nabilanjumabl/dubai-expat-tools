import type { Metadata } from "next";
import CurrencyConverterClient from "./CurrencyConverterClient";

const url = "https://dubaiexpattools.vercel.app/tools/currency-converter";

export const metadata: Metadata = {
  title: "AED to PKR, INR, PHP — Live Dirham Exchange Rates Today | Dubai Expat Tools",
  description:
    "Live AED to PKR, INR, PHP, USD & GBP exchange rates — updated today. Convert UAE Dirhams instantly with our free currency converter for expats sending money home.",
  keywords:
    "AED to PKR, AED to INR, AED to PHP, AED converter, UAE dirham exchange rate, currency converter UAE, dirham to rupee, live currency rates pakistan uae dirham, dubai currency converter india, aed money converter",
  alternates: { canonical: url },
  openGraph: {
    title: "AED to PKR, INR, PHP — Live Dirham Exchange Rates Today",
    description:
      "Live AED to PKR, INR, PHP, USD & GBP rates — updated today. Free currency converter for UAE expats sending money home.",
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
    q: "How much is 1000 AED in Pakistani Rupees?",
    a: "At our reference rate of 75.32 PKR per AED (7 October 2026), 1000 AED equals about 75,320 PKR. The Rupee floats against the US Dollar, and since the Dirham is pegged to the Dollar, the AED to PKR rate moves daily. Use the live converter above for today's exact figure before you transfer.",
  },
  {
    q: "How much is 1000 AED in Indian Rupees?",
    a: "At our reference rate of 26.27 INR per AED (7 October 2026), 1000 AED equals about 26,270 INR. Exchange houses in the UAE usually add a small margin over the mid-market rate, so compare two or three providers for larger transfers. The live converter above always shows the current mid-market figure.",
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

// Indicative reference rates (mid-market), date-stamped. Live rates shown in the converter above.
const REFERENCE_DATE = "7 October 2026";
const pairs = [
  {
    id: "aed-to-pkr",
    h2: "AED to PKR — UAE Dirham to Pakistani Rupee",
    intro:
      "The AED to PKR pair is the most-searched dirham conversion among UAE expats — queries like “live currency rates in Pakistan UAE dirham” and “aed money converter” spike every month around salary week. Because the Dirham is pegged to the US Dollar, the AED/PKR rate simply mirrors USD/PKR: when the Rupee weakens against the Dollar, each Dirham buys more Rupees.",
    rate: 75.32,
    code: "PKR",
    amounts: [100, 500, 1000, 5000, 10000],
  },
  {
    id: "aed-to-inr",
    h2: "AED to INR — UAE Dirham to Indian Rupee",
    intro:
      "Indians are the UAE's largest expat community, so “dubai currency converter india” is one of the most searched converter queries in the country. The Rupee moves against the Dollar-pegged Dirham daily, and most Indian expats compare bank transfer rates against exchange-house cash rates before remitting.",
    rate: 26.27,
    code: "INR",
    amounts: [100, 500, 1000, 5000, 10000],
  },
  {
    id: "aed-to-php",
    h2: "AED to PHP — UAE Dirham to Philippine Peso",
    intro:
      "Filipino expats — one of the UAE's largest expat groups — regularly check AED to PHP rates to time their remittances home. The Peso floats freely, so the rate shifts with USD/PHP movements and market sentiment.",
    rate: 17.1,
    code: "PHP",
    amounts: [100, 500, 1000, 5000, 10000],
  },
];

function PairTable({ rate, code, amounts }: { rate: number; code: string; amounts: number[] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, marginTop: "1rem" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "2px solid var(--border)", color: "var(--navy)", fontWeight: 600 }}>Amount (AED)</th>
          <th style={{ textAlign: "right", padding: "10px 12px", borderBottom: "2px solid var(--border)", color: "var(--navy)", fontWeight: 600 }}>You get ({code})</th>
        </tr>
      </thead>
      <tbody>
        {amounts.map((amt) => (
          <tr key={amt}>
            <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}>{amt.toLocaleString()} AED</td>
            <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--border)", textAlign: "right", fontWeight: 600, color: "var(--text-dark)" }}>
              {(amt * rate).toLocaleString("en", { maximumFractionDigits: 0 })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
      description: "Free tool to convert UAE Dirhams (AED) to PKR, INR, PHP, USD, GBP and more currencies with live rates.",
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
        {pairs.map((p) => (
          <div key={p.id} id={p.id} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "0.75rem" }}>{p.h2}</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{p.intro}</p>
            <PairTable rate={p.rate} code={p.code} amounts={p.amounts} />
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: "0.75rem", marginBottom: 0 }}>
              Indicative reference rates as of {REFERENCE_DATE} (1 AED = {p.rate} {p.code}). Check the live converter above for today&apos;s exact rate.
            </p>
          </div>
        ))}
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
