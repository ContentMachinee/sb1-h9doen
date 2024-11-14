import React from 'react';
import { Role } from './talentData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface SkillsDistributionProps {
  roles: Role[];
}

export default function SkillsDistribution({ roles }: SkillsDistributionProps) {
  // Calculate skill distribution
  const skillCounts: { [key: string]: number } = {};
  roles.forEach(role => {
    role.skills.forEach(skill => {
      skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
  });

  const data = Object.entries(skillCounts)
    .map(([skill, count]) => ({
      skill,
      count,
      percentage: Math.round((count / roles.length) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 8);

  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-lg font-semibold text-white mb-4">Skills Distribution</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#94a3b8' }} />
            <YAxis
              dataKey="skill"
              type="category"
              tick={{ fill: '#94a3b8' }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                color: '#fff'
              }}
              formatter={(value: number) => [`${value}%`, 'Demand']}
            />
            <Bar
              dataKey="percentage"
              fill="#8b5cf6"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}