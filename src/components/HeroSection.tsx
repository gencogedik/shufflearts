import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Palette, Zap } from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: Sparkles, text: "Ultra HD Quality" },
    { icon: Palette, text: "Artistic Excellence" },
    { icon: Zap, text: "Instant Download" }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-deep-slate/50 to-background" />
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-electric-purple/10 to-cyber-cyan/10 
                 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-golden-accent/10 to-electric-purple/10 
                 rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-electric-purple/20 
                       rounded-full text-electric-purple font-medium"
            >
              <Sparkles className="w-4 h-4" />
              New Collection Available
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-7xl lg:text-8xl font-display font-black leading-none"
              >
                <span className="text-gradient">Redefine</span>
                <br />
                <span className="text-foreground">Your Space</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Discover an unconventional gallery of premium wallpapers that challenge traditional design boundaries. 
                Transform your digital environment with artistry that inspires.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-electric text-lg px-8 py-4"
              >
                Explore Gallery
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-border rounded-xl text-lg font-semibold
                         hover:border-electric-purple/50 transition-colors duration-300"
              >
                View Products
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-muted rounded-lg">
                    <feature.icon className="w-5 h-5 text-electric-purple" />
                  </div>
                  <span className="text-muted-foreground font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Diagonal Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="diagonal-cut-reverse bg-gradient-to-br from-electric-purple/20 via-cyber-cyan/20 to-golden-accent/20 
                          h-96 w-full backdrop-blur-sm border border-border/30 relative overflow-hidden">
              
              {/* Animated particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                  className="absolute w-1 h-1 bg-electric-purple rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 50}%`,
                  }}
                />
              ))}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-display font-bold text-gradient text-center">
                  <div className="pulse-electric">∞</div>
                  <div className="text-sm font-normal text-muted-foreground mt-2">
                    Infinite Possibilities
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;