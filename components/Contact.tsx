'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs
      .send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        formData,
        'user_your_user_id' // Replace with your EmailJS user ID
      )
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setShowToast(true);
        setFlipped(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch(console.error)
      .finally(() => setSubmitted(false));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section className="relative bg-[#0d0d0d] text-gray-300 py-20">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg shadow-xl z-50"
          >
            Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 px-4">
        {/* 3D Card */}
        <motion.div
          ref={cardRef}
          className="w-full sm:w-[28rem] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl transition-transform duration-300 transform-style-preserve-3d"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="relative w-full h-full p-8"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front Side (Form) */}
            <motion.div
              className="absolute w-full h-full"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <h2 className="text-2xl text-amber-400 font-bold mb-6 text-center">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/30 text-white rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/30 text-white rounded-md"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/30 text-white rounded-md"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 text-black rounded-md mt-4 font-semibold hover:bg-amber-500 transition-all"
                >
                  {submitted ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </motion.div>

            {/* Back Side (Thanks) */}
            <motion.div
              className="absolute w-full h-full flex items-center justify-center text-center text-amber-300 font-bold text-xl"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div>Thanks for your message!<br />I l get back to you soon 😊</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex flex-col items-center space-y-4 sm:w-48"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h3 className="text-xl text-amber-400 font-semibold mb-4 text-center">Follow Me</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-amber-400 transition-all duration-300"
              >
                <Icon className="text-2xl text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
