'use client'
import { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

// font - family: 'Caprasimo', cursive;
// font - family: 'Josefin Sans', sans - serif;
const inter = Inter({
  subsets: ['latin-ext'],
  weight: '500',
})


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <body className={`${inter.className} `} >{children}</body>
    </html>
  )
}
