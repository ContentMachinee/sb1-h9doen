import React from 'react';
import { BarChart3, Users, Briefcase, TrendingUp } from 'lucide-react';
import MetricCard from './MetricCard';
import SkillsChart from './SkillsChart';
import TrendChart from './TrendChart';
import BarChart from './BarChart';
import MarketInsights from './MarketInsights';

const metrics = [
  {
    title: 'Total Candidates',
    value: '2,847',
    change: 12.5,
    icon: Users,
  },
  {
    title: 'Open Positions',
    value: '186',
    change: 8.2,
    icon: Briefcase,
  },
  {
    title: 'Placement Rate',
    value: '92%',
    change: 5.1,
    icon: TrendingUp,
  },
  {
    title: 'Market Growth',
    value: '24%',
    change: 15.3,
    icon: BarChart3,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Metrics Row */}
          {metrics.map((metric) => (
            <div key={metric.title} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <MetricCard {...metric} />
            </div>
          ))}

          {/* Main Charts */}
          <div className="col-span-12 lg:col-span-8">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-emerald-400">Talent Acquisition Trends</h2>
              <TrendChart />
            </div>
          </div>

          {/* Skills Distribution */}
          <div className="col-span-12 lg:col-span-4">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-emerald-400">Skills Distribution</h2>
              <SkillsChart />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="col-span-12 lg:col-span-6">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-emerald-400">Hiring by Department</h2>
              <BarChart />
            </div>
          </div>

          {/* Market Insights */}
          <div className="col-span-12 lg:col-span-6">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4 text-emerald-400">Market Insights</h2>
              <MarketInsights />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}