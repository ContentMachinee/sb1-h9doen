import React from 'react';
import { JobPosting } from '../types';
import { MapPin, Building2, Clock } from 'lucide-react';

const jobs: JobPosting[] = [
  {
    id: '1',
    title: 'Senior Machine Learning Engineer',
    company: 'TechCorp AI',
    location: 'San Francisco, CA',
    type: 'Full-time',
    match: 95,
    salary: '$150k - $200k',
    skills: ['PyTorch', 'MLOps', 'Python', 'Deep Learning'],
  },
  {
    id: '2',
    title: 'AI Research Scientist',
    company: 'DataMind Labs',
    location: 'Remote',
    type: 'Full-time',
    match: 88,
    salary: '$140k - $180k',
    skills: ['TensorFlow', 'NLP', 'Research', 'Publications'],
  },
];

export default function JobList() {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="glass-card rounded-lg p-6 hover:glow transition-all">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-white">{job.title}</h3>
              <div className="mt-1 flex items-center text-sm text-purple-200">
                <Building2 className="h-4 w-4 mr-1" />
                {job.company}
                <span className="mx-2">•</span>
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                {job.type}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200">
                {job.match}% Match
              </span>
              <span className="mt-1 text-sm text-purple-300">{job.salary}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}