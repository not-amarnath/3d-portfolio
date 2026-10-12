import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import SectionDivider from "./SectionDivider";

const ExperienceCard = ({ experience }) => {
  const isActive = experience.status === "ACTIVE";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#120d2d",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #120d2d" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #915EFF, inset 0 2px 0 rgba(0,0,0,0.2)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <div className='flex flex-wrap items-center gap-2 mb-1.5'>
          <span className='text-secondary text-[14px] sm:text-[15px] font-semibold'>
            {experience.company_name}
          </span>
          {experience.type && (
            <span className='text-[10px] sm:text-[11px] font-mono text-secondary/80 px-2 py-0.5 rounded bg-white/5 border border-white/10'>
              {experience.type}
            </span>
          )}
          {isActive && (
            <span className='inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
              <span>ACTIVE</span>
            </span>
          )}
        </div>

        <h3 className='text-white text-[20px] sm:text-[23px] font-bold'>
          {experience.title}
        </h3>
      </div>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100/90 text-[13px] sm:text-[14px] pl-1 tracking-wide leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Stack Tags at bottom of role card */}
      {experience.tags && experience.tags.length > 0 && (
        <div className='mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5'>
          {experience.tags.map((tag, tIdx) => (
            <span
              key={`exp-tag-${tIdx}`}
              className='text-[11px] font-mono px-2 py-0.5 rounded bg-[#915EFF]/10 border border-[#915EFF]/25 text-[#dfd9ff]'
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <SectionDivider number='02' title='CAREER TIMELINE' id='work-divider' />

      <motion.div variants={textVariant()} className='mt-4'>
        <p className={`${styles.sectionSubText} text-center`}>
          Where I've engineered & shipped
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-14 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
