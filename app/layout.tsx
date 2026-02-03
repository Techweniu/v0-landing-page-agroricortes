import React from "react"
import type { Metadata } from 'next'
import { Lato, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-lato'
});

const _roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'AgroRicôrtes',
  description: 'Tecnologia, eficiência e inovação a serviço da sua produção agrícola!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
