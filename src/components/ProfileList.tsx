import React from 'react';
import { Profile } from '../types';

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior ML Engineer',
    experience: 6,
    match: 95,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    skills: [
      { name: 'PyTorch', level: 90, category: 'technical' },
      { name: 'MLOps', level: 85, category: 'technical' },
      { name: 'Leadership', level: 88, category: 'soft' },
    ],
  },
  {
    id: '2',
    name: 'Alex Kumar',
    role: 'AI Research Scientist',
    experience: 8,
    match: 92,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    skills: [
      { name: 'TensorFlow', level: 95, category: 'technical' },
      { name: 'NLP', level: 90, category: 'domain' },
      { name: 'Problem Solving', level: 92, category: 'soft' },
    ],
  },
];

export default function ProfileList() {
  return (
    <div className="space-y-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="glass-card p-4 rounded-lg hover:glow transition-all">
          <div className="flex items-center">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-white">{profile.name}</h3>
              <p className="text-sm text-purple-200">{profile.role}</p>
              <div className="mt-1 flex items-center">
                <div className="text-xs text-purple-300">
                  {profile.experience} years exp.
                </div>
                <span className="mx-2 text-purple-400">•</span>
                <div className="text-xs font-medium text-purple-400">
                  {profile.match}% match
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}