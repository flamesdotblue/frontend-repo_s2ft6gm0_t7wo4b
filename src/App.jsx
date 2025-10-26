import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import CustomOrder from './components/CustomOrder';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-[#e3d5ca] bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-serif text-xl">Yogii Creations</a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#gallery" className="hover:text-gray-900">Shop</a>
            <a href="#custom" className="hover:text-gray-900">Custom Orders</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#gallery" className="rounded-full bg-[#d8b4a0] px-4 py-2 text-xs text-white md:text-sm">Shop Now</a>
        </div>
      </header>

      <main>
        <Hero />
        <Gallery />
        <CustomOrder />
        <Contact />
      </main>
    </div>
  );
}

export default App;
