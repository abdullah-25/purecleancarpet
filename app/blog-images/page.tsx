import Link from "next/link"
import { ArrowLeft, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogImageGenerator from "@/components/blog-image-generator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Image Generator | PureClean Carpet Care",
  description: "Generate professional blog cover images for PureClean Carpet Care",
}

export default function BlogImagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-sky-500" />
            <span className="text-xl font-bold">PureClean</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-sky-500 transition-colors">
              About
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/#contact">Get a Quote</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden bg-transparent">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-16">
          <Button asChild variant="ghost" className="mb-6 gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Blog Image Generator</h1>
              <p className="text-muted-foreground">Generate professional cover images for your blog posts</p>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <BlogImageGenerator />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-sky-50 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 PureClean Carpet Care. All rights reserved. Proudly Canadian owned and operated.</p>
        </div>
      </footer>
    </div>
  )
}
