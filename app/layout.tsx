// app/layout.tsx

import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import LayoutClient from '@/components/LayoutClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mahteck - Software Solutions',
  description: 'We build digital solutions for your business.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Header />
        {/* <main className="container mx-auto px-4 py-8 min-h-[60vh]">
          {children}
        </main> */}
        <main className="bg-white">
        <LayoutClient>{children}</LayoutClient>
        {/* <BackToTopButton /> */}
        <Footer />
        </main>
      </body>
    </html>
  )
}
