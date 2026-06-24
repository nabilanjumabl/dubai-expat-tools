import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — UAE Expat Guides | Dubai Expat Tools",
  description: "Free guides for UAE expats. Moving to Dubai checklist, UAE labour law, best banks, salary comparisons and more.",
};

const posts = [
  { title: "Moving to Dubai in 2026: The Complete Checklist", date: "June 10, 2026", href: "/blog/moving-to-dubai", time: "8 min read", cat: "Moving guide", excerpt: "Everything you need to know before your first day in Dubai — visa, accommodation, bank account, driving licence, and more." },
  { title: "UAE Labour Law 2025 Changes: What Every Expat Must Know", date: "May 22, 2026", href: "/blog/uae-labour-law", time: "6 min read", cat: "Legal", excerpt: "The UAE updated its labour law with Federal Law No. 33 of 2021. Here's what changed for gratuity, unlimited contracts, and termination." },
  { title: "Best Banks in UAE for Expats — 2026 Comparison", date: "May 8, 2026", href: "/blog/best-banks-uae", time: "5 min read", cat: "Finance", excerpt: "We compare Emirates NBD, FAB, ADCB, Mashreq, and ENBD digital for expats: account opening, fees, and remittance rates." },
  { title: "Dubai vs Abu Dhabi: Which City Actually Pays Better?", date: "April 18, 2026", href: "/blog/dubai-vs-abu-dhabi", time: "7 min read", cat: "Salary", excerpt: "Sector-by-sector salary comparison between Dubai and Abu Dhabi. The answer might surprise you." },
];

export default function BlogIndex() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>UAE Expat Guides</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "3rem" }}>Practical, research-backed guides for living and working in the UAE.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {posts.map(p => (
          <Link key={p.href} href={p.href} style={{ textDecoration: "none" }}>
            <div className="blog-card" style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.75rem" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
                <span style={{ fontSize: 11, background: "#E6F7F4", color: "var(--teal)", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{p.cat}</span>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{p.date}</span>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>· {p.time}</span>
              </div>
              <h2 style={{ fontSize: 19, fontWeight: 600, color: "var(--navy)", margin: "0 0 10px", lineHeight: 1.4 }}>{p.title}</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{p.excerpt}</p>
              <div style={{ marginTop: 14, color: "var(--teal)", fontSize: 14, fontWeight: 600 }}>Read →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
