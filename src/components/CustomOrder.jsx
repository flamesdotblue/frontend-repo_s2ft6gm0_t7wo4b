import React, { useState } from 'react';

const CustomOrder = () => {
  const [form, setForm] = useState({ name: '', email: '', description: '', file: null });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm((f) => ({ ...f, file: files?.[0] ?? null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="custom" className="bg-[#f9f3ef] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Request a Custom Piece</h2>
        <p className="mt-2 text-gray-700">
          Personalize your resin art — choose colors, shapes, and designs that tell your story.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#e3d5ca] bg-white px-4 py-3 outline-none ring-[#d8b4a0] focus:ring-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#e3d5ca] bg-white px-4 py-3 outline-none ring-[#d8b4a0] focus:ring-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-1 block text-sm text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#e3d5ca] bg-white px-4 py-3 outline-none ring-[#d8b4a0] focus:ring-2"
              placeholder="Tell us about your ideal piece — colors, size, style..."
            />
          </div>

          <div>
            <label htmlFor="file" className="mb-1 block text-sm text-gray-700">Reference Image Upload</label>
            <input
              id="file"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full rounded-xl border border-[#e3d5ca] bg-white px-4 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#d8b4a0] px-6 py-3 text-white transition-transform hover:-translate-y-0.5 hover:shadow"
          >
            Submit Request
          </button>

          {submitted && (
            <p className="text-center text-sm text-green-700">Thanks! Your request has been captured locally.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default CustomOrder;
