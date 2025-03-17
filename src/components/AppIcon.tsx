
import React from 'react';
import { cn } from '@/lib/utils';
import { AppIconType } from '@/utils/appIcons';

interface AppIconProps {
  app: AppIconType;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ app, isSelected, onClick, className }) => {
  return (
    <div 
      className={cn(
        "app-icon-container",
        isSelected && "active",
        className
      )}
      onClick={onClick}
      title={app.name}
    >
      <div className="w-12 h-12 relative flex items-center justify-center rounded-lg overflow-hidden">
        <img 
          src={app.iconSrc} 
          alt={app.name} 
          className="w-10 h-10 object-contain"
        />
      </div>
    </div>
  );
};

export default AppIcon;
