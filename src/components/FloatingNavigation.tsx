import { motion } from "framer-motion";
import { Search, Grid, Filter, User } from "lucide-react";

const FloatingNavigation = () => {
  const navItems = [
    { icon: Grid, label: "Gallery" },
    { icon: Search, label: "Search" },
    { icon: Filter, label: "Filter" },
    { icon: User, label: "Profile" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="floating-nav"
    >
      <div className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-muted/50 hover:bg-electric-purple/20 
                     transition-colors duration-300 group relative"
            title={item.label}
          >
            <item.icon className="w-5 h-5 text-soft-glow group-hover:text-electric-purple transition-colors" />
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
                       bg-card px-2 py-1 rounded text-sm whitespace-nowrap
                       pointer-events-none"
            >
              {item.label}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNavigation;