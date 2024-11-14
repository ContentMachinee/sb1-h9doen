import React from 'react';

interface DemoVideoProps {
  isPlaying: boolean;
}

export default function DemoVideo({ isPlaying }: DemoVideoProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden aspect-video">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=${isPlaying ? 1 : 0}&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}