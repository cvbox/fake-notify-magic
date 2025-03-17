
import React, { useState, useEffect } from 'react';
import NotificationForm from '@/components/NotificationForm';
import NotificationPreview from '@/components/NotificationPreview';
import { AppIconType, appIcons } from '@/utils/appIcons';
import { wallpapers } from '@/utils/wallpapers';
import { Toaster } from "@/components/ui/sonner";
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const isMobile = useIsMobile();
  const [selectedApp, setSelectedApp] = useState<AppIconType | null>(appIcons[3]); // Default to Twitter/X
  const [title, setTitle] = useState('Stripe');
  const [description, setDescription] = useState('You received a payment of $499.00 from thomas@uneed.best');
  const [position, setPosition] = useState<'bottom' | 'middle'>('bottom');
  const [timePeriod, setTimePeriod] = useState('2m ago');
  const [carrier, setCarrier] = useState('AT&T');
  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0].id);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [customTime, setCustomTime] = useState('21:40');
  const [customDate, setCustomDate] = useState('Monday, March 17');
  
  // Find the selected wallpaper
  const wallpaper = wallpapers.find(w => w.id === selectedWallpaper);
  
  // Initial welcome notification
  useEffect(() => {
    setTimeout(() => {
      toast({
        title: "Welcome to Fake Notification Generator",
        description: "Customize your notification and download the image.",
      });
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container py-8">
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-10'} items-start`}>
          <NotificationForm
            selectedApp={selectedApp}
            setSelectedApp={setSelectedApp}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            position={position}
            setPosition={setPosition}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
            carrier={carrier}
            setCarrier={setCarrier}
            selectedWallpaper={selectedWallpaper}
            setSelectedWallpaper={setSelectedWallpaper}
            theme={theme}
            setTheme={setTheme}
            customTime={customTime}
            setCustomTime={setCustomTime}
            customDate={customDate}
            setCustomDate={setCustomDate}
          />
          
          <NotificationPreview
            selectedApp={selectedApp}
            title={title}
            description={description}
            time={customTime}
            timePeriod={timePeriod}
            carrier={carrier}
            wallpaper={wallpaper}
            customTime={customTime}
            customDate={customDate}
            position={position}
            theme={theme}
          />
        </div>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          Fake Notification Generator • Built with precision and care
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
