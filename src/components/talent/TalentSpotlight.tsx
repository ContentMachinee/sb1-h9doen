import React from 'react';
import { Star, Award, TrendingUp } from 'lucide-react';

export default function TalentSpotlight() {
  const spotlightTalent = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Senior ML Research Scientist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      achievements: ['Published in Nature', 'Ex-Google AI'],
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Lead AI Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      achievements: ['Scaled AI Platform', '10x Performance'],
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Emily Wong',
      role: 'MLOps Architect',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      achievements: ['AWS ML Hero', 'Tech Speaker'],
      rating: 4.9,
    }
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Award className="h-6 w-6 text-yellow-400 mr-2" />
          Featured Talent
        </h2>
        <TrendingUp className="h-5 w-5 text-emerald-400" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {spotlightTalent.map((talent) => (
          <div key={talent.id} className="bg-purple-900/30 rounded-lg p-4 hover:glow transition-all">
            <div className="flex items-center mb-4">
              <img
                src={talent.image}
                alt={talent.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div className="ml-3">
                <h3 className="text-white font-medium">{talent.name}</h3>
                <p className="text-sm text-purple-200">{talent.role}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {talent.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-purple-200"
                >
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  {achievement}
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-sm text-purple-200">{talent.rating}</span>
              </div>
              <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}