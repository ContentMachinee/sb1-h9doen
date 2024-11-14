import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="glass-card p-6 rounded-xl hover:glow transition-all">
      <p className="text-purple-200 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-purple-300">{role}</div>
        </div>
      </div>
    </div>
  );
}