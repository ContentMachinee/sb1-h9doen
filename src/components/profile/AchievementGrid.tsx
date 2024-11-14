import React from 'react';
import { Award, Star, Trophy, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Paper Award',
    subtitle: 'ICML 2023',
  },
  {
    icon: Star,
    title: 'Top Contributor',
    subtitle: 'PyTorch',
  },
  {
    icon: BookOpen,
    title: '15+ Publications',
    subtitle: 'ML/AI Research',
  },
  {
    icon: Award,
    title: '3 Patents',
    subtitle: 'AI Systems',
  },
];

export default function AchievementGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-purple-900/30 p-3 rounded-lg flex flex-col items-center text-center"
        >
          <achievement.icon className="h-6 w-6 text-yellow-400 mb-2" />
          <div className="text-sm font-medium text-white">{achievement.title}</div>
          <div className="text-xs text-purple-200">{achievement.subtitle}</div>
        </div>
      ))}
    </div>
  );
}