'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { Chrome as Home, BookOpen, Users, User } from 'lucide-react';

export function BottomNav() {
  const { user } = useAuth();
  const pathname = usePathname();

  if (!user || user.role !== 'student') return null;

  const navItems = [
    { href: '/student/dashboard', label: 'Home', icon: Home },
    { href: '/student/lms', label: 'Learn', icon: BookOpen },
    { href: '/student/community', label: 'Community', icon: Users },
    { href: '/student/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-iga-border shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full space-y-1 transition-colors ${
                isActive ? 'text-iga-primary' : 'text-iga-text-gray'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
