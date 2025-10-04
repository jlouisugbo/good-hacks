export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  type: 'workshop' | 'conference' | 'webinar';
  registrationRequired: boolean;
  maxParticipants?: number;
}

export const MOCK_EVENTS: Event[] = [
  {
    id: 'event_001',
    title: 'Women in Tech Panel',
    description: 'Join successful women entrepreneurs as they share their journey in the tech industry',
    date: '2025-10-15',
    time: '18:00',
    duration: 90,
    type: 'webinar',
    registrationRequired: true,
    maxParticipants: 100
  },
  {
    id: 'event_002',
    title: 'Music Production Workshop',
    description: 'Hands-on workshop learning digital audio production techniques',
    date: '2025-10-20',
    time: '14:00',
    duration: 120,
    type: 'workshop',
    registrationRequired: true,
    maxParticipants: 30
  },
  {
    id: 'event_003',
    title: 'Leadership Conference 2025',
    description: 'Annual gathering of young women leaders from around the world',
    date: '2025-11-05',
    time: '09:00',
    duration: 480,
    type: 'conference',
    registrationRequired: true,
    maxParticipants: 200
  },
  {
    id: 'event_004',
    title: 'Financial Planning for Teens',
    description: 'Learn essential budgeting and saving skills for your future',
    date: '2025-10-25',
    time: '16:00',
    duration: 60,
    type: 'webinar',
    registrationRequired: false
  },
  {
    id: 'event_005',
    title: 'Songwriting Circle',
    description: 'Collaborative songwriting session with professional mentors',
    date: '2025-10-18',
    time: '17:00',
    duration: 90,
    type: 'workshop',
    registrationRequired: true,
    maxParticipants: 20
  },
  {
    id: 'event_006',
    title: 'Entrepreneurship Bootcamp',
    description: 'Intensive 2-day program on starting your own business',
    date: '2025-11-10',
    time: '10:00',
    duration: 960,
    type: 'workshop',
    registrationRequired: true,
    maxParticipants: 50
  },
  {
    id: 'event_007',
    title: 'Public Speaking Masterclass',
    description: 'Build confidence and learn techniques from professional speakers',
    date: '2025-10-28',
    time: '15:00',
    duration: 120,
    type: 'workshop',
    registrationRequired: true,
    maxParticipants: 40
  },
  {
    id: 'event_008',
    title: 'Social Media Marketing Trends',
    description: 'Stay ahead with the latest digital marketing strategies',
    date: '2025-11-02',
    time: '19:00',
    duration: 75,
    type: 'webinar',
    registrationRequired: false
  },
  {
    id: 'event_009',
    title: 'Community Impact Projects Showcase',
    description: 'See how students are making a difference in their communities',
    date: '2025-11-08',
    time: '18:30',
    duration: 90,
    type: 'webinar',
    registrationRequired: false
  },
  {
    id: 'event_010',
    title: 'Music Theory Deep Dive',
    description: 'Advanced session on harmony, composition, and arrangement',
    date: '2025-10-30',
    time: '16:00',
    duration: 120,
    type: 'workshop',
    registrationRequired: true,
    maxParticipants: 25
  }
];
