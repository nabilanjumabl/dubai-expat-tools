"use client";
import { useState } from "react";
import type { Metadata } from "next";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "General enquiry", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // In production: connect to Formspree, EmailJS, or similar free service
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>Contact Us</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem" }}>Have a suggestion, spotted an error, or want to collaborate? We read every message.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: "2rem" }}>
        {[["🛠️", "Tool feedback", "Tell us if a calculator is wrong or needs improvement"], ["📝", "Content ideas", "Suggest a blog topic or guide you want us to write"], ["🤝", "Partnerships", "Advertising or affiliate partnership enquiries"]].map(([icon, title, desc]) => (
          <div key={title} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 4 }}>{title}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Your name *</label>
              <input className="calc-input" type="text" placeholder="Ahmed Ali" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Email address *</label>
              <input className="calc-input" type="email" placeholder="ahmed@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Subject</label>
            <select className="calc-input" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
              <option>General enquiry</option>
              <option>Tool error / bug report</option>
              <option>Content suggestion</option>
              <option>Advertising / partnership</option>
              <option>Other</option>
            </select>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-dark)", marginBottom: 6 }}>Message *</label>
            <textarea className="calc-input" rows={5} placeholder="Tell us what's on your mind..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
          </div>

          <button onClick={handleSubmit} style={{ background: "var(--navy)", color: "white", fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 10, border: "none", cursor: "pointer", width: "100%" }}>
            Send message →
          </button>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 10, textAlign: "center" }}>We typically respond within 1–2 business days.</p>
        </div>
      ) : (
        <div style={{ background: "#D1FAE5", border: "1px solid #6EE7B7", borderRadius: 16, padding: "3rem", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#065F46", marginBottom: 8 }}>Message sent!</h2>
          <p style={{ fontSize: 15, color: "#065F46", lineHeight: 1.7 }}>Thank you for reaching out. We will get back to you within 1–2 business days.</p>
        </div>
      )}
    </div>
  );
}
