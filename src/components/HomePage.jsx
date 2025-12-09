import { motion } from 'framer-motion';
import { ArrowRight, Heart, Star } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 pt-20 md:pt-32 px-4 mobile-padding"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Enhanced Hero Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="mb-6 md:mb-8">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl md:text-6xl mb-3 md:mb-4"
            >
              💕
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              <span className="block md:inline">Happy 7th</span>
              <span className="block md:inline"> Anniversary</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair text-gray-700 mb-6 md:mb-8">
              My Beautiful Lipika 💖
            </h2>
            
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 px-2">
              From December 12, 2018 to this very moment... 
              <span className="block mt-2">Seven incredible years of love, laughter, and growing together.</span>
              <span className="block mt-2 font-medium text-pink-600">This is our story, our journey, our forever.</span>
            </p>
          </div>

          {/* Enhanced Interactive surprise buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <motion.button
              onClick={() => onNavigate('timeline')}
              className="group glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-200 mobile-card min-h-[120px] text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="text-2xl md:text-4xl">⏰</div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-pink-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
                Remember Our Journey
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Click here to relive every precious moment of our 7-year love story
              </p>
            </motion.button>

            <motion.button
              onClick={() => onNavigate('memories')}
              className="group glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-rose-200 mobile-card min-h-[120px] text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="text-2xl md:text-4xl">📸</div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-rose-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
                Our Sweet Memories
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Explore our captured moments and beautiful memories together
              </p>
            </motion.button>

            <motion.button
              onClick={() => onNavigate('letters')}
              className="group glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200 mobile-card min-h-[120px] text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="text-2xl md:text-4xl">💌</div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-purple-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
                Love Letters for You
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Read my heart poured out in words just for you, my love
              </p>
            </motion.button>

            <motion.button
              onClick={() => onNavigate('surprises')}
              className="group glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-200 mobile-card min-h-[120px] text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="text-2xl md:text-4xl">🎁</div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-pink-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
                Special Surprises
              </h3>
              <p className="text-gray-600">
                I have some extra special surprises waiting just for you!
              </p>
            </motion.button>
          </div>

          {/* Special message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl p-8 shadow-xl"
          >
            <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">A Message from Abishek</h3>
            <p className="text-lg leading-relaxed italic">
              "Lipika, these 6 years have been the most beautiful chapter of my life. 
              Every day with you feels like a gift, every moment a treasure. 
              Thank you for being my partner, my best friend, and my greatest love. 
              Here's to forever and always, my darling."
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
              <Star className="w-5 h-5 text-yellow-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Star className="w-5 h-5 text-yellow-300 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              opacity: 0.7
            }}
            animate={{ 
              y: -50,
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          >
            {['💖', '💕', '✨', '🌟', '💫', '🦋'][i]}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;