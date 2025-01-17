'use client';

import { useState } from 'react';
import NavLink from './NavLink';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden w-9 h-9">
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg className="stroke-black w-9 h-9">
          <use href="/icons.svg#icon-menu-01"></use>
        </svg>
      </button>

      <div
        className={`absolute top-16 left-0 w-full bg-slate-300 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <nav className="flex flex-col items-center gap-4 py-3">
          <NavLink href="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink href="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink href="/demo" onClick={() => setIsOpen(false)}>
            Demo
          </NavLink>
          <NavLink href="/login" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
          <NavLink href="/register" onClick={() => setIsOpen(false)}>
            Register
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
