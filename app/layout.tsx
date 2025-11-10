import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://loansense.com"),
  title: {
    default: "LoanSense - Free Mortgage & Loan Calculators",
    template: "%s | LoanSense",
  },
  description:
    "Fast, accurate mortgage and loan calculators with no signup required. Calculate monthly payments, compare loan terms, and make informed financial decisions with U.S. market formulas.",
  keywords: [
    "mortgage calculator",
    "auto loan calculator",
    "refinance calculator",
    "loan payment calculator",
    "free financial calculators",
    "mortgage payment estimator",
  ],
  authors: [{ name: "LoanSense" }],
  creator: "LoanSense",
  publisher: "LoanSense",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loansense.com",
    siteName: "LoanSense",
    title: "LoanSense - Free Mortgage & Loan Calculators",
    description: "Fast, accurate mortgage and loan calculators with no signup required. U.S. market formulas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LoanSense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanSense - Free Mortgage & Loan Calculators",
    description: "Fast, accurate mortgage and loan calculators with no signup required.",
    images: ["/og-image.png"],
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
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2231163850935291"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
