export interface LeadershipOpportunity {
  id: string;
  title: string;
  description: string;
  timeCommitment: string;
  duration: string;
  requirements: string[];
  applicationDeadline: string;
}

export const MOCK_LEADERSHIP: LeadershipOpportunity[] = [
  {
    id: 'leadership_001',
    title: 'Student Ambassador',
    description: 'Represent IGA at events and help onboard new students',
    timeCommitment: '3-5 hours/week',
    duration: '6 months',
    requirements: [
      'Completed at least 2 programs',
      'Strong communication skills',
      'Active community participant'
    ],
    applicationDeadline: '2025-10-25'
  },
  {
    id: 'leadership_002',
    title: 'Peer Mentor',
    description: 'Guide and support newer students through their learning journey',
    timeCommitment: '2-4 hours/week',
    duration: '3 months',
    requirements: [
      'Completed at least 1 program',
      'Empathetic and patient',
      'Regular platform activity'
    ],
    applicationDeadline: '2025-11-01'
  },
  {
    id: 'leadership_003',
    title: 'Community Moderator',
    description: 'Help maintain a positive and supportive community environment',
    timeCommitment: '5-7 hours/week',
    duration: '12 months',
    requirements: [
      'Ages 16-18',
      'Excellent judgment',
      '6+ months active membership',
      'Conflict resolution skills'
    ],
    applicationDeadline: '2025-10-20'
  },
  {
    id: 'leadership_004',
    title: 'Workshop Co-facilitator',
    description: 'Assist in leading workshops and learning sessions',
    timeCommitment: '4-6 hours/week',
    duration: '4 months',
    requirements: [
      'Completed relevant program',
      'Public speaking experience',
      'Recommended by instructor'
    ],
    applicationDeadline: '2025-11-15'
  },
  {
    id: 'leadership_005',
    title: 'Content Creator',
    description: 'Produce educational content and tutorials for fellow students',
    timeCommitment: '3-5 hours/week',
    duration: '6 months',
    requirements: [
      'Strong writing or video skills',
      'Subject matter expertise',
      'Portfolio submission required'
    ],
    applicationDeadline: '2025-10-30'
  },
  {
    id: 'leadership_006',
    title: 'Event Coordinator',
    description: 'Help plan and execute virtual and in-person IGA events',
    timeCommitment: '5-8 hours/week',
    duration: '12 months',
    requirements: [
      'Organizational skills',
      'Ages 15-18',
      'Event planning experience preferred',
      'Team player'
    ],
    applicationDeadline: '2025-11-05'
  }
];
