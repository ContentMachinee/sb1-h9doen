import React, { useState } from 'react';
import { Search, Sliders, MapPin, BrainCircuit } from 'lucide-react';
import TalentFilter from './TalentFilter';
import TalentCard from './TalentCard';
import TalentSpotlight from './TalentSpotlight';
import { RoleCategory, roles } from './talentData';
import SkillsDistribution from './SkillsDistribution';

export default function TalentShowcase() {
  const [selectedCategories, setSelectedCategories] = useState<RoleCategory[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRoles = roles.filter(role => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(role.category);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(role.level);
    const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BrainCircuit className="h-12 w-12 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-500">
            Elite AI Talent Pool
          </h1>
          <p className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto">
            Connect with pre-vetted AI professionals, backed by our rigorous assessment process
          </p>
        </div>

        {/* Talent Spotlight */}
        <div className="mb-12">
          <TalentSpotlight />
        </div>

        {/* Search and Filter Section */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by skills, roles, or location..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 border border-purple-400/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 rounded-lg bg-purple-900/50 text-purple-200 hover:bg-purple-900/70 transition-all"
            >
              <Sliders className="h-4 w-4 mr-2" />
              Filters
            </button>
            <div className="flex items-center text-purple-200">
              <MapPin className="h-4 w-4 mr-2" />
              Remote & Worldwide
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-purple-400/20">
              <TalentFilter
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedLevels={selectedLevels}
                setSelectedLevels={setSelectedLevels}
              />
            </div>
          )}
        </div>

        {/* Skills Distribution */}
        <div className="mb-8">
          <SkillsDistribution roles={filteredRoles} />
        </div>

        {/* Talent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <TalentCard key={role.id} role={role} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl inline-block">
            <h2 className="text-2xl font-bold mb-4">Can't Find the Perfect Match?</h2>
            <p className="text-purple-200 mb-6">
              Let our AI matching system find the ideal candidates for your specific needs
            </p>
            <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all">
              Start Custom Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}