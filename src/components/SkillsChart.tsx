import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const data = [
  { skill: 'Machine Learning', value: 85 },
  { skill: 'Deep Learning', value: 75 },
  { skill: 'Python', value: 90 },
  { skill: 'Data Science', value: 80 },
  { skill: 'MLOps', value: 70 },
  { skill: 'Cloud', value: 85 },
];

export default function SkillsChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(148, 163, 184, 0.2)" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#e2e8f0', fontSize: 12 }}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}