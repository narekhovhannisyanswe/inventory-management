'use client';

import { useAppSelector, useAppDispatch } from '@/app/redux';

import { Archive, Layout, Menu, Clipboard, User, SlidersHorizontal, CircleDollarSign } from 'lucide-react';

import { setIsSidebarCollapsed } from '@/state';

import SidebarLink from '@/app/(components)/SidebarLink';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);

  const toggleSidebar = () => dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  const sidebarClassNames = `h-full overflow-hidden fixed flex flex-col bg-white transition-all duration-200 shadow-md z-[9999] ${isSideBarCollapsed ? 'w-0 md:w-16' : 'md:w-64 w-72'}`;

  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex items-center justify-between gap-3 pt-8 md:justify-normal ${isSideBarCollapsed ? 'px-4' : 'px-8'}`}>
        <div>logo</div>
        <div className={`text-2xl font-semibold uppercase ${isSideBarCollapsed ? 'hidden' : 'block'}`}>stock</div>
        <button className="rounded-full bg-gray-100 p-3 hover:bg-blue-100 md:hidden" onClick={toggleSidebar}>
          <Menu className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-8 flex-grow">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSideBarCollapsed} />
        <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSideBarCollapsed} />
        <SidebarLink href="/products" icon={Clipboard} label="Products" isCollapsed={isSideBarCollapsed} />
        <SidebarLink href="/users" icon={User} label="Users" isCollapsed={isSideBarCollapsed} />
        <SidebarLink href="/settilgs" icon={SlidersHorizontal} label="Settilgs" isCollapsed={isSideBarCollapsed} />
        <SidebarLink href="/expences" icon={CircleDollarSign} label="Expences" isCollapsed={isSideBarCollapsed} />
      </div>
      <div className={`mb-4 ${isSideBarCollapsed ? 'hidden' : 'block'}`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Stock</p>
      </div>
    </div>
  );
};

export default SideBar;
