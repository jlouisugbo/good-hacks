export interface UserProgress {
  userId: string;
  programId: string;
  lessonsCompleted: number[];
  currentLesson: number;
  enrolledDate: string;
  lastAccessed: string;
  completionPercentage: number;
}

export const MOCK_USER_PROGRESS: UserProgress[] = [
  {
    userId: 'user_001',
    programId: 'prog_001',
    lessonsCompleted: [1, 2, 3, 4, 5, 6, 7, 8],
    currentLesson: 8,
    enrolledDate: '2024-09-20',
    lastAccessed: '2025-10-01',
    completionPercentage: 100
  },
  {
    userId: 'user_001',
    programId: 'prog_002',
    lessonsCompleted: [1, 2],
    currentLesson: 3,
    enrolledDate: '2025-10-01',
    lastAccessed: '2025-10-02',
    completionPercentage: 25
  },
  {
    userId: 'user_002',
    programId: 'prog_004',
    lessonsCompleted: [1, 2, 3, 4, 5],
    currentLesson: 5,
    enrolledDate: '2024-08-25',
    lastAccessed: '2025-10-02',
    completionPercentage: 100
  },
  {
    userId: 'user_003',
    programId: 'prog_006',
    lessonsCompleted: [1, 2, 3],
    currentLesson: 4,
    enrolledDate: '2025-10-02',
    lastAccessed: '2025-10-03',
    completionPercentage: 50
  },
  {
    userId: 'user_004',
    programId: 'prog_007',
    lessonsCompleted: [1, 2, 3, 4, 5],
    currentLesson: 6,
    enrolledDate: '2024-09-01',
    lastAccessed: '2025-10-01',
    completionPercentage: 75
  }
];

export const saveProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') return;

  try {
    const existingProgress = getProgress(progress.userId, progress.programId);
    const allProgress = getAllProgress();

    if (existingProgress) {
      const index = allProgress.findIndex(
        p => p.userId === progress.userId && p.programId === progress.programId
      );
      allProgress[index] = progress;
    } else {
      allProgress.push(progress);
    }

    localStorage.setItem('iga_user_progress', JSON.stringify(allProgress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getProgress = (userId: string, programId: string): UserProgress | null => {
  if (typeof window === 'undefined') return null;

  try {
    const allProgress = getAllProgress();
    const userProgress = allProgress.find(
      p => p.userId === userId && p.programId === programId
    );

    return userProgress || null;
  } catch (error) {
    console.error('Error getting progress:', error);
    return null;
  }
};

export const getAllProgress = (): UserProgress[] => {
  if (typeof window === 'undefined') return MOCK_USER_PROGRESS;

  try {
    const stored = localStorage.getItem('iga_user_progress');
    if (stored) {
      return JSON.parse(stored);
    }

    localStorage.setItem('iga_user_progress', JSON.stringify(MOCK_USER_PROGRESS));
    return MOCK_USER_PROGRESS;
  } catch (error) {
    console.error('Error getting all progress:', error);
    return MOCK_USER_PROGRESS;
  }
};

export const getUserProgress = (userId: string): UserProgress[] => {
  const allProgress = getAllProgress();
  return allProgress.filter(p => p.userId === userId);
};

export const enrollInProgram = (userId: string, programId: string): void => {
  const existingProgress = getProgress(userId, programId);

  if (!existingProgress) {
    const newProgress: UserProgress = {
      userId,
      programId,
      lessonsCompleted: [],
      currentLesson: 1,
      enrolledDate: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      completionPercentage: 0
    };

    saveProgress(newProgress);
  }
};
