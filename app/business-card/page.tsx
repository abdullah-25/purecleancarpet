import Link from "next/link"
import { ArrowLeft, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusinessCardGenerator from "@/components/business-card-generator"
import DoubleSidedBusinessCard from "@/components/double-sided-business-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Card | PureClean Carpet Care",
  description: "Download a professional business card for PureClean Carpet Care",
}

export default function BusinessCardPage() {
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
          <Button variant="outline" size="icon" className="md:hidden">
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

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Business Card Generator</h1>
              <p className="text-muted-foreground">Download a professional business card for PureClean Carpet Care</p>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <Tabs defaultValue="single" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="single">Single-Sided</TabsTrigger>
                  <TabsTrigger value="double">Double-Sided</TabsTrigger>
                </TabsList>
                <TabsContent value="single">
                  <BusinessCardGenerator />
                </TabsContent>
                <TabsContent value="double">
                  <DoubleSidedBusinessCard />
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-8 bg-sky-50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Printing Tips</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Download the business card image and send it to a professional printing service</li>
                <li>Request printing on 14pt or 16pt card stock for durability</li>
                <li>Consider a glossy finish to make the colors pop</li>
                <li>Standard business card size is 3.5" × 2" (89mm × 51mm)</li>
                <li>For best results, use a local print shop that specializes in business cards</li>
                <li>For double-sided cards, ensure the printer knows to print both sides</li>
              </ul>
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
