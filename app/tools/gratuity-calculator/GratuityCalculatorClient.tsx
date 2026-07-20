"use client";
import { useState } from "react";

export default function GratuityCalculatorClient() {
  const [basic, setBasic] = useState(10000);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [resigned, setResigned] = useState(false);

  const totalYears = years + months / 12;
  const dailyWage = basic / 30;
  let gratuity = 0;
  let eligible = true;
  let note = "";

  if (resigned && totalYears < 1) {
    eligible = false;
    note = "Not eligible — you need at least 1 year of service to claim gratuity.";
  } else if (resigned && totalYears < 3) {
    gratuity = dailyWage * 21 * totalYears * (1 / 3);
    note = "Resigned between 1–3 years: entitled to 1/3 of gratuity.";
  } else if (resigned && totalYears < 5) {
    gratuity = dailyWage * 21 * totalYears * (2 / 3);
    note = "Resigned between 3–5 years: entitled to 2/3 of gratuity.";
  } else if (totalYears <= 5) {
    gratuity = dailyWage * 21 * totalYears;
    note = "21 working days per year of basic salary for first 5 years.";
  } else {
    gratuity = dailyWage * 21 * 5 + dailyWage * 30 * (totalYears - 5);
    note = "21 days/year for first 5 years + 30 days/year for years beyond 5.";
  }

  gratuity = Math.round(gratuity);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</a> → <a href="/tools" style={{ color: "var(--teal)", textDecoration: "none" }}>Tools</a> → Gratuity Calculator
      </p>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>UAE Gratuity Calculator 2026</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem", maxWidth: 560 }}>Calculate your end-of-service benefit based on UAE Labour Law. Covers both resignation and termination scenarios.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)", marginBottom: "1.5rem" }}>Your details</h2>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Basic salary (AED / month)</label>
            <input className="calc-input" type="number" value={basic} onChange={e => setBasic(Number(e.target.value))} />
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Gratuity is calculated on basic salary ONLY — not total package.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Years of service</label>
              <input className="calc-input" type="number" value={years} onChange={e => setYears(Number(e.target.value))} min={0} max={50} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Additional months</label>
              <input className="calc-input" type="number" value={months} onChange={e => setMonths(Number(e.target.value))} min={0} max={11} />
            </div>
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 10 }}>How are you leaving?</label>
            <div style={{ display: "flex", gap: 8 }}>
              {[["Terminated / end of contract", false], ["Resigned voluntarily", true]].map(([label, val]) => (
                <button key={String(val)} onClick={() => setResigned(val as boolean)}
                  style={{ flex: 1, padding: "10px 14px", borderRadius: 10, border: "1.5px solid", borderColor: resigned === val ? "var(--teal)" : "var(--border)", background: resigned === val ? "#E6F7F4" : "white", color: resigned === val ? "var(--teal)" : "var(--text-muted)", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                  {label as string}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {eligible ? (
            <div className="result-box">
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Your estimated gratuity</div>
              <div style={{ fontSize: "3rem", fontWeight: 700, color: "white", letterSpacing: "-1px" }}>AED {gratuity.toLocaleString()}</div>
              <div style={{ color: "var(--gold)", fontSize: 14, marginTop: 10 }}>After {years} years {months > 0 ? `${months} months` : ""}</div>
            </div>
          ) : (
            <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: 16, padding: "2rem" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#92400E", marginBottom: 8 }}>Not eligible yet</div>
              <p style={{ fontSize: 14, color: "#92400E", lineHeight: 1.6 }}>{note}</p>
            </div>
          )}

          {eligible && (
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 12 }}>How it's calculated</div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{note}</p>
              <div style={{ borderTop: "1px solid var(--border)", marginTop: 12, paddingTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--text-muted)" }}>Daily basic wage</span>
                  <span style={{ fontWeight: 500 }}>AED {dailyWage.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--text-muted)" }}>Total service</span>
                  <span style={{ fontWeight: 500 }}>{years}y {months}m ({totalYears.toFixed(2)} years)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--text-muted)" }}>Total gratuity</span>
                  <span style={{ fontWeight: 600, color: "var(--teal)" }}>AED {gratuity.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 12, padding: "1rem 1.25rem" }}>
            <p style={{ fontSize: 13, color: "#92400E", lineHeight: 1.6, margin: 0 }}>⚠️ This is an estimate based on UAE Federal Law No. 33 of 2021. Individual contracts may differ. Unlimited contracts follow different rules — always confirm with your HR.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
