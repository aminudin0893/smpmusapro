
import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      {/* Logo Section */}
      <div className="flex justify-center items-center gap-6 mb-6">
        {/* School logos would go here - using placeholder circles for now */}
        <div className="w-16 h-16 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
          <span className="text-white font-bold text-xs">LOGO</span>
        </div>
        <div className="w-16 h-16 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
          <span className="text-white font-bold text-xs">MU</span>
        </div>
        <div className="w-16 h-16 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
          <span className="text-white font-bold text-xs">SMP</span>
        </div>
      </div>

      {/* School Name */}
      <div className="text-white mb-2">
        <h1 className="text-sm font-medium mb-1">SMP MUHAMMADIYAH 1 | KOTA PROBOLINGGO</h1>
        <h2 className="text-3xl font-bold mb-1">
          SMP Muhammadiyah 1
          <span className="text-xl ml-2 italic">Probolinggo</span>
        </h2>
        <p className="text-sm opacity-90">FULLDAY & BOARDING SCHOOL</p>
      </div>

      {/* Portal Title */}
      <div className="glass-effect rounded-2xl px-8 py-4 mx-auto max-w-2xl">
        <h3 className="text-white text-lg font-semibold">
          Portal Resmi SMP Muhammadiyah 1 Kota Probolinggo
        </h3>
      </div>
    </div>
  );
};

export default Header;
