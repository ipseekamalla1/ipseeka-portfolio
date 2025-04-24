'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { name: "Home", href: "/" },


  { name: "Resume", href: "#resume" },
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
    className="absolute top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col gap-6"
  >
    {/* Close Button */}
    <div className="flex justify-start">
      <button onClick={onClose} className="text-2xl font-bold text-black">
        ✕
      </button>
    </div>

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
          className="text-lg font-medium text-black hover:text-amber-600 transition"
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
