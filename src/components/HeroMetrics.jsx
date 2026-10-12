import React from "react";
import { motion } from "framer-motion";
import { heroStats } from "../constants";

const HeroMetrics = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-6 sm:px-16 mt-8 sm:mt-12 relative z-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'>
        {heroStats.map((stat, index) => (
          <motion.div
            key={`stat-${index}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className='bg-[#0f0a28]/70 border border-white/10 hover:border-[#915EFF]/50 rounded-xl p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_25px_rgba(145,94,255,0.15)] group'
          >
            <div className='flex items-baseline gap-1'>
              <span className='font-mono font-black text-[26px] sm:text-[32px] text-white group-hover:text-[#915EFF] transition-colors'>
                {stat.value}
              </span>
            </div>
            <div className='text-[12px] sm:text-[13px] font-semibold text-white/90 mt-0.5'>
              {stat.label}
            </div>
            <div className='text-[10px] sm:text-[11px] text-secondary/80 font-mono mt-0.5 truncate'>
              {stat.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroMetrics;
