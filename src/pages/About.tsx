'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Sparkles, MoveRight } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            Our Heritage
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-950 mb-10 leading-[0.95] tracking-tighter">
            A Legacy of <br />
            <span className="text-teal-500 font-light italic">Excellence.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
            Founded on the principle that healthcare should be as personal as it is professional, Awarihospital has spent over a decade redefining clinical care.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="relative"
          >
            <div className="aspect-[4/5]  rounded-2xl md:rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <Image 
                src="/images/img7.jpg" 
                alt="Hospital Legacy" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-teal-100 rounded-full blur-[80px] -z-10" />
          </motion.div>
          
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-8 tracking-tight"> Decade of Healing.</h2>
            <div className="space-y-6 text-slate-500 text-lg font-light leading-relaxed">
              <p>
                Our journey began in 2015 with a single mission: to create a sanctuary where medical innovation meets human empathy. Today, we are a global leader in precision medicine.
              </p>
              <p>
                Every wing of our hospital is designed to facilitate peace, every piece of technology is chosen for accuracy, and every staff member is trained to treat the individual, not just the diagnosis.
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-12 mt-12">
              <div>
                <p className="text-4xl font-bold text-slate-950">25k+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-600">Lives Restored</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-950">150+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-600">Global Awards</p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="bg-slate-950 py-32 rounded-2xl md:rounded-[5rem] mx-4 overflow-hidden relative">
        <div className="container mx-auto px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Our <span className="text-teal-400 italic font-light">Philosophy</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 md:gap-12 gap-8">
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="md:p-16 p-5 rounded-3xl  md:rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-16 h-16 rounded-3xl bg-teal-500/20 flex items-center justify-center mb-10">
                <Target className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">The Mission</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                To bridge the gap between advanced medical science and compassionate human care, ensuring every patient experiences a journey of dignity and recovery.
              </p>
            </motion.div>

            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="md:p-16 p-5 rounded-3xl  md:rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-16 h-16 rounded-3xl bg-teal-500/20 flex items-center justify-center mb-10">
                <Eye className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">The Vision</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                To be the world&apos;s most trusted sanctuary for healing, recognized for setting the benchmark in clinical outcomes and boutique hospitality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Integrity", text: "Unyielding ethical standards in every procedure." },
            { icon: Sparkles, title: "Innovation", text: "Leading-edge tech for precision diagnostics." },
            { icon: Target, title: "Accuracy", text: "Meticulous attention to every medical detail." },
            { icon: Sparkles, title: "Privacy", text: "A sanctuary where confidentiality is absolute." }
          ].map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100"
            >
              <v.icon className="w-8 h-8 text-teal-500 mb-6" />
              <h4 className="text-xl font-bold text-slate-950 mb-2">{v.title}</h4>
              <p className="text-slate-500 text-sm">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

