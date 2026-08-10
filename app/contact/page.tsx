import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Dubai Expat Tools — Feedback & Partnerships",
  description: "Get in touch with Dubai Expat Tools. Report a calculator issue, suggest a blog topic, or reach out about partnerships.",
  alternates: { canonical: "https://dubaiexpattools.vercel.app/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
