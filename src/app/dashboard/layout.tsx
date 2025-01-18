import React from 'react';
import Sidebar from './_components/Sidebar';
import { SidebarProvider } from '../shared/context/SidebarProvider';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="h-screen flex">
        <Sidebar />
        {children}
      </div>
    </SidebarProvider>
  );
}
