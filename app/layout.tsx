import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PureClean Carpet Care | Eco-Friendly Carpet Cleaning Toronto GTA",
  description:
    "Professional carpet, rug & upholstery cleaning in Toronto & GTA. Eco-friendly solutions, pet-safe cleaning, stain removal & same-day service. Free quotes!",
  keywords:
    "carpet cleaning Toronto, rug cleaning GTA, upholstery cleaning, eco-friendly cleaning, pet-safe carpet cleaning, stain removal, same-day service, professional carpet cleaners Toronto",
  metadataBase: new URL("https://purecleancarpet.ca"),
  alternates: {
    canonical: "https://purecleancarpet.ca",
  },
  icons: {
  icon: "https://www.purecleancarpet.ca/favicon.ico",
  shortcut: "https://www.purecleancarpet.ca/favicon.ico",
  apple: "https://www.purecleancarpet.ca/apple-icon.png",
  },

  openGraph: {
    title: "PureClean Carpet Care | Eco-Friendly Carpet Cleaning Services Toronto",
    description:
      "Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and advanced techniques. Serving the Greater Toronto Area.",
    url: "https://purecleancarpet.ca",
    siteName: "PureClean Carpet Care",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PureClean Carpet Care - Professional Carpet Cleaning Services Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PureClean Carpet Care | Professional Carpet Cleaning Toronto",
    description:
      "Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and advanced techniques. Serving the GTA.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification=ylSskeGOQwHtuCThe8FPTINGlheTPbTH0PeTY5Av0yU", // Replace with your actual verification code when you have it
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
