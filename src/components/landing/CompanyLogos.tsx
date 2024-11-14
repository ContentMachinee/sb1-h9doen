import React from 'react';
import { Building2 } from 'lucide-react';

export default function CompanyLogos() {
  const logos = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
      {logos.map((company) => (
        <div key={company} className="flex items-center space-x-2 text-purple-300">
          <Building2 className="h-6 w-6" />
          <span className="font-semibold">{company}</span>
        </div>
      ))}
    </div>
  );
}