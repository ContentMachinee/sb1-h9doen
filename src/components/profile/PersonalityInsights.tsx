import React from 'react';

const traits = [
  { name: 'Openness', score: 85, color: 'bg-blue-500' },
  { name: 'Conscientiousness', score: 90, color: 'bg-purple-500' },
  { name: 'Extraversion', score: 75, color: 'bg-emerald-500' },
  { name: 'Agreeableness', score: 88, color: 'bg-yellow-500' },
  { name: 'Emotional Stability', score: 82, color: 'bg-rose-500' },
];

export default function PersonalityInsights() {
  return (
    <div className="space-y-4">
      {traits.map((trait) => (
        <div key={trait.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-purple-200">{trait.name}</span>
            <span className="text-white font-medium">{trait.score}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${trait.color} rounded-full transition-all`}
              style={{ width: `${trait.score}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}