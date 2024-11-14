import React from 'react';
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { department: 'ML/AI', current: 45, target: 60 },
  { department: 'Data Science', current: 35, target: 45 },
  { department: 'MLOps', current: 25, target: 35 },
  { department: 'Research', current: 20, target: 30 },
  { department: 'Cloud', current: 30, target: 40 },
];

export default function BarChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="department" 
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
          <Bar dataKey="current" fill="#10b981" />
          <Bar dataKey="target" fill="rgba(16, 185, 129, 0.2)" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}