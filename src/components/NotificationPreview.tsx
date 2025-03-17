
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { AppIconType } from '@/utils/appIcons';
import { WallpaperType } from '@/utils/wallpapers';
import PhoneFrame from './PhoneFrame';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { toast } from '@/components/ui/use-toast';

interface NotificationPreviewProps {
  selectedApp: AppIconType | null;
  title: string;
  description: string;
  time: string;
  timePeriod: string;
  carrier: string;
  wallpaper: WallpaperType | undefined;
  customTime: string;
  customDate: string;
  position: 'bottom' | 'middle';
  theme: 'light' | 'dark';
  className?: string;
}

const NotificationPreview: React.FC<NotificationPreviewProps> = ({
  selectedApp,
  title,
  description,
  time,
  timePeriod,
  carrier,
  wallpaper,
  customTime,
  customDate,
  position,
  theme,
  className
}) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  const downloadImage = async () => {
    if (!phoneRef.current) return;
    
    try {
      const canvas = await html2canvas(phoneRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${title}-notification.png`;
      link.click();
      
      toast({
        title: "Success!",
        description: "Your notification image has been downloaded.",
      });
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: "Error",
        description: "There was an error generating your image. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <div className="bg-card rounded-lg shadow-sm p-4 animate-fade-in">
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div ref={phoneRef} className="relative">
          <PhoneFrame 
            wallpaper={wallpaper}
            time={customTime || "21:18"}
            date={customDate || "Monday, March 17"}
            carrier={carrier}
            theme={theme}
            className="animate-slide-in"
          >
            <div className={cn(
              "notification-container w-full rounded-xl p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg",
              position === 'middle' ? 'absolute top-[45%]' : 'absolute bottom-[15%]'
            )}>
              <div className="flex items-center space-x-3">
                {selectedApp && (
                  <div className="flex-shrink-0 self-center">
                    <img 
                      src={selectedApp.iconSrc} 
                      alt={selectedApp.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title || selectedApp?.name || "App"}</h3>
                    <span className={`text-xs ${theme === 'dark' ? 'text-white/80' : 'text-gray-500'}`}>{timePeriod}</span>
                  </div>
                  <p className={`text-sm line-clamp-2 mt-1 ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>{description}</p>
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
      
      <button
        className="download-button animate-fade-in"
        onClick={downloadImage}
      >
        <Download size={18} />
        <span>Download Image</span>
      </button>
    </div>
  );
};

export default NotificationPreview;
