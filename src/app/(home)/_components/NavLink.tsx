import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  href,
  children,
  onClick,
  className,
}: NavLinkProps) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(
        'px-5 py-7 text-lg font-medium hover:text-[#5355BC]',
        className,
      )}
    >
      {children}
    </Link>
  );
}
