import React from "react";

const SectionDivider = ({ number, title, id }) => {
  return (
    <div
      id={id}
      className='w-full max-w-7xl mx-auto px-6 sm:px-16 pt-10 pb-2 flex items-center gap-4 select-none relative z-10'
    >
      <div className='h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#915EFF]/30 to-[#915EFF]/10' />
      <div className='inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase bg-[#0e0924]/90 border border-[#915EFF]/30 px-3.5 py-1 rounded-md shadow-[0_0_15px_rgba(145,94,255,0.1)] backdrop-blur-md'>
        <span className='text-secondary/60'>[</span>
        <span className='text-emerald-400 font-semibold'>SECTION {number}</span>
        <span className='text-white/30'>·</span>
        <span className='text-[#e2e8f0] font-medium tracking-widest'>{title}</span>
        <span className='text-secondary/60'>]</span>
      </div>
      <div className='h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#915EFF]/30 to-[#915EFF]/10' />
    </div>
  );
};

export default SectionDivider;
