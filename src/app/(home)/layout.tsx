import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';

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
