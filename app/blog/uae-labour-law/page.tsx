import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UAE Labour Law 2025 Changes: What Every Expat Must Know | Dubai Expat Tools",
  description: "UAE updated its labour law with Federal Law No. 33 of 2021. Complete guide to gratuity changes, unlimited vs limited contracts, probation, and termination rules for expats in 2025-2026.",
  keywords: "UAE labour law 2025, UAE gratuity law, UAE employment law, unlimited contract UAE, UAE end of service benefits, Federal Law 33 2021",
};

const changes = [
  {
    title: "Unlimited contracts abolished",
    body: "The new law eliminated the concept of 'unlimited' employment contracts. All contracts are now fixed-term, with a maximum duration of 3 years, renewable upon mutual agreement. If you had an unlimited contract before February 2022, it was automatically converted. This means every employee now has a clearly defined contract end date.",
    impact: "High impact",
  },
  {
    title: "Gratuity calculation updated",
    body: "Gratuity is still calculated on basic salary only, not total package. The formula remains: 21 working days per year for the first 5 years, then 30 days per year beyond 5 years. However, under the new law, employees who resign are entitled to their FULL gratuity regardless of years served (the old 1/3 and 2/3 rules for early resignation are now only applicable in specific contract breach cases).",
    impact: "High impact",
  },
  {
    title: "Probation period rules tightened",
    body: "Probation is capped at 6 months. If you leave during probation to join another UAE employer, your new employer must reimburse your previous employer for visa and recruitment costs. If you leave probation to go abroad, you need a no-objection letter or must wait 3 months before returning on a new UAE work visa.",
    impact: "Medium impact",
  },
  {
    title: "New flexible working models",
    body: "The law officially recognises part-time, temporary, flexible, and remote working arrangements. Employees can now hold multiple part-time jobs legally, as long as this is disclosed to all employers. This was a grey area previously — it is now fully legal.",
    impact: "New right",
  },
  {
    title: "Termination without cause allowed",
    body: "Employers can now terminate employees without stating a specific cause, as long as they give proper notice (typically 1 month, or as per contract). This replaced the previous system where termination needed to be 'for cause'. However, arbitrary dismissal based on discrimination is still illegal.",
    impact: "Medium impact",
  },
  {
    title: "Anti-discrimination protections added",
    body: "The new law explicitly prohibits discrimination based on race, nationality, religion, or gender in hiring, promotion, or termination. Employers cannot dismiss an employee for filing a workplace complaint. Female employees are protected from dismissal due to pregnancy or maternity leave.",
    impact: "New right",
  },
  {
    title: "Annual leave and sick leave clarified",
    body: "You are entitled to 30 calendar days of annual leave after 1 full year of service (previously this varied). Sick leave: 15 days full pay, 30 days half pay, 45 days unpaid per year. Compassionate leave of 5 days is granted for the death of a spouse or child, 3 days for a parent, sibling, or grandparent.",
    impact: "Clarified",
  },
  {
    title: "Non-compete clauses now enforceable",
    body: "Non-compete agreements are now legally recognised and enforceable, capped at 2 years and limited to the specific geographic area and industry sector. If your contract has a non-compete clause, switching to a competitor in the same field could result in legal liability within those 2 years.",
    impact: "New risk",
  },
];

const impactColors: Record<string, { bg: string; color: string }> = {
  "High impact": { bg: "#FEF3C7", color: "#92400E" },
  "Medium impact": { bg: "#EFF6FF", color: "#1E40AF" },
  "New right": { bg: "#D1FAE5", color: "#065F46" },
  "Clarified": { bg: "#F3F4F6", color: "#374151" },
  "New risk": { bg: "#FEE2E2", color: "#991B1B" },
};

export default function UAELabourLaw() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</Link> →{" "}
        <Link href="/blog" style={{ color: "var(--teal)", textDecoration: "none" }}>Blog</Link> → UAE Labour Law 2025
      </p>

      <span style={{ fontSize: 11, background: "#E6F7F4", color: "var(--teal)", padding: "4px 12px", borderRadius: 20, fontWeight: 600 }}>Legal guide</span>

      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--navy)", margin: "1rem 0 0.75rem", lineHeight: 1.2, letterSpacing: "-0.5px" }}>
        UAE Labour Law 2025: What Every Expat Must Know
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: 14 }}>May 22, 2026 · 6 min read · Updated for 2025–2026</p>

      <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, margin: "1.5rem 0", borderLeft: "3px solid var(--gold)", paddingLeft: "1rem" }}>
        Federal Decree-Law No. 33 of 2021 overhauled UAE employment law effective February 2022. If you work in the UAE — whether just arrived or been here for years — these changes directly affect your rights, your gratuity, and what happens when you leave your job.
      </p>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "2rem 0 1rem" }}>The 8 biggest changes explained</h2>

      {changes.map((c, i) => {
        const style = impactColors[c.impact] || impactColors["Clarified"];
        return (
          <div key={i} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.5rem", marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", margin: 0 }}>{i + 1}. {c.title}</h3>
              <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: style.bg, color: style.color, whiteSpace: "nowrap", marginLeft: 10, flexShrink: 0 }}>
                {c.impact}
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{c.body}</p>
          </div>
        );
      })}

      <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 14, padding: "1.5rem", margin: "2rem 0" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "#92400E", margin: "0 0 10px" }}>⚠️ Common mistakes expats make</h3>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#92400E", fontSize: 14, lineHeight: 2 }}>
          <li>Resigning without checking your non-compete clause — you could be blocked from working in your industry for 2 years</li>
          <li>Leaving during probation without notifying your employer — this can result in a work ban</li>
          <li>Not collecting your gratuity before leaving — you have 1 year to file a claim after leaving employment</li>
          <li>Accepting verbal agreements — all employment terms must be in writing under the new law</li>
        </ul>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "2rem 0 1rem" }}>How to calculate your gratuity right now</h2>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
        Under the 2025 rules, your end-of-service gratuity is calculated on your <strong>basic salary only</strong> — not your housing allowance, transport, or other allowances. Use our free calculator to get your exact figure in seconds.
      </p>

      <div style={{ background: "var(--navy)", borderRadius: 14, padding: "1.75rem", marginBottom: "2rem" }}>
        <h3 style={{ color: "white", fontSize: 17, fontWeight: 600, marginBottom: 12 }}>Calculate your UAE benefits</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[["Gratuity calculator", "/tools/gratuity-calculator"], ["Salary breakdown", "/tools/salary-calculator"], ["All tools", "/tools"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 8, textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "2rem 0 1rem" }}>Where to file a complaint</h2>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
        If your employer violates your rights under UAE Labour Law, file a complaint with the <strong>Ministry of Human Resources and Emiratisation (MOHRE)</strong> via their app or website, or call 800-60. Disputes go to the Labour Court if not resolved within 2 weeks. The process is free of charge for employees. Most cases are resolved in 30-90 days.
      </p>

      <div style={{ marginTop: "2.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7, fontStyle: "italic" }}>
          Disclaimer: This article is for general information only and does not constitute legal advice. UAE labour law can be complex and individual circumstances vary. For specific legal advice, consult a qualified UAE employment lawyer.
        </p>
      </div>
    </div>
  );
}
