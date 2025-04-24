'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" }
          }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-contain"
          />
        </motion.div>

        {/* Animated circle */}
        <motion.svg
          className="absolute top-0 left-0 w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#DAA06D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="15 120"
            strokeDashoffset={0}
            animate={{
              strokeDasharray: ["15 120", "16 25", "4 250"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType:"reverse",

            }}
            style={{
              transformOrigin: "center center"
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;
