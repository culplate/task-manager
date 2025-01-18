'use client';

import { useSidebar } from '@/app/shared/context/SidebarProvider';

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="lg:hidden">
      <svg className="stroke-black w-9 h-9">
        <use href="/icons.svg#icon-menu-01"></use>
      </svg>
    </button>
  );
}
