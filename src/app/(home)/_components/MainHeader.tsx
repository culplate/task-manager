import Link from 'next/link';

import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import LogoLink from '@/app/shared/components/LogoLink';

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 transition-shadow duration-300 shadow-md mb-1">
      <LogoLink />

      {/* Desktop navbar */}
      <nav className="hidden md:flex items-center">
        <div className="flex gap-4 mr-40 items-center">
          <NavLink href="/about">About</NavLink>
          {/* TODO Make dashboard link accessible after auth only */}
          <NavLink href="/dashboard">Dashboard</NavLink>
          {/* TODO Create demo of dashboard accessible without auth */}
          <NavLink href="/demo">Demo</NavLink>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-lg font-medium py-3 px-4">
            Login
          </Link>
          <Link
            href="/register"
            className="text-lg font-medium py-7 px-4 text-white transition-all bg-[#5355BC] hover:bg-[#3c3ea8]"
          >
            Register
          </Link>
        </div>
      </nav>

      <MobileMenu />
    </header>
  );
}
