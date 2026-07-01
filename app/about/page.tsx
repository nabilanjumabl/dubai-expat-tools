import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dubai Expat Tools — Free UAE Calculators",
  description: "Dubai Expat Tools is a free resource for the 10 million expats living and working in the UAE. Learn about our mission, tools, and team.",
};

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.75rem", letterSpacing: "-0.5px" }}>
        About Dubai Expat Tools
      </h1>
      <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem", borderLeft: "3px solid var(--gold)", paddingLeft: "1rem" }}>
        We built the toolkit we wish existed when we first moved to the UAE.
      </p>

      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>Our mission</h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8 }}>
          The UAE is home to over 10 million expats from India, Pakistan, the Philippines, Egypt, Bangladesh, and over 190 other countries. Every single one of them has Googled "UAE salary calculator" or "AED to PKR" at some point — and found outdated, ad-heavy, or inaccurate tools.
        </p>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, marginTop: "1rem" }}>
          Dubai Expat Tools exists to give every expat — regardless of salary, nationality, or how long they have been here — fast, accurate, and completely free access to the financial tools they need. No sign-up. No paywalls. No nonsense.
        </p>
      </div>

      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>What we offer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[["💰 Salary Calculator", "Break down your UAE salary, calculate take-home, and compare in your home currency."], ["💱 Currency Converter", "Live AED rates to PKR, INR, PHP, USD, GBP, and 6 more."], ["📋 Gratuity Calculator", "Know your end-of-service payout before you resign — based on UAE Labour Law 2025."], ["🏛️ VAT Calculator", "Add or remove UAE's 5% VAT in one click."], ["🌟 Golden Visa Checker", "Find out if you qualify for the UAE 10-year Golden Visa."], ["🏠 Rent Estimator", "Average rents across 15+ Dubai neighbourhoods, updated for 2026."]].map(([title, desc]) => (
            <div key={title} style={{ background: "#FAFAFA", border: "1px solid var(--border)", borderRadius: 10, padding: "1rem" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>Our promise</h2>
        {[["Always free", "All tools on this site are free and will remain free. We are supported by advertising, not by charging users."], ["Accurate & updated", "We update our calculators when UAE labour law changes, exchange rates fluctuate, or rental market data shifts."], ["No data collection", "We do not store your salary, personal information, or usage data. All calculations happen in your browser."], ["Built for expats", "Our tools are designed with the specific needs of South Asian, Southeast Asian, Arab, and Western expats in mind."]].map(([title, body]) => (
          <div key={title} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--teal)", marginTop: 6, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", marginBottom: 3 }}>{title}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{body}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "var(--navy)", borderRadius: 14, padding: "1.75rem" }}>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: "0 0 1rem" }}>Have a suggestion, correction, or want to collaborate? We want to hear from you.</p>
        <Link href="/contact" style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 600, fontSize: 14, padding: "10px 20px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>Get in touch →</Link>
      </div>
    </div>
  );
}
