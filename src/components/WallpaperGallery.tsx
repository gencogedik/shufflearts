import { motion } from "framer-motion";
import { Download, Heart, Eye } from "lucide-react";

// Import wallpaper images
import cyberpunkWallpaper from "@/assets/wallpaper-cyberpunk-1.jpg";
import goldenWavesWallpaper from "@/assets/wallpaper-golden-waves.jpg";
import cityNeonWallpaper from "@/assets/wallpaper-city-neon.jpg";
import particlesWallpaper from "@/assets/wallpaper-particles-vertical.jpg";
import geometricWallpaper from "@/assets/wallpaper-geometric.jpg";
import nebulaWallpaper from "@/assets/wallpaper-nebula.jpg";

interface WallpaperItem {
  id: number;
  title: string;
  image: string;
  downloads: number;
  likes: number;
  views: number;
  gridSpan: string;
}

const wallpapers: WallpaperItem[] = [
  {
    id: 1,
    title: "Cyberpunk Dreams",
    image: cyberpunkWallpaper,
    downloads: 2450,
    likes: 890,
    views: 12500,
    gridSpan: "row-span-2 col-span-2"
  },
  {
    id: 2,
    title: "Golden Waves",
    image: goldenWavesWallpaper,
    downloads: 1780,
    likes: 645,
    views: 8900,
    gridSpan: "row-span-1 col-span-1"
  },
  {
    id: 3,
    title: "Neon Metropolis",
    image: cityNeonWallpaper,
    downloads: 3200,
    likes: 1200,
    views: 18500,
    gridSpan: "row-span-3 col-span-1"
  },
  {
    id: 4,
    title: "Digital Flow",
    image: particlesWallpaper,
    downloads: 1950,
    likes: 720,
    views: 11200,
    gridSpan: "row-span-2 col-span-1"
  },
  {
    id: 5,
    title: "Geometric Harmony",
    image: geometricWallpaper,
    downloads: 1450,
    likes: 580,
    views: 7800,
    gridSpan: "row-span-1 col-span-2"
  },
  {
    id: 6,
    title: "Cosmic Nebula",
    image: nebulaWallpaper,
    downloads: 2890,
    likes: 1050,
    views: 15600,
    gridSpan: "row-span-2 col-span-1"
  }
];

const WallpaperGallery = () => {
  return (
    <section className="min-h-screen py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-display font-bold text-gradient mb-6"
          >
            Infinite Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover extraordinary wallpapers that transform your digital space
          </motion.p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-6 gap-6 h-[200vh] auto-rows-fr">
          {wallpapers.map((wallpaper, index) => (
            <motion.div
              key={wallpaper.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`gallery-item group ${wallpaper.gridSpan}`}
            >
              <div className="relative h-full w-full">
                <img
                  src={wallpaper.image}
                  alt={wallpaper.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {wallpaper.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {wallpaper.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {wallpaper.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {wallpaper.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-electric-purple/30"
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-electric p-2"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WallpaperGallery;