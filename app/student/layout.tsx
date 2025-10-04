'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { Navbar } from '@/components/navigation/Navbar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { BottomNav } from '@/components/navigation/BottomNav';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || (user.role !== 'student' && user.role !== 'admin'))) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) return null;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden md:block"><Navbar /></div>
      <div className="md:hidden"><MobileNav /></div>
      <main className="md:pt-0 pt-16 pb-20 md:pb-0">{children}</main>
      <BottomNav />
    </div>
  );
}
