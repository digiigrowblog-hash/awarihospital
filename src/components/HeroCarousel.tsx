'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { HERO_IMAGES } from '@/constants';

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: HERO_IMAGES[0],
      tag: 'Healthcare Excellence',
      title: 'Precision Care for Every Life.',
      subtitle: 'Experience medical services where advanced technology meets human compassion.'
    },
    {
      image: HERO_IMAGES[1],
      tag: 'Modern Technology',
      title: 'Advanced Gynecological Care You Can Trust',
      subtitle: 'Combining medical expertise with state-of-the-art technology to deliver safe, effective, and minimally invasive treatments for women.'
    },
    {
      image: HERO_IMAGES[2],
      tag: '24/7 Response',
      title: 'Seconds Count, We Are Ready.',
      subtitle: 'A world-class emergency department equipped to handle the most critical trauma cases.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] lg:h-[95vh] w-full bg-slate-950 flex items-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full relative">
            <Image 
              src={slides[index].image}
              alt="Hospital"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-5">
          <motion.div
            key={index + 'content'}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2dd4bf] ">
                {slides[index].tag}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">
              {slides[index].title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg font-light leading-relaxed">
              {slides[index].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-[#2dd4bf] hover:bg-[#0accb2] text-white rounded-2xl font-semibold flex items-center gap-3 transition-all shadow-2xl shadow-blue-900/20"
              >
                Book Consultation
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-semibold flex items-center gap-3 transition-all"
              >
                View Specialties
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-12 border-t border-white/10 pt-10 opacity-60">
              <div className="flex items-center gap-3 md:block hidden">
                <ShieldCheck className="w-5 h-5 text-[#2dd4bf]" />
                <span className="text-sm font-medium">JCI Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-[#2dd4bf]" />
                <span className="text-sm font-medium">24/7 Diagnostics</span>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex justify-end relative">
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-12 right-12 flex items-center gap-8 z-20">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full         transition-all duration-500 ${i === index ? 'w-12 bg-[#2dd4bf]' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
        <div className="text-white/40 font-mono text-sm tracking-widest">
          0{index + 1} / 0{slides.length}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;

