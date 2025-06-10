
import React from 'react';
import { Globe, Instagram, Facebook, Youtube, Download } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mt-12 text-center">
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
          <Instagram className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
          <Facebook className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
          <Youtube className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
          <Download className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Footer Text */}
      <div className="glass-effect rounded-lg px-6 py-3 mx-auto max-w-4xl">
        <p className="text-white text-sm">
          SMP Muhammadiyah Al Mujahidin | Jl. Wno-Jogja Km 05 Loganden, Playen | Telp: 02742910411
        </p>
      </div>
    </div>
  );
};

export default Footer;
