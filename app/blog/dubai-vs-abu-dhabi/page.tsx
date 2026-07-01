import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dubai vs Abu Dhabi: Which City Pays Better in 2026? | Dubai Expat Tools",
  description: "Salary comparison between Dubai and Abu Dhabi across 10 sectors. Cost of living, lifestyle, and which emirate is better for your career in 2026.",
  keywords: "Dubai vs Abu Dhabi salary, Abu Dhabi vs Dubai for expats, which city pays more UAE, Dubai Abu Dhabi cost of living comparison 2026",
};

const sectors = [
  { sector: "Oil & Gas / Energy", dubai: 35000, abudhabi: 55000, winner: "abudhabi", note: "ADNOC HQ is Abu Dhabi — massive premium for energy professionals" },
  { sector: "Finance / Banking", dubai: 45000, abudhabi: 38000, winner: "dubai", note: "DIFC is the financial capital — banks pay more in Dubai" },
  { sector: "Technology / IT", dubai: 28000, abudhabi: 24000, winner: "dubai", note: "More tech companies, startups, and regional HQs in Dubai" },
  { sector: "Healthcare / Medicine", dubai: 30000, abudhabi: 38000, winner: "abudhabi", note: "Abu Dhabi government hospitals offer higher packages + housing" },
  { sector: "Construction / Engineering", dubai: 22000, abudhabi: 26000, winner: "abudhabi", note: "Larger infrastructure projects, ADNOC-linked engineering firms" },
  { sector: "Education / Teaching", dubai: 18000, abudhabi: 22000, winner: "abudhabi", note: "ADEK government schools pay more + include flights and housing" },
  { sector: "Hospitality / Tourism", dubai: 8000, abudhabi: 7500, winner: "dubai", note: "More hotels, more tourists — Dubai wins on volume and tips" },
  { sector: "Media / Marketing", dubai: 20000, abudhabi: 15000, winner: "dubai", note: "Almost all regional media agencies are Dubai-based" },
  { sector: "Legal / Law", dubai: 50000, abudhabi: 42000, winner: "dubai", note: "DIFC Courts attract global law firms, higher salaries" },
  { sector: "Government / Public Sector", dubai: 18000, abudhabi: 30000, winner: "abudhabi", note: "Abu Dhabi government pays expats significantly more" },
];

const costsOfLiving = [
  { item: "1BR apartment (city centre)", dubai: "AED 85,000/yr", abudhabi: "AED 65,000/yr" },
  { item: "1BR apartment (suburbs)", dubai: "AED 45,000/yr", abudhabi: "AED 38,000/yr" },
  { item: "Monthly groceries (single)", dubai: "AED 800", abudhabi: "AED 700" },
  { item: "Monthly transport (car + fuel)", dubai: "AED 1,200", abudhabi: "AED 1,000" },
  { item: "International school (annual)", dubai: "AED 40,000–80,000", abudhabi: "AED 35,000–70,000" },
  { item: "Eating out (mid-range, 2 people)", dubai: "AED 200", abudhabi: "AED 180" },
  { item: "Gym membership (monthly)", dubai: "AED 350", abudhabi: "AED 280" },
];

export default function DubaiVsAbuDhabi() {
  const dubaiWins = sectors.filter(s => s.winner === "dubai").length;
  const adWins = sectors.filter(s => s.winner === "abudhabi").length;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</Link> →{" "}
        <Link href="/blog" style={{ color: "var(--teal)", textDecoration: "none" }}>Blog</Link> → Dubai vs Abu Dhabi
      </p>

      <span style={{ fontSize: 11, background: "#FEF3C7", color: "#92400E", padding: "4px 12px", borderRadius: 20, fontWeight: 600 }}>Salary comparison</span>

      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--navy)", margin: "1rem 0 0.75rem", lineHeight: 1.2, letterSpacing: "-0.5px" }}>
        Dubai vs Abu Dhabi: Which City Actually Pays Better in 2026?
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: 14 }}>April 18, 2026 · 7 min read</p>

      <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, margin: "1.5rem 0", borderLeft: "3px solid var(--gold)", paddingLeft: "1rem" }}>
        The answer depends entirely on your industry. Abu Dhabi pays more for oil, government, and healthcare. Dubai wins for finance, tech, and media. Here is the data, sector by sector — so you can make the right call for your career.
      </p>

      {/* Score card */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, marginBottom: "2.5rem", alignItems: "center" }}>
        <div style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #162D50 100%)", borderRadius: 14, padding: "1.5rem", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>🏙️ Dubai wins</div>
          <div style={{ fontSize: "3rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{dubaiWins}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>sectors</div>
        </div>
        <div style={{ textAlign: "center", fontSize: 16, fontWeight: 600, color: "var(--text-muted)" }}>vs</div>
        <div style={{ background: "linear-gradient(135deg, #065F46 0%, #0F6E56 100%)", borderRadius: 14, padding: "1.5rem", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>🕌 Abu Dhabi wins</div>
          <div style={{ fontSize: "3rem", fontWeight: 700, color: "#6EE7B7", lineHeight: 1 }}>{adWins}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>sectors</div>
        </div>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "0 0 1.25rem" }}>Salary comparison by sector (average monthly AED)</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "2.5rem" }}>
        {sectors.map((s, i) => {
          const dubaiWider = s.winner === "dubai";
          const maxVal = Math.max(s.dubai, s.abudhabi);
          return (
            <div key={i} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", margin: 0 }}>{s.sector}</h3>
                <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: dubaiWider ? "#EFF6FF" : "#D1FAE5", color: dubaiWider ? "#1E40AF" : "#065F46" }}>
                  {dubaiWider ? "🏙️ Dubai pays more" : "🕌 Abu Dhabi pays more"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 80px", gap: 8, alignItems: "center", marginBottom: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1E40AF", textAlign: "right" }}>
                  AED {s.dubai.toLocaleString()}
                </div>
                <div style={{ position: "relative", height: 20 }}>
                  <div style={{ position: "absolute", right: "50%", top: "50%", transform: "translateY(-50%)", height: 8, width: `${(s.dubai / maxVal) * 47}%`, background: "#BFDBFE", borderRadius: "4px 0 0 4px" }} />
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translateY(-50%)", height: 8, width: `${(s.abudhabi / maxVal) * 47}%`, background: "#6EE7B7", borderRadius: "0 4px 4px 0" }} />
                  <div style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", height: "100%", width: 2, background: "var(--border)" }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#065F46" }}>
                  AED {s.abudhabi.toLocaleString()}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                <span style={{ color: "#1E40AF", fontWeight: 500 }}>Dubai</span> · <span style={{ color: "#065F46", fontWeight: 500 }}>Abu Dhabi</span> — {s.note}
              </div>
            </div>
          );
        })}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "0 0 1.25rem" }}>Cost of living comparison</h2>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Dubai is generally 10–20% more expensive than Abu Dhabi, mainly due to higher rents. However, the salary premium in Dubai sectors often outweighs the cost difference.
      </p>
      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: "var(--navy)", padding: "0.875rem 1.25rem" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Item</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#93C5FD", textTransform: "uppercase" }}>Dubai</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase" }}>Abu Dhabi</div>
        </div>
        {costsOfLiving.map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", padding: "0.875rem 1.25rem", borderBottom: i < costsOfLiving.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
            <div style={{ fontSize: 13, color: "var(--text-dark)" }}>{row.item}</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#1E40AF" }}>{row.dubai}</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#065F46" }}>{row.abudhabi}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "0 0 1rem" }}>Lifestyle differences that affect your choice</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: "2rem" }}>
        {[
          { city: "🏙️ Dubai", points: ["More nightlife, restaurants, malls", "Faster pace, more international", "Better public transport (Metro)", "More startup and freelance opportunities", "Easier to meet people, bigger social scene", "More flights — better as a travel hub"] },
          { city: "🕌 Abu Dhabi", points: ["More relaxed, family-friendly", "Quieter — better work-life balance", "Cheaper housing and living costs", "Government sector is dominant", "More Emirati culture and heritage", "Less traffic than Dubai (mostly)"] },
        ].map(col => (
          <div key={col.city} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", marginBottom: 12 }}>{col.city}</div>
            {col.points.map((p, j) => <div key={j} style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>• {p}</div>)}
          </div>
        ))}
      </div>

      <div style={{ background: "#E6F7F4", border: "1px solid #B2E8DC", borderRadius: 14, padding: "1.5rem", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--teal)", margin: "0 0 10px" }}>💡 Bottom line</h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
          <strong>Choose Dubai</strong> if you are in finance, tech, media, legal, or hospitality — or if you value a busier social life and international connections.<br /><br />
          <strong>Choose Abu Dhabi</strong> if you are in oil & gas, government, healthcare, or education — or if you prefer lower living costs and a quieter lifestyle. The salary difference in those sectors is large enough to significantly boost your savings rate.
        </p>
      </div>

      <div style={{ background: "var(--navy)", borderRadius: 14, padding: "1.75rem" }}>
        <h3 style={{ color: "white", fontSize: 17, fontWeight: 600, marginBottom: 12 }}>Compare your offer to market rates</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[["UAE Salary Calculator", "/tools/salary-calculator"], ["AED Currency Converter", "/tools/currency-converter"], ["Gratuity Calculator", "/tools/gratuity-calculator"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ background: "var(--gold)", color: "var(--navy)", fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 8, textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
