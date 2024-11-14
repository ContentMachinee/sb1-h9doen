import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', candidates: 150, placements: 45, interviews: 95 },
  { month: 'Feb', candidates: 180, placements: 52, interviews: 120 },
  { month: 'Mar', candidates: 210, placements: 65, interviews: 140 },
  { month: 'Apr', candidates: 250, placements: 78, interviews: 170 },
  { month: 'May', candidates: 290, placements: 85, interviews: 200 },
  { month: 'Jun', candidates: 320, placements: 92, interviews: 230 },
];

export default function TrendChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8' }}
          />
          <YAxis 
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(17, 24, 39, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              color: '#fff'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="candidates" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: '#10b981' }}
          />
          <Line 
            type="monotone" 
            dataKey="placements" 
            stroke="#60a5fa" 
            strokeWidth={2}
            dot={{ fill: '#60a5fa' }}
          />
          <Line 
            type="monotone" 
            dataKey="interviews" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            dot={{ fill: '#8b5cf6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}