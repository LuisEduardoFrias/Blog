//
import { ReactNode } from 'react'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import 'st/globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dymo Blog',
  description: '.....',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="class:bg-white">
      <body> {/*  className={inter.className}> */}
        {children}
      </body>
    </html>
  )
}