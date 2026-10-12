import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  FileText,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Copy,
  ExternalLink,
  Code2,
  X,
  Check,
} from "lucide-react";
import { personalInfo } from "../constants";

const COMMAND_ACTIONS = [
  {
    id: "nav-about",
    title: "About Me & System Profile",
    category: "Navigation",
    icon: Code2,
    action: () => {
      window.location.hash = "#about";
    },
  },
  {
    id: "nav-work",
    title: "Work Experience & Career Timeline",
    category: "Navigation",
    icon: Briefcase,
    action: () => {
      window.location.hash = "#work";
    },
  },
  {
    id: "nav-edu",
    title: "Education & Certifications",
    category: "Navigation",
    icon: GraduationCap,
    action: () => {
      window.location.hash = "#education";
    },
  },
  {
    id: "nav-projects",
    title: "Selected Projects & Demos",
    category: "Navigation",
    icon: FolderGit2,
    action: () => {
      window.location.hash = "#projects";
    },
  },
  {
    id: "nav-contact",
    title: "Contact & Transmission",
    category: "Navigation",
    icon: Mail,
    action: () => {
      window.location.hash = "#contact";
    },
  },
  {
    id: "act-resume",
    title: "View / Download Resume (PDF)",
    category: "Quick Actions",
    icon: FileText,
    action: () => {
      window.open("/resume.pdf", "_blank");
    },
  },
  {
    id: "act-copy-email",
    title: "Copy Email: ghoshamarnath06@gmail.com",
    category: "Quick Actions",
    icon: Copy,
    action: (setFeedback) => {
      navigator.clipboard?.writeText(personalInfo.email);
      setFeedback("Email copied to clipboard!");
    },
  },
  {
    id: "act-github",
    title: "Open GitHub Profile (@not-amarnath)",
    category: "External",
    icon: ExternalLink,
    action: () => {
      window.open(personalInfo.github, "_blank");
    },
  },
  {
    id: "act-linkedin",
    title: "Open LinkedIn Profile",
    category: "External",
    icon: ExternalLink,
    action: () => {
      window.open(personalInfo.linkedin, "_blank");
    },
  },
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setFeedback("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = COMMAND_ACTIONS.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd) => {
    if (cmd.id === "act-copy-email") {
      cmd.action(setFeedback);
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      cmd.action();
      onClose();
    }
  };

  const handleKeyDownInMenu = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='w-full max-w-xl bg-[#0c0822] border border-[#915EFF]/40 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className='flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-[#130d35]/60'>
          <Search className='w-5 h-5 text-[#915EFF]' />
          <input
            ref={inputRef}
            type='text'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInMenu}
            placeholder='Type a command or jump to section...'
            className='flex-1 bg-transparent text-white placeholder-secondary/60 text-[14px] sm:text-[15px] outline-none font-sans'
          />
          <button
            onClick={onClose}
            aria-label='Close command palette'
            className='text-secondary hover:text-white p-1 rounded-md hover:bg-white/5 transition-colors'
          >
            <X className='w-4 h-4' />
          </button>
        </div>

        {/* Feedback message (e.g. copied email) */}
        {feedback && (
          <div className='px-4 py-2 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2'>
            <Check className='w-3.5 h-3.5' />
            <span>{feedback}</span>
          </div>
        )}

        {/* Actions List */}
        <div className='max-h-72 overflow-y-auto p-2 space-y-1 select-none font-mono'>
          {filtered.length === 0 ? (
            <div className='p-6 text-center text-secondary text-sm'>
              No commands found for "{query}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => handleSelect(cmd)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#915EFF]/20 border border-[#915EFF]/40 text-white"
                      : "text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-[#915EFF]" : "text-secondary"}`} />
                    <span className='text-[13px] font-sans font-medium text-white/90'>
                      {cmd.title}
                    </span>
                  </div>
                  <span className='text-[10px] text-secondary/60 uppercase tracking-widest'>
                    {cmd.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className='flex items-center justify-between px-4 py-2.5 bg-[#090518] border-t border-white/5 text-[11px] font-mono text-secondary/70'>
          <div className='flex items-center gap-3'>
            <span><kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white/90'>↑↓</kbd> navigate</span>
            <span><kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white/90'>↵</kbd> select</span>
            <span><kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white/90'>esc</kbd> close</span>
          </div>
          <span className='text-emerald-400 font-semibold'>amarnath@portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
