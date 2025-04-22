"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links=[
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Resume",
    href: "/Resume",
  },
  {
    name: "Contact",
    href: "/contact",
  }
]

const Navbar = () => {
  const pathname=usePathname()
  return (
   <nav className='flex gap-8'>
   {links.map((link,index) => 
   {return <Link href={link.href} key={index} 
   className={`${link.href===pathname && "text-amber-600 border-b-2 border-accent"}
   capitalize font-medium hover:text-amber-600 transition-all duration-300
   ease-in-out
    `}
   >{link.name}
   </Link>}
  
  )}
   </nav>
)};

export default Navbar
