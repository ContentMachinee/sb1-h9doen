export type RoleCategory = 'ML Engineer' | 'Data Scientist' | 'AI Researcher' | 'MLOps Engineer';

export const categories: RoleCategory[] = ['ML Engineer', 'Data Scientist', 'AI Researcher', 'MLOps Engineer'];
export const experienceLevels = ['Junior', 'Mid-Level', 'Senior', 'Lead'];

export interface Role {
  id: string;
  title: string;
  category: RoleCategory;
  level: string;
  experience: string;
  skills: string[];
  responsibilities: string[];
  impact: string;
  salaryRange: string;
  marketDemand: string;
}

export const roles: Role[] = [
  {
    id: '1',
    title: 'Senior Machine Learning Engineer',
    category: 'ML Engineer',
    level: 'Senior',
    experience: '5+ years experience',
    skills: ['PyTorch', 'TensorFlow', 'Python', 'Deep Learning', 'MLOps', 'Computer Vision'],
    responsibilities: [
      'Design and implement ML models',
      'Optimize model performance',
      'Lead ML initiatives',
      'Mentor junior engineers'
    ],
    impact: 'Drive innovation in computer vision and NLP applications, delivering solutions that scale to millions of users',
    salaryRange: '$150,000 - $220,000',
    marketDemand: 'Very High'
  },
  {
    id: '2',
    title: 'Lead Data Scientist',
    category: 'Data Scientist',
    level: 'Lead',
    experience: '8+ years experience',
    skills: ['Statistical Analysis', 'Python', 'R', 'SQL', 'Machine Learning', 'Leadership'],
    responsibilities: [
      'Lead data science initiatives',
      'Develop predictive models',
      'Define data strategy',
      'Team management'
    ],
    impact: 'Transform business decision-making through data-driven insights and predictive analytics',
    salaryRange: '$160,000 - $240,000',
    marketDemand: 'High'
  },
  {
    id: '3',
    title: 'AI Research Scientist',
    category: 'AI Researcher',
    level: 'Senior',
    experience: '6+ years experience',
    skills: ['Deep Learning', 'NLP', 'Research', 'PyTorch', 'Publications', 'Mathematics'],
    responsibilities: [
      'Conduct AI research',
      'Publish papers',
      'Develop novel algorithms',
      'Research prototypes'
    ],
    impact: 'Advance the field of AI through groundbreaking research and publications',
    salaryRange: '$140,000 - $200,000',
    marketDemand: 'High'
  },
  {
    id: '4',
    title: 'MLOps Engineer',
    category: 'MLOps Engineer',
    level: 'Mid-Level',
    experience: '3+ years experience',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Python', 'ML Pipeline', 'Cloud Platforms'],
    responsibilities: [
      'Build ML pipelines',
      'Implement CI/CD',
      'Monitor ML systems',
      'Optimize infrastructure'
    ],
    impact: 'Enable seamless deployment and scaling of ML models in production environments',
    salaryRange: '$120,000 - $180,000',
    marketDemand: 'Very High'
  },
  {
    id: '5',
    title: 'Junior Machine Learning Engineer',
    category: 'ML Engineer',
    level: 'Junior',
    experience: '1-2 years experience',
    skills: ['Python', 'TensorFlow', 'SQL', 'Data Processing', 'Basic ML'],
    responsibilities: [
      'Implement ML models',
      'Data preprocessing',
      'Model training',
      'Documentation'
    ],
    impact: 'Support ML initiatives and gain hands-on experience in production ML systems',
    salaryRange: '$80,000 - $120,000',
    marketDemand: 'High'
  },
  {
    id: '6',
    title: 'Senior AI Researcher',
    category: 'AI Researcher',
    level: 'Senior',
    experience: '7+ years experience',
    skills: ['Reinforcement Learning', 'GANs', 'Research', 'PyTorch', 'Publications'],
    responsibilities: [
      'Lead research projects',
      'Develop novel AI methods',
      'Publish research',
      'Collaborate with teams'
    ],
    impact: 'Pioneer new AI techniques and contribute to the academic community',
    salaryRange: '$150,000 - $220,000',
    marketDemand: 'High'
  }
];