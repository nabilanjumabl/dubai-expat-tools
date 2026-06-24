"use client";
import { useState } from "react";

const areas = [
  { name: "Dubai Marina", studio: 55000, one: 80000, two: 115000, three: 165000, tier: "premium" },
  { name: "Downtown Dubai", studio: 65000, one: 95000, two: 145000, three: 220000, tier: "premium" },
  { name: "Business Bay", studio: 52000, one: 78000, two: 115000, three: 160000, tier: "premium" },
  { name: "JBR (Jumeirah Beach)", studio: 60000, one: 85000, two: 130000, three: 185000, tier: "premium" },
  { name: "Palm Jumeirah", studio: 80000, one: 120000, two: 200000, three: 350000, tier: "luxury" },
  { name: "JVC (Jumeirah Village)", studio: 30000, one: 45000, two: 65000, three: 90000, tier: "affordable" },
  { name: "Al Barsha", studio: 32000, one: 48000, two: 70000, three: 98000, tier: "affordable" },
  { name: "Deira", studio: 22000, one: 35000, two: 52000, three: 70000, tier: "affordable" },
  { name: "Bur Dubai", studio: 25000, one: 38000, two: 56000, three: 75000, tier: "affordable" },
  { name: "Discovery Gardens", studio: 26000, one: 38000, two: 55000, three: 0, tier: "affordable" },
  { name: "International City", studio: 18000, one: 28000, two: 40000, three: 0, tier: "budget" },
  { name: "Silicon Oasis", studio: 24000, one: 36000, two: 52000, three: 72000, tier: "affordable" },
  { name: "Sports City", studio: 26000, one: 38000, two: 55000, three: 78000, tier: "affordable" },
  { name: "Arabian Ranches", studio: 0, one: 0, two: 130000, three: 180000, tier: "premium" },
  { name: "Mirdif", studio: 28000, one: 42000, two: 62000, three: 88000, tier: "affordable" },
];

const tierColors: Record<string, string> = { budget: "#7C3AED", affordable: "var(--teal)", premium: "#C9A84C", luxury: "#DC2626" };
type UnitType = "studio" | "one" | "two" | "three";

export default function RentEstimator() {
  const [unitType, setUnitType] = useState<UnitType>("one");
  const [filter, setFilter] = useState("all");

  const filtered = areas.filter(a => filter === "all" || a.tier === filter);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</a> → <a href="/tools" style={{ color: "var(--teal)", textDecoration: "none" }}>Tools</a> → Rent Estimator
      </p>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>Dubai Rent Estimator 2026</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem" }}>Average annual rents across 15+ Dubai neighbourhoods. Updated Q2 2026.</p>

      <div style={{ display: "flex", gap: 12, marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[["Studio", "studio"], ["1 BR", "one"], ["2 BR", "two"], ["3 BR", "three"]].map(([label, val]) => (
            <button key={val} onClick={() => setUnitType(val as UnitType)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "1.5px solid", borderColor: unitType === val ? "var(--navy)" : "var(--border)", background: unitType === val ? "var(--navy)" : "white", color: unitType === val ? "white" : "var(--text-muted)", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[["All areas", "all"], ["Budget", "budget"], ["Affordable", "affordable"], ["Premium", "premium"], ["Luxury", "luxury"]].map(([label, val]) => (
            <button key={val} onClick={() => setFilter(val)}
              style={{ padding: "8px 14px", borderRadius: 8, border: "1.5px solid", borderColor: filter === val ? "var(--teal)" : "var(--border)", background: filter === val ? "#E6F7F4" : "white", color: filter === val ? "var(--teal)" : "var(--text-muted)", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
        {filtered.map(area => {
          const rent = area[unitType];
          return (
            <div key={area.name} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", margin: 0, lineHeight: 1.3 }}>{area.name}</h3>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${tierColors[area.tier]}15`, color: tierColors[area.tier], fontWeight: 600, border: `1px solid ${tierColors[area.tier]}30`, whiteSpace: "nowrap", marginLeft: 8 }}>
                  {area.tier}
                </span>
              </div>
              {rent > 0 ? (
                <>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "var(--navy)" }}>AED {rent.toLocaleString()}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>per year · ~AED {Math.round(rent / 12).toLocaleString()}/mo</div>
                </>
              ) : (
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>Not available</div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "2rem", background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 12, padding: "1rem 1.25rem" }}>
        <p style={{ fontSize: 13, color: "#92400E", lineHeight: 1.6, margin: 0 }}>💡 Rents shown are averages for 2026 based on market data. Actual rents vary by building, floor, furnishing, and contract terms. Always verify with a registered UAE real estate agent.</p>
      </div>
    </div>
  );
}
