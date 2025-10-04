export interface User {
  id: string;
  role: 'student' | 'volunteer' | 'parent' | 'admin';
  displayName: string;
  email: string;
  avatar: string;
  bio?: string;
  joinDate: string;
  streak: {
    current: number;
    longest: number;
  };
  stats: {
    programsCompleted: number;
    badgesEarned: number;
    communityHearts: number;
  };
  childIds?: string[];
}

export const MOCK_USERS: User[] = [
  {
    id: 'user_001',
    role: 'student',
    displayName: 'Sarah Martinez',
    email: 'sarah.m@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Music lover and aspiring entrepreneur! 🎵✨',
    joinDate: '2024-09-15',
    streak: { current: 12, longest: 18 },
    stats: { programsCompleted: 3, badgesEarned: 8, communityHearts: 42 }
  },
  {
    id: 'user_002',
    role: 'student',
    displayName: 'Amara Johnson',
    email: 'amara.j@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amara',
    bio: 'Coding enthusiast & future tech leader 💻🚀',
    joinDate: '2024-08-20',
    streak: { current: 25, longest: 30 },
    stats: { programsCompleted: 5, badgesEarned: 12, communityHearts: 78 }
  },
  {
    id: 'user_003',
    role: 'student',
    displayName: 'Zara Patel',
    email: 'zara.p@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zara',
    bio: 'Building my business one lesson at a time 📈💡',
    joinDate: '2024-10-01',
    streak: { current: 7, longest: 7 },
    stats: { programsCompleted: 1, badgesEarned: 4, communityHearts: 15 }
  },
  {
    id: 'user_004',
    role: 'student',
    displayName: 'Maya Chen',
    email: 'maya.c@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
    bio: 'Artist, dreamer, and changemaker 🎨🌟',
    joinDate: '2024-07-10',
    streak: { current: 15, longest: 22 },
    stats: { programsCompleted: 4, badgesEarned: 10, communityHearts: 56 }
  },
  {
    id: 'user_005',
    role: 'student',
    displayName: 'Leila Hassan',
    email: 'leila.h@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leila',
    bio: 'Community builder & social entrepreneur 🤝💕',
    joinDate: '2024-06-15',
    streak: { current: 5, longest: 20 },
    stats: { programsCompleted: 2, badgesEarned: 6, communityHearts: 33 }
  },
  {
    id: 'user_006',
    role: 'student',
    displayName: 'Sofia Rodriguez',
    email: 'sofia.r@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia',
    bio: 'Learning, growing, leading! 🌱👑',
    joinDate: '2024-09-01',
    streak: { current: 10, longest: 15 },
    stats: { programsCompleted: 2, badgesEarned: 7, communityHearts: 28 }
  },
  {
    id: 'user_007',
    role: 'volunteer',
    displayName: 'Rachel Green',
    email: 'rachel.g@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
    bio: 'Dedicated to empowering young women',
    joinDate: '2024-05-01',
    streak: { current: 0, longest: 0 },
    stats: { programsCompleted: 0, badgesEarned: 0, communityHearts: 0 }
  },
  {
    id: 'user_008',
    role: 'volunteer',
    displayName: 'Jennifer Wilson',
    email: 'jennifer.w@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
    bio: 'Mentor and guide',
    joinDate: '2024-04-15',
    streak: { current: 0, longest: 0 },
    stats: { programsCompleted: 0, badgesEarned: 0, communityHearts: 0 }
  },
  {
    id: 'user_009',
    role: 'parent',
    displayName: 'Maria Martinez',
    email: 'maria.m@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    bio: 'Proud parent of Sarah',
    joinDate: '2024-09-15',
    streak: { current: 0, longest: 0 },
    stats: { programsCompleted: 0, badgesEarned: 0, communityHearts: 0 },
    childIds: ['user_001']
  },
  {
    id: 'user_010',
    role: 'parent',
    displayName: 'David Johnson',
    email: 'david.j@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    bio: 'Supporting Amara\'s journey',
    joinDate: '2024-08-20',
    streak: { current: 0, longest: 0 },
    stats: { programsCompleted: 0, badgesEarned: 0, communityHearts: 0 },
    childIds: ['user_002']
  },
  {
    id: 'user_011',
    role: 'admin',
    displayName: 'Admin User',
    email: 'admin@iga.org',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
    bio: 'Platform administrator',
    joinDate: '2024-01-01',
    streak: { current: 0, longest: 0 },
    stats: { programsCompleted: 0, badgesEarned: 0, communityHearts: 0 }
  }
];
