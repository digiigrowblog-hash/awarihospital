'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FACILITIES_PAGE } from '@/constants';
import { MoveRight, Activity, Heart, Brain, Microscope } from 'lucide-react';

const Services: React.FC = () => {
  const icons = [Activity, Heart, Microscope, Brain];

  /* ✅ FILTER STATE */
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', ...FACILITIES_PAGE.sections.map(s => s.title)];

  const filteredSections =
    activeFilter === 'All'
      ? FACILITIES_PAGE.sections
      : FACILITIES_PAGE.sections.filter(s => s.title === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">

      {/* Facilities / Services Lists */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-950">
              {FACILITIES_PAGE.title}
            </h2>
          </div>

          {/* ✅ FILTER BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-14 sticky top-24 bg-slate-50 py-4 z-20">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`md:px-6 px-2 py-1 md:py-2 rounded-full font-semibold transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white border-teal-600 shadow-lg'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-teal-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* ✅ FILTERED SECTIONS */}
          {filteredSections.map((section) => (
            <div key={section.title} className="mb-20">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">
                    {section.title}
                  </h3>
                  {section.subtitle && (
                    <p className="text-lg text-teal-600 font-semibold">
                      {section.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Beds + Amenities */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100"
              >
                <h4 className="font-bold text-xl mb-4 text-slate-900">
                  Total Beds
                </h4>
                <p className="text-5xl text-teal-600 font-bold">
                  {FACILITIES_PAGE.beds}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Available for patient care
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 md:col-span-2"
              >
                <h4 className="font-bold text-xl mb-4 text-slate-900">
                  Amenities
                </h4>
                <div className="flex flex-wrap gap-3">
                  {FACILITIES_PAGE.amenities.map((a) => (
                    <span
                      key={a}
                      className="px-6 py-2 text-sm font-semibold bg-white rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-32 bg-slate-950 text-white rounded-[5rem] mx-4 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-12 relative z-10 grid md:grid-cols-4 gap-12 text-center">
          <div>
            <h4 className="text-6xl font-bold text-teal-400 mb-2">99%</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Survival Rate
            </p>
          </div>

          <div>
            <h4 className="text-6xl font-bold text-teal-400 mb-2">0m</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Emergency Wait
            </p>
          </div>

          <div>
            <h4 className="text-6xl font-bold text-teal-400 mb-2">40+</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Specialized Units
            </p>
          </div>

          <div>
            <h4 className="text-6xl font-bold text-teal-400 mb-2">24/7</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Expert Support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
