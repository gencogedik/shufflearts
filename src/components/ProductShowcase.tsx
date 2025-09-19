import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Collection Pack",
    description: "Access to our entire premium wallpaper collection with monthly updates",
    price: 29.99,
    rating: 4.9,
    reviews: 1250,
    image: "/api/placeholder/400/300",
    category: "Digital Pack"
  },
  {
    id: 2,
    name: "Custom Wallpaper Design",
    description: "Personalized wallpaper creation service tailored to your style",
    price: 149.99,
    rating: 5.0,
    reviews: 89,
    image: "/api/placeholder/400/300",
    category: "Service"
  },
  {
    id: 3,
    name: "4K Ultra HD Bundle",
    description: "High-resolution wallpapers optimized for 4K displays",
    price: 19.99,
    rating: 4.8,
    reviews: 890,
    image: "/api/placeholder/400/300",
    category: "Digital Pack"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-deep-slate to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-display font-bold text-gradient mb-6">
            Premium Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevate your digital aesthetic with our curated selection of premium wallpapers and services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="product-card group"
            >
              <div className="aspect-video bg-gradient-to-br from-electric-purple/20 to-cyber-cyan/20 
                            rounded-t-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-purple to-cyber-cyan 
                              rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-electric-purple/20 text-electric-purple 
                                 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-golden-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-electric-purple 
                             transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gradient">
                    ${product.price}
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 border border-border rounded-lg hover:border-electric-purple/50 
                               transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-electric px-6"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagonal accent element */}
        <div className="relative mt-20">
          <div className="diagonal-cut bg-gradient-to-r from-electric-purple/10 to-cyber-cyan/10 
                        h-32 w-full" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;