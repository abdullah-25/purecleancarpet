import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
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
        <p className="text-muted-foreground leading-relaxed">{quote}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground mt-1">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
