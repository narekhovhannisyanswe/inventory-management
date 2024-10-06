import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

import DashboardWrapper from '@/app/DashboardWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inventory Management',
  description: 'Inventory management dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
