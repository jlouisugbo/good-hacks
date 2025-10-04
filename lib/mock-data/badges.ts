export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockCondition: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export const MOCK_BADGES: Badge[] = [
  {
    id: 'badge_001',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🌟',
    unlockCondition: 'complete_1_lesson',
    rarity: 'common'
  },
  {
    id: 'badge_002',
    name: 'Getting Started',
    description: 'Complete 5 lessons',
    icon: '✨',
    unlockCondition: 'complete_5_lessons',
    rarity: 'common'
  },
  {
    id: 'badge_003',
    name: 'Dedicated Learner',
    description: 'Complete 10 lessons',
    icon: '📚',
    unlockCondition: 'complete_10_lessons',
    rarity: 'rare'
  },
  {
    id: 'badge_004',
    name: 'Program Champion',
    description: 'Complete your first program',
    icon: '🏆',
    unlockCondition: 'complete_1_program',
    rarity: 'rare'
  },
  {
    id: 'badge_005',
    name: 'Multi-Talented',
    description: 'Complete programs in 3 different categories',
    icon: '🌈',
    unlockCondition: 'complete_3_categories',
    rarity: 'epic'
  },
  {
    id: 'badge_006',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    unlockCondition: 'streak_7',
    rarity: 'common'
  },
  {
    id: 'badge_007',
    name: 'Unstoppable',
    description: 'Maintain a 30-day streak',
    icon: '🚀',
    unlockCondition: 'streak_30',
    rarity: 'epic'
  },
  {
    id: 'badge_008',
    name: 'Legend',
    description: 'Maintain a 100-day streak',
    icon: '👑',
    unlockCondition: 'streak_100',
    rarity: 'legendary'
  },
  {
    id: 'badge_009',
    name: 'Community Star',
    description: 'Receive 50 hearts on your posts',
    icon: '💕',
    unlockCondition: 'hearts_50',
    rarity: 'rare'
  },
  {
    id: 'badge_010',
    name: 'Social Butterfly',
    description: 'Make 20 community posts',
    icon: '🦋',
    unlockCondition: 'posts_20',
    rarity: 'rare'
  },
  {
    id: 'badge_011',
    name: 'Music Maven',
    description: 'Complete all music programs',
    icon: '🎵',
    unlockCondition: 'complete_all_music',
    rarity: 'epic'
  },
  {
    id: 'badge_012',
    name: 'Business Boss',
    description: 'Complete all business programs',
    icon: '💼',
    unlockCondition: 'complete_all_business',
    rarity: 'epic'
  },
  {
    id: 'badge_013',
    name: 'Leadership Pro',
    description: 'Complete all Niyum Saba programs',
    icon: '💫',
    unlockCondition: 'complete_all_niyum',
    rarity: 'epic'
  },
  {
    id: 'badge_014',
    name: 'Master of All',
    description: 'Complete every single program',
    icon: '🌟',
    unlockCondition: 'complete_all_programs',
    rarity: 'legendary'
  },
  {
    id: 'badge_015',
    name: 'Early Bird',
    description: 'Complete 5 lessons before 9 AM',
    icon: '🌅',
    unlockCondition: 'early_bird_5',
    rarity: 'rare'
  },
  {
    id: 'badge_016',
    name: 'Weekend Warrior',
    description: 'Learn for 3 weekends in a row',
    icon: '🎯',
    unlockCondition: 'weekend_3',
    rarity: 'rare'
  }
];
