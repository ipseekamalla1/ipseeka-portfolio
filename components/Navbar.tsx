'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Links data with names and hrefs
const links = [
  {
    name: "Home",
    href: "/",
  },
  
  {
    name: "Resume",
    href: "#resume",
  },
  {
    name: "About",
    href: "#about",
  },
  
  {
    name: "Contact",
    href: "#contact",
  },
  
];

const Navbar = () => {
  const pathname = usePathname();

  // Scroll to section function for internal links
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        // Check if the link is an anchor (#) link to handle scroll
        const isInternalLink = link.href.startsWith('#');

        return (
          <Link
            href={link.href}
            key={index}
            // Handle scroll behavior for internal anchor links
            onClick={(e) => {
              if (isInternalLink) {
                e.preventDefault(); // Prevent default link behavior
                scrollToSection(link.href.replace('#', '')); // Scroll to section
              }
            }}
            className={`${link.href === pathname && !isInternalLink ? "text-amber-600 border-b-2 border-accent" : ""}
              capitalize font-medium hover:text-amber-600 transition-all duration-300 ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
