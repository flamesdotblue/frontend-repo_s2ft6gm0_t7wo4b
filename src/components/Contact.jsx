import React from 'react';
import { Instagram, MessageCircle, Pin, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-gray-700">We'd love to hear from you.</p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><Pin size={18}/> Chennai, India</p>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/yogii_creations" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#e3d5ca] px-3 py-2 text-sm hover:bg-[#f9f3ef]">
                  <Instagram size={18}/> Instagram
                </a>
                <a href="https://pinterest.com/yogii_creations" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#e3d5ca] px-3 py-2 text-sm hover:bg-[#f9f3ef]">
                  <Send size={18}/> Pinterest
                </a>
                <a href="https://wa.me/your_number" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#e3d5ca] px-3 py-2 text-sm hover:bg-[#f9f3ef]">
                  <MessageCircle size={18}/> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-[#e3d5ca] bg-[#f9f3ef] p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-gray-700">Name</label>
                <input className="w-full rounded-lg border border-[#e3d5ca] bg-white px-3 py-2 outline-none ring-[#d8b4a0] focus:ring-2" placeholder="Your name"/>
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">Email</label>
                <input type="email" className="w-full rounded-lg border border-[#e3d5ca] bg-white px-3 py-2 outline-none ring-[#d8b4a0] focus:ring-2" placeholder="you@example.com"/>
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-gray-700">Message</label>
              <textarea rows={4} className="w-full rounded-lg border border-[#e3d5ca] bg-white px-3 py-2 outline-none ring-[#d8b4a0] focus:ring-2" placeholder="Tell us more..."/>
            </div>
            <button type="button" className="mt-4 w-full rounded-lg bg-[#d8b4a0] px-5 py-3 text-white">Send Message</button>
            <p className="mt-3 text-center text-xs text-gray-600">We typically respond within 24 hours.</p>
          </form>
        </div>

        <div className="mt-16 border-t border-[#e3d5ca] pt-6 text-center text-sm text-gray-600">
          <p>© 2025 Yogii Creations — Crafted with Love and Resin</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#hero" className="hover:underline">Home</a>
            <a href="#gallery" className="hover:underline">Shop</a>
            <a href="#custom" className="hover:underline">Custom Orders</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
