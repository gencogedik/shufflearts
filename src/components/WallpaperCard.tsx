interface WallpaperCardProps {
  src: string;
  alt: string;
  className?: string;
}

export const WallpaperCard = ({ src, alt, className = "" }: WallpaperCardProps) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-xl bg-wallpaper-overlay 
        shadow-wallpaper transition-all duration-500 ease-out
        hover:shadow-wallpaper-hover hover:scale-[1.02] hover:-translate-y-1
        cursor-pointer animate-fade-in
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};