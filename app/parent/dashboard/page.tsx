'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { MOCK_USERS } from '@/lib/mock-data/users';
import { getUserProgress } from '@/lib/mock-data/userProgress';

export default function ParentDashboard() {
  const { user } = useAuth();
  if (!user) return null;

  const children = user.childIds?.map(id => MOCK_USERS.find(u => u.id === id)).filter(Boolean) || [];
  const childData = children[0];

  if (!childData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-iga-text-dark mb-4">Parent Dashboard</h1>
        <p className="text-iga-text-gray">No child data available</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-gradient-to-r from-iga-primary to-iga-accent rounded-2xl p-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, {user.displayName}! 👋</h1>
        <p className="text-pink-100 text-lg">Track {childData.displayName}'s progress</p>
      </div>

      <div className="bg-white rounded-xl border border-iga-border p-8">
        <h2 className="text-2xl font-bold text-iga-text-dark mb-6">{childData.displayName}'s Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-iga-surface rounded-xl p-6">
            <div className="text-3xl mb-2">🔥</div>
            <p className="text-2xl font-bold text-iga-text-dark">{childData.streak.current}</p>
            <p className="text-sm text-iga-text-gray">Day Streak</p>
          </div>
          <div className="bg-iga-surface rounded-xl p-6">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-2xl font-bold text-iga-text-dark">{childData.stats.programsCompleted}</p>
            <p className="text-sm text-iga-text-gray">Completed</p>
          </div>
          <div className="bg-iga-surface rounded-xl p-6">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-2xl font-bold text-iga-text-dark">{childData.stats.badgesEarned}</p>
            <p className="text-sm text-iga-text-gray">Badges</p>
          </div>
          <div className="bg-iga-surface rounded-xl p-6">
            <div className="text-3xl mb-2">💕</div>
            <p className="text-2xl font-bold text-iga-text-dark">{childData.stats.communityHearts}</p>
            <p className="text-sm text-iga-text-gray">Hearts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
