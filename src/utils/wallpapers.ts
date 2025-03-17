
export interface WallpaperType {
  id: string;
  name: string;
  src: string;
}

export const wallpapers: WallpaperType[] = [
  {
    id: "gradient1",
    name: "Gradient Purple",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "sunset",
    name: "Sunset",
    src: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "darkGradient",
    name: "Dark Gradient",
    src: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=2029&auto=format&fit=crop"
  }
];
