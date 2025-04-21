import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Clock, User } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface BlogPreviewProps {
  title: string
  excerpt: string
  slug: string
  coverImage: string
  date: string
  readTime: string
  author: string
}

export function BlogPreview({ title, excerpt, slug, coverImage, date, readTime, author }: BlogPreviewProps) {
  return (
    <article className="group relative flex flex-col space-y-3">
      <div className="relative overflow-hidden rounded-lg">
        <Link href={`/blog/${slug}`}>
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-3.5 w-3.5" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          <span>{readTime}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold">
        <Link href={`/blog/${slug}`} className="hover:text-sky-500 transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
      <div className="flex items-center gap-2 text-sm mt-1">
        <User className="h-4 w-4 text-muted-foreground" />
        <span>{author}</span>
      </div>
    </article>
  )
}
