import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s — Ananya Gupta" },
  description: site.description,
  keywords: [
    "Ananya Gupta",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Next.js",
    "TypeScript",
    "Bennett University",
    "Software Engineering Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ananya Gupta — software engineer and full stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  category: "technology",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#121311" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch(e){}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Software Engineer and Full Stack Developer",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Bennett University" },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "FastAPI",
    ],
    sameAs: [site.github, site.linkedin],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga"
              strategy="afterInteractive"
            >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}')`}</Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="clarity"
            strategy="afterInteractive"
          >{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script','${process.env.NEXT_PUBLIC_CLARITY_ID}')`}</Script>
        )}
      </body>
    </html>
  );
}
