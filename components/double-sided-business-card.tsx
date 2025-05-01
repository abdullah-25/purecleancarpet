"use client"

import { useEffect, useRef, useState } from "react"

export default function DoubleSidedBusinessCard() {
  const frontCanvasRef = useRef<HTMLCanvasElement>(null)
  const backCanvasRef = useRef<HTMLCanvasElement>(null)
  const [activeSide, setActiveSide] = useState<"front" | "back">("front")

  useEffect(() => {
    renderFrontSide()
    renderBackSide()
  }, [])

  const renderFrontSide = () => {
    if (!frontCanvasRef.current) return

    const canvas = frontCanvasRef.current
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

    // Create teardrop shape with rounder bottom
    ctx.moveTo(200, 150) // Top point
    ctx.bezierCurveTo(150, 250, 150, 350, 200, 450) // Left curve with rounder bottom
    ctx.bezierCurveTo(250, 350, 250, 250, 200, 150) // Right curve with rounder bottom

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
  }

  const renderBackSide = () => {
    if (!backCanvasRef.current) return

    const canvas = backCanvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions for standard business card (3.5 x 2 inches at 300 DPI)
    canvas.width = 1050
    canvas.height = 600

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#0ea5e9") // Sky-500
    gradient.addColorStop(1, "#0369a1") // Sky-700

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add subtle pattern
    ctx.globalAlpha = 0.1
    for (let i = 0; i < canvas.width; i += 40) {
      for (let j = 0; j < canvas.height; j += 40) {
        ctx.beginPath()
        ctx.arc(i, j, 5, 0, Math.PI * 2)
        ctx.fillStyle = "#ffffff"
        ctx.fill()
      }
    }
    ctx.globalAlpha = 1.0

    // Add services list
    ctx.font = "bold 28px Arial, sans-serif"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.fillText("Our Services", canvas.width / 2, 100)

    // Add decorative line
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 100, 120)
    ctx.lineTo(canvas.width / 2 + 100, 120)
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 2
    ctx.stroke()

    // Services list
    ctx.font = "20px Arial, sans-serif"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"

    const services = [
      "Carpet Cleaning",
      "Rug Cleaning",
      "Upholstery Cleaning",
      "Stain Removal",
      "Pet Odor Treatment",
      "Eco-Friendly Solutions",
    ]

    services.forEach((service, index) => {
      ctx.fillText(service, canvas.width / 2, 170 + index * 40)
    })

    // Add QR code placeholder (white square)
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(canvas.width / 2 - 75, 420, 150, 150)

    // Add text inside QR code
    ctx.font = "14px Arial, sans-serif"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "center"
    ctx.fillText("Scan for", canvas.width / 2, 470)
    ctx.fillText("website", canvas.width / 2, 490)
  }

  const downloadImage = (side: "front" | "back") => {
    const canvas = side === "front" ? frontCanvasRef.current : backCanvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = `pureclean-business-card-${side}.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Double-Sided Business Card</h2>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveSide("front")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeSide === "front" ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Front Side
        </button>
        <button
          onClick={() => setActiveSide("back")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeSide === "back" ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Back Side
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-lg mb-4">
        {activeSide === "front" ? (
          <canvas ref={frontCanvasRef} style={{ width: "350px", height: "200px" }} />
        ) : (
          <canvas ref={backCanvasRef} style={{ width: "350px", height: "200px" }} />
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => downloadImage(activeSide)}
          className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
        >
          Download {activeSide === "front" ? "Front" : "Back"} Side
        </button>
      </div>

      <div className="mt-6 text-sm text-muted-foreground max-w-md text-center">
        <p>
          This double-sided business card features your brand colors, logo, and services list. The back side includes a
          placeholder for a QR code that you can generate separately and add to the design before printing.
        </p>
      </div>
    </div>
  )
}
