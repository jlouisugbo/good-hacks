'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { canAccess } from '@/lib/utils/permissions';
import { Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (!user) return null;

  const navLinks = [
    { href: `/${user.role}/dashboard`, label: 'Dashboard', access: 'all' },
    { href: `/${user.role}/lms`, label: 'Learning Center', access: 'lms' },
    { href: `/${user.role}/community`, label: 'Community', access: 'community' },
  ];

  const visibleLinks = navLinks.filter(link =>
    link.access === 'all' || canAccess(link.access, user.role)
  );

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-iga-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href={`/${user.role}/dashboard`} className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-iga-primary to-iga-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IGA</span>
                </div>
                <span className="hidden md:block text-xl font-bold text-iga-text-dark">
                  Girls Academy
                </span>
              </div>
            </Link>

            <div className="hidden md:flex space-x-1">
              {visibleLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'bg-iga-surface text-iga-primary font-semibold'
                      : 'text-iga-text-gray hover:text-iga-primary hover:bg-iga-surface/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-iga-text-gray hover:text-iga-primary"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-iga-primary rounded-full"></span>
            </Button>

            <Link href={`/${user.role}/profile`}>
              <Avatar className="h-10 w-10 border-2 border-iga-border hover:border-iga-primary transition-colors cursor-pointer">
                <AvatarImage src={user.avatar} alt={user.displayName} />
                <AvatarFallback className="bg-gradient-to-br from-iga-primary to-iga-accent text-white">
                  {getInitials(user.displayName)}
                </AvatarFallback>
              </Avatar>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="text-iga-text-gray hover:text-iga-primary"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
