"use client";

import './globals.css'
import { useState, useEffect } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { themeChange } from 'theme-change'

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

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <html lang="en" data-theme="">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
