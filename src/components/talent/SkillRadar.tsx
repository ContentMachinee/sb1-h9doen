import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

interface SkillRadarProps {
  skills: string[];
}

export default function SkillRadar({ skills }: SkillRadarProps) {
  // Convert skills array to radar data with random scores between 70-100
  const data = skills.map(skill => ({
    skill,
    score: Math.floor(Math.random() * (100 - 70) + 70)
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>
        <PolarGrid stroke="rgba(148, 163, 184, 0.2)" />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fill: '#e2e8f0', fontSize: 10 }}
        />
        <Radar
          name="Skills"
          dataKey="score"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}