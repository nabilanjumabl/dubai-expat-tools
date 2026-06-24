import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Free UAE Tools | Dubai Expat Tools",
  description: "Browse all free tools for UAE expats: salary calculator, currency converter, gratuity calculator, VAT calculator, golden visa checker, and rent estimator.",
};

const tools = [
  { icon: "💰", title: "Salary Calculator", desc: "Calculate take-home, allowances, gratuity, and home currency equivalent.", href: "/tools/salary-calculator", badge: "Most popular" },
  { icon: "💱", title: "Currency Converter", desc: "Live AED to PKR, INR, PHP, EUR, USD, GBP and 5 more currencies.", href: "/tools/currency-converter", badge: "Live rates" },
  { icon: "📋", title: "Gratuity Calculator", desc: "End-of-service benefit calc. Covers resignation and termination.", href: "/tools/gratuity-calculator", badge: "" },
  { icon: "🏛️", title: "VAT Calculator", desc: "Add or remove UAE's 5% VAT in one click.", href: "/tools/vat-calculator", badge: "" },
  { icon: "🌟", title: "Golden Visa Checker", desc: "Check your eligibility for the UAE 10-year Golden Visa.", href: "/tools/golden-visa-checker", badge: "High demand" },
  { icon: "🏠", title: "Rent Estimator", desc: "2026 rent averages across 15+ Dubai neighbourhoods.", href: "/tools/rent-estimator", badge: "" },
];

export default function ToolsIndex() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>All Free UAE Tools</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "3rem" }}>Everything a Dubai expat needs. No account, no paywalls.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {tools.map(t => (
          <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
            <div className="tool-card" style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.75rem", height: "100%" }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{t.icon}</div>
              {t.badge && <span style={{ fontSize: 11, background: "#E6F7F4", color: "var(--teal)", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{t.badge}</span>}
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", margin: "12px 0 8px" }}>{t.title}</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
              <div style={{ marginTop: 18, color: "var(--teal)", fontSize: 14, fontWeight: 600 }}>Open tool →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
