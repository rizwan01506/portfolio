import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personalInfo, about, experience, education, certifications, skills, socialLinks, seo } from "@/lib/data";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author }],
  creator: seo.author,
  publisher: seo.author,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: seo.title,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: "@mdrizwanreactdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: seo.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const [city, state, country] = personalInfo.location.split(", ");

// Structured data (schema.org) so search crawlers and AI answer engines
// (Google SGE, ChatGPT, Perplexity, etc.) can parse identity/skills/contact
// facts directly instead of inferring them from rendered text.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${seo.url}/#person`,
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      description: about.summary,
      url: seo.url,
      image: `${seo.url}/profile-picture.png`,
      email: `mailto:${personalInfo.email}`,
      telephone: personalInfo.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: state,
        addressCountry: country,
      },
      worksFor: {
        "@type": "Organization",
        name: experience[0]?.company,
        url: experience[0]?.companyUrl,
      },
      alumniOf: education.map((edu) => ({
        "@type": "CollegeOrUniversity",
        name: edu.institution,
      })),
      hasCredential: certifications.map((cert) => ({
        "@type": "EducationalOccupationalCredential",
        name: cert.title,
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: cert.issuer },
        ...(cert.url ? { url: cert.url } : {}),
      })),
      knowsAbout: [
        ...skills.frontend.map((s) => s.name),
        ...skills.backend.map((s) => s.name),
      ],
      sameAs: socialLinks.filter((s) => s.url.startsWith("http")).map((s) => s.url),
    },
    {
      "@type": "WebSite",
      "@id": `${seo.url}/#website`,
      url: seo.url,
      name: seo.title,
      description: seo.description,
      inLanguage: "en-US",
      author: { "@id": `${seo.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${seo.url}/#profilepage`,
      url: seo.url,
      name: seo.title,
      isPartOf: { "@id": `${seo.url}/#website` },
      about: { "@id": `${seo.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f7f6f2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${dmSans.variable} ${lora.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
