import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Dubai Expat Tools — Free UAE Calculators & Guides",
  description: "Free tools for UAE expats: salary calculator, AED currency converter, gratuity calculator, golden visa checker, rent estimator, VAT calculator and more.",
  keywords: "UAE salary calculator, AED to PKR, AED to INR, Dubai gratuity calculator, UAE golden visa, Dubai rent calculator, UAE VAT calculator",
  verification: {
    google: 'c9Dh8r8VheKsub58O2tIGx04Mw-0IUgs7pkSkbhUglU',
  },
  openGraph: {
    title: "Dubai Expat Tools",
    description: "Free tools for 10 million UAE expats",
    url: "https://dubaiexpattools.com",
    siteName: "Dubai Expat Tools",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* NAV */}
        <nav style={{ background: "var(--navy)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.5px" }}>Dubai</span>
              <span style={{ color: "white", fontWeight: 400, fontSize: 20 }}>ExpatTools</span>
            </Link>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <Link href="/tools/salary-calculator" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>Salary</Link>
              <Link href="/tools/currency-converter" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>Currency</Link>
              <Link href="/tools/gratuity-calculator" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>Gratuity</Link>
              <Link href="/tools/vat-calculator" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>VAT</Link>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>Blog</Link>
              <Link href="/tools" style={{ background: "var(--gold)", color: "var(--navy)", fontSize: 13, fontWeight: 600, padding: "7px 16px", borderRadius: 8, textDecoration: "none" }}>All Tools</Link>
            </div>
          </div>
        </nav>

        <main style={{ minHeight: "calc(100vh - 60px)" }}>{children}</main>

        {/* FOOTER */}
        <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.6)", padding: "3rem 1.5rem 2rem", marginTop: "4rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
              <div>
                <div style={{ color: "var(--gold)", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>DubaiExpatTools</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>Free calculators and guides for the 10 million expats living and working in the UAE. Built for Indians, Pakistanis, Filipinos, and everyone in between.</p>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Tools</div>
                {[["Salary Calculator", "/tools/salary-calculator"], ["Currency Converter", "/tools/currency-converter"], ["Gratuity Calculator", "/tools/gratuity-calculator"], ["VAT Calculator", "/tools/vat-calculator"], ["Golden Visa Checker", "/tools/golden-visa-checker"], ["Rent Estimator", "/tools/rent-estimator"]].map(([label, href]) => (
                  <div key={href} style={{ marginBottom: 6 }}>
                    <Link href={href} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{label}</Link>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Blog</div>
                {[["Moving to Dubai Guide", "/blog/moving-to-dubai"], ["UAE Labour Law 2026", "/blog/uae-labour-law"], ["Best Banks in UAE", "/blog/best-banks-uae"], ["Dubai vs Abu Dhabi", "/blog/dubai-vs-abu-dhabi"]].map(([label, href]) => (
                  <div key={href} style={{ marginBottom: 6 }}>
                    <Link href={href} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{label}</Link>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Company</div>
                {[["About", "/about"], ["Privacy Policy", "/privacy"], ["Contact", "/contact"]].map(([label, href]) => (
                  <div key={href} style={{ marginBottom: 6 }}>
                    <Link href={href} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{label}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", fontSize: 12, display: "flex", justifyContent: "space-between" }}>
              <span>© 2026 DubaiExpatTools. Free to use, always.</span>
              <span>Built for UAE expats 🇦🇪</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
