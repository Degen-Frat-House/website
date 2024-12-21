import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Degen Frat House DAO | Powered by Dalhousie Blockchain Society',
  description: 'The first university-backed DAO, revolutionizing blockchain education and community governance.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Script async src="https://platform.twitter.com/widgets.js" />
      </body>
    </html>
  )
}

