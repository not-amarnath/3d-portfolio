import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionDivider from "./SectionDivider";

const ProjectCard = ({
  index,
  name,
  year,
  category,
  description,
  metrics,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)} className='w-full sm:w-[380px] flex-1 min-w-[300px]'>
      <div className='bg-[#110d2d] border border-[#915EFF]/25 hover:border-[#915EFF]/60 p-5 rounded-2xl w-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(145,94,255,0.2)] flex flex-col justify-between h-full'>
        <div>
          {/* Category & Year Header */}
          <div className='flex items-center justify-between mb-3 text-[11px] font-mono text-secondary'>
            <div className='flex items-center gap-1.5'>
              <span className='w-2 h-2 rounded-full bg-emerald-400' />
              <span className='text-white/80 font-medium'>{category || "Full Stack"}</span>
            </div>
            <span className='px-2 py-0.5 rounded bg-white/5 border border-white/10'>{year || "2024"}</span>
          </div>

          {/* Project Image */}
          <div className='relative w-full h-[210px] rounded-xl overflow-hidden group'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0c0822] via-transparent to-transparent opacity-60' />
          </div>

          {/* Title & Description */}
          <div className='mt-4'>
            <h3 className='text-white font-bold text-[22px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[13.5px] leading-relaxed'>{description}</p>
          </div>
        </div>

        <div>
          {/* Key Impact Metrics Bar inspired by genioussonu.me */}
          {metrics && metrics.length > 0 && (
            <div className='mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2'>
              {metrics.map((m, mIdx) => (
                <div
                  key={`metric-${mIdx}`}
                  className='bg-white/[0.04] border border-white/5 rounded-lg py-2 px-1 text-center'
                >
                  <div className='font-mono font-bold text-[13px] text-white'>
                    {m.val}
                  </div>
                  <div className='text-[10px] text-secondary font-medium leading-tight mt-0.5'>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Tags */}
          <div className='mt-4 flex flex-wrap gap-1.5'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className='text-[11px] font-mono px-2 py-0.5 rounded bg-[#915EFF]/10 border border-[#915EFF]/20 text-[#dfd9ff]'
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Action Links Bar */}
          <div className='mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3'>
            {source_code_link && (
              <a
                href={source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-secondary hover:text-white text-[12px] font-mono border border-white/10 transition-colors'
              >
                <Github className='w-3.5 h-3.5' />
                <span>Code</span>
              </a>
            )}
            {live_link && (
              <a
                href={live_link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#915EFF] hover:bg-[#7b46e3] text-white text-[12px] font-mono font-medium transition-colors shadow-md'
              >
                <span>Live Demo</span>
                <ExternalLink className='w-3.5 h-3.5' />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <SectionDivider number='05' title='SELECTED PROJECTS' id='projects-divider' />

      <motion.div variants={textVariant()} className='mt-4'>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[16px] max-w-3xl leading-[28px]'
        >
          Featured production and AI automation systems engineered to solve real-world problems.
          Each project showcases full-stack architecture, measurable performance impact, and verified code deployments.
        </motion.p>
      </div>

      <div className='mt-12 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
