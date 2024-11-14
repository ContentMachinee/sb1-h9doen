import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', marketDemand: 80, salaryIndex: 85, competition: 70 },
  { month: 'Feb', marketDemand: 85, salaryIndex: 88, competition: 75 },
  { month: 'Mar', marketDemand: 90, salaryIndex: 90, competition: 80 },
  { month: 'Apr', marketDemand: 95, salaryIndex: 92, competition: 85 },
  { month: 'May', marketDemand: 100, salaryIndex: 95, competition: 90 },
  { month: 'Jun', marketDemand: 105, salaryIndex: 98, competition: 95 },
];

export default function MarketInsights() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
          <Area 
            type="monotone" 
            dataKey="marketDemand" 
            stackId="1"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.3}
          />
          <Area 
            type="monotone" 
            dataKey="salaryIndex" 
            stackId="2"
            stroke="#60a5fa"
            fill="#60a5fa"
            fillOpacity={0.3}
          />
          <Area 
            type="monotone" 
            dataKey="competition" 
            stackId="3"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}