import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "札幌卓球練習会 | 一人で気軽に参加できる卓球練習会・大会",
  description: "札幌で一人でも気軽に参加できる卓球練習会・大会。平日と土日に開催中。初心者から経験者まで歓迎。",
  generator: "v0.app",
  icons: {
    icon: [
        {
          url: "icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "icon.svg",
          type: "image/svg+xml",
        },
    ],
      apple: "apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

