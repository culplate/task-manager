import Link from 'next/link';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 transition-shadow duration-300 hover:shadow-md mb-1">
      <Link href="/" className="py-4">
        <svg className="w-9 h-9">
          <use href={`/icons.svg#icon-logo`}></use>
        </svg>
      </Link>

      {/* Desktop navbar */}
      <nav className="hidden md:flex items-center">
        <div className="flex gap-4 mr-40 items-center">
          <NavLink href="/about">About</NavLink>
          {/* TODO Make dashboard link conditional and accessible after auth*/}
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

      {/* Mobile navbar */}
      <MobileMenu />
    </header>
  );
}
