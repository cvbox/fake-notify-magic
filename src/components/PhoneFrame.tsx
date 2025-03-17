
import React from 'react';
import { cn } from '@/lib/utils';
import { WallpaperType } from '@/utils/wallpapers';

interface PhoneFrameProps {
  children: React.ReactNode;
  wallpaper: WallpaperType | undefined;
  time: string;
  date: string;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  wallpaper,
  time,
  date,
  className
}) => {
  return (
    <div className={cn("relative max-w-[320px] w-full mx-auto", className)}>
      <div className="relative rounded-[40px] overflow-hidden bg-black shadow-xl border-8 border-black aspect-[9/19]">
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
          <div className="text-white font-medium text-sm">{date}</div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 flex items-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M12.5,2.27L2,9.87V22H6V14H14V22H18V9.87L12.5,2.27z"/>
              </svg>
            </div>
            <div className="w-4 h-4 flex items-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M17,20H15V18H17M15,4H17V16H15M7,20H5V12H7M7,4H5V10H7M11,20H9V14H11M11,4H9V12H11V4Z"/>
              </svg>
            </div>
            <div className="w-4 h-4 flex items-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M11,4A8,8 0 0,1 19,12A8,8 0 0,1 11,20A8,8 0 0,1 3,12A8,8 0 0,1 11,4M11,2A10,10 0 0,0 1,12A10,10 0 0,0 11,22A10,10 0 0,0 21,12A10,10 0 0,0 11,2M11,7A5,5 0 0,0 6,12A5,5 0 0,0 11,17A5,5 0 0,0 16,12A5,5 0 0,0 11,7Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Time */}
        <div className="absolute top-1/4 w-full text-center">
          <div className="text-white font-light text-7xl animate-fade-in">
            {time}
          </div>
        </div>
        
        {/* Notification area */}
        <div className="absolute w-full bottom-10 px-4">
          {children}
        </div>
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default PhoneFrame;
