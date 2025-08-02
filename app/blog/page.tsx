import Link from "next/link"
import { ArrowRight, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPreview } from "@/components/blog-preview"
import { Breadcrumb } from "@/components/breadcrumb"
import { SchemaMarkup } from "@/components/schema-markup"

const blogPosts = [
  {
    slug: "how-often-should-you-clean-carpets-toronto",
    title: "How Often Should You Clean Your Carpets? Toronto Homeowner's Complete Guide",
    excerpt:
      "Discover the optimal carpet cleaning frequency for Toronto homes. Learn how traffic, pets, allergies, and seasons affect how often you should professionally clean your carpets.",
    date: "2024-12-20",
    readTime: "7 min read",
    author: "Sarah Mitchell",
    coverImage: "/carpet-cleaning-frequency-blog.jpg",
  },
  {
    slug: "professional-carpet-stain-removal-guide",
    title: "Professional Carpet Stain Removal Guide: Remove Any Stain Like a Pro",
    excerpt:
      "Learn professional techniques to remove wine, coffee, pet stains, and more from your carpets. Step-by-step guide with expert tips from Toronto's leading carpet cleaners.",
    date: "2024-12-15",
    readTime: "8 min read",
    author: "Michael Chen",
    coverImage: "/stain-removal-guide-blog.png",
  },
  {
    slug: "carpet-maintenance-tips",
    title: "5 Essential Carpet Maintenance Tips Between Professional Cleanings",
    excerpt:
      "Learn how to keep your carpets looking fresh and extend their lifespan with these simple maintenance tips you can do between professional cleanings.",
    date: "2024-03-15",
    readTime: "5 min read",
    author: "Emma Wilson",
    coverImage: "/carpet-maintenance-blog.jpg",
  },
  {
    slug: "benefits-of-eco-friendly-cleaning",
    title: "Why Eco-Friendly Carpet Cleaning Solutions Are Better for Your Home",
    excerpt:
      "Discover the benefits of choosing eco-friendly carpet cleaning solutions for your home, from improved indoor air quality to safer environments for children and pets.",
    date: "2024-04-02",
    readTime: "6 min read",
    author: "David Thompson",
    coverImage: "/eco-friendly-cleaning-blog.jpg",
  },
]

export default function BlogPage() {
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
            <Link href="/blog" className="text-sm font-medium text-sky-500 transition-colors">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog", isCurrent: true },
              ]}
            />
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PureClean Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Expert tips, insights, and advice on carpet care, cleaning techniques, and maintaining a healthy home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <BlogPreview key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready for Professional Cleaning?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Experience the PureClean difference with our eco-friendly carpet cleaning services.
                </p>
              </div>
              <Button asChild size="lg" className="mt-4">
                <Link href="/#contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-sky-50 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 PureClean Carpet Care. All rights reserved. Proudly Canadian owned and operated.</p>
        </div>
      </footer>
      <SchemaMarkup />
    </div>
  )
}
