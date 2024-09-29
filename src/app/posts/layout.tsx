//
import { ReactNode } from 'react'
import HomeLayout from '../home/layout.tsx'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  )
}