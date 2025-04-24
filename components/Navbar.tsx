'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  // Reset the active section when the route changes
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home"); // Reset to home if on homepage
    }
  }, [pathname]);

  useEffect(() => {
    const sectionIds = links
      .filter(link => link.href.startsWith("#"))
      .map(link => link.href.slice(1));

    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section based on visibility
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionElements.forEach(section => observer.observe(section));

    return () => {
      sectionElements.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isInternalLink = link.href.startsWith('#');
        const sectionId = link.href.replace('#', '');

        // Check if the link is active
        const isActive = link.href === '/' 
          ? activeSection === 'home' 
          : activeSection === sectionId;

        return (
          <Link
            href={link.href}
            key={index}
            onClick={(e) => {
              if (isInternalLink) {
                e.preventDefault();
                scrollToSection(sectionId); // Scroll to section for internal links
              }
            }}
            className={`capitalize font-medium transition-all duration-300 ease-in-out ${
              isActive ? 'text-amber-600 underline' : 'text-gray-300 hover:text-amber-600'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
