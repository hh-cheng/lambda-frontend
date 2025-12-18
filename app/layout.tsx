import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import { Providers } from './providers'

const firaCode = localFont({
  src: [
    {
      weight: '300',
      style: 'normal',
      path: '../public/fonts/FiraCode-Light.woff2',
    },
    {
      weight: '400',
      style: 'normal',
      path: '../public/fonts/FiraCode-Regular.woff2',
    },
    {
      weight: '700',
      style: 'normal',
      path: '../public/fonts/FiraCode-Bold.woff2',
    },
  ],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'GitHub API Integration',
  description: 'GitHub API integration with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
