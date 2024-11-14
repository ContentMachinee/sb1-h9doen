import React from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

const skills = [
  {
    name: 'Machine Learning',
    children: [
      { name: 'Deep Learning', size: 90, level: 'Expert' },
      { name: 'Computer Vision', size: 85, level: 'Expert' },
      { name: 'NLP', size: 80, level: 'Advanced' },
      { name: 'Reinforcement Learning', size: 75, level: 'Advanced' },
    ],
  },
  {
    name: 'Programming',
    children: [
      { name: 'Python', size: 95, level: 'Expert' },
      { name: 'PyTorch', size: 90, level: 'Expert' },
      { name: 'TensorFlow', size: 85, level: 'Expert' },
      { name: 'SQL', size: 80, level: 'Advanced' },
    ],
  },
  {
    name: 'Infrastructure',
    children: [
      { name: 'Docker', size: 85, level: 'Expert' },
      { name: 'Kubernetes', size: 80, level: 'Advanced' },
      { name: 'AWS', size: 85, level: 'Expert' },
      { name: 'MLOps', size: 80, level: 'Advanced' },
    ],
  },
];

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, name, size } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`rgba(139, 92, 246, ${0.3 + (depth * 0.2)})`}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={1}
        rx={4}
        ry={4}
      />
      {width > 50 && height > 30 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#fff"
          fontSize={12}
          dominantBaseline="middle"
        >
          {name}
          {size && ` (${size}%)`}
        </text>
      )}
    </g>
  );
};

export default function SkillMatrix() {
  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={skills}
          dataKey="size"
          stroke="#fff"
          fill="#8b5cf6"
          content={CustomizedContent}
        />
      </ResponsiveContainer>
    </div>
  );
}