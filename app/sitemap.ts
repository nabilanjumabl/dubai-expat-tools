import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dubaiexpattools.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/salary-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/currency-converter`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/tools/gratuity-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/vat-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/golden-visa-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/rent-estimator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/moving-to-dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/uae-labour-law`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/best-banks-uae`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/dubai-vs-abu-dhabi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
