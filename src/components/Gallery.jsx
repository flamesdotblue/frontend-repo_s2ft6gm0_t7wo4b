import React, { useMemo, useState } from 'react';

const itemsSeed = [
  { id: 1, title: 'Ocean Wave Coaster Set', price: '₹899', category: 'Coasters', img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop' },
  { id: 2, title: 'Abstract Resin Wall Art', price: '₹2499', category: 'Wall Art', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, title: 'Custom Name Plate', price: '₹1299', category: 'Custom Orders', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2069&auto=format&fit=crop' },
  { id: 4, title: 'Resin Pendant', price: '₹799', category: 'Jewelry', img: 'https://images.unsplash.com/photo-1610018556016-c69d6a7f1be0?q=80&w=1935&auto=format&fit=crop' },
];

const categories = ['All', 'Wall Art', 'Coasters', 'Jewelry', 'Custom Orders'];

const Gallery = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return itemsSeed;
    return itemsSeed.filter((i) => i.category === active);
  }, [active]);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Our Creations</h2>
            <p className="mt-2 max-w-xl text-gray-600">Browse our curated resin art collection.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === c
                    ? 'bg-[#d8b4a0] text-white'
                    : 'border border-[#d8b4a0] text-[#a07462] hover:bg-[#d8b4a0]/10'
                }`}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-2xl bg-[#f9f3ef] shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <h3 className="text-gray-900 font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-900 shadow">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#custom"
            className="rounded-full border border-[#d8b4a0] px-6 py-3 text-[#a07462] hover:bg-[#d8b4a0]/10"
            aria-label="View More"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
