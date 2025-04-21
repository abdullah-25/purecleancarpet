"use client"

import { useEffect, useRef } from "react"

export default function LogoGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions for high resolution
    canvas.width = 1200
    canvas.height = 1200

    // Background (transparent)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw water droplet
    ctx.beginPath()
    ctx.moveTo(600, 300)
    ctx.bezierCurveTo(600, 300, 400, 500, 400, 700)
    ctx.bezierCurveTo(400, 900, 600, 1000, 600, 1000)
    ctx.bezierCurveTo(600, 1000, 800, 900, 800, 700)
    ctx.bezierCurveTo(800, 500, 600, 300, 600, 300)

    // Create gradient for droplet
    const gradient = ctx.createLinearGradient(400, 300, 800, 1000)
    gradient.addColorStop(0, "#0ea5e9") // Sky-500
    gradient.addColorStop(1, "#0369a1") // Sky-700

    ctx.fillStyle = gradient
    ctx.fill()

    // Add shine to droplet
    ctx.beginPath()
    ctx.moveTo(500, 450)
    ctx.bezierCurveTo(500, 450, 520, 420, 550, 430)
    ctx.bezierCurveTo(580, 440, 570, 480, 550, 490)
    ctx.bezierCurveTo(530, 500, 500, 480, 500, 450)
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fill()

    // Add text "PureClean"
    ctx.font = "bold 120px Arial, sans-serif"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "center"
    ctx.fillText("PureClean", 600, 1120)

    // Add smaller text "Carpet Care"
    ctx.font = "60px Arial, sans-serif"
    ctx.fillStyle = "#64748b" // Slate-500
    ctx.fillText("Carpet Care", 600, 1180)
  }, [])

  const downloadImage = () => {
    if (!canvasRef.current) return

    const link = document.createElement("a")
    link.download = "pureclean-logo.png"
    link.href = canvasRef.current.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="flex flex-col items-center">
      <div className="border rounded-lg overflow-hidden shadow-lg mb-4">
        <canvas ref={canvasRef} style={{ width: "400px", height: "400px" }} />
      </div>
      <button
        onClick={downloadImage}
        className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
      >
        Download Logo
      </button>
    </div>
  )
}
