import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const assessmentData = [
  { category: 'Technical Skills', value: 95 },
  { category: 'Problem Solving', value: 90 },
  { category: 'Communication', value: 85 },
  { category: 'Leadership', value: 88 },
  { category: 'Innovation', value: 92 },
  { category: 'Collaboration', value: 87 },
];

export default function AssessmentRadar() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={assessmentData}>
          <PolarGrid stroke="rgba(148, 163, 184, 0.2)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#e2e8f0', fontSize: 10 }}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}