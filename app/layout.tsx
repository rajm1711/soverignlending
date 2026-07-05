import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sovereign Lending | Premium Australian Mortgage Brokerage",
  description: "Australia's trusted mortgage brokerage. Expert home loan advice, competitive rates from 40+ lenders, and personalised service. Get your free consultation today.",
  keywords: ["mortgage broker", "home loan", "refinancing", "Australian mortgage", "property investment", "first home buyer", "loan comparison"],
  metadataBase: new URL('https://sovereignlending.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sovereign Lending | Premium Australian Mortgage Brokerage",
    description: "Expert mortgage advice from Australia's most trusted lending specialists. Over $500M in residential loans settled.",
    url: "https://sovereignlending.com.au",
    siteName: "Sovereign Lending",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Lending | Premium Australian Mortgage Brokerage",
    description: "Expert mortgage advice from Australia's most trusted lending specialists.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Sovereign Lending",
  "description": "Premium Australian Mortgage Brokerage providing expert home loan advice and competitive rates.",
  "url": "https://sovereignlending.com.au",
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "serviceType": ["Mortgage Broker", "Home Loan", "Refinancing", "Investment Loans"],
  "currenciesAccepted": "AUD",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 12, 60 Martin Place",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "AU"
  },
  "telephone": "+61 2 8000 1234",
  "email": "hello@sovereignlending.com.au"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-accent selection:text-accent-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
        {/* <Toaster position="top-right" /> */}
      </body>
    </html>
  );
}
