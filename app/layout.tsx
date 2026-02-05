import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | Austin, TX',
  description: 'Dr. Maya Reynolds is a licensed clinical psychologist in Austin, Texas specializing in anxiety, depression, trauma, and life transitions. Offering individual therapy for adults in a warm, supportive environment.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
