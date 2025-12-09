import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, Star, Sparkles, Music, Camera, Mail, Clock, Gift } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const [hoveredPage, setHoveredPage] = useState(null);

  const pages = [
    { 
      id: 'home', 
      title: 'Our Beginning',
      subtitle: 'Where it all started...',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      surpriseText: 'Click to remember our first hello'
    },
    { 
      id: 'timeline', 
      title: 'Our Journey',
      subtitle: '7 years of love',
      icon: Clock,
      color: 'from-rose-500 to-pink-600',
      surpriseText: 'Discover our beautiful story'
    },
    { 
      id: 'memories', 
      title: 'Sweet Memories',
      subtitle: 'Captured moments',
      icon: Camera,
      color: 'from-pink-600 to-purple-500',
      surpriseText: 'Relive our precious moments'
    },
    { 
      id: 'letters', 
      title: 'Love Letters',
      subtitle: 'Words from the heart',
      icon: Mail,
      color: 'from-purple-500 to-pink-500',
      surpriseText: 'Read my heart on paper'
    },
    { 
      id: 'music', 
      title: 'Our Songs',
      subtitle: 'Soundtrack of us',
      icon: Music,
      color: 'from-pink-500 to-rose-400',
      surpriseText: 'Listen to our love story'
    },
    { 
      id: 'surprises', 
      title: 'Special Surprises',
      subtitle: 'Just for you',
      icon: Gift,
      color: 'from-rose-400 to-pink-400',
      surpriseText: 'Unwrap your gifts'
    }
  ];

  return (
    <div className="fixed top-3 md:top-4 left-3 md:left-4 right-3 md:right-4 z-50">
      <motion.nav 
        className="glass-effect rounded-xl md:rounded-2xl shadow-lg border border-pink-200 p-3 md:p-4 mobile-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-1 md:gap-2">
          {pages.map((page) => {
            const IconComponent = page.icon;
            const isActive = currentPage === page.id;
            const isHovered = hoveredPage === page.id;
            
            return (
              <motion.button
                key={page.id}
                className={`relative group px-2 md:px-4 py-2 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  isActive 
                    ? 'bg-gradient-to-r ' + page.color + ' text-white shadow-lg' 
                    : 'hover:bg-pink-50 text-gray-700 hover:shadow-md'
                }`}
                onClick={() => onPageChange(page.id)}
                onMouseEnter={() => setHoveredPage(page.id)}
                onMouseLeave={() => setHoveredPage(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ touchAction: 'manipulation' }}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <IconComponent 
                    className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'animate-pulse' : ''} flex-shrink-0`}
                  />
                  <span className="font-medium text-xs md:text-sm hidden sm:block truncate">
                    {page.title}
                  </span>
                </div>

                {/* Enhanced Tooltip for mobile */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-lg z-20 whitespace-nowrap max-w-[200px] hidden md:block"
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center">
                        <div className="font-semibold">{page.subtitle}</div>
                        <div className="text-pink-200 italic text-[10px] md:text-xs">{page.surpriseText}</div>
                      </div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enhanced Active page indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-lg md:rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Enhanced Current page title */}
        <motion.div 
          className="mt-2 md:mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-sm md:text-lg font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {pages.find(p => p.id === currentPage)?.title || 'Our Love Story'}
          </div>
          <div className="text-xs md:text-sm text-gray-500 italic hidden md:block">
            {pages.find(p => p.id === currentPage)?.subtitle || 'Navigate with your heart'}
          </div>
        </motion.div>

        {/* Enhanced Floating hearts animation */}
        <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2">
          <motion.div
            className="text-pink-400"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star className="w-3 h-3 md:w-4 md:h-4" />
          </motion.div>
        </div>
        <div className="absolute -top-0 md:-top-1 -left-0 md:-left-1">
          <motion.div
            className="text-rose-400"
            animate={{ 
              y: [0, -6, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Sparkles className="w-2 h-2 md:w-3 md:h-3" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;