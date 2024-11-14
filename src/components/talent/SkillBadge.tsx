import React from 'react';
import { Brain } from 'lucide-react';

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-200 hover:bg-purple-900/50 hover:text-white transition-all cursor-pointer group">
      <Brain className="h-3 w-3 mr-1 text-purple-400 group-hover:text-white transition-colors" />
      {skill}
    </div>
  );
}