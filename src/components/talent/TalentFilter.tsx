import React from 'react';
import { Filter, Search, MapPin, Briefcase, Star, Sliders } from 'lucide-react';
import { RoleCategory, categories, experienceLevels } from './talentData';

interface TalentFilterProps {
  selectedCategories: RoleCategory[];
  setSelectedCategories: (categories: RoleCategory[]) => void;
  selectedLevels: string[];
  setSelectedLevels: (levels: string[]) => void;
}

export default function TalentFilter({
  selectedCategories,
  setSelectedCategories,
  selectedLevels,
  setSelectedLevels,
}: TalentFilterProps) {
  const toggleCategory = (category: RoleCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-purple-200 mb-2 flex items-center">
          <Briefcase className="h-4 w-4 mr-2" />
          Role Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                selectedCategories.includes(category)
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-900/50 text-purple-200 hover:bg-purple-900/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Levels */}
      <div>
        <h3 className="text-sm font-medium text-purple-200 mb-2 flex items-center">
          <Star className="h-4 w-4 mr-2" />
          Experience Level
        </h3>
        <div className="flex flex-wrap gap-2">
          {experienceLevels.map((level) => (
            <button
              key={level}
              onClick={() => toggleLevel(level)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                selectedLevels.includes(level)
                  ? 'bg-emerald-500 text-white'
                  : 'bg-emerald-900/50 text-emerald-200 hover:bg-emerald-900/70'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-sm font-medium text-purple-200 mb-2 flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Location
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Remote', 'On-site', 'Hybrid'].map((option) => (
            <button
              key={option}
              className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200 hover:bg-purple-900/70 transition-all"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters Button */}
      <button className="w-full px-4 py-2 rounded-lg border border-purple-400/30 hover:bg-purple-400/10 text-purple-400 font-medium transition-all flex items-center justify-center">
        <Sliders className="h-4 w-4 mr-2" />
        Advanced Filters
      </button>
    </div>
  );
}