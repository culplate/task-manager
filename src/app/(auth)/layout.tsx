import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-violet-100 to-transparent">
      {children}
    </div>
  );
}
