import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-950">
                Awari<span className="text-teal-600">hospital</span>
              </span>
            </Link>
            <p className="text-2xl text-slate-500 leading-tight font-light max-w-sm mb-12">
              Human-centric medical excellence in a digitally-advanced sanctuary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-8">Hospital</p>
              <ul className="space-y-4 text-slate-900 font-medium">
                <li><Link href="/" className="hover:text-teal-600 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-teal-600 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-teal-600 transition-colors">Services</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-8">Resources</p>
              <ul className="space-y-4 text-slate-900 font-medium">
                <li><a href="/contact" className="hover:text-teal-600 transition-colors">Contact US</a></li>
                <li><a href="/facilities" className="hover:text-teal-600 transition-colors">Facilities</a></li>
                <li><a href="/gallery" className="hover:text-teal-600 transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-8">Location</p>
              <p className="text-slate-900 font-medium mb-6">
                Nandepera road,   <br />
                behind shivar hospital, <br />
                Tilak nagar, Wani, Maharashtra 445304
              </p>
              <a href="https://maps.app.goo.gl/bgjGkivdmwGYwXJJ6" className="inline-flex items-center gap-2 text-teal-600 font-bold">
                Get Directions <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Awarihospital. Built for the future of care.</p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

