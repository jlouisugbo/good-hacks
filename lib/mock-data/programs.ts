export interface Program {
  id: string;
  title: string;
  description: string;
  category: 'music' | 'business' | 'niyum-saba';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  totalLessons: number;
  thumbnail: string;
  estimatedHours: number;
}

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'prog_001',
    title: 'Music Week Foundations',
    description: 'Learn rhythm, melody, and creative expression through music theory and practice',
    category: 'music',
    difficulty: 'beginner',
    totalLessons: 8,
    thumbnail: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 6
  },
  {
    id: 'prog_002',
    title: 'Advanced Music Production',
    description: 'Master digital audio workstations and music composition techniques',
    category: 'music',
    difficulty: 'advanced',
    totalLessons: 12,
    thumbnail: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 10
  },
  {
    id: 'prog_003',
    title: 'Songwriting & Lyrics',
    description: 'Craft compelling lyrics and melodies that tell your story',
    category: 'music',
    difficulty: 'intermediate',
    totalLessons: 10,
    thumbnail: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 8
  },
  {
    id: 'prog_004',
    title: 'Business Fundamentals',
    description: 'Introduction to entrepreneurship, finance, and business strategy',
    category: 'business',
    difficulty: 'beginner',
    totalLessons: 10,
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 8
  },
  {
    id: 'prog_005',
    title: 'Marketing & Social Media',
    description: 'Build your brand and reach customers through digital marketing',
    category: 'business',
    difficulty: 'intermediate',
    totalLessons: 9,
    thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 7
  },
  {
    id: 'prog_006',
    title: 'Financial Literacy',
    description: 'Master budgeting, investing, and financial planning for your future',
    category: 'business',
    difficulty: 'beginner',
    totalLessons: 8,
    thumbnail: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 6
  },
  {
    id: 'prog_007',
    title: 'Leadership & Public Speaking',
    description: 'Develop confidence and skills to lead and inspire others',
    category: 'niyum-saba',
    difficulty: 'intermediate',
    totalLessons: 10,
    thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 8
  },
  {
    id: 'prog_008',
    title: 'Community Building',
    description: 'Learn to organize events and create positive change in your community',
    category: 'niyum-saba',
    difficulty: 'beginner',
    totalLessons: 8,
    thumbnail: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 6
  },
  {
    id: 'prog_009',
    title: 'Personal Development',
    description: 'Build self-confidence, goal-setting skills, and emotional intelligence',
    category: 'niyum-saba',
    difficulty: 'beginner',
    totalLessons: 10,
    thumbnail: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    estimatedHours: 8
  }
];
