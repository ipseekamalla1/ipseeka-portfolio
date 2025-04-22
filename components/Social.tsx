'use client';
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/yourusername' },
  { icon: <FaLinkedin />, path: 'https://linkedin.com/in/yourusername' },
  { icon: <FaTwitter />, path: 'https://twitter.com/yourusername' },
];

const Social = ({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
