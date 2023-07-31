'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer, Sidebar, Header } from '@/component'



export default function RootLayout({children,}: {children: React.ReactNode}) 
{
  return (
    <html lang="fr">
      <body className='bg-gray-200'>
        <Header/>
        
        {children}
        
        <Footer/>
        
      </body>

      

    </html>
  )
}
