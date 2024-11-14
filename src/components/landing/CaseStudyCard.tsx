import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CaseStudyCardProps {
  company: string;
  logo: LucideIcon;
  metric: string;
  description: string;
  quote: string;
}

export default function CaseStudyCard({ company, logo: Logo, metric, description, quote }: CaseStudyCardProps) {
  return (
    <div className="glass-card p-6 rounded-xl hover:glow transition-all">
      <div className="flex items-center mb-6">
        <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center">
          <Logo className="h-6 w-6 text-purple-400" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-white">{company}</h3>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-3xl font-bold text-emerald-400">{metric}</div>
        <div className="text-sm text-purple-200">{description}</div>
      </div>
      <blockquote className="text-purple-200 italic">"{quote}"</blockquote>
    </div>
  );
}