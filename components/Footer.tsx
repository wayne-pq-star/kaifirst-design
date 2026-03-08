
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-6 md:px-12 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <span className="text-[10px] tracking-[0.4em] font-bold">KAI FIRST DESIGN</span>
        <span className="text-[10px] tracking-[0.2em] opacity-40">© 2026 KAI FIRST DESIGN. ALL RIGHTS RESERVED.</span>
        <div className="flex space-x-8">
          <a href="#" className="text-[10px] tracking-[0.2em] opacity-40 hover:opacity-100">PRIVACY</a>
          <a href="#" className="text-[10px] tracking-[0.2em] opacity-40 hover:opacity-100">TERMS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
