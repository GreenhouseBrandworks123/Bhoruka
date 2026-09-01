import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      {/* A clean, spinning corporate blue ring */}
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#0a4275] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;