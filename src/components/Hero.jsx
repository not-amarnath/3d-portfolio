import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "../canvas";
import { personalInfo } from "../constants";
import HeroTerminal from "./HeroTerminal";
import HeroMetrics from "./HeroMetrics";

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto flex flex-col justify-between pt-[100px] sm:pt-[110px] pb-8 overflow-hidden'>
      {/* Top Hero Content Container */}
      <div className={`max-w-7xl mx-auto w-full ${styles.paddingX} z-10 relative`}>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center'>
          {/* Left Column: Eyebrow, Headline, Subtext, CTA Buttons */}
          <div className='lg:col-span-7 flex flex-col items-start'>
            {/* Live Status Eyebrow Badge inspired by genioussonu.me */}
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-[12.5px] font-mono tracking-wide mb-3 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.12)]'>
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]' />
              <span className='font-medium'>{personalInfo.status}</span>
            </div>

            <div className='flex flex-row items-start gap-4 sm:gap-5 w-full'>
              <div className='flex flex-col justify-center items-center mt-3'>
                <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_#915EFF]' />
                <div className='w-1 h-36 sm:h-52 violet-gradient' />
              </div>

              <div className='flex-1'>
                <h1 className='text-white font-black text-[32px] xs:text-[40px] sm:text-[56px] lg:text-[64px] leading-tight tracking-tight'>
                  Hi, I'm <span className='text-[#915EFF]'>{personalInfo.name}</span>
                </h1>
                <p className='text-[#dfd9ff] font-medium text-[15px] sm:text-[19px] lg:text-[21px] mt-2 leading-relaxed'>
                  Software Developer & AI Builder
                </p>
                <p className='text-secondary text-[13px] sm:text-[15px] max-w-xl mt-2 leading-relaxed'>
                  {personalInfo.tagline}
                </p>

                {/* Call to Actions (No emojis, sleek cyber buttons) */}
                <div className='flex flex-wrap gap-3 mt-5 sm:mt-6 z-20 relative'>
                  <a
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#915EFF] hover:bg-[#7b46e3] text-white font-semibold py-2.5 px-6 rounded-xl transition duration-300 shadow-[0_4px_20px_rgba(145,94,255,0.4)] text-[13px] sm:text-[14px] font-mono'
                  >
                    View Resume
                  </a>
                  <a
                    href='#contact'
                    className='bg-tertiary/90 hover:bg-[#232631] text-white border border-white/10 font-semibold py-2.5 px-6 rounded-xl transition duration-300 text-[13px] sm:text-[14px] font-mono hover:border-[#915EFF]/40'
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded amar@dev:~ Terminal HUD */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end w-full'>
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* 3D Interactive Spatial Canvas */}
      <div className='w-full h-[260px] xs:h-[300px] sm:h-[340px] lg:h-[380px] my-2 relative z-0'>
        <ComputersCanvas />
      </div>

      {/* High-Impact Metric Counter Ribbon */}
      <HeroMetrics />

      {/* Scroll Down Indicator */}
      <div className='w-full flex justify-center items-center mt-6 z-10'>
        <a href='#about' aria-label='Scroll to About section'>
          <div className='w-[30px] h-[52px] rounded-3xl border-2 border-secondary/60 flex justify-center items-start p-1.5 hover:border-[#915EFF] transition-colors'>
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
