import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Navbar from './Navbar'
const Header = () => {
  return (
 
      <header className="py-8 xl:py-12 text-amber-100" >
        <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ipseeka <span className="text-amber-900">.</span>

        </h1>
        </Link>
        <div className='hidden xl:flex items-center'><Navbar/>
        <Link href="/contact"></Link>
        <Button>Hire Me</Button>
        </div>
        </div>
        <div className="xl:hidden">Mobile Nav</div>
      </header>
   
  )
}

export default Header
