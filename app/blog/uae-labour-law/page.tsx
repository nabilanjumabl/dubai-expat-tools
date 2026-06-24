import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dubai Expat Tools",
  description: "Free guides for UAE expats.",
};

export default function BlogPost() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <Link href="/blog" style={{ color: "var(--teal)", fontSize: 13, textDecoration: "none" }}>← Back to blog</Link>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: "2rem" }}>Full article coming soon. <Link href="/tools" style={{ color: "var(--teal)" }}>Try our free tools →</Link></p>
    </div>
  );
}
