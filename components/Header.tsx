'use client'
import React, { useState } from 'react';
import { Button } from './ui/button'
import Link from 'next/link'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
<header className="py-8 xl:py-12 text-amber-100 sticky top-0 z-50 shadow-md bg-[#0d0d0d] md:bg-[#0d0d0dcc] md:backdrop-blur-md">
<div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Ipseeka <span className="text-amber-900">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar */}
        <div className='hidden xl:flex items-center'>
          <Navbar />
          <Link href="#contact" className="ml-8">
            <Button className='bg-amber-900 text-2xl text-amber-50 focus:outline-none focus:ring-4 rounded-full'>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Toggle Button (moved inside the flex row) */}
        <div className="xl:hidden flex items-center">
          <button onClick={() => setMobileOpen(true)} className="text-3xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
