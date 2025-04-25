'use client';

import { motion } from 'framer-motion';

export default function AnimatedSection({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen md:flex lg:flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}
