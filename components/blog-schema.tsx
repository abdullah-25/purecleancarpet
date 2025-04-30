interface BlogSchemaProps {
  title: string
  description: string
  datePublished: string
  author: string
  slug: string
  image: string
}

export function BlogSchema({ title, description, datePublished, author, slug, image }: BlogSchemaProps) {
  const url = `https://purecleancarepet.ca/blog/${slug}`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
          headline: title,
          description: description,
          image: `https://purecleancarepet.ca${image}`,
          author: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            name: "PureClean Carpet Care",
            logo: {
              "@type": "ImageObject",
              url: "https://purecleancarepet.ca/og-image.jpg",
            },
          },
          datePublished: datePublished,
          dateModified: datePublished,
        }),
      }}
    />
  )
}
