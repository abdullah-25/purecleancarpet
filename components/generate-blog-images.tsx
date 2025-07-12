"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function GenerateBlogImages() {
  const canvas1Ref = useRef<HTMLCanvasElement>(null)
  const canvas2Ref = useRef<HTMLCanvasElement>(null)
  const canvas3Ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    generateTopCleanersImage()
    generatePricingImage()
    generateUpholsteryImage()
  }, [])

  const generateTopCleanersImage = () => {
    const canvas = canvas1Ref.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 1200
    canvas.height = 675

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#f0f9ff")
    gradient.addColorStop(1, "#e0f2fe")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw carpet texture background
    ctx.globalAlpha = 0.1
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        ctx.fillStyle = Math.random() > 0.5 ? "#0ea5e9" : "#7dd3fc"
        ctx.fillRect(i, j, 10, 10)
      }
    }
    ctx.globalAlpha = 1.0

    // Draw 5 stars for "Top 5"
    const starPositions = [
      { x: 200, y: 150 },
      { x: 350, y: 120 },
      { x: 500, y: 180 },
      { x: 650, y: 140 },
      { x: 800, y: 160 },
    ]

    starPositions.forEach((pos, index) => {
      drawStar(ctx, pos.x, pos.y, 40, "#fbbf24")
      // Add number inside star
      ctx.font = "bold 24px Arial"
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.fillText((index + 1).toString(), pos.x, pos.y + 8)
    })

    // Draw cleaning equipment
    drawVacuum(ctx, 100, 350)
    drawSprayBottle(ctx, 900, 300)

    // Add title overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.fillRect(0, canvas.height - 200, canvas.width, 200)

    ctx.font = "bold 48px Arial"
    ctx.fillStyle = "#1e293b"
    ctx.textAlign = "center"
    ctx.fillText("Top 5 Carpet Cleaners", canvas.width / 2, canvas.height - 120)

    ctx.font = "32px Arial"
    ctx.fillStyle = "#0ea5e9"
    ctx.fillText("Toronto 2025 Edition", canvas.width / 2, canvas.height - 70)

    // PureClean logo
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "left"
    ctx.fillText("PureClean", 40, canvas.height - 30)
  }

  const generatePricingImage = () => {
    const canvas = canvas2Ref.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 1200
    canvas.height = 675

    // Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#f0f9ff")
    gradient.addColorStop(1, "#dbeafe")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw price tags
    const prices = ["$89", "$129", "$199", "$249"]
    const services = ["Basic", "Standard", "Premium", "Deluxe"]

    prices.forEach((price, index) => {
      const x = 150 + index * 220
      const y = 200

      // Price tag background
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(x - 80, y - 60, 160, 120)
      ctx.strokeStyle = "#0ea5e9"
      ctx.lineWidth = 3
      ctx.strokeRect(x - 80, y - 60, 160, 120)

      // Price
      ctx.font = "bold 36px Arial"
      ctx.fillStyle = "#0ea5e9"
      ctx.textAlign = "center"
      ctx.fillText(price, x, y - 10)

      // Service type
      ctx.font = "18px Arial"
      ctx.fillStyle = "#64748b"
      ctx.fillText(services[index], x, y + 25)
    })

    // Draw dollar signs decoration
    for (let i = 0; i < 15; i++) {
      ctx.font = `${20 + Math.random() * 20}px Arial`
      ctx.fillStyle = `rgba(14, 165, 233, ${0.1 + Math.random() * 0.2})`
      ctx.textAlign = "center"
      ctx.fillText("$", Math.random() * canvas.width, Math.random() * canvas.height)
    }

    // Title overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.fillRect(0, canvas.height - 200, canvas.width, 200)

    ctx.font = "bold 42px Arial"
    ctx.fillStyle = "#1e293b"
    ctx.textAlign = "center"
    ctx.fillText("Carpet Cleaning Prices", canvas.width / 2, canvas.height - 120)

    ctx.font = "28px Arial"
    ctx.fillStyle = "#0ea5e9"
    ctx.fillText("Toronto 2025 Guide", canvas.width / 2, canvas.height - 70)

    // PureClean logo
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "left"
    ctx.fillText("PureClean", 40, canvas.height - 30)
  }

  const generateUpholsteryImage = () => {
    const canvas = canvas3Ref.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 1200
    canvas.height = 675

    // Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#f8fafc")
    gradient.addColorStop(1, "#e2e8f0")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw sofa
    drawSofa(ctx, canvas.width / 2, 250)

    // Draw cleaning schedule calendar
    drawCalendar(ctx, 100, 100)

    // Draw clock for frequency
    drawClock(ctx, 950, 150)

    // Title overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.fillRect(0, canvas.height - 200, canvas.width, 200)

    ctx.font = "bold 42px Arial"
    ctx.fillStyle = "#1e293b"
    ctx.textAlign = "center"
    ctx.fillText("Upholstery Cleaning", canvas.width / 2, canvas.height - 120)

    ctx.font = "28px Arial"
    ctx.fillStyle = "#0ea5e9"
    ctx.fillText("How Often Should You Do It?", canvas.width / 2, canvas.height - 70)

    // PureClean logo
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = "#0ea5e9"
    ctx.textAlign = "left"
    ctx.fillText("PureClean", 40, canvas.height - 30)
  }

  // Helper functions for drawing elements
  const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    ctx.fillStyle = color
    ctx.beginPath()
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5
      const x1 = x + Math.cos(angle) * size
      const y1 = y + Math.sin(angle) * size
      if (i === 0) ctx.moveTo(x1, y1)
      else ctx.lineTo(x1, y1)
    }
    ctx.closePath()
    ctx.fill()
  }

  const drawVacuum = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Vacuum body
    ctx.fillStyle = "#64748b"
    ctx.fillRect(x, y, 80, 60)

    // Vacuum hose
    ctx.strokeStyle = "#64748b"
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.moveTo(x + 80, y + 30)
    ctx.quadraticCurveTo(x + 120, y - 20, x + 160, y + 10)
    ctx.stroke()

    // Vacuum nozzle
    ctx.fillStyle = "#64748b"
    ctx.fillRect(x + 150, y + 5, 30, 10)
  }

  const drawSprayBottle = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Bottle body
    ctx.fillStyle = "#0ea5e9"
    ctx.fillRect(x, y, 40, 80)

    // Spray nozzle
    ctx.fillStyle = "#64748b"
    ctx.fillRect(x + 40, y + 10, 20, 15)

    // Spray effect
    ctx.strokeStyle = "#7dd3fc"
    ctx.lineWidth = 2
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(x + 60, y + 17)
      ctx.lineTo(x + 80 + i * 5, y + 15 + i * 2)
      ctx.stroke()
    }
  }

  const drawSofa = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Sofa base
    ctx.fillStyle = "#8b5cf6"
    ctx.fillRect(x - 150, y, 300, 80)

    // Sofa back
    ctx.fillRect(x - 150, y - 60, 300, 60)

    // Armrests
    ctx.fillRect(x - 180, y - 60, 30, 140)
    ctx.fillRect(x + 150, y - 60, 30, 140)

    // Cushions
    ctx.fillStyle = "#a78bfa"
    ctx.fillRect(x - 120, y - 50, 80, 40)
    ctx.fillRect(x - 20, y - 50, 80, 40)
    ctx.fillRect(x + 80, y - 50, 80, 40)
  }

  const drawCalendar = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Calendar background
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(x, y, 120, 100)
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, 120, 100)

    // Calendar header
    ctx.fillStyle = "#0ea5e9"
    ctx.fillRect(x, y, 120, 25)

    // Calendar grid
    ctx.strokeStyle = "#e2e8f0"
    ctx.lineWidth = 1
    for (let i = 1; i < 4; i++) {
      ctx.beginPath()
      ctx.moveTo(x, y + 25 + i * 18.75)
      ctx.lineTo(x + 120, y + 25 + i * 18.75)
      ctx.stroke()
    }

    // Mark some days
    ctx.fillStyle = "#ef4444"
    ctx.beginPath()
    ctx.arc(x + 30, y + 50, 5, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(x + 90, y + 80, 5, 0, 2 * Math.PI)
    ctx.fill()
  }

  const drawClock = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Clock face
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(x, y, 50, 0, 2 * Math.PI)
    ctx.fill()

    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 3
    ctx.stroke()

    // Clock hands
    ctx.strokeStyle = "#1e293b"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 20, y - 30)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 35, y - 10)
    ctx.stroke()

    // Center dot
    ctx.fillStyle = "#1e293b"
    ctx.beginPath()
    ctx.arc(x, y, 3, 0, 2 * Math.PI)
    ctx.fill()
  }

  const downloadImage = (canvasRef: React.RefObject<HTMLCanvasElement>, filename: string) => {
    if (!canvasRef.current) return

    const link = document.createElement("a")
    link.download = filename
    link.href = canvasRef.current.toDataURL("image/jpeg", 0.9)
    link.click()
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Generate Blog Images</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-2">Top 5 Carpet Cleaners</h3>
          <canvas ref={canvas1Ref} width={1200} height={675} className="border max-w-full h-auto" />
          <button
            onClick={() => downloadImage(canvas1Ref, "blog-top-5-cleaners.jpg")}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Download
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Carpet Cleaning Prices</h3>
          <canvas ref={canvas2Ref} width={1200} height={675} className="border max-w-full h-auto" />
          <button
            onClick={() => downloadImage(canvas2Ref, "blog-prices-toronto.jpg")}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Download
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Upholstery Cleaning Frequency</h3>
          <canvas ref={canvas3Ref} width={1200} height={675} className="border max-w-full h-auto" />
          <button
            onClick={() => downloadImage(canvas3Ref, "blog-upholstery-cleaning.jpg")}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
