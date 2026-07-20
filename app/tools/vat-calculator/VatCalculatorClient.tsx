"use client";
import { useState } from "react";

export default function VATCalculatorClient() {
  const [amount, setAmount] = useState(1000);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const vat = mode === "add" ? amount * 0.05 : amount - amount / 1.05;
  const total = mode === "add" ? amount + vat : amount / 1.05;
  const net = mode === "add" ? amount : total;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</a> → <a href="/tools" style={{ color: "var(--teal)", textDecoration: "none" }}>Tools</a> → VAT Calculator
      </p>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>UAE VAT Calculator</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem" }}>Calculate UAE's 5% VAT instantly — add VAT to a price or extract VAT from a VAT-inclusive amount.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: "1.5rem" }}>
            {[["Add VAT to price", "add"], ["Remove VAT from total", "remove"]].map(([label, val]) => (
              <button key={val} onClick={() => setMode(val as "add" | "remove")}
                style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1.5px solid", borderColor: mode === val ? "var(--teal)" : "var(--border)", background: mode === val ? "#E6F7F4" : "white", color: mode === val ? "var(--teal)" : "var(--text-muted)", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                {label}
              </button>
            ))}
          </div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 8 }}>
            {mode === "add" ? "Price before VAT (AED)" : "Total price inc. VAT (AED)"}
          </label>
          <input className="calc-input" type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} style={{ fontSize: 22, fontWeight: 600 }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="result-box">
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>VAT amount (5%)</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "-1px" }}>AED {Math.round(Math.abs(vat)).toLocaleString()}</div>
          </div>
          {[["Net (excl. VAT)", `AED ${Math.round(net).toLocaleString()}`], ["Total (incl. VAT)", `AED ${Math.round(mode === "add" ? total : amount).toLocaleString()}`], ["VAT rate", "5% (UAE standard)"]].map(([label, val]) => (
            <div key={label} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)", fontSize: 14 }}>{label}</span>
              <span style={{ fontWeight: 600, color: "var(--navy)", fontSize: 14 }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
