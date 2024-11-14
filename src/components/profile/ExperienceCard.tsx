import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'Senior ML Research Scientist',
    organization: 'Google AI',
    period: '2021 - Present',
    location: 'Mountain View, CA',
    description: 'Leading computer vision research team, focusing on autonomous systems and real-time object detection.',
  },
  {
    type: 'education',
    role: 'Ph.D. in Computer Science',
    organization: 'Stanford University',
    period: '2016 - 2021',
    location: 'Stanford, CA',
    description: 'Research focus on deep learning architectures and computer vision. Published 8 papers in top-tier conferences.',
  },
];

export default function ExperienceCard() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-purple-900/30 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <div className="flex items-center text-purple-200">
                <Building2 className="h-4 w-4 mr-1" />
                {exp.organization}
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-purple-200 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {exp.period}
              </div>
              <div className="text-sm text-purple-300">{exp.location}</div>
            </div>
          </div>
          <p className="text-purple-200 text-sm">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}