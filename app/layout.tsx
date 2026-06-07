import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "MusicLab47 - Award-Winning Independent Music Label | Artist Management & Production",
  description:
    "MusicLab47 is an award-winning independent music label specializing in artist development, music production, and artist management. Discover breakthrough artists and explore our latest releases. Where sound becomes legacy.",
  generator: "Next.js",
  keywords: [
    "music label",
    "independent music",
    "artist management",
    "music production",
    "music studio",
    "music record label",
    "emerging artists",
    "music promotion",
    "artist development",
    "MusicLab47",
    "music industry",
  ],
  authors: [{ name: "MusicLab47" }],
  creator: "MusicLab47",
  publisher: "MusicLab47",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musiclab47.com",
    siteName: "MusicLab47",
    title: "MusicLab47 - Award-Winning Independent Music Label",
    description:
      "Discover breakthrough artists and explore innovative music production with MusicLab47. We develop, record, and launch talented artists worldwide.",
    images: [
      {
        url: "https://musiclab47.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MusicLab47 - Music Label",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@music.lab47",
    creator: "@music.lab47",
    title: "MusicLab47 - Independent Music Label",
    description:
      "Award-winning music label developing breakthrough artists and innovative music production.",
    images: ["https://musiclab47.com/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Music",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#000000",
  },
  alternates: {
    canonical: "https://musiclab47.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
