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
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "50%",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          strokeWidth="0"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path
            d="M12 2a15 15 0 0 1 4 10c0 5-2 10-4 10s-4-5-4-10c0-5 2-10 4-10z"
            fill="rgba(255,255,255,0.3)"
            stroke="none"
          ></path>
        </svg>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
