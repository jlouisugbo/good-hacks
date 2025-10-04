export interface Scholarship {
  id: string;
  name: string;
  amount: string;
  deadline: string;
  description: string;
  eligibility: string;
  applicationUrl: string;
}

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'scholarship_001',
    name: 'IGA Leadership Excellence Award',
    amount: '$5,000',
    deadline: '2025-11-30',
    description: 'Awarded to students who demonstrate exceptional leadership in their communities',
    eligibility: 'Ages 15-18, completed at least 2 IGA programs',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_002',
    name: 'Music Innovation Grant',
    amount: '$3,000',
    deadline: '2025-10-31',
    description: 'Support for students pursuing music education and creative projects',
    eligibility: 'Completed Music Week program, portfolio submission required',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_003',
    name: 'Young Entrepreneur Fund',
    amount: '$2,500',
    deadline: '2025-12-15',
    description: 'Seed funding for student-led business ventures',
    eligibility: 'Business plan required, ages 14-18',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_004',
    name: 'STEM Sisters Scholarship',
    amount: '$4,000',
    deadline: '2025-11-15',
    description: 'Supporting young women pursuing science and technology',
    eligibility: 'GPA 3.0+, STEM focus, essay required',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_005',
    name: 'Community Builder Award',
    amount: '$2,000',
    deadline: '2025-10-20',
    description: 'Recognizing students making positive change in their communities',
    eligibility: 'Completed Community Building program, project proposal required',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_006',
    name: 'Arts & Culture Grant',
    amount: '$3,500',
    deadline: '2025-12-01',
    description: 'Supporting creative expression through various art forms',
    eligibility: 'Portfolio submission, ages 13-18',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_007',
    name: 'Financial Literacy Champions',
    amount: '$1,500',
    deadline: '2025-11-10',
    description: 'For students committed to spreading financial education',
    eligibility: 'Completed Financial Literacy program, community workshop plan required',
    applicationUrl: '#'
  },
  {
    id: 'scholarship_008',
    name: 'Global Leadership Fellowship',
    amount: '$7,500',
    deadline: '2025-12-31',
    description: 'Prestigious award for exceptional young leaders with global impact',
    eligibility: 'Ages 16-18, multiple programs completed, leadership experience',
    applicationUrl: '#'
  }
];
