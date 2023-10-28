import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'This is my personal website!',
}

// This is the ideal place to add headers, footers, and navbars
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="">
      <body className={inter.className}>
        <div className="bg-base-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
