
import React from 'react';
import { cn } from '@/lib/utils';
import { WallpaperType } from '@/utils/wallpapers';
import { Battery, Wifi, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  wallpaper: WallpaperType | undefined;
  time: string;
  date: string;
  carrier: string;
  theme: 'light' | 'dark';
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  wallpaper,
  time,
  date,
  carrier,
  theme,
  className
}) => {
  return (
    <div className={cn("relative max-w-[320px] w-full mx-auto", className)}>
      <div className="relative rounded-[30px] overflow-hidden aspect-[9/19]">
        {/* Display background */}
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: wallpaper ? `url(${wallpaper.src})` : 'linear-gradient(to bottom, #9058a0 0%, #5a7dbf 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Status bar */}
        <div className="absolute top-0 w-full px-5 pt-4 flex justify-between items-center z-10">
          <div className="text-white font-medium text-sm">{carrier}</div>
          <div className="flex items-center space-x-2">
            <Signal size={16} color="white" fill="white" />
            <Wifi size={16} color="white" />
            <Battery size={16} color="white" />
          </div>
        </div>
        
        {/* Date and Time - adjusted spacing */}
        <div className="absolute top-[20%] w-full flex flex-col items-center">
          <div className="text-white font-light text-xl mb-1">
            {date}
          </div>
          <div className="text-white font-light text-7xl">
            {time}
          </div>
        </div>
        
        {/* Notification area */}
        <div className="absolute w-full px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
