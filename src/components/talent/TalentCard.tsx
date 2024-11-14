import React, { useState } from 'react';
import { Role } from './talentData';
import { 
  Star, MessageSquare, Award, TrendingUp, ChevronDown, ChevronUp,
  Github, Linkedin, Twitter, ExternalLink, Calendar, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillBadge from './SkillBadge';

interface TalentCardProps {
  role: Role;
}

export default function TalentCard({ role }: TalentCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContact = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="glass-card rounded-xl hover:glow transition-all group">
      <div className="p-6">
        {/* Profile Header */}
        <div className="flex items-start gap-4 mb-6">
          <img
            src={role.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'}
            alt={role.title}
            className="w-16 h-16 rounded-xl object-cover ring-2 ring-purple-400 transition-transform group-hover:scale-105"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-purple-200">{role.experience} Experience</p>
              </div>
              <div className="flex items-center bg-purple-900/50 px-2 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium text-white">4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {role.skills.slice(0, 4).map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {expanded && (
          <>
            {/* Location & Availability */}
            <div className="flex items-center justify-between mb-4 text-sm">
              <div className="flex items-center text-purple-200">
                <MapPin className="h-4 w-4 mr-1" />
                {role.location || 'Remote'}
              </div>
              <div className="flex items-center text-emerald-400">
                <Calendar className="h-4 w-4 mr-1" />
                Available in 2 weeks
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-4">
              <a
                href="#github"
                className="p-2 rounded-lg bg-purple-900/30 text-purple-200 hover:bg-purple-900/50 hover:text-white transition-all"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#linkedin"
                className="p-2 rounded-lg bg-purple-900/30 text-purple-200 hover:bg-purple-900/50 hover:text-white transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#twitter"
                className="p-2 rounded-lg bg-purple-900/30 text-purple-200 hover:bg-purple-900/50 hover:text-white transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-900/30">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-purple-200">Top Performer</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-900/30">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-purple-200">Rising Star</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="border-t border-purple-400/20 p-4 flex flex-wrap gap-3">
        <Link
          to={`/profile/${role.id}`}
          className="flex-1 px-4 py-2 rounded-lg bg-purple-900/50 text-purple-200 hover:bg-purple-900/70 text-sm font-semibold transition-all flex items-center justify-center"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Profile
        </Link>
        <button
          onClick={handleContact}
          disabled={isLoading}
          className={`flex-1 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-all flex items-center justify-center ${
            isLoading ? 'opacity-75 cursor-wait' : ''
          }`}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          {isLoading ? 'Connecting...' : 'Contact'}
        </button>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center text-purple-300 hover:text-purple-100 transition-colors text-sm"
        >
          {expanded ? (
            <>
              Less <ChevronUp className="h-4 w-4 ml-1" />
            </>
          ) : (
            <>
              More <ChevronDown className="h-4 w-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}