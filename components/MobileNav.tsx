'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { name: "Home", href: "/" },


  { name: "Resume", href: "#resume" },
  { name:"Projects", href:"#projects" },

  { name: "Contact", href: "#contact" },

];

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // close menu after click
  };

  return (
    <div className="fixed inset-0 z-50">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

  {/* Sliding Menu */}
  <motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ duration: 0.3 }}
  className="absolute top-0 right-0 w-full h-full bg-amber-800 shadow-lg p-6 flex flex-col items-center justify-center gap-10"
>
  {/* Close Button */}
  <div className="absolute top-4 left-4">
    <button onClick={onClose} className="text-3xl font-bold text-white">
      ✕
    </button>
  </div>

  {/* Logo */}
  <Link href="/" className="mb-4">
    <h1 className="text-4xl font-bold text-white">
      Ipseeka <span className="text-amber-300">.</span>
    </h1>
  </Link>

  {/* Navigation Links */}
  {links.map((link, index) => {
    const isInternal = link.href.startsWith("#");
    return (
      <Link
        href={link.href}
        key={index}
        onClick={(e) => {
          if (isInternal) {
            e.preventDefault();
            scrollToSection(link.href.replace('#', ''));
          }
        }}
        className="text-2xl font-semibold text-white hover:text-amber-300 transition"
      >
        {link.name}
      </Link>
    );
  })}
</motion.div>

</div>

  );
};

export default MobileNav;
