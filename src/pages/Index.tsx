import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import WallpaperGallery from "@/components/WallpaperGallery";
import ProductShowcase from "@/components/ProductShowcase";
import FloatingNavigation from "@/components/FloatingNavigation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Infinite Gallery - Redefine Your Digital Space</title>
        <meta 
          name="description" 
          content="Discover extraordinary wallpapers that transform your digital space. Premium collection of artistic, unconventional designs that break traditional boundaries." 
        />
        <meta name="keywords" content="wallpapers, digital art, premium wallpapers, 4K wallpapers, artistic designs" />
        <meta property="og:title" content="Infinite Gallery - Redefine Your Digital Space" />
        <meta property="og:description" content="Discover extraordinary wallpapers that transform your digital space" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        {/* Floating Navigation */}
        <FloatingNavigation />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <WallpaperGallery />
          <ProductShowcase />
        </main>

        {/* Footer */}
        <footer className="py-16 px-8 border-t border-border/30 bg-card/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-gradient">
                  Infinite Gallery
                </h3>
                <p className="text-muted-foreground">
                  Transforming digital spaces with extraordinary wallpapers that break conventional design boundaries.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Gallery</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-electric-purple transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Popular</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Categories</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Collections</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Products</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Premium Packs</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Custom Design</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">4K Ultra HD</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Mobile Wallpapers</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Connect</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Pinterest</a></li>
                  <li><a href="#" className="hover:text-electric-purple transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border/30 text-center text-muted-foreground">
              <p>&copy; 2024 Infinite Gallery. All rights reserved. Crafted with passion for digital artistry.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
