import React, { useState } from 'react';
import { 
  MapPin, Mail, Globe, Calendar, Award, Brain, 
  Briefcase, GraduationCap, Star, MessageSquare,
  Download, Share2, Bookmark, ChevronDown, ChevronUp
} from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import SkillMatrix from './SkillMatrix';
import ProjectTimeline from './ProjectTimeline';
import AssessmentRadar from './AssessmentRadar';
import PersonalityInsights from './PersonalityInsights';
import ExperienceCard from './ExperienceCard';
import AchievementGrid from './AchievementGrid';

export default function CandidateProfile() {
  const [showContact, setShowContact] = useState(false);
  
  const candidate = {
    name: "Dr. Sarah Chen",
    title: "Senior ML Research Scientist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    location: "San Francisco, CA",
    email: "sarah.chen@example.com",
    website: "sarahchen.ai",
    availability: "2 weeks",
    experience: "8+ years",
    rating: 4.9,
    salary: "$150k - $220k",
    overview: "Machine learning researcher specializing in deep learning and computer vision. Published author with experience leading AI initiatives at scale. Passionate about pushing the boundaries of AI technology.",
    highlights: [
      "Ph.D. in Computer Science from Stanford",
      "15+ Research Publications",
      "Ex-Google AI Researcher",
      "3 Granted Patents"
    ]
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Actions */}
        <div className="flex justify-end gap-4 mb-6">
          <button className="flex items-center px-4 py-2 rounded-lg bg-purple-900/50 text-purple-200 hover:bg-purple-900/70 transition-all">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-purple-900/50 text-purple-200 hover:bg-purple-900/70 transition-all">
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-all">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact
          </button>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Main Info */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Profile Header */}
            <ProfileHeader candidate={candidate} />

            {/* Skills Matrix */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Brain className="h-5 w-5 text-purple-400 mr-2" />
                Technical Expertise
              </h2>
              <SkillMatrix />
            </div>

            {/* Project Timeline */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Briefcase className="h-5 w-5 text-purple-400 mr-2" />
                Project History
              </h2>
              <ProjectTimeline />
            </div>

            {/* Experience & Education */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <GraduationCap className="h-5 w-5 text-purple-400 mr-2" />
                Experience & Education
              </h2>
              <div className="space-y-6">
                <ExperienceCard />
              </div>
            </div>
          </div>

          {/* Right Column - Assessment & Achievements */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-purple-200">Availability</div>
                <div className="text-emerald-400 font-semibold">{candidate.availability}</div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-purple-200">Expected Salary</div>
                <div className="text-white font-semibold">{candidate.salary}</div>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all flex items-center justify-center mb-3">
                <MessageSquare className="h-4 w-4 mr-2" />
                Schedule Interview
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-purple-400/30 hover:bg-purple-400/10 text-purple-400 font-semibold transition-all flex items-center justify-center">
                <Bookmark className="h-4 w-4 mr-2" />
                Save Profile
              </button>
            </div>

            {/* Assessment Radar */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold text-white mb-4">Skills Assessment</h2>
              <AssessmentRadar />
            </div>

            {/* Personality Insights */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold text-white mb-4">Personality Profile</h2>
              <PersonalityInsights />
            </div>

            {/* Achievements */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Award className="h-5 w-5 text-yellow-400 mr-2" />
                Achievements
              </h2>
              <AchievementGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}