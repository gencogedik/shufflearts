import { WallpaperCard } from "./WallpaperCard";

// Import wallpapers
import wallpaper1 from "@/assets/wallpaper-1.jpg";
import wallpaper2 from "@/assets/wallpaper-2.jpg";
import wallpaper3 from "@/assets/wallpaper-3.jpg";
import wallpaper4 from "@/assets/wallpaper-4.jpg";
import wallpaper5 from "@/assets/wallpaper-5.jpg";
import wallpaper6 from "@/assets/wallpaper-6.jpg";
import wallpaper7 from "@/assets/wallpaper-7.jpg";
import wallpaper8 from "@/assets/wallpaper-8.jpg";
import wallpaper9 from "@/assets/wallpaper-9.jpg";
import wallpaper10 from "@/assets/wallpaper-10.jpg";
import wallpaper11 from "@/assets/wallpaper-11.jpg";
import wallpaper12 from "@/assets/wallpaper-12.jpg";

const wallpapers = [
  { src: wallpaper1, alt: "Abstract digital gradients", className: "md:col-span-2 h-64" },
  { src: wallpaper2, alt: "Misty mountain sunrise", className: "h-80" },
  { src: wallpaper3, alt: "Cyberpunk neon cityscape", className: "md:col-span-2 h-64" },
  { src: wallpaper4, alt: "Minimalist geometric design", className: "h-64" },
  { src: wallpaper5, alt: "Ocean waves", className: "h-80" },
  { src: wallpaper6, alt: "Space galaxy nebula", className: "md:col-span-2 h-64" },
  { src: wallpaper7, alt: "Tropical botanical leaves", className: "h-64" },
  { src: wallpaper8, alt: "Cherry blossom petals", className: "h-80" },
  { src: wallpaper9, alt: "Modern architecture", className: "md:col-span-2 h-64" },
  { src: wallpaper10, alt: "Aurora borealis lights", className: "h-64" },
  { src: wallpaper11, alt: "Desert sand dunes", className: "h-80" },
  { src: wallpaper12, alt: "Liquid metallic art", className: "md:col-span-2 h-64" },
];

export const WallpaperGrid = () => {
  return (
    <div className="min-h-screen bg-wallpaper-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {wallpapers.map((wallpaper, index) => (
            <WallpaperCard
              key={index}
              src={wallpaper.src}
              alt={wallpaper.alt}
              className={wallpaper.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};