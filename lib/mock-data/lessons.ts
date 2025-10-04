export interface Resource {
  name: string;
  url: string;
  type: 'pdf' | 'doc' | 'link';
}

export interface Exercise {
  id: string;
  question: string;
  type: 'multiple-choice' | 'text';
  options?: string[];
  correctAnswer: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  programId: string;
  lessonNumber: number;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  resources: Resource[];
  exercises?: Exercise[];
}

export const MOCK_LESSONS: Lesson[] = [
  {
    id: 'lesson_001',
    programId: 'prog_001',
    lessonNumber: 1,
    title: 'Introduction to Music Theory',
    description: 'Learn the basics of rhythm, melody, and musical notation',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 15,
    resources: [
      { name: 'Music Theory Basics', url: '#', type: 'pdf' },
      { name: 'Notation Guide', url: '#', type: 'pdf' }
    ],
    exercises: [
      {
        id: 'ex_001',
        question: 'What are the three main elements of music?',
        type: 'multiple-choice',
        options: ['Rhythm, Melody, Harmony', 'Fast, Slow, Medium', 'Piano, Guitar, Drums', 'High, Low, Middle'],
        correctAnswer: 'Rhythm, Melody, Harmony',
        hint: 'Think about the fundamental building blocks'
      }
    ]
  },
  {
    id: 'lesson_002',
    programId: 'prog_001',
    lessonNumber: 2,
    title: 'Understanding Rhythm',
    description: 'Explore beats, tempo, and rhythmic patterns',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 20,
    resources: [
      { name: 'Rhythm Exercises', url: '#', type: 'pdf' }
    ]
  },
  {
    id: 'lesson_003',
    programId: 'prog_001',
    lessonNumber: 3,
    title: 'Melody and Pitch',
    description: 'Learn about scales, intervals, and melodic composition',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 18,
    resources: [
      { name: 'Scale Reference', url: '#', type: 'pdf' }
    ]
  },
  {
    id: 'lesson_004',
    programId: 'prog_001',
    lessonNumber: 4,
    title: 'Harmony Basics',
    description: 'Introduction to chords and harmonic progressions',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 22,
    resources: [
      { name: 'Chord Charts', url: '#', type: 'pdf' }
    ]
  },
  {
    id: 'lesson_005',
    programId: 'prog_001',
    lessonNumber: 5,
    title: 'Reading Music',
    description: 'Master the art of reading musical notation',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 25,
    resources: [
      { name: 'Reading Practice Sheets', url: '#', type: 'pdf' }
    ]
  },
  {
    id: 'lesson_006',
    programId: 'prog_001',
    lessonNumber: 6,
    title: 'Musical Expression',
    description: 'Explore dynamics, tempo changes, and emotional expression',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 20,
    resources: []
  },
  {
    id: 'lesson_007',
    programId: 'prog_001',
    lessonNumber: 7,
    title: 'Composing Your First Piece',
    description: 'Apply what you have learned to create original music',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 30,
    resources: [
      { name: 'Composition Template', url: '#', type: 'doc' }
    ]
  },
  {
    id: 'lesson_008',
    programId: 'prog_001',
    lessonNumber: 8,
    title: 'Performance & Presentation',
    description: 'Learn to perform and share your musical creations',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 20,
    resources: []
  },
  {
    id: 'lesson_009',
    programId: 'prog_004',
    lessonNumber: 1,
    title: 'What is Entrepreneurship?',
    description: 'Introduction to business thinking and innovation',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 15,
    resources: [
      { name: 'Entrepreneur Mindset Guide', url: '#', type: 'pdf' }
    ]
  },
  {
    id: 'lesson_010',
    programId: 'prog_004',
    lessonNumber: 2,
    title: 'Identifying Opportunities',
    description: 'Learn to spot problems and create solutions',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 18,
    resources: []
  },
  {
    id: 'lesson_011',
    programId: 'prog_004',
    lessonNumber: 3,
    title: 'Business Planning Basics',
    description: 'Create your first business plan',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 25,
    resources: [
      { name: 'Business Plan Template', url: '#', type: 'doc' }
    ]
  },
  {
    id: 'lesson_012',
    programId: 'prog_004',
    lessonNumber: 4,
    title: 'Understanding Your Customer',
    description: 'Market research and customer personas',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 20,
    resources: []
  },
  {
    id: 'lesson_013',
    programId: 'prog_004',
    lessonNumber: 5,
    title: 'Financial Basics',
    description: 'Revenue, costs, and profit explained',
    videoUrl: 'https://www.youtube.com/embed/rgaTLrZGlk0',
    duration: 22,
    resources: [
      { name: 'Financial Worksheet', url: '#', type: 'pdf' }
    ]
  }
];
