/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.purecleancarpet.ca",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/admin", "/business-card", "/blog-images"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin", "/api"],
      },
    ],
    additionalSitemaps: ["https://www.purecleancarpet.ca/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    if (path === "/blog") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }

    // Default values
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
