"use client"

import { useEffect, useRef, useState } from "react"

interface BlogImageData {
  title: string
  filename: string
  subtitle?: string
  icon: string
}

const blogImages: BlogImageData[] = [
  {
    title: "Top 5 Carpet Cleaners in Toronto",
    subtitle: "2025 Edition",
    filename: "blog-top-5-cleaners.jpg",
    icon: "star",
  },
  {
    title: "Carpet Cleaning Prices in Toronto",
    subtitle: "What to Expect in 2025",
    filename: "blog-prices-toronto.jpg",
    icon: "dollar",
  },
  {
    title: "Upholstery Cleaning Frequency",
    subtitle: "How Often Should You Do It?",
    filename: "blog-upholstery-cleaning.jpg",
    icon: "sofa",
  },
]

export default function BlogImageGenerator() {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    blogImages.forEach((_, index) => {
      generateBlogImage(index)
    })
  }, [])

  const generateBlogImage = (index: number) => {
    const canvas = canvasRefs.current[index]
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const blogData = blogImages[index]

    // Set canvas dimensions for blog cover image (16:9 aspect ratio)
    canvas.width = 1200
    canvas.height = 675

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#f0f9ff") // sky-50
    gradient.addColorStop(0.5, "#e0f2fe") // sky-100
    gradient.addColorStop(1, "#bae6fd") // sky-200

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add subtle pattern
    ctx.globalAlpha = 0.1
    for (let i = 0; i < canvas.width; i += 60) {
      for (let j = 0; j < canvas.height; j += 60) {
        ctx.beginPath()
        ctx.arc(i, j, 8, 0, Math.PI * 2)
        ctx.fillStyle = "#0ea5e9"
        ctx.fill()
      }
    }
    ctx.globalAlpha = 1.0

    // Draw decorative elements
    drawDecorativeElements(ctx, canvas.width, canvas.height, blogData.icon)

    // Add overlay for text readability
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
    ctx.fillRect(0, canvas.height - 250, canvas.width, 250)

    // Add PureClean logo/brand
    ctx.font = "bold 32px Arial, sans-serif"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "left"
    ctx.fillText("PureClean", 60, canvas.height - 180)

    ctx.font = "18px Arial, sans-serif"
    ctx.fillStyle = "#64748b"
    ctx.fillText("Carpet Care", 60, canvas.height - 150)

    // Add main title
    ctx.font = "bold 48px Arial, sans-serif"
    ctx.fillStyle = "#1e293b"
    ctx.textAlign = "center"

    // Handle long titles by wrapping text
    const words = blogData.title.split(" ")
    let line = ""
    let y = canvas.height - 120
    const maxWidth = canvas.width - 120

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " "
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, canvas.width / 2, y)
        line = words[n] + " "
        y += 55
      } else {
        line = testLine
      }
    }
    ctx.fillText(line, canvas.width / 2, y)

    // Add subtitle if exists
    if (blogData.subtitle) {
      ctx.font = "28px Arial, sans-serif"
      ctx.fillStyle = "#64748b"
      ctx.fillText(blogData.subtitle, canvas.width / 2, y + 40)
    }
  }

  const drawDecorativeElements = (ctx: CanvasRenderingContext2D, width: number, height: number, iconType: string) => {
    // Draw water droplet
    ctx.beginPath()
    ctx.moveTo(width - 200, 100)
    ctx.bezierCurveTo(width - 250, 200, width - 250, 300, width - 200, 350)
    ctx.bezierCurveTo(width - 150, 300, width - 150, 200, width - 200, 100)

    const dropletGradient = ctx.createLinearGradient(width - 250, 100, width - 150, 350)
    dropletGradient.addColorStop(0, "#7dd3fc")
    dropletGradient.addColorStop(1, "#0ea5e9")

    ctx.fillStyle = dropletGradient
    ctx.fill()

    // Add highlight to droplet
    ctx.beginPath()
    ctx.ellipse(width - 170, 150, 12, 15, Math.PI / 4, 0, 2 * Math.PI)
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fill()

    // Draw icon based on type
    drawIcon(ctx, iconType, 100, 150)
  }

  const drawIcon = (ctx: CanvasRenderingContext2D, iconType: string, x: number, y: number) => {
    ctx.strokeStyle = "#0ea5e9"
    ctx.fillStyle = "#0ea5e9"
    ctx.lineWidth = 4

    switch (iconType) {
      case "star":
        // Draw star
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5
          const x1 = x + Math.cos(angle) * 30
          const y1 = y + Math.sin(angle) * 30
          if (i === 0) ctx.moveTo(x1, y1)
          else ctx.lineTo(x1, y1)
        }
        ctx.closePath()
        ctx.fill()
        break

      case "dollar":
        // Draw dollar sign
        ctx.font = "bold 60px Arial, sans-serif"
        ctx.fillText("$", x - 15, y + 20)
        break

      case "sofa":
        // Draw simple sofa shape
        ctx.fillRect(x - 40, y - 10, 80, 30)
        ctx.fillRect(x - 50, y - 20, 20, 40)
        ctx.fillRect(x + 30, y - 20, 20, 40)
        break
    }
  }

  const downloadImage = (index: number) => {
    const canvas = canvasRefs.current[index]
    if (!canvas) return

    const link = document.createElement("a")
    link.download = blogImages[index].filename
    link.href = canvas.toDataURL("image/jpeg", 0.9)
    link.click()
  }

  const downloadAllImages = () => {
    blogImages.forEach((_, index) => {
      setTimeout(() => downloadImage(index), index * 500)
    })
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-6">Blog Cover Image Generator</h2>

      <div className="flex gap-4 mb-6">
        {blogImages.map((blog, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`px-4 py-2 rounded-md transition-colors text-sm ${
              selectedImage === index ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {blog.title.split(" ").slice(0, 3).join(" ")}...
          </button>
        ))}
      </div>

      <div className="border rounded-lg overflow-hidden shadow-lg mb-6">
        {blogImages.map((blog, index) => (
          <canvas
            key={index}
            ref={(el) => (canvasRefs.current[index] = el)}
            style={{
              width: "600px",
              height: "337px",
              display: selectedImage === index ? "block" : "none",
            }}
          />
        ))}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => downloadImage(selectedImage)}
          className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
        >
          Download Current Image
        </button>
        <button
          onClick={downloadAllImages}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Download All Images
        </button>
      </div>

      <div className="bg-sky-50 rounded-lg p-6 max-w-2xl">
        <h3 className="text-lg font-medium mb-3">Generated Blog Images:</h3>
        <ul className="space-y-2 text-sm">
          {blogImages.map((blog, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium">{blog.filename}</span>
              <span className="text-muted-foreground">{blog.title}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-4">
          These images are optimized for blog covers (1200x675px, 16:9 aspect ratio) and match your PureClean branding.
        </p>
      </div>
    </div>
  )
}
