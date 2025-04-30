import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarIcon, Clock, User } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
// Import the BlogSchema component at the top of the file
import { BlogSchema } from "@/components/blog-schema"
// Import the Breadcrumb component at the top of the file
import { Breadcrumb } from "@/components/breadcrumb"

const blogPosts = [
  {
    slug: "carpet-maintenance-tips",
    title: "5 Essential Carpet Maintenance Tips Between Professional Cleanings",
    date: "2024-03-15",
    readTime: "5 min read",
    author: "Emma Wilson",
    coverImage: "/carpet-maintenance-blog.jpg",
    content: `
      <p>Maintaining your carpets between professional cleanings is essential for extending their lifespan and keeping your home looking and feeling fresh. Here are five essential tips to help you maintain your carpets in top condition:</p>
      
      <h3>1. Vacuum Regularly and Thoroughly</h3>
      <p>Regular vacuuming is the most important step in carpet maintenance. Aim to vacuum high-traffic areas at least twice a week and less-used areas once a week. Use slow, overlapping strokes to ensure you're picking up as much dirt as possible. For best results, invest in a vacuum with a HEPA filter to trap allergens and fine particles.</p>
      
      <h3>2. Address Spills Immediately</h3>
      <p>Quick action is crucial when dealing with spills. Blot (don't rub) the spill with a clean, white cloth or paper towel to absorb as much liquid as possible. For water-soluble stains, use a mixture of water with a small amount of mild dish soap. For tougher stains, keep a carpet-specific spot cleaner on hand. Always test any cleaning solution on an inconspicuous area first.</p>
      
      <h3>3. Use Entrance Mats and Implement a No-Shoes Policy</h3>
      <p>Place quality entrance mats at all exterior doors to trap dirt before it reaches your carpets. Consider implementing a no-shoes policy in your home to significantly reduce the amount of dirt and outdoor contaminants that make their way onto your carpets.</p>
      
      <h3>4. Rearrange Furniture Periodically</h3>
      <p>Furniture can create permanent indentations in your carpet and lead to uneven wear. Rearranging your furniture every 6-12 months helps distribute wear more evenly and prevents permanent compression marks. Use furniture coasters under heavy pieces to minimize indentations.</p>
      
      <h3>5. Schedule Regular Professional Cleanings</h3>
      <p>Even with diligent home care, professional cleaning is necessary to remove deep-seated dirt and allergens. Most carpet manufacturers recommend professional cleaning every 12-18 months to maintain warranty coverage. For homes with pets, children, or high traffic, consider scheduling cleanings more frequently.</p>
      
      <p>By following these simple maintenance tips, you can keep your carpets looking fresh and extend the time between professional cleanings. Remember that regular maintenance not only improves appearance but also contributes to a healthier indoor environment by reducing allergens and bacteria in your home.</p>
      
      <p>When it's time for professional cleaning, PureClean Carpet Care's eco-friendly solutions and advanced techniques will restore your carpets to like-new condition, removing deep-seated dirt and allergens that regular maintenance can't reach.</p>
    `,
  },
  {
    slug: "benefits-of-eco-friendly-cleaning",
    title: "Why Eco-Friendly Carpet Cleaning Solutions Are Better for Your Home",
    date: "2024-04-02",
    readTime: "6 min read",
    author: "David Thompson",
    coverImage: "/eco-friendly-cleaning-blog.jpg",
    content: `
      <p>When it comes to carpet cleaning, the solutions used matter just as much as the cleaning technique. At PureClean Carpet Care, we're committed to using eco-friendly cleaning solutions for all our services. Here's why green cleaning products are better for your home, your family, and the environment:</p>
      
      <h3>Healthier Indoor Air Quality</h3>
      <p>Traditional carpet cleaning chemicals often contain volatile organic compounds (VOCs) that can linger in your home for days after cleaning. These chemicals can cause respiratory irritation, headaches, and other health issues, particularly for those with allergies, asthma, or chemical sensitivities. Eco-friendly solutions use plant-based ingredients that don't release harmful VOCs, resulting in better indoor air quality and a healthier living environment.</p>
      
      <h3>Safer for Children and Pets</h3>
      <p>Children and pets spend more time on or near the floor than adults, making them more vulnerable to chemical residues left behind by traditional cleaning products. Green cleaning solutions eliminate this risk, as they're non-toxic and safe for all family members. You won't have to worry about your children or pets coming into contact with harmful chemicals as they play on freshly cleaned carpets.</p>
      
      <h3>Gentle Yet Effective Cleaning</h3>
      <p>A common misconception is that eco-friendly products don't clean as effectively as their chemical counterparts. In reality, modern green cleaning solutions are formulated to be just as effective at removing dirt, stains, and odors. They work by using enzymes and plant-based surfactants that break down and lift away soil without harsh chemicals that can damage carpet fibers.</p>
      
      <h3>Extended Carpet Lifespan</h3>
      <p>Harsh chemicals in traditional cleaning products can break down carpet fibers and backing over time, leading to premature wear and deterioration. Eco-friendly solutions clean without damaging the carpet structure, helping to extend the life of your investment. This means your carpets will not only look better longer but will also need to be replaced less frequently.</p>
      
      <h3>Reduced Environmental Impact</h3>
      <p>When carpet cleaning is complete, the wastewater containing cleaning solutions is typically disposed of down the drain, eventually making its way into our water systems. Traditional cleaning chemicals can harm aquatic life and contribute to water pollution. Eco-friendly solutions are biodegradable and don't contain phosphates or other harmful ingredients, minimizing their environmental impact.</p>
      
      <h3>No Strong Chemical Odors</h3>
      <p>One of the most noticeable benefits of eco-friendly carpet cleaning is the absence of strong chemical odors afterward. Instead of having to ventilate your home for days to eliminate harsh smells, green cleaning leaves behind a light, natural scent or no scent at all, allowing you to enjoy your freshly cleaned carpets immediately.</p>
      
      <p>At PureClean Carpet Care, we believe that effective cleaning shouldn't come at the expense of your health or the environment. Our commitment to eco-friendly practices ensures that your carpets receive the deep cleaning they need while keeping your home safe and healthy for everyone who lives in it.</p>
      
      <p>Experience the difference of truly clean, truly green carpet care with our professional services. Your carpets—and your family—will thank you.</p>
    `,
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | PureClean Carpet Care",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | PureClean Carpet Care Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      {post && (
        <BlogSchema
          title={post.title}
          description={post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "..."}
          datePublished={post.date}
          author={post.author}
          slug={post.slug}
          image={post.coverImage}
        />
      )}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
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
              className="h-6 w-6 text-sky-500"
            >
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
              <path d="M2 12a10 10 0 0 0 10 10V12z" />
              <path d="M12 2a10 10 0 0 1 10 10H12z" />
              <path d="M12 22a10 10 0 0 1-10-10h10z" />
            </svg>
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
        <article className="container max-w-4xl py-12">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}`, isCurrent: true },
            ]}
          />
          <Button asChild variant="ghost" className="mb-6 gap-1">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">{post.title}</h1>

          <div className="prose prose-sky max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Ready for a Professional Cleaning?</h3>
            <p className="text-muted-foreground mb-6">
              Experience the PureClean difference with our eco-friendly carpet cleaning services.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </article>
      </main>
      <footer className="w-full border-t bg-sky-50 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 PureClean Carpet Care. All rights reserved. Proudly Canadian owned and operated.</p>
        </div>
      </footer>
    </div>
  )
}
