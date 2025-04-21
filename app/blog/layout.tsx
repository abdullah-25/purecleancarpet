import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | PureClean Carpet Care",
  description: "Expert tips, insights, and advice on carpet care, cleaning techniques, and maintaining a healthy home.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
