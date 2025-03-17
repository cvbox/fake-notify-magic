
import React from 'react';
import { cn } from '@/lib/utils';
import { WallpaperType } from '@/utils/wallpapers';

interface WallpaperSelectorProps {
  wallpapers: WallpaperType[];
  selectedWallpaper: string;
  onChange: (id: string) => void;
}

const WallpaperSelector: React.FC<WallpaperSelectorProps> = ({
  wallpapers,
  selectedWallpaper,
  onChange
}) => {
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {wallpapers.map((wallpaper) => (
        <div
          key={wallpaper.id}
          className={cn(
            "wallpaper-container w-16 h-16 rounded-lg overflow-hidden",
            selectedWallpaper === wallpaper.id && "active"
          )}
          onClick={() => onChange(wallpaper.id)}
          title={wallpaper.name}
        >
          <img
            src={wallpaper.src}
            alt={wallpaper.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default WallpaperSelector;
