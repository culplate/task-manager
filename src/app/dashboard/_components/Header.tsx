import SidebarToggle from './SidebarToggle';

export default function Header() {
  return (
    <div className="flex items-center px-8 w-full h-[68px] bg-slate-300">
      <SidebarToggle />
      <span className="">Username</span>
    </div>
  );
}
