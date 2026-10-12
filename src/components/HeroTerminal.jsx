import React, { useState, useEffect } from "react";
import { Terminal, Check, Copy } from "lucide-react";

const TYPING_COMMANDS = [
  "deploy --prod --verified",
  "npm run ai-agent:start",
  "git commit -m \"shipped high-perf code\"",
  "curl -s https://maybe-amar.vercel.app",
];

const HeroTerminal = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentCmd = TYPING_COMMANDS[commandIndex];
    let timeout;

    if (!isDeleting && displayText === currentCmd) {
      // Pause at full command
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === "") {
      // Move to next command
      setIsDeleting(false);
      setCommandIndex((prev) => (prev + 1) % TYPING_COMMANDS.length);
      timeout = setTimeout(() => {}, 400);
    } else {
      // Type or delete character
      const speed = isDeleting ? 30 : 65;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentCmd.substring(0, prev.length - 1)
            : currentCmd.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, commandIndex]);

  const handleCopyProfile = () => {
    navigator.clipboard?.writeText("ghoshamarnath06@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='w-full max-w-[480px] bg-[#0c0822]/90 border border-[#915EFF]/30 rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md'>
      {/* Terminal Title Bar */}
      <div className='flex items-center justify-between px-3.5 py-2.5 bg-[#140e34]/80 border-b border-white/10 select-none'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1.5'>
            <span className='w-2.5 h-2.5 rounded-full bg-[#ef4444]' />
            <span className='w-2.5 h-2.5 rounded-full bg-[#f59e0b]' />
            <span className='w-2.5 h-2.5 rounded-full bg-[#10b981]' />
          </div>
          <div className='flex items-center gap-1.5 text-secondary text-[11px] font-mono ml-1.5'>
            <Terminal className='w-3 h-3 text-[#915EFF]' />
            <span className='text-white/80'>amar@dev:~ (zsh)</span>
          </div>
        </div>

        <button
          onClick={handleCopyProfile}
          title='Copy email to clipboard'
          className='flex items-center gap-1 text-[10px] font-mono text-secondary hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors'
        >
          {copied ? (
            <>
              <Check className='w-2.5 h-2.5 text-emerald-400' />
              <span className='text-emerald-400'>COPIED</span>
            </>
          ) : (
            <>
              <Copy className='w-2.5 h-2.5' />
              <span>COPY EMAIL</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Output */}
      <div className='p-3.5 sm:p-4 font-mono text-[11px] sm:text-[12px] space-y-1.5 select-text'>
        {/* Command 1: neofetch */}
        <div className='flex items-center gap-1 text-white/90'>
          <span className='text-emerald-400'>amar@dev:~$</span>
          <span className='text-[#e0b0ff] font-medium'>neofetch --minimal</span>
        </div>

        <div className='pl-3 text-secondary/90 space-y-0.5 border-l-2 border-[#915EFF]/30 my-1.5 text-[11px] sm:text-[11.5px]'>
          <div className='flex items-baseline justify-between'>
            <span className='text-white/50'>OS:</span>
            <span className='text-white/90'>Ubuntu 24.04 LTS (x86_64)</span>
          </div>
          <div className='flex items-baseline justify-between'>
            <span className='text-white/50'>Role:</span>
            <span className='text-[#e0b0ff] font-medium'>Software Dev @ iB Arts</span>
          </div>
          <div className='flex items-baseline justify-between'>
            <span className='text-white/50'>Degree:</span>
            <span className='text-white/90'>B.Tech CSE '26 · SNU (7.27)</span>
          </div>
          <div className='flex items-baseline justify-between'>
            <span className='text-white/50'>Stack:</span>
            <span className='text-emerald-300'>MERN · Next.js · AI Agents</span>
          </div>
          <div className='flex items-baseline justify-between'>
            <span className='text-white/50'>Uptime:</span>
            <span className='text-amber-300'>2y 8m · High Reliability</span>
          </div>
        </div>

        {/* Command 2: whoami */}
        <div className='flex items-center gap-1 text-white/90 pt-1'>
          <span className='text-emerald-400'>amar@dev:~$</span>
          <span className='text-[#e0b0ff] font-medium'>whoami</span>
        </div>
        <div className='pl-3 text-white/80 text-[11px] sm:text-[11.5px]'>
          amarnath-ghosh <span className='text-secondary'>(builder, engineer, automation)</span>
        </div>

        {/* Command 3: Live animated typing */}
        <div className='flex items-center gap-1 text-white/90 pt-1.5'>
          <span className='text-emerald-400'>amar@dev:~$</span>
          <span className='text-white font-medium'>{displayText}</span>
          <span className='inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-0.5' />
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
