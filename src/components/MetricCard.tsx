import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
}

export default function MetricCard({ title, value, change, icon: Icon }: MetricCardProps) {
  return (
    <div className="glass-card rounded-xl p-6 transition-all hover:glow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-purple-200">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="p-3 bg-purple-900/50 rounded-full">
          <Icon className="h-6 w-6 text-purple-300" />
        </div>
      </div>
      <div className="mt-4">
        <div className={`flex items-center text-sm ${
          change >= 0 ? 'text-emerald-400' : 'text-rose-400'
        }`}>
          <span className="font-medium">
            {change >= 0 ? '+' : ''}{change}%
          </span>
          <span className="ml-2 text-purple-200">vs last month</span>
        </div>
      </div>
    </div>
  );
}