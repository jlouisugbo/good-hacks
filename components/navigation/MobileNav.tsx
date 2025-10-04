'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { canAccess } from '@/lib/utils/permissions';
import { Menu, X, Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const navLinks = [
    { href: `/${user.role}/dashboard`, label: 'Dashboard', access: 'all' },
    { href: `/${user.role}/lms`, label: 'Learning Center', access: 'lms' },
    { href: `/${user.role}/community`, label: 'Community', access: 'community' },
    { href: `/${user.role}/profile`, label: 'Profile', access: 'all' },
  ];

  const visibleLinks = navLinks.filter(link =>
    link.access === 'all' || canAccess(link.access, user.role)
  );

  const handleLogout = () => {
    logout();
    setIsOpen(false);
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
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-iga-border">
      <div className="flex items-center justify-between px-4 h-16">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-iga-text-dark" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="py-6 border-b border-iga-border">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-16 w-16 border-2 border-iga-primary">
                    <AvatarImage src={user.avatar} alt={user.displayName} />
                    <AvatarFallback className="bg-gradient-to-br from-iga-primary to-iga-accent text-white text-lg">
                      {getInitials(user.displayName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-iga-text-dark">{user.displayName}</h3>
                    <p className="text-sm text-iga-text-gray capitalize">{user.role}</p>
                  </div>
                </div>
              </div>

              <nav className="flex-1 py-6 space-y-2">
                {visibleLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'bg-iga-surface text-iga-primary font-semibold'
                        : 'text-iga-text-gray hover:bg-iga-surface/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-iga-border pt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-iga-text-gray hover:text-iga-primary"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href={`/${user.role}/dashboard`} className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-10 h-10 bg-gradient-to-br from-iga-primary to-iga-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IGA</span>
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="relative text-iga-text-gray hover:text-iga-primary"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-iga-primary rounded-full"></span>
        </Button>
      </div>
    </div>
  );
}
