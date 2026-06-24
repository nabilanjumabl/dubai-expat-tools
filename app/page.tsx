import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Expat Tools — Free UAE Salary, Currency & Visa Calculators",
  description: "The #1 free toolkit for UAE expats. Salary calculator, AED currency converter, gratuity calculator, golden visa checker, Dubai rent estimator and more.",
};

const tools = [
  { icon: "💰", title: "Salary Calculator", desc: "Calculate your take-home pay, allowances, and compare offers. Supports all UAE structures.", href: "/tools/salary-calculator", badge: "Most popular", color: "#1B8B7A" },
  { icon: "💱", title: "Currency Converter", desc: "Live AED to PKR, INR, PHP, EUR, GBP, USD rates. Perfect for remittance planning.", href: "/tools/currency-converter", badge: "Live rates", color: "#2563EB" },
  { icon: "📋", title: "Gratuity Calculator", desc: "Know your end-of-service benefit to the dirham. Based on UAE Labour Law 2025.", href: "/tools/gratuity-calculator", badge: "New law 2025", color: "#7C3AED" },
  { icon: "🏛️", title: "VAT Calculator", desc: "Add or remove 5% UAE VAT instantly. For businesses and individuals.", href: "/tools/vat-calculator", badge: "", color: "#C9A84C" },
  { icon: "🌟", title: "Golden Visa Checker", desc: "Check if you qualify for the UAE 10-year Golden Visa in under 2 minutes.", href: "/tools/golden-visa-checker", badge: "High demand", color: "#DC2626" },
  { icon: "🏠", title: "Rent Estimator", desc: "Average rents across 30+ Dubai neighbourhoods. JVC, Marina, Deira and more.", href: "/tools/rent-estimator", badge: "", color: "#059669" },
];

const blogs = [
  { title: "Moving to Dubai in 2026: The Complete Checklist", date: "June 2026", href: "/blog/moving-to-dubai", time: "8 min read" },
  { title: "UAE Labour Law 2025 Changes Explained", date: "May 2026", href: "/blog/uae-labour-law", time: "6 min read" },
  { title: "Best Banks in UAE for Expats (2026 Comparison)", date: "May 2026", href: "/blog/best-banks-uae", time: "5 min read" },
  { title: "Dubai vs Abu Dhabi: Which City Pays Better?", date: "April 2026", href: "/blog/dubai-vs-abu-dhabi", time: "7 min read" },
];

const stats = [
  { num: "10.4M", label: "Expats in UAE" },
  { num: "0%", label: "Income tax" },
  { num: "200+", label: "Nationalities" },
  { num: "Free", label: "All tools, always" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, var(--navy) 0%, #162D50 60%, #1B3A5C 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        {/* Decorative gold arc */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "2px solid rgba(201,168,76,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: -40, width: 280, height: 280, borderRadius: "50%", border: "1.5px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 20, padding: "5px 14px", marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em" }}>🇦🇪 MADE FOR UAE EXPATS</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: 700, letterSpacing: "-1px" }}>
            Every tool you need to <span style={{ color: "var(--gold)" }}>thrive in Dubai</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: 560, marginBottom: "2.5rem" }}>
            Free salary calculators, live currency rates, gratuity estimators, golden visa checker — everything an expat needs, in one place. No sign-up, no paywalls.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/tools/salary-calculator" style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}>
              Calculate my salary →
            </Link>
            <Link href="/tools" style={{ background: "rgba(255,255,255,0.08)", color: "white", fontWeight: 500, fontSize: 15, padding: "13px 28px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", display: "inline-block" }}>
              All 6 tools
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
            {stats.map(s => (
              <div key={s.num}>
                <div style={{ color: "var(--gold)", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--teal)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Free tools</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.5px" }}>
            The complete UAE expat toolkit
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 8, maxWidth: 520 }}>No account required. No ads on results. Just fast, accurate answers.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {tools.map(t => (
            <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
              <div className="tool-card" style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.5rem", cursor: "pointer", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                  <div style={{ fontSize: 32, lineHeight: 1 }}>{t.icon}</div>
                  {t.badge && (
                    <span style={{ background: `${t.color}15`, color: t.color, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, border: `1px solid ${t.color}30` }}>
                      {t.badge}
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)", marginBottom: 8, letterSpacing: "-0.2px" }}>{t.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                <div style={{ marginTop: 16, color: t.color, fontSize: 13, fontWeight: 600 }}>Use tool →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US STRIP */}
      <section style={{ background: "white", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {[["⚡", "Instant results", "No loading, no waiting. All calculations run in your browser."], ["🔒", "No data collected", "We don't store your salary or personal information. Ever."], ["📱", "Works on mobile", "Optimised for the phone in your pocket, wherever you are in the UAE."], ["🔄", "Updated for 2026", "Labour law changes and exchange rates reflected in real time."]].map(([icon, title, desc]) => (
            <div key={title} style={{ display: "flex", gap: 14 }}>
              <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{icon}</div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--navy)", fontSize: 15, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG SECTION */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
          <div>
            <p style={{ color: "var(--teal)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Expat guides</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.5px", margin: 0 }}>Latest from the blog</h2>
          </div>
          <Link href="/blog" style={{ color: "var(--teal)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>View all →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {blogs.map(b => (
            <Link key={b.href} href={b.href} style={{ textDecoration: "none" }}>
              <div className="blog-card" style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{b.date}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{b.time}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", lineHeight: 1.45, margin: 0 }}>{b.title}</h3>
                <div style={{ marginTop: 14, color: "var(--teal)", fontSize: 13, fontWeight: 600 }}>Read →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "var(--navy)", margin: "0 1.5rem 4rem", borderRadius: 20, padding: "3rem 2rem", maxWidth: 1160, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <h2 style={{ color: "white", fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.5px" }}>Ready to know your real salary in Dubai?</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, margin: 0 }}>Takes 30 seconds. No account needed.</p>
          </div>
          <Link href="/tools/salary-calculator" style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 10, textDecoration: "none", whiteSpace: "nowrap" }}>
            Try salary calculator →
          </Link>
        </div>
      </section>
    </>
  );
}
