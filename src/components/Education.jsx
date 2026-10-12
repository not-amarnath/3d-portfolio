import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education, certifications, skillCategories } from "../constants";
import { HoloBadgeCanvas } from "../canvas";
import { fadeIn, textVariant } from "../utils/motion";
import SectionDivider from "./SectionDivider";

const Education = () => {
  return (
    <>
      <SectionDivider number='03' title='CREDENTIALS & ACADEMICS' id='education-divider' />

      <motion.div variants={textVariant()} className='mt-4'>
        <p className={styles.sectionSubText}>Academic background & verified credentials</p>
        <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
      </motion.div>

      {/* Grid: Education Details + Interactive 3D Holographic Badge */}
      <div className='mt-12 flex xl:flex-row flex-col gap-10 items-center'>
        {/* Left: Education Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className='w-full xl:w-7/12 flex flex-col gap-6'
        >
          {education.map((edu, idx) => (
            <div
              key={idx}
              className='bg-[#1d1836] p-8 rounded-2xl border border-white/10 shadow-card relative overflow-hidden'
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none' />

              <div className='flex flex-wrap justify-between items-start gap-2'>
                <div>
                  <h3 className='text-white text-[24px] font-bold'>{edu.degree}</h3>
                  <p className='text-[#915EFF] text-[18px] font-semibold mt-1'>
                    {edu.institution}
                  </p>
                </div>
                <div className='text-right'>
                  <span className='inline-block bg-[#915EFF]/20 text-[#d8b4fe] border border-[#915EFF]/40 px-3 py-1 rounded-full text-[13px] font-bold'>
                    {edu.grade}
                  </span>
                  <p className='text-secondary text-[14px] mt-1'>{edu.period}</p>
                </div>
              </div>

              <p className='text-secondary text-[14px] mt-2'>📍 {edu.location}</p>

              <ul className='mt-5 list-disc ml-5 space-y-2 text-white-100 text-[14px]'>
                {edu.highlights.map((point, pIdx) => (
                  <li key={pIdx} className='tracking-wide'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Key Skill Competencies from Resume */}
          <div className='bg-black-100 p-6 rounded-2xl border border-white/5'>
            <h4 className='text-white text-[18px] font-bold mb-4 flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-[#915EFF]' /> Technical Domains
            </h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {skillCategories.map((cat, cIdx) => (
                <div key={cIdx} className='bg-tertiary/70 p-4 rounded-xl border border-white/5'>
                  <p className='text-[#00cea8] text-[14px] font-bold mb-2'>{cat.category}</p>
                  <div className='flex flex-wrap gap-1.5'>
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className='bg-primary/80 text-secondary text-[11px] px-2.5 py-1 rounded-md border border-white/5'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Interactive 3D Hologram Badge in Three.js */}
        <motion.div
          variants={fadeIn("left", "spring", 0.4, 0.75)}
          className='w-full xl:w-5/12 h-[350px] sm:h-[420px] flex flex-col items-center justify-center relative'
        >
          <div className='w-full h-full'>
            <HoloBadgeCanvas />
          </div>
          <p className='text-[12px] text-secondary mt-1 tracking-wider text-center'>
            Interactive 3D Holographic Credential Matrix • Rotate & Explore
          </p>
        </motion.div>
      </div>

      {/* Certifications Cards Grid */}
      <div className='mt-16'>
        <h3 className='text-white text-[22px] font-bold mb-6 flex items-center gap-2'>
          <span className='w-2.5 h-2.5 rounded-full bg-[#00cea8]' /> Verified Certifications
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {certifications.map((cert, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.02}
              transitionSpeed={450}
              className='w-full'
            >
              <motion.div
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className='bg-tertiary p-6 rounded-2xl border border-white/10 shadow-card h-full flex flex-col justify-between hover:border-[#915EFF]/50 transition-colors duration-300'
              >
                <div>
                  <div className='flex justify-between items-start gap-4'>
                    <h4 className='text-white text-[18px] font-bold'>{cert.title}</h4>
                    <span className='bg-primary text-[#00cea8] text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#00cea8]/30 whitespace-nowrap'>
                      {cert.badge}
                    </span>
                  </div>
                  <p className='text-[#915EFF] text-[15px] font-medium mt-1'>{cert.issuer}</p>
                  <p className='text-secondary text-[14px] mt-3 leading-relaxed'>{cert.desc}</p>
                </div>

                <div className='mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2'>
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className='text-[11px] text-white-100 bg-primary/60 px-2 py-0.5 rounded border border-white/5'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
