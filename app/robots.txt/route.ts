// app/robots.txt/route.ts
export const runtime = "edge"

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /admin
Disallow: /api
Disallow: /business-card
Disallow: /blog-images

# Sitemap
Sitemap: https://www.purecleancarpet.ca/sitemap.xml

# Crawl-delay
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  })
}
