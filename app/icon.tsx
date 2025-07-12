import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      {/* Water droplet shape */}
      <div
        style={{
          width: "20px",
          height: "26px",
          background: "linear-gradient(135deg, #7dd3fc, #0ea5e9)",
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          position: "relative",
          transform: "rotate(45deg)",
        }}
      />
      {/* Highlight on droplet */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "12px",
          width: "6px",
          height: "8px",
          background: "rgba(255, 255, 255, 0.7)",
          borderRadius: "50%",
          transform: "rotate(45deg)",
        }}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
