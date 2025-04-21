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

    // Draw water droplet
    ctx.beginPath()
    ctx.moveTo(200, 150)
    ctx.bezierCurveTo(200, 150, 120, 250, 120, 350)
    ctx.bezierCurveTo(120, 450, 200, 500, 200, 500)
    ctx.bezierCurveTo(200, 500, 280, 450, 280, 350)
    ctx.bezierCurveTo(280, 250, 200, 150, 200, 150)

    const dropletGradient = ctx.createLinearGradient(120, 150, 280, 500)
    dropletGradient.addColorStop(0, "#0ea5e9") // Sky-500
    dropletGradient.addColorStop(1, "#0369a1") // Sky-700

    ctx.fillStyle = dropletGradient
    ctx.fill()

    // Add shine to droplet
    ctx.beginPath()
    ctx.moveTo(160, 220)
    ctx.bezierCurveTo(160, 220, 170, 200, 190, 210)
    ctx.bezierCurveTo(210, 220, 200, 240, 190, 250)
    ctx.bezierCurveTo(180, 260, 160, 240, 160, 220)
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

    // Add contact information
    ctx.font = "18px Arial, sans-serif"
    ctx.fillStyle = "#334155" // Slate-700
    ctx.fillText("Phone: (647) 803-8776", 320, 400)
    ctx.fillText("Email: purecleancarpetscare@gmail.com", 320, 430)
    ctx.fillText("Greater Toronto Area, ON, Canada", 320, 460)

    // Add decorative line
    ctx.beginPath()
    ctx.moveTo(320, 350)
    ctx.lineTo(900, 350)
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 2
    ctx.stroke()

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
      <h2 className="text-xl font-bold mb-4">Business Card Design</h2>
      <div className="border rounded-lg overflow-hidden shadow-lg mb-4">
        <canvas ref={canvasRef} style={{ width: "350px", height: "200px" }} />
      </div>
      <button
        onClick={downloadImage}
        className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
      >
        Download Business Card
      </button>
    </div>
  )
}
