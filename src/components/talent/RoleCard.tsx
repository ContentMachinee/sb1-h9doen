import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Brain, TrendingUp } from 'lucide-react';
import { Role } from './talentData';

interface RoleCardProps {
  role: Role;
}

export default function RoleCard({ role }: RoleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-xl hover:glow transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200 mb-2">
              {role.category}
            </span>
            <h3 className="text-xl font-semibold text-white mb-2">{role.title}</h3>
          </div>
          <span className="text-sm font-medium text-emerald-400">{role.level}</span>
        </div>

        <div className="flex items-center text-sm text-purple-200 mb-4">
          <Briefcase className="h-4 w-4 mr-1" />
          {role.experience}
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-purple-300 mb-2">Key Skills</div>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded-md text-xs font-medium bg-purple-900/30 text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {isExpanded && (
            <>
              <div>
                <div className="text-sm font-medium text-purple-300 mb-2">Core Responsibilities</div>
                <ul className="list-disc list-inside text-sm text-purple-200 space-y-1">
                  {role.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-sm font-medium text-purple-300 mb-2">Industry Impact</div>
                <p className="text-sm text-purple-200">{role.impact}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="font-medium text-purple-300">Salary Range</div>
                  <div className="text-purple-200">{role.salaryRange}</div>
                </div>
                <div>
                  <div className="font-medium text-purple-300">Market Demand</div>
                  <div className="flex items-center text-emerald-400">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {role.marketDemand}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <button
        className="w-full p-3 flex items-center justify-center text-purple-300 hover:text-purple-100 transition-colors border-t border-purple-400/20"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="h-5 w-5 mr-1" /> Show Less
          </>
        ) : (
          <>
            <ChevronDown className="h-5 w-5 mr-1" /> Show More
          </>
        )}
      </button>
    </div>
  );
}