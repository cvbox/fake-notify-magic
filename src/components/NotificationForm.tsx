
import React from 'react';
import { cn } from '@/lib/utils';
import { AppIconType, appIcons } from '@/utils/appIcons';
import { WallpaperType, wallpapers } from '@/utils/wallpapers';
import AppIcon from './AppIcon';
import WallpaperSelector from './WallpaperSelector';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface NotificationFormProps {
  selectedApp: AppIconType | null;
  setSelectedApp: (app: AppIconType | null) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  position: 'top' | 'bottom' | 'middle';
  setPosition: (position: 'top' | 'bottom' | 'middle') => void;
  timePeriod: string;
  setTimePeriod: (time: string) => void;
  carrier: string;
  setCarrier: (carrier: string) => void;
  selectedWallpaper: string;
  setSelectedWallpaper: (id: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  customTime: string;
  setCustomTime: (time: string) => void;
  customDate: string;
  setCustomDate: (date: string) => void;
  className?: string;
}

const NotificationForm: React.FC<NotificationFormProps> = ({
  selectedApp,
  setSelectedApp,
  title,
  setTitle,
  description,
  setDescription,
  position,
  setPosition,
  timePeriod,
  setTimePeriod,
  carrier,
  setCarrier,
  selectedWallpaper,
  setSelectedWallpaper,
  theme,
  setTheme,
  customTime,
  setCustomTime,
  customDate,
  setCustomDate,
  className
}) => {
  const handleAppSelect = (app: AppIconType) => {
    setSelectedApp(app);
  };

  const getSelectedWallpaper = (): WallpaperType | undefined => {
    return wallpapers.find(w => w.id === selectedWallpaper);
  };

  return (
    <div className={cn("bg-card rounded-lg shadow-sm p-6 animate-fade-in", className)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Fake Notification Generator</h2>
          <p className="text-muted-foreground text-sm mt-1">Customize your notification to your liking 🎭</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label className="text-base mb-2 block">Application</Label>
            <div className="grid grid-cols-5 gap-3 md:grid-cols-5">
              {appIcons.map((app) => (
                <AppIcon
                  key={app.id}
                  app={app}
                  isSelected={selectedApp?.id === app.id}
                  onClick={() => handleAppSelect(app)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="title" className="text-base mb-1 block">Title</Label>
            <Input
              id="title"
              placeholder={selectedApp?.name || "App"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="custom-input"
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-base mb-1 block">Description</Label>
            <Input
              id="description"
              placeholder="You received a message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="custom-input"
            />
          </div>
          
          <div>
            <Label className="text-base mb-2 block">Position</Label>
            <RadioGroup 
              value={position} 
              onValueChange={(value) => setPosition(value as 'top' | 'bottom' | 'middle')}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top" id="position-top" />
                <Label htmlFor="position-top" className="cursor-pointer">Top</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="middle" id="position-middle" />
                <Label htmlFor="position-middle" className="cursor-pointer">Middle</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom" id="position-bottom" />
                <Label htmlFor="position-bottom" className="cursor-pointer">Bottom</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="timePeriod" className="text-base mb-1 block">Time</Label>
            <Select
              value={timePeriod}
              onValueChange={setTimePeriod}
            >
              <SelectTrigger id="timePeriod" className="custom-select">
                <SelectValue placeholder="Choose time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">now</SelectItem>
                <SelectItem value="1m ago">1m ago</SelectItem>
                <SelectItem value="2m ago">2m ago</SelectItem>
                <SelectItem value="5m ago">5m ago</SelectItem>
                <SelectItem value="15m ago">15m ago</SelectItem>
                <SelectItem value="1h ago">1h ago</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="carrier" className="text-base mb-1 block">Carrier</Label>
            <Input
              id="carrier"
              placeholder="AT&T"
              value={carrier}
              onChange={(e) => setCarrier(e.target.value)}
              className="custom-input"
            />
          </div>
          
          <div>
            <Label className="text-base mb-1 block">Wallpaper</Label>
            <WallpaperSelector
              wallpapers={wallpapers}
              selectedWallpaper={selectedWallpaper}
              onChange={setSelectedWallpaper}
            />
          </div>
          
          <div>
            <Label htmlFor="theme" className="text-base mb-1 block">Theme</Label>
            <Select
              value={theme}
              onValueChange={(value) => setTheme(value as 'light' | 'dark')}
            >
              <SelectTrigger id="theme" className="custom-select">
                <SelectValue placeholder="Choose theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="customTime" className="text-base mb-1 block">Custom Time</Label>
            <Input
              id="customTime"
              placeholder="21:18"
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
              className="custom-input"
            />
          </div>
          
          <div>
            <Label htmlFor="customDate" className="text-base mb-1 block">Custom Date</Label>
            <Input
              id="customDate"
              placeholder="Monday, March 17"
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
              className="custom-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
