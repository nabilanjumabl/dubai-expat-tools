import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dubai Expat Tools",
  description: "Privacy policy for Dubai Expat Tools. We do not collect personal data. Learn how we handle information and use of cookies.",
};

export default function Privacy() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>Privacy Policy</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: "2rem" }}>Last updated: July 1, 2026</p>

      {[
        { title: "1. Overview", body: "Dubai Expat Tools (\"we\", \"us\", \"our\") operates the website dubaiexpattools.vercel.app. This privacy policy explains how we handle information when you use our website. Our core principle is simple: we do not collect, store, or sell your personal data. All calculator tools run entirely in your browser." },
        { title: "2. Information we do NOT collect", body: "We do not collect your name, email address, phone number, salary figures, or any other personal information. The numbers you enter into our calculators (salary, years of service, etc.) are processed locally in your browser and are never sent to our servers. We have no user accounts, no login system, and no database of user information." },
        { title: "3. Cookies and analytics", body: "We may use Google Analytics to understand aggregate traffic patterns (e.g. how many visitors we receive, which pages are most popular, which countries visitors come from). This data is entirely anonymous and aggregated — it cannot be used to identify you personally. You can opt out of Google Analytics by using the Google Analytics Opt-out Browser Add-on." },
        { title: "4. Advertising", body: "We use Google AdSense to display advertisements on our website. Google AdSense may use cookies to show ads based on your prior visits to our website or other websites. You can opt out of personalised advertising by visiting Google's Ad Settings at adssettings.google.com. We do not control the content of ads shown, and advertisers do not have access to any of your data through us." },
        { title: "5. Third-party services", body: "Our currency converter tool fetches live exchange rates from the ExchangeRate-API (exchangerate-api.com). This request is made from your browser and only involves currency code queries — no personal data is transmitted. We link to external websites (MOHRE, GDRFA, banks, etc.) but are not responsible for their privacy practices." },
        { title: "6. Children's privacy", body: "Our website is not directed at children under the age of 13. We do not knowingly collect any information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to delete such information." },
        { title: "7. Changes to this policy", body: "We may update this privacy policy from time to time. We will notify users of any significant changes by updating the 'Last updated' date at the top of this page. Continued use of the website after changes constitutes acceptance of the updated policy." },
        { title: "8. Contact us", body: "If you have any questions about this privacy policy, please contact us via our Contact page. We will respond within 5 business days." },
      ].map(section => (
        <div key={section.title} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.5rem", marginBottom: 14 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", marginBottom: 10 }}>{section.title}</h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{section.body}</p>
        </div>
      ))}
    </div>
  );
}
