import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reread Me',
  description: 'A blog about trends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
