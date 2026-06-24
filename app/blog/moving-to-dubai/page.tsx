import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving to Dubai 2026: Complete Expat Checklist | Dubai Expat Tools",
  description: "Everything you need before moving to Dubai in 2026: visa steps, accommodation, bank account, Ejari registration, Emirates ID, driving licence and more.",
};

export default function MovingToDubai() {
  const steps = [
    { step: "1", title: "Secure your employment visa", body: "Your employer (sponsor) arranges the work permit and residency visa. This typically takes 2–4 weeks. You will need to undergo a medical fitness test at an approved UAE centre and apply for Emirates ID." },
    { step: "2", title: "Open a UAE bank account", body: "You need a residency visa and Emirates ID to open most accounts. Emirates NBD, FAB, and Mashreq are popular with expats. Many banks now offer online account opening." },
    { step: "3", title: "Register your tenancy (Ejari)", body: "Once you sign a tenancy agreement, you must register it with Ejari (Dubai Land Department). This is required for connecting utilities, schooling, and many government services." },
    { step: "4", title: "Connect DEWA utilities", body: "Apply online at dewa.gov.ae or through the app. You will need your Emirates ID and Ejari certificate. Activation usually takes 24–48 hours." },
    { step: "5", title: "Get your Emirates ID", body: "Your Emirates ID is your primary identity document in the UAE. Apply after your medical fitness test. It takes 1–3 weeks to arrive by post." },
    { step: "6", title: "Transfer your driving licence", body: "Many nationalities can convert their licence without re-testing: UK, US, Australia, India (some categories), Pakistan, and most European countries. Visit any RTA service centre." },
    { step: "7", title: "Register children for school", body: "Dubai has an excellent range of British, American, IB, Indian (CBSE), and Pakistani curriculums. Apply early — good schools fill fast. All private schools are rated by KHDA." },
    { step: "8", title: "Set up a SIM and internet", body: "Etisalat (e&) and Du are the two telecom providers. You can get a postpaid plan with your visa copy and Emirates ID. Internet plans start from AED 250/month for home broadband." },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</Link> → <Link href="/blog" style={{ color: "var(--teal)", textDecoration: "none" }}>Blog</Link> → Moving to Dubai
      </p>
      <span style={{ fontSize: 11, background: "#E6F7F4", color: "var(--teal)", padding: "4px 12px", borderRadius: 20, fontWeight: 600 }}>Moving guide</span>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--navy)", margin: "1rem 0 0.75rem", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Moving to Dubai in 2026: The Complete Checklist</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 14 }}>June 10, 2026 · 8 min read</p>
      <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, margin: "1.5rem 0 2.5rem", borderLeft: "3px solid var(--gold)", paddingLeft: "1rem" }}>Relocating to Dubai is one of the most exciting decisions you can make. Here is a practical, step-by-step checklist covering everything from your first week to your first month — based on what expats from India, Pakistan, the Philippines, and the UK actually need to do.</p>

      {steps.map(s => (
        <div key={s.step} style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--navy)", color: "white", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.step}</div>
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)", margin: "0 0 8px" }}>{s.title}</h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{s.body}</p>
          </div>
        </div>
      ))}

      <div style={{ background: "var(--navy)", borderRadius: 16, padding: "2rem", marginTop: "3rem" }}>
        <h3 style={{ color: "white", fontSize: 17, fontWeight: 600, marginBottom: 12 }}>Useful tools for new Dubai expats</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[["Calculate your UAE salary", "/tools/salary-calculator"], ["AED currency converter", "/tools/currency-converter"], ["Check golden visa eligibility", "/tools/golden-visa-checker"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 600, fontSize: 13, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
