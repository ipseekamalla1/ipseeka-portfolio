'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs
      .send(
        'service_feyedzt',
        'template_mb3cg6t',
        formData,
        'WPsPeR8GqC5BSs7sv'
      )
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(console.error)
      .finally(() => setSubmitted(false));
  };

  return (
    <section className="w-screen bg-black text-amber-300 py-20">
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-amber-200 text-black rounded-lg shadow-xl z-50">
          Message Sent Successfully!
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center w-full px-4 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Contact Form */}
        <div className="flex-1 bg-amber/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10">
          <h2 className="text-3xl text-amber-400 font-bold mb-6 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-white/10 border border-white/30 text-white rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-white/10 border border-white/30 text-white rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-white/10 border border-white/30 text-white rounded-md"
              rows={6}
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-amber-400 text-black rounded-md mt-4 font-semibold hover:bg-amber-500 transition"
            >
              {submitted ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Contact Info and Socials */}
        <div className="w-full lg:w-80 flex flex-col items-center space-y-8">
          <div className="space-y-6 text-left w-full">

            <div>
              <p className="text-sm font-light text-gray-400 mb-1">Phone</p>
              <div className="flex items-center space-x-3 text-white">
                <FaPhone className="text-gray-400" />
                <span>+1 365 355 3550</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-light text-gray-400 mb-1">Email</p>
              <div className="flex items-center space-x-3 text-white">
                <FaEnvelope className="text-gray-400" />
                <span>ipseeka.malla1@gmail.com</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-light text-gray-400 mb-1">Address</p>
              <div className="flex items-center space-x-3 text-white">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>Milton,Ontario</span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-amber-400 transition"
            >
              <FaFacebookF className="text-xl text-white" />
            </a>
           
            <a
              href="https://www.linkedin.com/in/ipseeka-malla-971b23190/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-amber-400 transition"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-amber-400 transition"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
