import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PureClean Carpet Care | Professional Carpet Cleaning Services",
  description:
    "Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and advanced techniques in the Greater Toronto Area.",
  keywords: "carpet cleaning, rug cleaning, upholstery cleaning, eco-friendly cleaning, Toronto, GTA",
  metadataBase: new URL("https://purecleancarepet.ca"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "PureClean Carpet Care | Professional Carpet Cleaning Services",
    description:
      "Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and advanced techniques.",
    url: "https://purecleancarepet.ca",
    siteName: "PureClean Carpet Care",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PureClean Carpet Care - Professional Carpet Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PureClean Carpet Care | Professional Carpet Cleaning Services",
    description:
      "Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and advanced techniques.",
    images: ["/og-image.jpg"],
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
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
