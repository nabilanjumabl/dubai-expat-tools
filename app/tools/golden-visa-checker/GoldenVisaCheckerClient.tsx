"use client";
import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | 4;

const questions = [
  { q: "What is your profession?", opts: ["Investor / Business owner", "Doctor / Specialist", "Engineer / Scientist", "Teacher / Academic", "Artist / Creative", "IT / Technology professional", "Other employee"] },
  { q: "What is your monthly salary in AED?", opts: ["Under AED 10,000", "AED 10,000 – 20,000", "AED 20,000 – 30,000", "Above AED 30,000"] },
  { q: "Do you hold a degree?", opts: ["PhD", "Master's degree", "Bachelor's degree", "No degree / diploma"] },
  { q: "Do you own property in Dubai worth AED 2M+?", opts: ["Yes", "No", "Planning to buy"] },
];

const resultsMap: Record<string, { eligible: boolean; type: string; reason: string; steps: string[] }> = {
  "0": { eligible: true, type: "10-Year Investor Visa", reason: "As an investor or business owner with the right profile, you qualify for the Golden Visa.", steps: ["Prepare trade license / investment proof", "Apply via GDRFA or ICP website", "Submit biometric data in UAE", "Receive visa within 5-7 working days"] },
  "1-3": { eligible: true, type: "10-Year Specialised Talent Visa", reason: "Healthcare professionals with specialisation qualify automatically.", steps: ["Get attestation from DHA/MOH", "Apply via GDRFA portal", "Submit credentials and offer letter", "Process takes 2-3 weeks"] },
  "2-2": { eligible: true, type: "10-Year Professionals Visa", reason: "Highly qualified engineers and scientists earning AED 30k+ qualify.", steps: ["Get degree attested", "Obtain classification from relevant authority", "Apply through ICP", "Visa valid for 10 years, renewable"] },
  "default": { eligible: false, type: "Not yet eligible", reason: "Based on your answers, you may not qualify immediately. You might qualify with a salary increase, property purchase, or degree.", steps: ["Consider property investment (AED 2M+ qualifies automatically)", "Check if your employer sponsors you for exceptional talent", "Pursue a master's or PhD for academic route", "Revisit eligibility in 12-18 months"] },
};

export default function GoldenVisaCheckerClient() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const answer = (idx: number) => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (step < 3) setStep((step + 1) as Step);
    else setStep(4);
  };

  const getResult = () => {
    if (answers[0] === 0) return resultsMap["0"];
    if (answers[0] === 1) return resultsMap["1-3"];
    if (answers[0] === 2 && answers[1] === 3) return resultsMap["2-2"];
    if (answers[1] === 3 && answers[2] !== 3) return { eligible: true, type: "10-Year Professionals Visa", reason: "High earners with a degree often qualify. Verify with GDRFA.", steps: ["Prepare employment contract", "Get degree attested", "Apply through ICP portal", "Process: 2-4 weeks"] };
    return resultsMap["default"];
  };

  const result = step === 4 ? getResult() : null;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "var(--teal)", textDecoration: "none" }}>Home</a> → <a href="/tools" style={{ color: "var(--teal)", textDecoration: "none" }}>Tools</a> → Golden Visa Checker
      </p>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>UAE Golden Visa Eligibility Checker</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem" }}>Find out if you qualify for the UAE 10-year Golden Visa in under 2 minutes.</p>

      {step < 4 ? (
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 20, padding: "2.5rem" }}>
          {/* Progress */}
          <div style={{ display: "flex", gap: 6, marginBottom: "2rem" }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? "var(--teal)" : "var(--border)" }} />
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: "1rem" }}>Question {(step as number) + 1} of 4</p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--navy)", marginBottom: "1.5rem" }}>{questions[step as number].q}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {questions[step as number].opts.map((opt, i) => (
              <button key={opt} onClick={() => answer(i)}
                style={{ padding: "14px 18px", borderRadius: 12, border: "1.5px solid var(--border)", background: "white", color: "var(--text-dark)", fontSize: 15, textAlign: "left", cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "var(--teal)"; (e.target as HTMLElement).style.background = "#E6F7F4"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "var(--border)"; (e.target as HTMLElement).style.background = "white"; }}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : result && (
        <div>
          <div style={{ background: result.eligible ? "linear-gradient(135deg, #0B4D3F 0%, #0F6E56 100%)" : "linear-gradient(135deg, var(--navy) 0%, #162D50 100%)", borderRadius: 20, padding: "2.5rem", marginBottom: 20 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>{result.eligible ? "✅" : "📋"}</div>
            <h2 style={{ color: "white", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{result.type}</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.7 }}>{result.reason}</p>
          </div>

          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem", marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", marginBottom: "1rem" }}>Next steps</h3>
            {result.steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--teal)", color: "white", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>

          <button onClick={() => { setStep(0); setAnswers([]); }}
            style={{ background: "transparent", border: "1.5px solid var(--teal)", color: "var(--teal)", padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            ← Check again
          </button>
        </div>
      )}
    </div>
  );
}
