"use client"

import { useEffect, useRef } from "react"

export default function StainRemovalBlogImageGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    generateStainRemovalImage()
  }, [])

  const generateStainRemovalImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions for blog cover image (16:9 aspect ratio)
    canvas.width = 1200
    canvas.height = 675

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#f8fafc") // slate-50
    gradient.addColorStop(0.5, "#f1f5f9") // slate-100
    gradient.addColorStop(1, "#e2e8f0") // slate-200

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

    // Draw carpet sections (before/after)
    drawCarpetSection(ctx, 150, 200, 300, 150, "#8b4513", "Before") // Dirty carpet
    drawCarpetSection(ctx, 750, 200, 300, 150, "#deb887", "After") // Clean carpet

    // Draw cleaning supplies
    drawSprayBottle(ctx, 100, 400)
    drawCleaningCloth(ctx, 200, 450)
    drawBrush(ctx, 300, 420)
    drawBakingSoda(ctx, 900, 400)
    drawVinegar(ctx, 1000, 380)

    // Draw stain examples
    drawStain(ctx, 200, 250, "#722f37", "wine") // Wine stain
    drawStain(ctx, 250, 280, "#8b4513", "coffee") // Coffee stain
    drawStain(ctx, 300, 260, "#228b22", "grass") // Grass stain

    // Add arrows showing transformation
    drawArrow(ctx, 500, 275, 650, 275)

    // Add title overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
    ctx.fillRect(0, canvas.height - 180, canvas.width, 180)

    // Add main title
    ctx.font = "bold 48px Arial, sans-serif"
    ctx.fillStyle = "#1e293b"
    ctx.textAlign = "center"
    ctx.fillText("Professional Carpet", canvas.width / 2, canvas.height - 120)
    ctx.fillText("Stain Removal Guide", canvas.width / 2, canvas.height - 70)

    // Add PureClean branding
    ctx.font = "bold 24px Arial, sans-serif"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "left"
    ctx.fillText("PureClean", 40, canvas.height - 30)

    ctx.font = "16px Arial, sans-serif"
    ctx.fillStyle = "#64748b"
    ctx.fillText("Carpet Care", 40, canvas.height - 10)

    // Add "Expert Tips" badge
    drawBadge(ctx, canvas.width - 150, 50, "Expert Tips")
  }

  const drawCarpetSection = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    label: string,
  ) => {
    // Carpet base
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)

    // Add carpet texture
    ctx.strokeStyle = color === "#8b4513" ? "#654321" : "#cd853f"
    ctx.lineWidth = 2
    for (let i = 0; i < width; i += 10) {
      ctx.beginPath()
      ctx.moveTo(x + i, y)
      ctx.lineTo(x + i, y + height)
      ctx.stroke()
    }

    // Add label
    ctx.font = "bold 20px Arial, sans-serif"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.fillText(label, x + width / 2, y + height / 2)

    // Add border
    ctx.strokeStyle = "#374151"
    ctx.lineWidth = 3
    ctx.strokeRect(x, y, width, height)
  }

  const drawSprayBottle = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Bottle body
    ctx.fillStyle = "#3b82f6"
    ctx.fillRect(x, y, 30, 60)

    // Spray nozzle
    ctx.fillStyle = "#1f2937"
    ctx.fillRect(x + 30, y + 10, 15, 10)

    // Spray effect
    ctx.strokeStyle = "#7dd3fc"
    ctx.lineWidth = 2
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(x + 45, y + 15)
      ctx.lineTo(x + 60 + i * 5, y + 13 + i * 2)
      ctx.stroke()
    }

    // Label
    ctx.font = "12px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("Cleaner", x + 15, y + 80)
  }

  const drawCleaningCloth = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Cloth
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(x, y, 40, 30)

    // Cloth texture
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    for (let i = 0; i < 4; i++) {
      ctx.beginPath()
      ctx.moveTo(x + i * 10, y)
      ctx.lineTo(x + i * 10, y + 30)
      ctx.stroke()
    }

    // Border
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, 40, 30)

    // Label
    ctx.font = "12px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("Cloth", x + 20, y + 45)
  }

  const drawBrush = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Handle
    ctx.fillStyle = "#8b4513"
    ctx.fillRect(x, y, 8, 40)

    // Bristles
    ctx.fillStyle = "#fbbf24"
    ctx.fillRect(x - 5, y + 35, 18, 15)

    // Bristle lines
    ctx.strokeStyle = "#f59e0b"
    ctx.lineWidth = 1
    for (let i = 0; i < 6; i++) {
      ctx.beginPath()
      ctx.moveTo(x - 3 + i * 3, y + 35)
      ctx.lineTo(x - 3 + i * 3, y + 50)
      ctx.stroke()
    }

    // Label
    ctx.font = "12px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("Brush", x + 4, y + 65)
  }

  const drawBakingSoda = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Box
    ctx.fillStyle = "#fbbf24"
    ctx.fillRect(x, y, 35, 50)

    // Label on box
    ctx.font = "10px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("BAKING", x + 17.5, y + 20)
    ctx.fillText("SODA", x + 17.5, y + 35)

    // Powder spilling
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(x + 40, y + 45, 8, 0, Math.PI * 2)
    ctx.fill()

    // Label
    ctx.font = "12px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("Baking Soda", x + 17.5, y + 70)
  }

  const drawVinegar = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Bottle
    ctx.fillStyle = "#10b981"
    ctx.fillRect(x, y, 25, 55)

    // Neck
    ctx.fillRect(x + 8, y - 10, 9, 15)

    // Cap
    ctx.fillStyle = "#1f2937"
    ctx.fillRect(x + 6, y - 15, 13, 8)

    // Label
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(x + 3, y + 15, 19, 20)

    ctx.font = "8px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("VINEGAR", x + 12.5, y + 27)

    // Bottom label
    ctx.font = "12px Arial, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("Vinegar", x + 12.5, y + 75)
  }

  const drawStain = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string, type: string) => {
    // Stain blob
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.ellipse(x, y, 15, 10, 0, 0, 2 * Math.PI)
    ctx.fill()

    // Stain splatter
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.arc(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 15, 2 + Math.random() * 3, 0, 2 * Math.PI)
      ctx.fill()
    }
  }

  const drawArrow = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) => {
    // Arrow line
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()

    // Arrow head
    ctx.fillStyle = "#0ea5e9"
    ctx.beginPath()
    ctx.moveTo(x2, y2)
    ctx.lineTo(x2 - 15, y2 - 8)
    ctx.lineTo(x2 - 15, y2 + 8)
    ctx.closePath()
    ctx.fill()
  }

  const drawBadge = (ctx: CanvasRenderingContext2D, x: number, y: number, text: string) => {
    // Badge background
    ctx.fillStyle = "#ef4444"
    ctx.beginPath()
    ctx.roundRect(x - 60, y, 120, 30, 15)
    ctx.fill()

    // Badge text
    ctx.font = "bold 14px Arial, sans-serif"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.fillText(text, x, y + 20)
  }

  const downloadImage = () => {
    if (!canvasRef.current) return

    const link = document.createElement("a")
    link.download = "stain-removal-guide-blog.png"
    link.href = canvasRef.current.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Stain Removal Guide Blog Image</h2>
      <div className="border rounded-lg overflow-hidden shadow-lg mb-4">
        <canvas ref={canvasRef} style={{ width: "600px", height: "337px" }} />
      </div>
      <button
        onClick={downloadImage}
        className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
      >
        Download Blog Image
      </button>
      <div className="mt-4 text-sm text-muted-foreground max-w-2xl text-center">
        <p>
          This image shows a professional stain removal guide with before/after carpet sections, cleaning supplies, and
          expert tips branding.
        </p>
      </div>
    </div>
  )
}
