import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carpet Cleaning Tips & Advice | PureClean Carpet Care Toronto",
  description:
    "Expert carpet cleaning tips, stain removal guides, and maintenance advice from Toronto's trusted carpet cleaning professionals. Learn how to extend the life of your carpets.",
  keywords:
    "carpet cleaning tips, stain removal guide, carpet maintenance, rug cleaning advice, upholstery care, Toronto carpet cleaning blog",
  alternates: {
    canonical: "https://purecleancarepet.ca/blog",
  },
  openGraph: {
    title: "Carpet Cleaning Tips & Advice | PureClean Blog",
    description:
      "Expert carpet cleaning tips, stain removal guides, and maintenance advice from Toronto's trusted carpet cleaning professionals.",
    url: "https://purecleancarepet.ca/blog",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
