"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FACILITIES } from "@/constants";
import { Plus, MoveRight, Layers, Wind, Droplets } from "lucide-react";

const Facilities: React.FC = () => {
  const features = [Layers, Wind, Droplets];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-950 mb-10 leading-[0.95] tracking-tighter">
            Medical <br />
            <span className="text-teal-500 font-light italic">
              Architecture.
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
            We believe the environment is part of the cure. Our spaces are
            engineered for sterile precision and aesthetic tranquility.
          </p>
        </motion.div>
      </section>

      {/* Facilities Grid */}
      <section className="mx-auto px-3 max-w-7xl mb-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16">
          {FACILITIES.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl shadow-teal-900/10"
            >
              {/* BIG IMAGE */}
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={f.imageUrl}
                  alt={f.title}
                  width={600}
                  height={600}
                  className="object-cover  transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors duration-700" />
              </div>

              {/* CONTENT */}
              <div className="p-3">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    {f.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 font-light leading-relaxed mb-10">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="bg-slate-950 py-32 rounded-[5rem] mx-4 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-none">
                Built to <span className="text-teal-400">JCI</span> Standards.
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Layers,
                    title: "HEPA Filtration",
                    text: "99.99% air purity in all surgical and recovery zones.",
                  },
                  {
                    icon: Wind,
                    title: "Thermal Control",
                    text: "Precision climate management for patient comfort.",
                  },
                  {
                    icon: Droplets,
                    title: "Water Purity",
                    text: "Advanced medical-grade water filtration systems.",
                  },
                ].map((std, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <std.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {std.title}
                      </h4>
                      <p className="text-slate-400 font-light">{std.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-square rounded-[4rem] overflow-hidden border-[12px] border-white/5 shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
                  alt="High Tech"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
