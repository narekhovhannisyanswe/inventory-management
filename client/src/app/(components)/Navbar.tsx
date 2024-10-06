'use client';

import Link from 'next/link';

import { Bell, Sun, Menu, Settings, Moon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector(state => state.global.isDarkMode);

  const toggleSidebar = () => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  const toggleDarkMode = () => dispatch(setIsDarkMode(!isDarkMode));

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-1 items-center gap-4">
        <button className="rounded-full bg-gray-100 p-3 hover:bg-blue-100" onClick={toggleSidebar}>
          <Menu className="h-4 w-4" />
        </button>
        <div className="relative max-w-80 flex-1">
          <input
            className="w-full rounded-lg border-2 border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
            type="search"
            placeholder="Search in groups and products"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="hidden items-center justify-between gap-4 md:flex">
          <button className="" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="cursor-pointer text-gray-500" size={24} />
            ) : (
              <Moon className="cursor-pointer text-gray-500" size={24} />
            )}
          </button>
          <div className="relative flex items-center">
            <Bell className="cursor-pointer text-gray-500" size={24} />
          </div>
          <div className="mx-3 h-7 border border-gray-300"></div>
          <div className="flex cursor-pointer items-center gap-3">
            <div className="h-8 w-8"></div>
            <span className="flex p-1 font-semibold">Name</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
