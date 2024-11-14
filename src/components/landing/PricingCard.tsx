import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`glass-card p-6 rounded-xl transition-all ${
      highlighted ? 'ring-2 ring-emerald-400 glow' : 'hover:glow'
    }`}>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">${price}</span>
        {price !== 'Custom' && <span className="text-purple-300">/month</span>}
      </div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-purple-200">
            <Check className="h-5 w-5 text-emerald-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full py-2 px-4 rounded-lg transition-all ${
        highlighted
          ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
          : 'border border-purple-400 hover:bg-purple-400/10 text-purple-400'
      }`}>
        Get Started
      </button>
    </div>
  );
}