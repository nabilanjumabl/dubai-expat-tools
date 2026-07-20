"use client";
import { useState } from "react";

// UAE Labour Law gratuity formula + salary breakdown
function calcResults(basic: number, housing: number, transport: number, other: number, years: number) {
  const monthly = basic + housing + transport + other;
  const annual = monthly * 12;

  // Gratuity: 21 days per year for first 5 years, 30 days after
  const dailyBasic = basic / 30;
  let gratuity = 0;
  if (years <= 5) {
    gratuity = dailyBasic * 21 * years;
  } else {
    gratuity = dailyBasic * 21 * 5 + dailyBasic * 30 * (years - 5);
  }

  const inr = monthly * 22.8;
  const pkr = monthly * 76.2;
  const usd = monthly * 0.272;
  const gbp = monthly * 0.215;
  const php = monthly * 15.4;

  return { monthly, annual, gratuity: Math.round(gratuity), inr: Math.round(inr), pkr: Math.round(pkr), usd: Math.round(usd), gbp: Math.round(gbp), php: Math.round(php) };
}

export default function SalaryCalculatorClient() {
  const [basic, setBasic] = useState(10000);
  const [housing, setHousing] = useState(3000);
  const [transport, setTransport] = useState(1000);
  const [other, setOther] = useState(500);
  const [years, setYears] = useState(3);
  const [currency, setCurrency] = useState("INR");

  const r = calcResults(basic, housing, transport, other, years);
  const currencyMap: Record<string, { val: number; sym: string; flag: string }> = {
    INR: { val: r.inr, sym: "₹", flag: "🇮🇳" },
    PKR: { val: r.pkr, sym: "₨", flag: "🇵🇰" },
    USD: { val: r.usd, sym: "$", flag: "🇺🇸" },
    GBP: { val: r.gbp, sym: "£", flag: "🇬🇧" },
    PHP: { val: r.php, sym: "₱", flag: "🇵🇭" },
  };
  const cur = currencyMap[currency];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Breadcrumb */}
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</a> → <a href="/tools" style={{ color: "var(--teal)", textDecoration: "none" }}>Tools</a> → Salary Calculator
      </p>

      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>UAE Salary Calculator 2026</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem", maxWidth: 560 }}>Enter your salary components below. We calculate your monthly take-home, annual package, gratuity, and equivalent in your home currency.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* INPUTS */}
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)", marginBottom: "1.5rem" }}>Your salary components (AED / month)</h2>

          {[["Basic Salary", basic, setBasic, "Typically 40-60% of total. Affects gratuity directly."],
            ["Housing Allowance", housing, setHousing, "Common: 25-30% of basic. May be 0 if company provides housing."],
            ["Transport Allowance", transport, setTransport, "Usually AED 500–2,000/month."],
            ["Other Allowances", other, setOther, "Education, phone, annual flight, medical top-ups."]
          ].map(([label, val, setter, hint]) => (
            <div key={label as string} style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>{label as string}</label>
              <input
                className="calc-input"
                type="number"
                value={val as number}
                onChange={e => (setter as (n: number) => void)(Number(e.target.value))}
                min={0}
              />
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{hint as string}</p>
            </div>
          ))}

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Years of service (for gratuity)</label>
            <input className="calc-input" type="number" value={years} onChange={e => setYears(Number(e.target.value))} min={0} max={40} />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Show result in</label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {Object.entries(currencyMap).map(([code, c]) => (
                <button key={code} onClick={() => setCurrency(code)}
                  style={{ padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 500, border: "1.5px solid", borderColor: currency === code ? "var(--teal)" : "var(--border)", background: currency === code ? "#E6F7F4" : "white", color: currency === code ? "var(--teal)" : "var(--text-muted)", cursor: "pointer" }}>
                  {c.flag} {code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="result-box">
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>Total monthly package</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "white", letterSpacing: "-1px" }}>
              AED {r.monthly.toLocaleString()}
            </div>
            <div style={{ color: "var(--gold)", fontSize: 14, marginTop: 8 }}>
              {cur.flag} {cur.sym}{cur.val.toLocaleString()} / month in {currency}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[["Annual package", `AED ${r.annual.toLocaleString()}`], ["Gratuity on exit", `AED ${r.gratuity.toLocaleString()}`], ["Basic salary", `AED ${basic.toLocaleString()}`], ["Allowances", `AED ${(housing + transport + other).toLocaleString()}`]].map(([label, val]) => (
              <div key={label} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "var(--navy)" }}>{val}</div>
              </div>
            ))}
          </div>

          {/* Breakdown bar */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 12 }}>Salary breakdown</div>
            {r.monthly > 0 && (
              <div style={{ display: "flex", height: 12, borderRadius: 6, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ background: "var(--teal)", width: `${(basic / r.monthly) * 100}%` }} />
                <div style={{ background: "#2563EB", width: `${(housing / r.monthly) * 100}%` }} />
                <div style={{ background: "var(--gold)", width: `${(transport / r.monthly) * 100}%` }} />
                <div style={{ background: "#7C3AED", width: `${(other / r.monthly) * 100}%` }} />
              </div>
            )}
            {[["Basic", basic, "var(--teal)"], ["Housing", housing, "#2563EB"], ["Transport", transport, "var(--gold)"], ["Other", other, "#7C3AED"]].map(([label, val, col]) => (
              <div key={label as string} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: col as string }} />
                  <span style={{ color: "var(--text-muted)" }}>{label as string}</span>
                </div>
                <span style={{ fontWeight: 500 }}>AED {(val as number).toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 12, padding: "1rem 1.25rem" }}>
            <p style={{ fontSize: 13, color: "#92400E", lineHeight: 1.6, margin: 0 }}>
              <strong>⚠️ Note on gratuity:</strong> This uses the UAE Labour Law formula. Your contract terms may vary. Always verify with your HR department. Exchange rates shown are approximate.
            </p>
          </div>
        </div>
      </div>

      {/* SEO content */}
      <div style={{ marginTop: "3rem", background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>How the UAE salary calculator works</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, marginBottom: "1rem" }}>In the UAE, your salary is composed of multiple components: the <strong>basic salary</strong>, housing allowance, transport allowance, and other allowances. Unlike many countries, there is 0% personal income tax in the UAE, meaning your gross salary is your net salary.</p>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, marginBottom: "1rem" }}>Your <strong>end-of-service gratuity</strong> is calculated on your basic salary only — this is why it matters whether your basic is high or low relative to your total package. Under UAE Labour Law 2025, you receive 21 days of basic salary per year for the first 5 years, and 30 days per year thereafter.</p>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8 }}>Our calculator supports conversion to INR (Indian Rupees), PKR (Pakistani Rupees), PHP (Philippine Peso), USD, and GBP at approximate 2026 rates — useful for planning remittances home.</p>
      </div>
    </div>
  );
}
