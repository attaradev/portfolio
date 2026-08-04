import type React from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { baseMetadata } from '@/lib/metadata'
import { getHomepageStructuredData, generateStructuredDataScript } from '@/lib/structured-data'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = getHomepageStructuredData()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateStructuredDataScript(structuredData) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased text-foreground bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
