'use client';
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/ipseekamalla1' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/ipseeka-malla-971b23190/' },
  
  { icon: <FaStackOverflow />, path: 'https://stackoverflow.com/users/13639382/ipseeka-malla' } 
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
