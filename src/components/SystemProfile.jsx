import React from "react";
import { systemProfile, personalInfo } from "../constants";
import { Terminal, ExternalLink } from "lucide-react";

const SystemProfile = () => {
  return (
    <div className='w-full bg-[#0a071f]/85 border border-[#915EFF]/30 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md'>
      {/* Title Bar */}
      <div className='flex items-center justify-between px-4 py-3 bg-[#130d35]/80 border-b border-white/10'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1.5'>
            <span className='w-2.5 h-2.5 rounded-full bg-[#ef4444]' />
            <span className='w-2.5 h-2.5 rounded-full bg-[#f59e0b]' />
            <span className='w-2.5 h-2.5 rounded-full bg-[#10b981]' />
          </div>
          <div className='flex items-center gap-1.5 text-secondary text-[11px] font-mono ml-2'>
            <Terminal className='w-3.5 h-3.5 text-[#915EFF]' />
            <span className='text-white/80'>system-profile.sh</span>
          </div>
        </div>

        <div className='flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20'>
          <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      {/* Body: Spec Key-Value Rows */}
      <div className='p-4 sm:p-5 font-mono text-[11px] sm:text-[12px] space-y-2'>
        {systemProfile.map((row, idx) => (
          <div
            key={`sys-${idx}`}
            className='flex items-baseline justify-between py-1 border-b border-white/[0.04] last:border-0'
          >
            <span className='text-secondary/70 lowercase'>
              ${row.key}:
            </span>
            <span
              className={`font-medium text-right ${
                row.color ? row.color : "text-white/90"
              }`}
            >
              {row.val}
            </span>
          </div>
        ))}

        {/* Quick Social / Profiles bar */}
        <div className='pt-3 flex flex-wrap gap-2'>
          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-secondary hover:text-white text-[11px] font-mono border border-white/10 transition-colors'
          >
            <span>LinkedIn</span>
            <ExternalLink className='w-3 h-3' />
          </a>
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-secondary hover:text-white text-[11px] font-mono border border-white/10 transition-colors'
          >
            <span>GitHub</span>
            <ExternalLink className='w-3 h-3' />
          </a>
          <a
            href={personalInfo.portfolio}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-secondary hover:text-white text-[11px] font-mono border border-white/10 transition-colors'
          >
            <span>Live Web</span>
            <ExternalLink className='w-3 h-3' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SystemProfile;
