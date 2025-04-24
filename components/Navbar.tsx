'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // highlight on click too
    }
  };

  useEffect(() => {
    const sectionIds = links
      .filter(link => link.href.startsWith('#'))
      .map(link => link.href.replace('#', ''));

    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionElements.forEach(section => observer.observe(section));
    return () => sectionElements.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isInternalLink = link.href.startsWith('#');
        const sectionId = link.href.replace('#', '');
        const isActive = isInternalLink
          ? activeSection === sectionId
          : pathname === link.href;

        return isInternalLink ? (
          <button
            key={index}
            onClick={() => scrollToSection(sectionId)}
            className={`capitalize font-medium transition-all duration-300 ease-in-out ${
              isActive ? 'text-amber-600 underline' : 'hover:text-amber-600 text-white'
            }`}
          >
            {link.name}
          </button>
        ) : (
          <Link
            key={index}
            href={link.href}
            className={`capitalize font-medium transition-all duration-300 ease-in-out ${
              isActive ? 'text-amber-600 underline' : 'hover:text-amber-600 text-white'
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
