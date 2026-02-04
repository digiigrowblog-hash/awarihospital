"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Plus,
  MoveRight,
  Heart,
  Brain,
  Activity,
  Shield,
  Users,
  ArrowUpRight,
  Star,
  Building2,
} from "lucide-react";
import {  DOCTORS, REVIEWS } from "@/constants";
import HeroCarousel from "@/components/HeroCarousel";




const SERVICES = [
  {
    title: "Services",
    description: "24x7 comprehensive medical and diagnostic services.",
    imageUrl: "/images/service.png",
    items: [
      "Pathology Sample Collection",
      "Counselling Service",
      "Pediatric Care",
      "Fertility Counselling Services",
      "Preoperative Care",
      "Open 24x7"
    ]

  },
  {
    title: "Tests",
    description: "Advanced laboratory and diagnostic testing.",
    imageUrl: "/images/test.jpg",
    items: [
      "SGPT (Serum Glutamic Pyruvic Transaminase Test)",
      "Sexually Transmitted Diseases Test",
      "Urine Cytology",
      "Hba 1C",
      "Hpv Test",
      "Glucose Tolerance",
      "General Test",
      "Urine Testing",
      "Semen Analysis"
    ]
  },
  {
    title: "Surgery",
    description: "Safe and modern surgical care.",
    imageUrl: "/images/surgery.jpeg",
    items: [
      "Minor Surgery",
      "Caesarean Section",
      "Reproductive Surgery",
      "Laparoscopic Sterilisation",
      "Reconstructive Surgery",
      "Vaginal Hysterectomy",
      "Tubal Ligation"
    ]
  },
  {
    title: "Treatment",
    description: "Personalized treatment across specialties.",
    imageUrl: "/images/treatment.jpg",
    items: [
      "Gastritis",
      "Assisted Reproduction",
      "Vaginal Prolapse",
      "Male Breast (Gynecomastia)",
      "Fissure In Ano",
      "Neurological Dysfunction",
      "Fibroadenoma",
      "Irregular Menses",
      "Urinary Incontinence"
    ]
  },
  {
    title: "Facilities",
    description: "Comfort-focused infrastructure and amenities.",
    imageUrl: "/images/facilities.jpg",
    items: [
      "WiFi",
      "Common Bathroom",
      "AC Rooms Available",
      "General Ward",
      "Deluxe Room",
      "Infertility Center",
      "Daycare",
      "Women Wellness Center",
      "Wheelchair Accessible Entrance",
      "Private Rooms",
      "Day Care Center"
    ]
  },
  {
    title: "Management",
    description: "Efficient and transparent hospital management.",
    imageUrl: "/images/management.jpg",
    items: [
      "Emergency Conditions",
      "Pcod Management",
      "Pre and Post Operative",
      "Child Growth Management",
      "Urinary Tract Infection Management",
      "High Risk Obstetrics",
    ]
  }
];








const Home: React.FC = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Immersive Hero */}
      <HeroCarousel />

      {/* Pillars of Health */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: Brain,
              title: "Precision",
              text: "AI-driven diagnostics for unmatched accuracy.",
              link: "/services",
            },
            {
              icon: Heart,
              title: "Empathy",
              text: "Care focused on the soul, not just the body.",
              link: "/about",
            },
            {
              icon: Shield,
              title: "Safety",
              text: "Cleanest environments in the modern world.",
              link: "/facilities",
            },
          ].map((item, idx) => (
            <Link href={item.link} key={idx}>
              <motion.div
                variants={itemVars}
                className="group p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-teal-500 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 rounded-3xl bg-teal-50 flex items-center justify-center mb-10 group-hover:bg-teal-500 transition-colors">
                  <item.icon className="w-7 h-7 text-teal-600 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-950">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.text}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* YouTube Video Cards */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-950">
            Watch <span className="text-teal-600">Care Stories</span>
          </h2>
          <p className="text-slate-500 mt-2">
            Real patient experiences and hospital walkthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["M7lc1UVf-VE", "ysz5S6PUM-U", "ScMzIvxBSi4"].map((vid) => (
            <div
              key={vid}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
            >
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${vid}`}
                  title={`video-${vid}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">Patient Story</h4>
                <p className="text-sm text-slate-600">
                  Short overview of the patient&apos;s experience and outcomes.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Showcase */}
      <section className="py-32 bg-slate-950 text-white rounded-[5rem] mx-4 mb-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
              The <span className="text-teal-400">Verticals</span> of Care.
            </h2>
            <p className="text-slate-400 text-lg">
              Integrated medical excellence across all departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className={`rounded-[3rem] overflow-hidden relative group ${
                  index === 0 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <div className="w-full h-[500px] relative">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-slate-950/60 p-10 flex flex-col justify-end">
                  <h3 className="text-4xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-4 max-w-md">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-200">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <Link href="/services" className="md:col-span-12 mt-8 mx-auto px-10 py-4 bg-teal-500 text-white rounded-full font-bold text-lg hover:bg-teal-400 transition-all flex items-center gap-3">Explore All Services</Link>
          </div>
        </div>
      </section>


      {/* Modern Testimonials */}
      <section className="py-32 bg-teal-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-6xl font-bold text-slate-950 tracking-tighter leading-none mb-8 text-glow">
                Patient <br /> Stories.
              </h2>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white cursor-pointer transition-colors">
                  <Plus className="w-5 h-5 rotate-45" />
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white cursor-pointer transition-colors">
                  <Plus className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="min-w-[400px] p-12 rounded-[3.5rem] bg-white shadow-xl shadow-teal-900/5 snap-center"
                >
                  <div className="flex gap-1 text-teal-500 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-slate-700 font-light italic mb-10 leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={rev.avatarUrl}
                      alt={rev.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{rev.name}</p>
                      <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                        Post-Recovery
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Footer CTA */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-slate-950 rounded-[5rem] p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[150px]" />
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-12">
            Take the <span className="text-teal-400">Step.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="/contact"
              className="px-12 py-6 bg-teal-500 text-white rounded-full font-bold text-xl hover:bg-teal-400 transition-all"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+123"
              className="px-12 py-6 bg-white/5 border border-white/20 text-white rounded-full font-bold text-xl hover:bg-white hover:text-slate-950 transition-all"
            >
              Direct Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
//   <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
//         <span className="relative flex h-2 w-2">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
//         </span>
//         Next-Gen Medical Sanctuary
//       </div>
//       <h1 className="text-6xl md:text-8xl font-bold text-slate-950 mb-8 leading-[0.95] tracking-tighter">
//         Healing <br />
//         <span className="text-teal-500 font-light italic">Redefined.</span>
//       </h1>
//       <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-light">
//         Experience the future of healthcare where cutting-edge technology merges with human empathy in a boutique hospital environment.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-6">
//         <Link
//           href="/contact"
//           className="px-10 py-5 bg-slate-950 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-xl shadow-slate-900/10"
//         >
//           Secure Consultation
//           <MoveRight className="w-5 h-5" />
//         </Link>
//         <Link
//           href="/services"
//           className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold flex items-center justify-center gap-3 border border-slate-100 hover:bg-slate-50 transition-all"
//         >
//           Explore Specialties
//         </Link>
//       </div>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1.2, ease: "circOut" }}
//       className="relative"
//     >
//       <div className="aspect-[4/5] w-full max-w-[500px] ml-auto rounded-[4rem] overflow-hidden shadow-2xl relative z-10 group">
//         <Image
//           src="/images/img1.jpg"
//           alt="Hospital Excellence"
//           fill
//           className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
//         <div className="absolute bottom-10 left-10 text-white">
//           <div className="text-4xl font-bold mb-1">0%</div>
//           <div className="text-xs font-bold uppercase tracking-widest text-teal-400">Wait Time Commitment</div>
//         </div>
//       </div>
//       {/* Organic Background Blobs */}
//       <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-200/30 blur-[100px] rounded-full animate-pulse" />
//       <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/30 blur-[120px] rounded-full" />
//     </motion.div>
//   </div>
// </section>
