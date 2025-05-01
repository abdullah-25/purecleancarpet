"use client"

import { useEffect, useRef } from "react"

export default function BusinessCardGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions for standard business card (3.5 x 2 inches at 300 DPI)
    canvas.width = 1050
    canvas.height = 600

    // Front of card
    // Background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, "#f0f9ff") // sky-50
    gradient.addColorStop(1, "#ffffff") // white

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add subtle pattern in the background
    ctx.globalAlpha = 0.05
    for (let i = 0; i < canvas.width; i += 40) {
      for (let j = 0; j < canvas.height; j += 40) {
        ctx.beginPath()
        ctx.arc(i, j, 5, 0, Math.PI * 2)
        ctx.fillStyle = "#0ea5e9"
        ctx.fill()
      }
    }
    ctx.globalAlpha = 1.0

    // Draw water droplet logo - updated to match the screenshot
    ctx.beginPath()

    // Create teardrop shape
    ctx.moveTo(200, 150) // Top point
    ctx.bezierCurveTo(150, 250, 150, 400, 200, 450) // Left curve
    ctx.bezierCurveTo(250, 400, 250, 250, 200, 150) // Right curve

    // Fill with gradient
    const dropletGradient = ctx.createLinearGradient(150, 150, 250, 450)
    dropletGradient.addColorStop(0, "#7dd3fc") // Light blue (sky-300)
    dropletGradient.addColorStop(1, "#0ea5e9") // Sky-500

    ctx.fillStyle = dropletGradient
    ctx.fill()

    // Add highlights (two small white bubbles in upper right)
    // Larger highlight
    ctx.beginPath()
    ctx.ellipse(230, 220, 15, 20, Math.PI / 4, 0, 2 * Math.PI)
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fill()

    // Smaller highlight
    ctx.beginPath()
    ctx.arc(240, 190, 8, 0, 2 * Math.PI)
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fill()

    // Add text "PureClean"
    ctx.font = "bold 60px Arial, sans-serif"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "left"
    ctx.fillText("PureClean", 320, 250)

    // Add smaller text "Carpet Care"
    ctx.font = "30px Arial, sans-serif"
    ctx.fillStyle = "#64748b" // Slate-500
    ctx.fillText("Carpet Care", 320, 290)

    // Add tagline
    ctx.font = "italic 20px Arial, sans-serif"
    ctx.fillStyle = "#64748b"
    ctx.fillText("Eco-friendly cleaning solutions for your home", 320, 330)

    // Add decorative line
    ctx.beginPath()
    ctx.moveTo(320, 350)
    ctx.lineTo(900, 350)
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 2
    ctx.stroke()

    // Add contact information
    ctx.font = "18px Arial, sans-serif"
    ctx.fillStyle = "#334155" // Slate-700
    ctx.fillText("Phone: (647) 803-8776", 320, 400)
    ctx.fillText("Email: purecleancarpetscare@gmail.com", 320, 430)
    ctx.fillText("Website: www.purecleancarpet.ca", 320, 460)
    ctx.fillText("Greater Toronto Area, ON, Canada", 320, 490)
  }, [])

  const downloadImage = () => {
    if (!canvasRef.current) return

    const link = document.createElement("a")
    link.download = "pureclean-business-card.png"
    link.href = canvasRef.current.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">PureClean Business Card</h2>
      <div className="border rounded-lg overflow-hidden shadow-lg mb-4">
        <canvas ref={canvasRef} style={{ width: "350px", height: "200px" }} />
      </div>
      <div className="flex gap-4">
        <button
          onClick={downloadImage}
          className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
        >
          Download Business Card
        </button>
      </div>
      <div className="mt-6 text-sm text-muted-foreground max-w-md text-center">
        <p>
          This business card features your brand colors and logo. You can print this design on standard 3.5" x 2"
          business cards.
        </p>
      </div>
    </div>
  )
}
