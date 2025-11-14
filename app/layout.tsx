import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carpet Cleaning Toronto | Eco-Friendly & Same-Day Service - PureClean",
  description:
    "Professional carpet, rug & upholstery cleaning in Toronto & GTA. Eco-friendly solutions, pet-safe cleaning, stain removal & same-day service. Free quotes!",
  keywords:
    "Book top-rated carpet, rug & upholstery cleaning in Toronto. Pet-safe, eco-friendly & fast same-day service. Free estimates & stain removal included.",
  metadataBase: new URL("https://www.purecleancarpet.ca"),
  alternates: {
    canonical: "https://www.purecleancarpet.ca",
  },
  icons: {
    icon: "https://www.purecleancarpet.ca/favicon.ico",
    shortcut: "https://www.purecleancarpet.ca/favicon.ico",
    apple: "https://www.purecleancarpet.ca/apple-icon.png",
  },
  openGraph: {
    title: "Carpet Cleaning Toronto | Eco-Friendly & Same-Day Service - PureClean",
    description:
      "Book top-rated carpet, rug & upholstery cleaning in Toronto. Pet-safe, eco-friendly & fast same-day service. Free estimates & stain removal included.",
    url: "https://www.purecleancarpet.ca",
    siteName: "PureClean Carpet Care",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.purecleancarpet.ca/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PureClean Carpet Care - Professional Carpet Cleaning Services Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Toronto | Eco-Friendly & Same-Day Service - PureClean",
    description:
      "Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and advanced techniques. Serving the GTA.",
    images: ["https://www.purecleancarpet.ca/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification=ylSskeGOQwHtuCThe8FPTINGlheTPbTH0PeTY5Av0yU",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ LocalBusiness Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PureClean Carpet Care",
              image: "https://www.purecleancarpet.ca/logo.png",
              "@id": "https://www.purecleancarpet.ca",
              url: "https://www.purecleancarpet.ca",
              telephone: "+1-647-803-8776",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              sameAs: [
                "https://www.instagram.com/purecleancarpet",
                "https://www.facebook.com/purecleancarpet",
              ],
              priceRange: "$$",
              openingHours: ["Mo-Su 08:00-20:00"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
