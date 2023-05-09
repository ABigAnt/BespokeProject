import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ologie | Bespoke Software Development',
  description: 'We create cutting edge software for various clients ranging from Web Development to Ai projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
      </head>
      <body className={inter.className + " bg-gradient-to-r from-prim to-sec"}>{children}</body>
    </html>
  )
}
