import React from 'react';
import { Calendar, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Computer Vision for Autonomous Systems',
    company: 'Google AI',
    date: 'Jan 2023 - Present',
    description: 'Led development of vision algorithms for autonomous navigation',
    impact: '40% improvement in object detection accuracy',
    tags: ['Computer Vision', 'PyTorch', 'CUDA'],
  },
  {
    title: 'Large Language Model Optimization',
    company: 'Research Project',
    date: 'Jun 2022 - Dec 2022',
    description: 'Optimized transformer architecture for better efficiency',
    impact: '3x reduction in inference time',
    tags: ['NLP', 'Transformers', 'Python'],
  },
];

export default function ProjectTimeline() {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="relative pl-6 pb-6 last:pb-0">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-400/20" />
          
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-purple-400" />
          
          {/* Content */}
          <div className="bg-purple-900/30 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <span className="text-sm text-purple-200 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {project.date}
              </span>
            </div>
            
            <p className="text-purple-200 text-sm mb-3">{project.company}</p>
            <p className="text-purple-200 mb-3">{project.description}</p>
            
            <div className="flex items-center text-emerald-400 text-sm mb-3">
              <GitBranch className="h-4 w-4 mr-1" />
              {project.impact}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-md text-xs bg-purple-900/50 text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}