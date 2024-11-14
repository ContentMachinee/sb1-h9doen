export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'domain' | 'soft';
}

export interface Profile {
  id: string;
  name: string;
  role: string;
  experience: number;
  skills: Skill[];
  avatar: string;
  match: number;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  match: number;
  salary: string;
  skills: string[];
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}