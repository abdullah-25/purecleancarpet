// app/sitemap.xml/route.ts
export const runtime = "edge"

export async function GET() {
  const baseUrl = "https://www.purecleancarpet.ca"
  const currentDate = new Date().toISOString()

  // Define your blog posts (you can also fetch these from a CMS or database)
  const blogPosts = [
    {
      slug: "how-often-should-you-clean-carpets-toronto",
      lastmod: "2024-12-20T00:00:00+00:00",
      priority: "0.80",
    },
    {
      slug: "professional-carpet-stain-removal-guide",
      lastmod: "2024-12-15T00:00:00+00:00",
      priority: "0.70",
    },
    {
      slug: "carpet-maintenance-tips",
      lastmod: "2024-03-15T00:00:00+00:00",
      priority: "0.70",
    },
    {
      slug: "benefits-of-eco-friendly-cleaning",
      lastmod: "2024-04-02T00:00:00+00:00",
      priority: "0.70",
    },
  ]

  // Define static pages
  const staticPages = [
    {
      url: "/",
      lastmod: currentDate,
      priority: "1.00",
      changefreq: "daily",
    },
    {
      url: "/blog",
      lastmod: currentDate,
      priority: "0.80",
      changefreq: "weekly",
    },
    {
      url: "/blogs",
      lastmod: currentDate,
      priority: "0.80",
      changefreq: "weekly",
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
${blogPosts
  .map(
    (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  })
}
