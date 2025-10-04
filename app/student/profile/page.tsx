'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { MOCK_BADGES } from '@/lib/mock-data/badges';
import { getUserProgress } from '@/lib/mock-data/userProgress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function ProfilePage() {
  const { user } = useAuth();
  if (!user) return null;

  const userProgressData = getUserProgress(user.id);
  const earnedBadges = MOCK_BADGES.slice(0, user.stats.badgesEarned);
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl border border-iga-border p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Avatar className="h-32 w-32 border-4 border-iga-primary">
            <AvatarImage src={user.avatar} alt={user.displayName} />
            <AvatarFallback className="bg-gradient-to-br from-iga-primary to-iga-accent text-white text-3xl">
              {getInitials(user.displayName)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-iga-text-dark mb-2">{user.displayName}</h1>
            <Badge className="bg-iga-surface text-iga-primary mb-3">{user.role}</Badge>
            <p className="text-iga-text-gray">{user.bio || 'No bio yet'}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🔥</span>
            <span className="text-3xl font-bold text-iga-text-dark">{user.streak.current}</span>
          </div>
          <p className="text-sm text-iga-text-gray">Day Streak</p>
        </div>
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">📚</span>
            <span className="text-3xl font-bold text-iga-text-dark">{user.stats.programsCompleted}</span>
          </div>
          <p className="text-sm text-iga-text-gray">Completed</p>
        </div>
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🏆</span>
            <span className="text-3xl font-bold text-iga-text-dark">{user.stats.badgesEarned}</span>
          </div>
          <p className="text-sm text-iga-text-gray">Badges</p>
        </div>
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">💕</span>
            <span className="text-3xl font-bold text-iga-text-dark">{user.stats.communityHearts}</span>
          </div>
          <p className="text-sm text-iga-text-gray">Hearts</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-iga-border p-8">
        <h2 className="text-2xl font-bold text-iga-text-dark mb-6">Achievements & Badges 🏆</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {earnedBadges.map(badge => (
            <div key={badge.id} className="bg-gradient-to-br from-iga-surface to-white rounded-xl border-2 border-iga-primary p-6 text-center">
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-semibold text-iga-text-dark mb-1 text-sm">{badge.name}</h3>
              <p className="text-xs text-iga-text-gray line-clamp-2">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
