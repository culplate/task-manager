'use client';

import LogoLink from '@/app/shared/components/LogoLink';

import { useSidebar } from '@/app/shared/context/SidebarProvider';

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out fixed left-0 top-0 z-50 flex flex-shrink-0 h-full w-[225px] md:w-[260px] lg:translate-x-0 lg:relative bg-slate-600`}
      >
        <div className="flex flex-col">
          <LogoLink />
        </div>
      </aside>
    </>
  );
}
