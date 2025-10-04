'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { MOCK_USERS } from '@/lib/mock-data/users';
import { MOCK_PROGRAMS } from '@/lib/mock-data/programs';
import { MOCK_POSTS } from '@/lib/mock-data/posts';

export default function AdminDashboard() {
  const { user } = useAuth();
  if (!user) return null;

  const students = MOCK_USERS.filter(u => u.role === 'student');
  const volunteers = MOCK_USERS.filter(u => u.role === 'volunteer');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-gradient-to-r from-iga-primary to-iga-accent rounded-2xl p-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-pink-100 text-lg">Platform overview and management</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="text-3xl mb-2">👩‍🎓</div>
          <p className="text-2xl font-bold text-iga-text-dark">{students.length}</p>
          <p className="text-sm text-iga-text-gray">Students</p>
        </div>
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="text-3xl mb-2">🙋‍♀️</div>
          <p className="text-2xl font-bold text-iga-text-dark">{volunteers.length}</p>
          <p className="text-sm text-iga-text-gray">Volunteers</p>
        </div>
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="text-3xl mb-2">📚</div>
          <p className="text-2xl font-bold text-iga-text-dark">{MOCK_PROGRAMS.length}</p>
          <p className="text-sm text-iga-text-gray">Programs</p>
        </div>
        <div className="bg-white rounded-xl border border-iga-border p-6">
          <div className="text-3xl mb-2">💬</div>
          <p className="text-2xl font-bold text-iga-text-dark">{MOCK_POSTS.length}</p>
          <p className="text-sm text-iga-text-gray">Posts</p>
        </div>
      </div>
    </div>
  );
}
