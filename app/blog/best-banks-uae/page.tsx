import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Banks in UAE for Expats 2026 — Full Comparison | Dubai Expat Tools",
  description: "Compare the best banks in UAE for expats in 2026: Emirates NBD, FAB, ADCB, Mashreq Neo, and ENBD digital. Account opening, fees, minimum balance, and remittance rates compared.",
  keywords: "best bank UAE expats 2026, Emirates NBD expat account, FAB account UAE, ADCB expat, Mashreq Neo, open bank account UAE, UAE bank comparison",
};

const banks = [
  {
    name: "Emirates NBD",
    tag: "Most popular",
    tagColor: { bg: "#E6F7F4", color: "var(--teal)" },
    minBalance: "AED 3,000 – 5,000",
    monthlyFee: "AED 25 if below min balance",
    openOnline: true,
    remittance: "Good rates via ENBD app",
    pros: ["Largest ATM network in UAE (2,800+)", "Excellent mobile app", "Good remittance rates to India, Pakistan, Philippines", "Free debit card", "Widely accepted"],
    cons: ["Minimum balance requirement", "Customer service can be slow", "Charges for some international transfers"],
    rating: 4.2,
    best_for: "General use, long-term residents",
  },
  {
    name: "First Abu Dhabi Bank (FAB)",
    tag: "Best for savings",
    tagColor: { bg: "#EFF6FF", color: "#1E40AF" },
    minBalance: "AED 3,000",
    monthlyFee: "AED 25 if below min balance",
    openOnline: true,
    remittance: "Competitive for GCC transfers",
    pros: ["High savings interest rates", "Good for Abu Dhabi residents", "Strong digital banking", "FAB iSave account earns up to 4.5% AER", "Corporate salary accounts"],
    cons: ["Fewer ATMs than ENBD", "Less useful in Dubai for day-to-day", "App rated slightly lower"],
    rating: 4.0,
    best_for: "Abu Dhabi residents, savers",
  },
  {
    name: "ADCB (Abu Dhabi Commercial Bank)",
    tag: "Best service",
    tagColor: { bg: "#F3F4F6", color: "#374151" },
    minBalance: "AED 3,000",
    monthlyFee: "AED 25 if below min balance",
    openOnline: false,
    remittance: "Decent rates, Touchpoints rewards",
    pros: ["Award-winning customer service", "Touchpoints rewards programme", "Good mortgage products", "Clear fee structure"],
    cons: ["Must visit branch to open account", "Fewer ATMs", "Remittance fees higher than Mashreq"],
    rating: 4.1,
    best_for: "Abu Dhabi residents, mortgage seekers",
  },
  {
    name: "Mashreq Neo",
    tag: "100% digital",
    tagColor: { bg: "#FEF3C7", color: "#92400E" },
    minBalance: "AED 0",
    monthlyFee: "AED 0",
    openOnline: true,
    remittance: "Best app-based remittance in UAE",
    pros: ["Zero minimum balance", "Free account maintenance", "Open in 10 minutes on your phone", "Best-in-class remittance app", "Instant transfers to 50+ countries"],
    cons: ["Fully digital — no branches", "No physical cheque book", "Salary transfer may be needed for some accounts", "Limited credit products"],
    rating: 4.5,
    best_for: "New arrivals, remittance-heavy users, digitally savvy",
  },
  {
    name: "RAKBank",
    tag: "Budget friendly",
    tagColor: { bg: "#D1FAE5", color: "#065F46" },
    minBalance: "AED 0 (RAKstarter)",
    monthlyFee: "AED 0 – 10",
    openOnline: true,
    remittance: "Good rates to South Asia",
    pros: ["RAKstarter account — no minimum balance", "Low fees overall", "Good for blue-collar workers and lower salary bands", "Quick account opening", "Good customer reviews"],
    cons: ["Smaller network", "Less premium feel", "Fewer investment products"],
    rating: 3.9,
    best_for: "Budget-conscious expats, new salary earners",
  },
];

export default function BestBanksUAE() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</Link> →{" "}
        <Link href="/blog" style={{ color: "var(--teal)", textDecoration: "none" }}>Blog</Link> → Best Banks in UAE 2026
      </p>

      <span style={{ fontSize: 11, background: "#EFF6FF", color: "#1E40AF", padding: "4px 12px", borderRadius: 20, fontWeight: 600 }}>Finance guide</span>

      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--navy)", margin: "1rem 0 0.75rem", lineHeight: 1.2, letterSpacing: "-0.5px" }}>
        Best Banks in UAE for Expats — 2026 Comparison
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: 14 }}>May 8, 2026 · 5 min read</p>

      <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, margin: "1.5rem 0", borderLeft: "3px solid var(--gold)", paddingLeft: "1rem" }}>
        Opening a bank account is one of the first things you need to do when you arrive in the UAE — you need it to receive your salary, pay rent, and send money home. We compared the 5 most popular options for expats based on fees, ease of opening, and remittance rates.
      </p>

      <div style={{ background: "#E6F7F4", border: "1px solid #B2E8DC", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
        <p style={{ fontSize: 13, color: "var(--teal)", fontWeight: 500, margin: 0 }}>
          💡 <strong>Quick verdict:</strong> New to UAE? Open Mashreq Neo online in 10 minutes — zero minimum balance, zero fees. Been here a while? Emirates NBD for the widest ATM coverage. Saving aggressively? FAB iSave for the best interest rate.
        </p>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "0 0 1.5rem" }}>The 5 best banks for UAE expats</h2>

      {banks.map((bank, i) => (
        <div key={i} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "1.75rem", marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--navy)", margin: "0 0 4px" }}>{bank.name}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>Best for: {bank.best_for}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: bank.tagColor.bg, color: bank.tagColor.color }}>{bank.tag}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>★ {bank.rating}/5</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 14 }}>
            {[["Min. balance", bank.minBalance], ["Monthly fee", bank.monthlyFee], ["Online opening", bank.openOnline ? "✅ Yes" : "❌ Branch needed"]].map(([label, val]) => (
              <div key={label} style={{ background: "var(--cream, #FAF7F2)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.75rem" }}>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--navy)" }}>{val}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--teal)", marginBottom: 6 }}>✓ Pros</div>
              {bank.pros.map((p, j) => <div key={j} style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, paddingBottom: 2 }}>• {p}</div>)}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#DC2626", marginBottom: 6 }}>✗ Cons</div>
              {bank.cons.map((c, j) => <div key={j} style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, paddingBottom: 2 }}>• {c}</div>)}
            </div>
          </div>
        </div>
      ))}

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "2rem 0 1rem" }}>Documents you need to open a UAE bank account</h2>
      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.5rem", marginBottom: "1.5rem" }}>
        {[["Emirates ID", "Mandatory — you cannot open a bank account without this"], ["Passport + UAE visa", "Original + copy"], ["Residency visa", "Or proof of visa stamping in process"], ["Salary certificate / offer letter", "Some banks require this to confirm income level"], ["Recent utility bill or Ejari", "As proof of UAE address — not always required"]].map(([doc, note]) => (
          <div key={doc} style={{ display: "flex", gap: 14, paddingBottom: 12, borderBottom: "1px solid var(--border)", marginBottom: 12 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 6, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>{doc}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{note}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "2rem 0 1rem" }}>Best rates for sending money home</h2>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
        For remittances, bank rates are rarely the best option. Consider these alternatives: <strong>Wise</strong> (best for AED to GBP/EUR/USD), <strong>Al Ansari Exchange</strong> or <strong>Al Fardan</strong> (best for AED to INR/PKR/PHP — physical locations across UAE), or the <strong>Mashreq Neo app</strong> (best digital option for South Asia transfers).
      </p>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
        Always check the mid-market rate first using our currency converter below — then compare what your bank or exchange house is offering. The difference can be 2-5%, which on regular remittances adds up to thousands of dirhams per year.
      </p>

      <div style={{ background: "var(--navy)", borderRadius: 14, padding: "1.75rem", marginTop: "2rem" }}>
        <h3 style={{ color: "white", fontSize: 17, fontWeight: 600, marginBottom: 12 }}>Check live exchange rates</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[["AED to PKR / INR / PHP", "/tools/currency-converter"], ["Calculate your salary", "/tools/salary-calculator"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 8, textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
