import React from 'react';
import MainHeader from './_components/MainHeader';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <MainHeader />
      {children}
    </div>
  );
}
