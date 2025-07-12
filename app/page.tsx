import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Droplet,
  Home,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Clock,
  User,
} from "lucide-react"
import { CalendarIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"

// Import the SchemaMarkup component at the top of the file
import { SchemaMarkup } from "@/components/schema-markup"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return date.toLocaleDateString(undefined, options)
}

export default function HomePage() {
  const featuredBlogPosts = [
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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-sky-500" />
            <span className="text-xl font-bold">PureClean</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#" className="text-sm font-medium hover:text-sky-500 transition-colors">
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
          <Button asChild className="hidden md:inline-flex" aria-label="Go to contact section">
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
        <section className="relative w-full overflow-hidden py-20 md:py-28 lg:py-32">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/pattern-bg.png')] bg-repeat opacity-5"></div>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                    Eco-Friendly Cleaning Solutions
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                    Revitalize Your Home with PureClean
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                    Professional deep-cleaning for carpets, rugs, and upholstery using eco-friendly solutions and
                    advanced techniques. Serving Greater Toronto Area.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="px-8 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Link href="/#contact" className="flex items-center">
                      Book Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-sky-200 hover:bg-sky-50 transition-all duration-300"
                  >
                    <Link href="/#services">Our Services</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <CheckCircle className="h-4 w-4 text-sky-500" />
                    <span>Eco-Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <CheckCircle className="h-4 w-4 text-sky-500" />
                    <span>Canadian Owned</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <CheckCircle className="h-4 w-4 text-sky-500" />
                    <span>Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none mt-6 lg:mt-0">
                <div className="absolute -top-6 -right-6 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                <Image
                  src="/sparkling-clean-carpet.png"
                  alt="Professional carpet cleaning"
                  width={800}
                  height={600}
                  className="relative w-full rounded-2xl object-cover shadow-lg transition-all duration-500 hover:scale-[1.02] z-10"
                />
                <div className="absolute -bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 z-20 hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-xs font-medium">
                        99%
                      </div>
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-medium">
                        A+
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Customer Satisfaction</p>
                      <p className="text-xs text-muted-foreground">Based on 50+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-50 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sky-50 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-3">
                <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                  Professional Cleaning Solutions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  We offer a range of specialized cleaning services to restore your home to pristine condition.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Carpet Cleaning</h3>
                  <p className="text-muted-foreground">
                    Deep cleaning that removes embedded dirt, stains, and allergens from your carpets, leaving them
                    fresh and revitalized.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Rug Cleaning</h3>
                  <p className="text-muted-foreground">
                    Specialized cleaning for all types of rugs, including delicate and valuable ones, using gentle yet
                    effective methods.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Upholstery Cleaning</h3>
                  <p className="text-muted-foreground">
                    Refresh and sanitize your furniture with our advanced upholstery cleaning techniques that remove
                    stains and odors.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Tabs defaultValue="carpet" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 p-1 rounded-full bg-sky-50 border border-sky-100">
                  <TabsTrigger
                    value="carpet"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow-sm"
                  >
                    Carpet
                  </TabsTrigger>
                  <TabsTrigger
                    value="rug"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow-sm"
                  >
                    Rug
                  </TabsTrigger>
                  <TabsTrigger
                    value="upholstery"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow-sm"
                  >
                    Upholstery
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="carpet" className="mt-8">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                        Our Process
                      </div>
                      <h3 className="text-2xl font-bold">Carpet Cleaning Process</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">1</span>
                          </div>
                          <span>Pre-inspection and identification of problem areas</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">2</span>
                          </div>
                          <span>Pre-treatment with eco-friendly solutions</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">3</span>
                          </div>
                          <span>Deep extraction cleaning to remove dirt and allergens</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">4</span>
                          </div>
                          <span>Spot treatment for stubborn stains</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">5</span>
                          </div>
                          <span>Quick-dry technology to minimize downtime</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                      <Image
                        src="/dirty-to-clean-carpet.png"
                        alt="Carpet cleaning before and after"
                        width={600}
                        height={400}
                        className="relative w-full rounded-2xl shadow-md z-10"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="rug" className="mt-8">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                        Our Process
                      </div>
                      <h3 className="text-2xl font-bold">Rug Cleaning Process</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">1</span>
                          </div>
                          <span>Fiber and construction identification</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">2</span>
                          </div>
                          <span>Gentle dusting to remove loose dirt</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">3</span>
                          </div>
                          <span>Hand washing with specialized solutions</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">4</span>
                          </div>
                          <span>Thorough rinsing and controlled drying</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">5</span>
                          </div>
                          <span>Final grooming and inspection</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                      <Image
                        src="/pristine-rug-revival.png"
                        alt="Professional rug cleaning"
                        width={600}
                        height={400}
                        className="relative w-full rounded-2xl shadow-md z-10"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="upholstery" className="mt-8">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                        Our Process
                      </div>
                      <h3 className="text-2xl font-bold">Upholstery Cleaning Process</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">1</span>
                          </div>
                          <span>Fabric analysis and testing</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">2</span>
                          </div>
                          <span>Vacuuming to remove surface debris</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">3</span>
                          </div>
                          <span>Application of specialized cleaning agents</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">4</span>
                          </div>
                          <span>Extraction cleaning to remove dirt and solutions</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                            <span className="text-xs font-medium">5</span>
                          </div>
                          <span>Deodorizing and fabric protection (optional)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                      <Image
                        src="/professional-sofa-cleaning.png"
                        alt="Upholstery cleaning"
                        width={600}
                        height={400}
                        className="relative w-full rounded-2xl shadow-md z-10"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="about" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/pattern-bg.png')] bg-repeat opacity-5"></div>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                <Image
                  src="/natural-carpet-cleaning.png"
                  alt="Eco-friendly cleaning solutions"
                  width={800}
                  height={600}
                  className="relative w-full rounded-2xl object-cover shadow-lg z-10"
                />
                <div className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-20 hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                        className="h-5 w-5"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Eco-Friendly</p>
                      <p className="text-xs text-muted-foreground">Safe for your family</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                  Locally Owned, Eco-Friendly Cleaning Experts
                </h2>
                <p className="text-muted-foreground">
                  PureClean Carpet Care is a proudly Canadian-owned business dedicated to providing exceptional cleaning
                  services while protecting your health and the environment.
                </p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>
                      We use only eco-friendly, non-toxic cleaning solutions that are safe for your family and pets
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>Our advanced cleaning techniques remove up to 98% of allergens and bacteria</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>Fully insured and certified technicians with years of experience</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>We're committed to affordable pricing without compromising on quality</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>100% satisfaction guarantee on all our services</span>
                  </li>
                </ul>
                <div>
                  <Button
                    asChild
                    className="mt-6 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Link href="/#contact">Contact Us Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-sky-50 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-sky-50 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                Why Choose Us
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                  Why Choose PureClean?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Experience the difference with our professional cleaning services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Techniques</h3>
                <p className="text-muted-foreground">
                  We use the latest equipment and methods to deliver superior cleaning results that last longer.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Eco-Friendly Solutions</h3>
                <p className="text-muted-foreground">
                  Our green cleaning products are safe for your family, pets, and the environment.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
                <p className="text-muted-foreground">
                  We're not happy until you're happy with our cleaning results and service quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/pattern-bg.png')] bg-repeat opacity-5"></div>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                Testimonials
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="flex mb-5">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Amazing service! They were quick to schedule the job and efficiently got it done. I don't have any
                  complaints."
                </p>
                <div className="mt-auto pt-4 border-t">
                  <p className="font-medium">Y H</p>
                  <p className="text-sm text-muted-foreground mt-1">Customer</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="flex mb-5">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "I spilled milk tea on my carpet and called this company, they cleaned all my rugs and did an amazing
                  job. The stain was completely gone. They are very nice and have affordable price, I recommend them."
                </p>
                <div className="mt-auto pt-4 border-t">
                  <p className="font-medium">PirAli Khan</p>
                  <p className="text-sm text-muted-foreground mt-1">Customer</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                <div className="flex mb-5">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "I was praying for an honest and reliable carpet cleaner. So, I Google it. There I found Aslam. We
                  spoke over the phone and he told me about the price. We made arrangement for him to come over that
                  same day. He and his co-worker did a magnificent job. If you are looking for an honest and reliable
                  person, give Aslam a call."
                </p>
                <div className="mt-auto pt-4 border-t">
                  <p className="font-medium">Ann Ibrahim</p>
                  <p className="text-sm text-muted-foreground mt-1">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-50 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sky-50 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                Our Blog
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                  Carpet Care Tips & Insights
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Expert advice to help you maintain clean, healthy carpets and upholstery.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              {featuredBlogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-sky-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 to-sky-600"></div>
                  <div className="relative overflow-hidden">
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-sky-500 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm mt-4">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-sky-200 hover:bg-sky-50 transition-all duration-300"
              >
                <Link href="/blog" className="flex items-center">
                  View All Articles{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/pattern-bg.png')] bg-repeat opacity-5"></div>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-700">
                    Get in Touch for a Cleaner, Healthier Space
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Ready to transform your carpets, rugs, or upholstery? Contact us today for a free quote.
                  </p>
                </div>
                <div className="space-y-4 mt-2">
                  <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-muted-foreground">(647) 803-8776</p>
                      <p className="text-sm text-muted-foreground mt-1">Available 7 days a week, 8am-8pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-muted-foreground">Greater Toronto Area, ON, Canada</p>
                      <p className="text-sm text-muted-foreground mt-1">Serving all GTA locations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
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
                        className="h-5 w-5"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground">purecleancarpetscare@gmail.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-sky-200 hover:bg-sky-50 transition-all duration-300"
                  >
                    <Link href="tel:+16478038776" className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full rounded-2xl border border-sky-200 bg-white/50"></div>
                <div className="relative rounded-2xl border border-sky-100 bg-white p-6 shadow-sm z-10">
                  <h3 className="text-xl font-bold mb-4">Request a Free Quote</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative w-full border-t bg-sky-50 py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/pattern-bg.png')] bg-repeat opacity-5"></div>
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Droplet className="h-6 w-6 text-sky-500" />
                <span className="text-xl font-bold">PureClean</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Serving Toronto, Etobicoke, North York, Mississauga, and more.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Carpet Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Rug Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Upholstery Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Stain Removal
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Odor Removal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-sky-100 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 PureClean Carpet Care. All rights reserved. Proudly Canadian owned and operated.</p>
          </div>
        </div>
      </footer>
      <SchemaMarkup />
    </div>
  )
}
