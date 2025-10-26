import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full overflow-hidden bg-[#f9f3ef]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.05) saturate(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f9f3ef]/90 via-white/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 font-serif">
          Handcrafted Resin Art That Captures Emotion in Every Pour
        </h1>
        <p className="mt-5 max-w-2xl text-gray-700 text-base md:text-lg">
          Explore unique, handmade resin creations blending creativity and craftsmanship.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-[#d8b4a0] px-6 py-3 text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            aria-label="Shop Now"
          >
            Shop Now
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-[#d8b4a0] px-6 py-3 text-[#d8b4a0] transition-colors hover:bg-[#d8b4a0]/10"
            aria-label="Explore Collections"
          >
            Explore Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
