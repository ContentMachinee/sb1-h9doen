import React from 'react';
import { MapPin, Mail, Globe, Star } from 'lucide-react';

interface ProfileHeaderProps {
  candidate: {
    name: string;
    title: string;
    image: string;
    location: string;
    email: string;
    website: string;
    rating: number;
    experience: string;
    overview: string;
    highlights: string[];
  };
}

export default function ProfileHeader({ candidate }: ProfileHeaderProps) {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={candidate.image}
            alt={candidate.name}
            className="w-32 h-32 rounded-xl object-cover ring-2 ring-purple-400"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">{candidate.name}</h1>
              <p className="text-lg text-purple-200">{candidate.title}</p>
            </div>
            <div className="flex items-center bg-purple-900/50 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-white font-semibold">{candidate.rating}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm text-purple-200 mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {candidate.location}
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              {candidate.email}
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              {candidate.website}
            </div>
          </div>

          {/* Overview */}
          <p className="text-purple-200 mb-4">{candidate.overview}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {candidate.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-purple-900/50 text-purple-200"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}