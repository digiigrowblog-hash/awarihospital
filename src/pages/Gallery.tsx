'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY } from '@/constants';
import { X, Search, Expand, MoveRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Medical', 'Interior', 'Patient Care', 'Technology'];
  const filteredItems = filter === 'All' ? GALLERY : GALLERY.filter(item => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            Visual Portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-950 mb-10 leading-[0.95] tracking-tighter">
            The <span className="text-teal-500 font-light italic">Atmosphere.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
            Browse through the spaces and technology that define the Awarihospital experience.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-slate-950 text-white shadow-xl shadow-slate-950/20' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Modern Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative h-[500px] overflow-hidden rounded-[3rem] shadow-xl bg-white border border-slate-100 cursor-pointer"
                onClick={() => setSelectedImage(item.imageUrl)}
              >
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-end p-12 text-white">
                  <div className="mb-4 w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center">
                    <Expand className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-bold mb-1 tracking-tight">{item.title}</h4>
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-24"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-[120]">
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-7xl max-h-full"
            >
              <div className="relative w-full h-full aspect-video">
                <Image
                  src={selectedImage}
                  alt="Hospital view large"
                  fill
                  className="object-contain rounded-[2rem] shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

