import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name}>
          {isMobile ? (
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.08}
              transitionSpeed={400}
              className='w-full h-full'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className='w-full h-full rounded-2xl bg-tertiary/90 border border-white/10 shadow-card flex flex-col items-center justify-center p-3 relative group'
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className='w-12 h-12 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'
                  loading='lazy'
                />
                <span className='text-[10px] text-secondary mt-1 font-medium truncate max-w-full text-center'>
                  {technology.name}
                </span>
              </motion.div>
            </Tilt>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
