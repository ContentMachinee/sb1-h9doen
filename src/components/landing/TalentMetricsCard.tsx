import React from 'react';
import { Users, Clock, TrendingUp } from 'lucide-react';

interface TalentMetricsCardProps {
  activeTab: string;
}

const metrics = {
  startup: {
    talent: '1,000+',
    time: '48 hours',
    savings: '40%'
  },
  scaleup: {
    talent: '5,000+',
    time: '24 hours',
    savings: '60%'
  },
  enterprise: {
    talent: '10,000+',
    time: '12 hours',
    savings: '75%'
  }
};

export default function TalentMetricsCard({ activeTab }: TalentMetricsCardProps) {
  const currentMetrics = metrics[activeTab as keyof typeof metrics];

  return (
    <>
      <div className="glass-card p-6 rounded-xl hover:glow transition-all">
        <Users className="h-8 w-8 text-purple-400 mb-4" />
        <div className="text-2xl font-bold text-white mb-2">{currentMetrics.talent}</div>
        <div className="text-purple-200">Pre-vetted AI talent</div>
      </div>

      <div className="glass-card p-6 rounded-xl hover:glow transition-all">
        <Clock className="h-8 w-8 text-purple-400 mb-4" />
        <div className="text-2xl font-bold text-white mb-2">{currentMetrics.time}</div>
        <div className="text-purple-200">Average time to hire</div>
      </div>

      <div className="glass-card p-6 rounded-xl hover:glow transition-all">
        <TrendingUp className="h-8 w-8 text-purple-400 mb-4" />
        <div className="text-2xl font-bold text-white mb-2">{currentMetrics.savings}</div>
        <div className="text-purple-200">Cost savings</div>
      </div>
    </>
  );
}