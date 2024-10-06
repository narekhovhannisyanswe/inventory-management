import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathName = usePathname();
  const isActive = href === pathName || (pathName === '/' && href === '/dashboard');

  return (
    <Link href={href}>
      <div
        className={`flex cursor-pointer items-center gap-3 transition-colors hover:bg-blue-100 hover:text-blue-500 ${isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'} ${isActive ? 'bg-blue-200 text-white' : ''}`}>
        <Icon className="h-6 w-6 !text-gray-700" />
        <span className={`font-medium text-gray-700 ${isCollapsed ? 'hidden' : 'block'}`}>{label}</span>
      </div>
    </Link>
  );
};

export default SidebarLink;
