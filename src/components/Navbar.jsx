import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import CommandPalette from "./CommandPalette";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCmdkOpen, setIsCmdkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-4 fixed top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-[#070518]/95 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2 shrink-0'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-8 h-8 sm:w-9 sm:h-9 object-contain' />
            <p className='text-white text-[16px] sm:text-[17px] font-bold cursor-pointer flex items-center gap-1.5 whitespace-nowrap'>
              <span>Amarnath</span>
              <span className='text-[#915EFF] font-mono text-[11px] sm:text-[12px] bg-[#915EFF]/10 px-1.5 py-0.5 rounded border border-[#915EFF]/30'>
                dev:~$
              </span>
            </p>
          </Link>

          {/* Desktop Nav Links */}
          <ul className='list-none hidden lg:flex flex-row items-center gap-4 xl:gap-6'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[14px] xl:text-[15px] font-medium cursor-pointer transition-colors whitespace-nowrap`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* Command Palette Trigger Button (⌘K) inspired by genioussonu.me */}
            <li>
              <button
                type='button'
                onClick={() => setIsCmdkOpen(true)}
                title='Search & Commands (Cmd+K / Ctrl+K)'
                className='flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-secondary hover:text-white border border-white/10 font-mono text-[11px] transition-colors whitespace-nowrap'
              >
                <Search className='w-3.5 h-3.5 text-[#915EFF]' />
                <span className='text-[11px] text-secondary/80'>Search</span>
                <span className='px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/90 font-semibold'>
                  ⌘K
                </span>
              </button>
            </li>

            {/* Resume button */}
            <li>
              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#915EFF] hover:bg-[#7b46e3] text-white text-[13px] font-mono font-semibold py-1.5 px-3.5 rounded-lg transition-colors shadow-sm whitespace-nowrap inline-flex items-center'
              >
                Resume ↗
              </a>
            </li>
          </ul>

          {/* Mobile Right Bar (⌘K Trigger + Mobile Hamburger Menu) */}
          <div className='lg:hidden flex items-center gap-2.5'>
            {/* Mobile ⌘K Button */}
            <button
              type='button'
              onClick={() => setIsCmdkOpen(true)}
              aria-label='Search & Commands'
              className='flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-secondary font-mono text-[11px]'
            >
              <Search className='w-3 h-3 text-[#915EFF]' />
              <span className='text-[10px] text-white/90 font-semibold'>⌘K</span>
            </button>

            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[26px] h-[26px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />

            {/* Mobile Drawer */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-5 bg-[#0e0a2b] absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-30 rounded-2xl border border-[#915EFF]/30 shadow-2xl flex-col gap-3 backdrop-blur-xl`}
            >
              <button
                type='button'
                onClick={() => {
                  setToggle(false);
                  setIsCmdkOpen(true);
                }}
                className='w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-left font-mono text-xs text-white'
              >
                <span className='flex items-center gap-2'>
                  <Search className='w-3.5 h-3.5 text-[#915EFF]' />
                  <span>Commands</span>
                </span>
                <span className='px-1.5 py-0.5 rounded bg-white/10 text-[10px]'>⌘K</span>
              </button>

              <ul className='list-none flex flex-col gap-3 pt-1'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[15px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className='font-mono font-semibold cursor-pointer text-[14px] text-[#915EFF] pt-2 border-t border-white/10 w-full'>
                  <a
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={() => setToggle(false)}
                  >
                    View Resume ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Command Palette Modal */}
      <CommandPalette isOpen={isCmdkOpen} onClose={() => setIsCmdkOpen(false)} />
    </>
  );
};

export default Navbar;
