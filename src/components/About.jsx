import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SectionDivider from "./SectionDivider";
import SystemProfile from "./SystemProfile";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={35}
    tiltMaxAngleY={35}
    scale={1.04}
    transitionSpeed={450}
    className='xs:w-[250px] w-full flex-1 min-w-[240px]'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-[#110d2c] rounded-[20px] py-6 px-8 min-h-[260px] flex justify-evenly items-center flex-col border border-white/5'>
        <img
          src={icon}
          alt={title}
          className='w-14 h-14 object-contain'
        />

        <h3 className='text-white text-[19px] font-bold text-center mt-3'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <SectionDivider number='01' title='SYSTEM PROFILE & OVERVIEW' id='about-divider' />

      <motion.div variants={textVariant()} className='mt-4'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Engineering Overview.</h2>
      </motion.div>

      {/* Two-Column Grid: Narrative on Left, system-profile.sh on Right */}
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.8)}
          className='lg:col-span-7 space-y-4 text-secondary text-[15px] sm:text-[16px] leading-[28px]'
        >
          <p>
            Graduating B.Tech Computer Science engineer from{" "}
            <strong className='text-white'>Sister Nivedita University, Kolkata</strong> (CGPA: 7.27/10),
            currently working at{" "}
            <strong className='text-[#e0b0ff]'>iB Arts Private Limited</strong> as Graduate Engineer Trainee.
            My work spans full-stack engineering, custom WordPress/Webflow architecture, and autonomous AI automation systems.
          </p>

          <p>
            Previously, I engineered an AI meeting and audio intelligence pipeline at{" "}
            <strong className='text-white'>Expm Learning India</strong> using Gemini and BigBlueButton,
            cutting manual documentation overhead by 70%. At{" "}
            <strong className='text-white'>Employability.life</strong>, I audited REST API endpoints and
            hardened security compliance, earning the XPMC / XPro credential.
          </p>

          <p>
            I focus on building production-grade software that is performant, scalable, and resilient.
            Seeking a Software Developer position where I can apply full-stack MERN, automation, and modern web engineering to ship high-impact business solutions.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.8)}
          className='lg:col-span-5 w-full'
        >
          <SystemProfile />
        </motion.div>
      </div>

      {/* 4 Core Pillars (3D Tilt Cards) */}
      <div className='mt-14 flex flex-wrap gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
