export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters)
  }
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "consent" | "set",
      eventName: string,
      parameters?: Record<string, string | number | boolean>,
    ) => void
  }
}
