import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Navbar from './Navbar'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
const Header = () => {
  return (
 
    <header className="py-8 xl:py-12 text-amber-100 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ipseeka <span className="text-amber-900">.</span>

        </h1>
        </Link>
        <div className='hidden xl:flex items-center'><Navbar/>
        <Link href="/contact" className="ml-8">
    <Button className='bg-amber-900 text-2xl text-amber-50'>Hire Me</Button>
  </Link>
        </div>
        </div>
        <div className="xl:hidden">Mobile Nav</div>
      </header>
   
  )
}

export default Header
