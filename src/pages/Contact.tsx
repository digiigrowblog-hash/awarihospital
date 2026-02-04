'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Globe, MoveRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    unit: 'General Sanctuary',
    date: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle' });

    try {
      const res = await fetch('/api/contactus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.text();
        setStatus({ type: 'error', message: err || 'Submission failed' });
      } else {
        setStatus({ type: 'success', message: 'Request received. Our concierge will contact you within 15 minutes.' });
        setForm({ name: '', email: '', unit: 'General Sanctuary', date: '', message: '' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: (error as Error).message || 'Network error' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Clinical Support", details: "+917947417062" },
    { icon: Mail, title: "General Inquiry", details: "awarihospital@gmail.com" },
    { icon: MapPin, title: "Our Sanctuary", details: "Nandepera road, behind shivar hospital, Tilak nagar, Wani, Maharashtra 445304" },
    { icon: Clock, title: "Operating Hours", details: "24/7 Priority Emergency Care" }
  ];

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
            Connection
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-950 mb-10 leading-[0.95] tracking-tighter">
            How Can We <br />
            <span className="text-teal-500 font-light italic">Help?</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
            Our priority is your comfort. Whether you&apos;re booking a consultation or need emergency assistance, our concierge team is standing by.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-teal-900/5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                    <info.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-2">{info.title}</h4>
                  <p className="text-xl font-bold text-slate-950">{info.details}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-2xl font-bold mb-4">Direct Concierge</h4>
                 <p className="text-slate-400 font-light mb-8">Immediate routing to medical specialists for urgent inquiries.</p>
                 <a href="tel:+917947417062" className="flex items-center gap-3 text-teal-400 font-bold hover:gap-4 transition-all">
                   Call Now <MoveRight className="w-5 h-5" />
                 </a>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full" />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8">
            <div className="bg-white md:rounded-[4rem] rounded-[2rem] md:p-12 p-5 lg:p-20 border border-slate-100 shadow-2xl shadow-teal-900/5">
              <h2 className="text-4xl font-bold text-slate-950 mb-12 tracking-tight">Request Access</h2>
              <form onSubmit={handleSubmit} className="space-y-10">
                {status.type !== 'idle' && (
                  <div className={`px-6 py-4 rounded-lg ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {status.message}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Johnathan Doe" 
                      className="w-full bg-slate-50 border-none rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-teal-500 transition-all font-medium text-slate-950"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email Identity</label>
                    <input 
                      type="email" 
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@hospital.care" 
                      className="w-full bg-slate-50 border-none rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-teal-500 transition-all font-medium text-slate-950"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Clinical Unit</label>
                    <select 
                      name="unit"
                      value={form.unit}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-teal-500 transition-all font-medium text-slate-950 appearance-none"
                    >
                      <option>General Sanctuary</option>
                      <option>Cardiology Suite</option>
                      <option>Neurology Dept</option>
                      <option>Precision Surgery</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Preferred Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-teal-500 transition-all font-medium text-slate-950"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Nature of Request</label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements in detail..."
                    className="w-full bg-slate-50 border-none rounded-[2.5rem] px-8 py-8 focus:ring-2 focus:ring-teal-500 transition-all font-medium text-slate-950"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-16 py-6 bg-slate-950 text-white rounded-full font-bold text-lg hover:bg-teal-600 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? 'Sending…' : 'Send Request'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Interactive Area */}
      <section className="container mx-auto px-6 mb-24">
        <div className="w-full bg-slate-200 rounded-[2rem]  md:rounded-[4rem] overflow-hidden relative border border-slate-100">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.998395192468!2d78.94610617390404!3d20.063670920227718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd31f0015721ba9%3A0xb504f451b914ea7f!2sAwari%20hospital!5e1!3m2!1sen!2sin!4v1770208193882!5m2!1sen!2sin" 
           width="100%" 
           height="450" 
           style={{border:0}} 
          
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
           </iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

