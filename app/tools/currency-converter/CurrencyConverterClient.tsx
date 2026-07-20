"use client";
import { useState, useEffect } from "react";

const FIXED_RATES: Record<string, number> = {
  PKR: 76.2, INR: 22.8, PHP: 15.4, EUR: 0.248, GBP: 0.215,
  USD: 0.272, BDT: 29.8, NPR: 36.4, LKR: 82.1, EGP: 13.5,
};

const currencies = [
  { code: "PKR", name: "Pakistani Rupee", flag: "🇵🇰" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "BDT", name: "Bangladeshi Taka", flag: "🇧🇩" },
  { code: "NPR", name: "Nepalese Rupee", flag: "🇳🇵" },
  { code: "LKR", name: "Sri Lankan Rupee", flag: "🇱🇰" },
  { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬" },
];

export default function CurrencyConverterClient() {
  const [aed, setAed] = useState(1000);
  const [selected, setSelected] = useState("PKR");
  const [liveRates, setLiveRates] = useState<Record<string, number>>(FIXED_RATES);
  const [lastUpdated, setLastUpdated] = useState("Fetching live rates...");

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/AED")
      .then(r => r.json())
      .then(data => {
        const rates: Record<string, number> = {};
        Object.keys(FIXED_RATES).forEach(code => {
          rates[code] = data.rates[code] ?? FIXED_RATES[code];
        });
        setLiveRates(rates);
        setLastUpdated("Live rates • Updated just now");
      })
      .catch(() => setLastUpdated("Showing reference rates (offline)"));
  }, []);

  const selectedCur = currencies.find(c => c.code === selected)!;
  const converted = (aed * liveRates[selected]).toLocaleString("en", { maximumFractionDigits: 0 });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</a> → <a href="/tools" style={{ color: "var(--teal)", textDecoration: "none" }}>Tools</a> → Currency Converter
      </p>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>AED Currency Converter</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem" }}>Convert UAE Dirhams to PKR, INR, PHP and 7 other currencies. <span style={{ color: "var(--teal)", fontWeight: 500 }}>{lastUpdated}</span></p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          {/* Amount input */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 8 }}>Amount in AED (د.إ)</label>
            <input className="calc-input" type="number" value={aed} onChange={e => setAed(Number(e.target.value))} style={{ fontSize: 24, fontWeight: 600 }} />
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>AED is pegged to USD at a fixed rate of 3.6725 since 1997.</p>
          </div>

          {/* Currency selector */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 12 }}>Select target currency</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {currencies.map(c => (
                <button key={c.code} onClick={() => setSelected(c.code)}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderRadius: 10, border: "1.5px solid", borderColor: selected === c.code ? "var(--teal)" : "var(--border)", background: selected === c.code ? "#E6F7F4" : "white", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 14, color: "var(--text-dark)" }}>{c.flag} {c.code} — {c.name}</span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>1 AED = {liveRates[c.code]?.toFixed(2)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="result-box">
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>AED {aed.toLocaleString()} equals</div>
            <div style={{ fontSize: "2.8rem", fontWeight: 700, color: "white", letterSpacing: "-1px", lineHeight: 1 }}>
              {selectedCur.flag} {converted}
            </div>
            <div style={{ color: "var(--gold)", fontSize: 16, marginTop: 12 }}>{selectedCur.code} — {selectedCur.name}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 8 }}>Rate: 1 AED = {liveRates[selected]?.toFixed(4)} {selected}</div>
          </div>

          {/* All rates quick view */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 14 }}>AED {aed.toLocaleString()} in all currencies</div>
            {currencies.map(c => (
              <div key={c.code} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 14 }}>
                <span style={{ color: "var(--text-muted)" }}>{c.flag} {c.code}</span>
                <span style={{ fontWeight: 600, color: "var(--navy)" }}>{(aed * liveRates[c.code]).toLocaleString("en", { maximumFractionDigits: 0 })}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3rem", background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>AED exchange rate guide for UAE expats</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8 }}>The UAE Dirham (AED) has been pegged to the US Dollar at exactly 3.6725 since 1997 — making it one of the most stable currencies in the world. For AED to PKR and AED to INR conversions, rates fluctuate based on the Pakistani Rupee and Indian Rupee movements against the USD. Our tool fetches live rates so you always get an accurate estimate for remittance planning.</p>
      </div>
    </div>
  );
}
