"use client"

import { useEffect } from "react"

interface AdSenseAdProps {
  adSlot: string
  format?: "auto" | "vertical" | "horizontal" | "rectangle"
  fullWidth?: boolean
}

export function AdSenseAd({ adSlot, format = "auto", fullWidth = false }: AdSenseAdProps) {
  useEffect(() => {
    // Push the ad to the page
    if (typeof window !== "undefined" && (window as any).adsbygoogle !== undefined) {
      try {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (error) {
        console.error("AdSense error:", error)
      }
    }
  }, [])

  return (
    <div className={fullWidth ? "w-full" : ""}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: fullWidth ? "100%" : "auto",
          height: "auto",
        }}
        data-ad-client="ca-pub-2231163850935291"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      ></ins>
    </div>
  )
}
