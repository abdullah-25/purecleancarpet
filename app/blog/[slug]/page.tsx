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

// Add the new blog post to the blogPosts array
const blogPosts = [
  {
    slug: "how-often-should-you-clean-carpets-toronto",
    title: "How Often Should You Clean Your Carpets? Toronto Homeowner's Complete Guide",
    date: "2024-12-20",
    readTime: "7 min read",
    author: "Sarah Mitchell",
    coverImage: "/carpet-cleaning-frequency-blog.jpg",
    content: `
      <p>One of the most common questions Toronto homeowners ask is: "How often should I have my carpets professionally cleaned?" The answer isn't one-size-fits-all—it depends on several factors unique to your home and lifestyle. This comprehensive guide will help you determine the optimal carpet cleaning frequency for your Toronto home.</p>
      
      <h3>The General Rule: Every 12-18 Months</h3>
      <p>Most carpet manufacturers recommend professional cleaning every 12-18 months to maintain warranty coverage and optimal appearance. However, this baseline recommendation should be adjusted based on your specific circumstances. Toronto's unique climate and urban environment can affect how quickly carpets accumulate dirt and require cleaning.</p>
      
      <h3>Factors That Affect Carpet Cleaning Frequency</h3>
      
      <h4>1. Household Traffic Levels</h4>
      <p>The amount of foot traffic your carpets receive is the primary factor in determining cleaning frequency:</p>
      <ul>
        <li><strong>High Traffic Homes:</strong> Families with children, frequent guests, or busy lifestyles should clean carpets every 6-12 months</li>
        <li><strong>Medium Traffic Homes:</strong> Average families can typically wait 12-18 months between cleanings</li>
        <li><strong>Low Traffic Homes:</strong> Empty nesters or single occupants may extend to 18-24 months</li>
      </ul>
      
      <h4>2. Pets in the Home</h4>
      <p>Pet owners should increase their cleaning frequency significantly:</p>
      <ul>
        <li><strong>Multiple pets:</strong> Every 3-6 months</li>
        <li><strong>One pet:</strong> Every 6-12 months</li>
        <li><strong>Pets with accidents:</strong> Immediate spot cleaning plus professional cleaning every 3-6 months</li>
      </ul>
      <p>Pet dander, hair, and occasional accidents require more frequent professional attention to maintain a healthy indoor environment.</p>
      
      <h4>3. Allergies and Health Concerns</h4>
      <p>Toronto residents with allergies, asthma, or respiratory sensitivities should consider more frequent cleaning:</p>
      <ul>
        <li><strong>Severe allergies:</strong> Every 3-6 months</li>
        <li><strong>Mild allergies:</strong> Every 6-12 months</li>
        <li><strong>Young children:</strong> Every 6-12 months for healthier indoor air quality</li>
      </ul>
      
      <h4>4. Toronto's Seasonal Factors</h4>
      <p>Toronto's distinct seasons create unique challenges for carpet maintenance:</p>
      
      <h5>Winter (December-March)</h5>
      <ul>
        <li>Salt and de-icing chemicals tracked in from sidewalks and roads</li>
        <li>Increased indoor time means more wear on carpets</li>
        <li>Dry indoor air can cause static and attract more dirt</li>
      </ul>
      
      <h5>Spring (April-May)</h5>
      <ul>
        <li>Mud and moisture from spring thaw</li>
        <li>Pollen and allergens increase</li>
        <li>Ideal time for deep cleaning after winter</li>
      </ul>
      
      <h5>Summer (June-August)</h5>
      <ul>
        <li>Increased outdoor activity means more dirt tracked in</li>
        <li>Higher humidity can lead to faster bacterial growth</li>
        <li>Air conditioning can circulate more dust</li>
      </ul>
      
      <h5>Fall (September-November)</h5>
      <ul>
        <li>Leaves and outdoor debris</li>
        <li>Preparation for winter indoor living</li>
        <li>Good time for pre-winter deep cleaning</li>
      </ul>
      
      <h3>Signs Your Carpets Need Professional Cleaning</h3>
      <p>Don't wait for your scheduled cleaning if you notice these warning signs:</p>
      
      <ul>
        <li><strong>Visible stains or discoloration</strong> that home cleaning can't remove</li>
        <li><strong>Persistent odors</strong> even after vacuuming</li>
        <li><strong>Increased allergy symptoms</strong> when spending time in carpeted rooms</li>
        <li><strong>Carpet feels sticky or gritty</strong> underfoot</li>
        <li><strong>Traffic patterns</strong> are clearly visible</li>
        <li><strong>Carpet looks dull</strong> despite regular vacuuming</li>
        <li><strong>It's been over 2 years</strong> since the last professional cleaning</li>
      </ul>
      
      <h3>Toronto-Specific Recommendations</h3>
      
      <h4>Downtown Toronto Condos</h4>
      <p>High-rise living with filtered air and less outdoor exposure: Every 12-18 months</p>
      
      <h4>Suburban Toronto Homes</h4>
      <p>More outdoor access and family activity: Every 6-12 months</p>
      
      <h4>Homes Near Major Roads (401, DVP, Gardiner)</h4>
      <p>Increased air pollution and dust: Every 6-12 months</p>
      
      <h4>Homes with Finished Basements</h4>
      <p>Higher humidity and potential moisture issues: Every 6-12 months</p>
      
      <h3>Cost-Effective Cleaning Schedule</h3>
      <p>To maximize value and carpet lifespan, consider this Toronto homeowner's schedule:</p>
      
      <ul>
        <li><strong>Spring Deep Clean:</strong> Comprehensive cleaning after winter salt and grime</li>
        <li><strong>Fall Maintenance Clean:</strong> Lighter cleaning to prepare for winter</li>
        <li><strong>Spot Treatments:</strong> Address spills and stains immediately year-round</li>
        <li><strong>High-Traffic Area Focus:</strong> Clean entryways and main areas more frequently</li>
      </ul>
      
      <h3>Benefits of Regular Professional Cleaning</h3>
      <p>Maintaining a consistent cleaning schedule provides numerous benefits:</p>
      
      <ul>
        <li><strong>Extended carpet life:</strong> Regular cleaning can double your carpet's lifespan</li>
        <li><strong>Better indoor air quality:</strong> Removes allergens, dust mites, and bacteria</li>
        <li><strong>Maintained appearance:</strong> Prevents permanent staining and wear patterns</li>
        <li><strong>Warranty protection:</strong> Most manufacturers require regular professional cleaning</li>
        <li><strong>Cost savings:</strong> Prevention is cheaper than replacement</li>
        <li><strong>Healthier home environment:</strong> Especially important for children and pets</li>
      </ul>
      
      <h3>Choosing the Right Toronto Carpet Cleaning Service</h3>
      <p>When selecting a carpet cleaning service in Toronto, consider:</p>
      
      <ul>
        <li><strong>Eco-friendly solutions:</strong> Safe for your family and the environment</li>
        <li><strong>Local experience:</strong> Understanding of Toronto's specific challenges</li>
        <li><strong>Flexible scheduling:</strong> Accommodating Toronto's busy lifestyle</li>
        <li><strong>Comprehensive services:</strong> Stain removal, odor treatment, and protection</li>
        <li><strong>Satisfaction guarantee:</strong> Confidence in their work quality</li>
      </ul>
      
      <h3>DIY Maintenance Between Professional Cleanings</h3>
      <p>Extend the time between professional cleanings with proper maintenance:</p>
      
      <ul>
        <li><strong>Vacuum weekly:</strong> More frequently in high-traffic areas</li>
        <li><strong>Address spills immediately:</strong> Blot, don't rub</li>
        <li><strong>Use entrance mats:</strong> Reduce dirt and salt tracked in</li>
        <li><strong>Rotate furniture:</strong> Prevent permanent indentations</li>
        <li><strong>Control humidity:</strong> Use dehumidifiers in basements</li>
        <li><strong>Professional spot treatments:</strong> For stubborn stains</li>
      </ul>
      
      <h3>Conclusion: Your Toronto Carpet Cleaning Schedule</h3>
      <p>The ideal carpet cleaning frequency for your Toronto home depends on your unique circumstances. Use this guide as a starting point, but don't hesitate to adjust based on your carpet's appearance and your family's needs. Remember, regular professional cleaning is an investment in your home's health, appearance, and value.</p>
      
      <p>At PureClean Carpet Care, we understand Toronto's unique challenges and can help you develop a customized cleaning schedule that keeps your carpets looking their best year-round. Our eco-friendly solutions and experienced technicians ensure your carpets receive the care they deserve.</p>
      
      <p>Ready to establish a regular cleaning schedule? Contact us today for a free consultation and quote tailored to your Toronto home's specific needs.</p>
    `,
  },
  {
    slug: "professional-carpet-stain-removal-guide",
    title: "Professional Carpet Stain Removal Guide: Remove Any Stain Like a Pro",
    date: "2024-12-15",
    readTime: "8 min read",
    author: "Michael Chen",
    coverImage: "/stain-removal-guide-blog.png",
    content: `
      <p>Carpet stains are inevitable, but they don't have to be permanent. Whether you're dealing with red wine spills, coffee accidents, pet mishaps, or mysterious marks, this comprehensive guide will teach you professional-grade stain removal techniques used by Toronto's top carpet cleaning experts.</p>
      
      <h3>Understanding Different Types of Carpet Stains</h3>
      <p>Before diving into removal techniques, it's crucial to understand that different stains require different approaches. Stains generally fall into three categories:</p>
      
      <ul>
        <li><strong>Water-soluble stains:</strong> Coffee, tea, wine, juice, and most food spills</li>
        <li><strong>Oil-based stains:</strong> Grease, makeup, crayon, and cooking oils</li>
        <li><strong>Protein-based stains:</strong> Blood, sweat, urine, and other bodily fluids</li>
      </ul>
      
      <h3>Essential Stain Removal Supplies</h3>
      <p>Having the right tools makes all the difference. Here's what professional carpet cleaners always keep on hand:</p>
      
      <ul>
        <li>Clean white cloths or paper towels</li>
        <li>Spray bottles for solution application</li>
        <li>Soft-bristled brush or old toothbrush</li>
        <li>White vinegar and baking soda</li>
        <li>Dish soap (clear, no dyes)</li>
        <li>Hydrogen peroxide (3% solution)</li>
        <li>Enzyme cleaner for organic stains</li>
        <li>Commercial carpet stain remover</li>
      </ul>
      
      <h3>The Golden Rules of Stain Removal</h3>
      <p>Before we get into specific stain treatments, remember these fundamental principles:</p>
      
      <ol>
        <li><strong>Act fast:</strong> The sooner you treat a stain, the better your chances of complete removal</li>
        <li><strong>Blot, don't rub:</strong> Rubbing pushes the stain deeper into carpet fibers</li>
        <li><strong>Work from outside in:</strong> This prevents the stain from spreading</li>
        <li><strong>Test first:</strong> Always test cleaning solutions on an inconspicuous area</li>
        <li><strong>Rinse thoroughly:</strong> Remove all cleaning residue to prevent re-soiling</li>
      </ol>
      
      <h3>Wine and Juice Stains</h3>
      <p>Red wine and dark juices are among the most feared carpet stains, but they're manageable with the right approach:</p>
      
      <ol>
        <li>Immediately blot up as much liquid as possible</li>
        <li>Mix 1 tablespoon white vinegar with 1 tablespoon dish soap in 2 cups warm water</li>
        <li>Apply the solution and blot repeatedly</li>
        <li>For stubborn stains, try a paste of baking soda and water</li>
        <li>Rinse with clean water and blot dry</li>
      </ol>
      
      <h3>Coffee and Tea Stains</h3>
      <p>These common breakfast mishaps are easier to handle than you might think:</p>
      
      <ol>
        <li>Blot the spill immediately</li>
        <li>Mix 1/3 cup white vinegar with 2/3 cup water</li>
        <li>Apply and blot the stain</li>
        <li>If the stain persists, use a commercial enzyme cleaner</li>
        <li>Rinse and dry thoroughly</li>
      </ol>
      
      <h3>Pet Stains and Odors</h3>
      <p>Pet accidents require special attention to eliminate both stains and odors:</p>
      
      <ol>
        <li>Remove solid waste and blot liquid immediately</li>
        <li>Apply an enzyme cleaner specifically designed for pet stains</li>
        <li>Let it sit for the recommended time (usually 10-15 minutes)</li>
        <li>Blot and rinse with clean water</li>
        <li>For persistent odors, sprinkle baking soda, let sit overnight, then vacuum</li>
      </ol>
      
      <h3>Grease and Oil Stains</h3>
      <p>Oil-based stains require a different approach:</p>
      
      <ol>
        <li>Scrape up excess grease without rubbing it in</li>
        <li>Sprinkle cornstarch or baking soda to absorb oil</li>
        <li>Let sit for 15 minutes, then vacuum</li>
        <li>Apply a small amount of dish soap directly to the stain</li>
        <li>Work in gently with a soft brush</li>
        <li>Rinse with warm water and blot dry</li>
      </ol>
      
      <h3>Blood Stains</h3>
      <p>Blood stains are protein-based and require cold water treatment:</p>
      
      <ol>
        <li>Blot fresh blood with cold water (never hot water!)</li>
        <li>Mix 1 tablespoon liquid dish soap with 2 cups cold water</li>
        <li>Apply and blot repeatedly</li>
        <li>For dried blood, try hydrogen peroxide (test first!)</li>
        <li>Rinse thoroughly with cold water</li>
      </ol>
      
      <h3>Ink and Marker Stains</h3>
      <p>These tricky stains often respond well to rubbing alcohol:</p>
      
      <ol>
        <li>Blot the stain with a clean cloth</li>
        <li>Apply rubbing alcohol to a cotton ball</li>
        <li>Dab the stain from outside to center</li>
        <li>Blot with a clean cloth</li>
        <li>Repeat until no more ink transfers</li>
        <li>Rinse with water and dry</li>
      </ol>
      
      <h3>When to Call Professional Carpet Cleaners</h3>
      <p>While many stains can be handled at home, some situations require professional intervention:</p>
      
      <ul>
        <li>Large or widespread stains</li>
        <li>Stains that have set for days or weeks</li>
        <li>Delicate or expensive carpets</li>
        <li>Multiple stain types in one area</li>
        <li>Previous DIY attempts have made the stain worse</li>
        <li>Strong odors that won't dissipate</li>
      </ul>
      
      <h3>Prevention Tips from the Pros</h3>
      <p>The best stain removal strategy is prevention:</p>
      
      <ul>
        <li>Apply carpet protector after professional cleaning</li>
        <li>Use area rugs in high-traffic zones</li>
        <li>Implement a no-shoes policy</li>
        <li>Keep stain removal supplies easily accessible</li>
        <li>Address spills immediately, even small ones</li>
        <li>Schedule regular professional deep cleaning</li>
      </ul>
      
      <p>Remember, while these DIY techniques are effective for many stains, professional carpet cleaners have access to specialized equipment and solutions that can handle even the toughest stains. At PureClean Carpet Care, we use advanced stain removal techniques and eco-friendly solutions to restore your carpets to like-new condition.</p>
      
      <p>Don't let stubborn stains ruin your beautiful carpets. Contact our Toronto carpet cleaning experts for professional stain removal services that get results every time.</p>
    `,
  },
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
