'use client';

import { SkipBack, Play, SkipForward, Download, Pause } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const FeaturedPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="bg-gradient-to-br from-card to-dark-light rounded-2xl p-8 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Tocando Agora</h3>
          <p className="text-muted-foreground">Chorou - Anderson Mário</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="icon" className="rounded-full w-10 h-10">
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button
            className="rounded-full w-12 h-12 gradient-primary text-white hover:opacity-90"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full w-10 h-10">
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/10 rounded-full mb-3">
        <div
          className="h-full rounded-full gradient-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground mb-5">
        <span>1:24</span>
        <span>3:45</span>
      </div>

      <Button variant="secondary" className="gap-2">
        <Download className="w-4 h-4" />
        Download (2.63 MB)
      </Button>
    </div>
  );
};
