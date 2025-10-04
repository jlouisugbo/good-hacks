'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/AuthContext';
import { getDefaultRoute } from '@/lib/utils/permissions';

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push(getDefaultRoute(user.role));
      } else {
        router.push('/login');
      }
    }
  }, [user, isLoading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-iga-primary to-iga-accent rounded-2xl mb-4 animate-pulse">
          <span className="text-3xl font-bold text-white">IGA</span>
        </div>
        <p className="text-iga-text-gray">Loading...</p>
      </div>
    </div>
  );
}
