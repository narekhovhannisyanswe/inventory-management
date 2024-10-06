'use client';

import { ReactNode, useEffect } from 'react';
import StoreProvider, { useAppDispatch, useAppSelector } from '@/app/redux';

import Navbar from '@/app/(components)/Navbar';
import SideBar from '@/app/(components)/SideBar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector(state => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  });

  return (
    <div className={`flex min-h-screen bg-gray-50 text-gray-900 ${isDarkMode ? 'dark' : 'light'}`}>
      <SideBar />
      <main
        className={`flex min-h-full flex-1 flex-col gap-1 bg-gray-50 px-8 py-6 transition-all duration-200 ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
