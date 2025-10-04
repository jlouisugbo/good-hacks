export interface Post {
  id: string;
  userId: string;
  content: string;
  programId?: string;
  badgeId?: string;
  timestamp: string;
  heartsCount: number;
  heartedBy: string[];
  isAchievement: boolean;
  contentType?: 'text' | 'video' | 'livestream' | 'achievement';
  videoUrl?: string;
  livestreamUrl?: string;
  isLive?: boolean;
  viewerCount?: number;
}

export const MOCK_POSTS: Post[] = [
  {
    id: 'post_001',
    userId: 'user_002',
    content: 'Live now: Q&A session about starting your first business! Join me!',
    timestamp: '2025-10-02T14:30:00Z',
    heartsCount: 45,
    heartedBy: ['user_001', 'user_003', 'user_004'],
    isAchievement: false,
    contentType: 'livestream',
    livestreamUrl: 'https://www.youtube.com/embed/live_stream_example',
    isLive: true,
    viewerCount: 127
  },
  {
    id: 'post_002',
    userId: 'user_001',
    content: 'Check out my first music composition! What do you think?',
    timestamp: '2025-10-02T10:15:00Z',
    heartsCount: 34,
    heartedBy: ['user_002', 'user_004'],
    isAchievement: false,
    contentType: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'post_003',
    userId: 'user_004',
    content: 'Earned my Community Star badge today! Thank you all for the support',
    badgeId: 'badge_009',
    timestamp: '2025-10-01T16:45:00Z',
    heartsCount: 31,
    heartedBy: ['user_001', 'user_002', 'user_003', 'user_005'],
    isAchievement: true,
    contentType: 'achievement'
  },
  {
    id: 'post_004',
    userId: 'user_003',
    content: 'Learning about financial literacy is empowering! Can\'t wait to apply these skills 📈',
    programId: 'prog_006',
    timestamp: '2025-10-01T09:20:00Z',
    heartsCount: 18,
    heartedBy: ['user_001', 'user_002'],
    isAchievement: false
  },
  {
    id: 'post_005',
    userId: 'user_005',
    content: 'Just hit a 20-day streak! Consistency is key 🔥',
    timestamp: '2025-09-30T18:00:00Z',
    heartsCount: 27,
    heartedBy: ['user_001', 'user_002', 'user_003', 'user_004'],
    isAchievement: false
  },
  {
    id: 'post_006',
    userId: 'user_001',
    content: 'Quick tutorial: How I approach songwriting - my creative process!',
    timestamp: '2025-09-30T13:30:00Z',
    heartsCount: 22,
    heartedBy: ['user_002', 'user_004', 'user_005'],
    isAchievement: false,
    contentType: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'post_007',
    userId: 'user_006',
    content: 'Completed my first program! The Leadership & Public Speaking course was incredible 👑',
    programId: 'prog_007',
    timestamp: '2025-09-29T15:45:00Z',
    heartsCount: 19,
    heartedBy: ['user_001', 'user_002', 'user_003'],
    isAchievement: true
  },
  {
    id: 'post_008',
    userId: 'user_002',
    content: 'Who wants to form a study group for the marketing program? Let\'s learn together! 🤝',
    timestamp: '2025-09-29T11:00:00Z',
    heartsCount: 14,
    heartedBy: ['user_001', 'user_003', 'user_005', 'user_006'],
    isAchievement: false
  },
  {
    id: 'post_009',
    userId: 'user_004',
    content: 'Just unlocked the Multi-Talented badge! Diversity in learning is so rewarding 🌈',
    badgeId: 'badge_005',
    timestamp: '2025-09-28T17:20:00Z',
    heartsCount: 25,
    heartedBy: ['user_001', 'user_002', 'user_003', 'user_005'],
    isAchievement: true
  },
  {
    id: 'post_010',
    userId: 'user_003',
    content: 'Excited to start the Community Building program next! Any tips? 💡',
    timestamp: '2025-09-28T08:45:00Z',
    heartsCount: 12,
    heartedBy: ['user_001', 'user_004'],
    isAchievement: false
  },
  {
    id: 'post_011',
    userId: 'user_005',
    content: 'The personal development lessons are life-changing. Feeling so empowered! ✨',
    timestamp: '2025-09-27T14:15:00Z',
    heartsCount: 20,
    heartedBy: ['user_001', 'user_002', 'user_004', 'user_006'],
    isAchievement: false
  },
  {
    id: 'post_012',
    userId: 'user_001',
    content: 'Music Week Foundations complete! On to Advanced Production 🎹',
    programId: 'prog_001',
    timestamp: '2025-09-27T10:00:00Z',
    heartsCount: 16,
    heartedBy: ['user_002', 'user_003', 'user_004'],
    isAchievement: true
  },
  {
    id: 'post_013',
    userId: 'user_006',
    content: 'Love the supportive community here! You all inspire me every day 💕',
    timestamp: '2025-09-26T16:30:00Z',
    heartsCount: 28,
    heartedBy: ['user_001', 'user_002', 'user_003', 'user_004', 'user_005'],
    isAchievement: false
  },
  {
    id: 'post_014',
    userId: 'user_002',
    content: 'Earned my Unstoppable badge with a 30-day streak! Never giving up 🚀',
    badgeId: 'badge_007',
    timestamp: '2025-09-26T12:00:00Z',
    heartsCount: 35,
    heartedBy: ['user_001', 'user_003', 'user_004', 'user_005', 'user_006'],
    isAchievement: true
  },
  {
    id: 'post_015',
    userId: 'user_004',
    content: 'The marketing strategies we learned are pure gold! Applying them to my project 📱',
    timestamp: '2025-09-25T15:45:00Z',
    heartsCount: 17,
    heartedBy: ['user_002', 'user_003', 'user_005'],
    isAchievement: false
  },
  {
    id: 'post_016',
    userId: 'user_003',
    content: 'Halfway through Financial Literacy! My relationship with money is changing 💰',
    timestamp: '2025-09-25T09:30:00Z',
    heartsCount: 21,
    heartedBy: ['user_001', 'user_002', 'user_004', 'user_006'],
    isAchievement: false
  },
  {
    id: 'post_017',
    userId: 'user_005',
    content: 'Community Building program done! Ready to make a difference in my neighborhood 🌍',
    programId: 'prog_008',
    timestamp: '2025-09-24T18:00:00Z',
    heartsCount: 24,
    heartedBy: ['user_001', 'user_002', 'user_003', 'user_004'],
    isAchievement: true
  },
  {
    id: 'post_018',
    userId: 'user_001',
    content: 'Practice tip: Set aside 20 minutes daily for lessons. Consistency over intensity! ⏰',
    timestamp: '2025-09-24T11:15:00Z',
    heartsCount: 19,
    heartedBy: ['user_002', 'user_003', 'user_005', 'user_006'],
    isAchievement: false
  },
  {
    id: 'post_019',
    userId: 'user_006',
    content: 'Just enrolled in Marketing & Social Media. Excited to learn how to grow my brand! 📈',
    timestamp: '2025-09-23T14:45:00Z',
    heartsCount: 13,
    heartedBy: ['user_001', 'user_002', 'user_004'],
    isAchievement: false
  },
  {
    id: 'post_020',
    userId: 'user_002',
    content: 'Unlocked the Dedicated Learner badge! 10 lessons down, many more to go 📚',
    badgeId: 'badge_003',
    timestamp: '2025-09-23T10:30:00Z',
    heartsCount: 26,
    heartedBy: ['user_001', 'user_003', 'user_004', 'user_005', 'user_006'],
    isAchievement: true
  }
];
