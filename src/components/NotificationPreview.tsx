
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
  position: 'top' | 'bottom';
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
            className="animate-slide-in"
          >
            <div className={cn(
              "notification-container rounded-xl p-4 animate-fade-in",
              position === 'top' ? 'mt-12 mb-auto' : 'mt-auto'
            )}>
              <div className="flex items-start space-x-3">
                {selectedApp && (
                  <div className="flex-shrink-0 rounded-md overflow-hidden">
                    <img 
                      src={selectedApp.iconSrc} 
                      alt={selectedApp.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-medium">{title || selectedApp?.name || "App"}</h3>
                    <span className="text-white/80 text-xs">{timePeriod}</span>
                  </div>
                  <p className="text-white/90 text-sm line-clamp-2 mt-1">{description}</p>
                </div>
              </div>
            </div>
          </PhoneFrame>
          
          {/* Status bar overlay for carrier */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium z-20">
            {carrier}
          </div>
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
