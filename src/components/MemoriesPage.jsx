import { motion } from 'framer-motion';
import Gallery from './Gallery';

const MemoriesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 pt-20 md:pt-32"
    >
      <div className="max-w-6xl mx-auto px-4 mobile-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl md:text-6xl mb-3 md:mb-4"
          >
            📸
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-rose-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            Our Sweet Memories
          </h1>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Every picture tells a story, every moment captured is a treasure. 
            <span className="block mt-2">Here are some of our most precious memories from our beautiful journey together.</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <Gallery />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 md:mt-16 text-center glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg mobile-card"
        >
          <div className="flex justify-center mb-3 md:mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl">💕</span>
            </motion.div>
          </div>
          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            More Memories to Come
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
            These photos are just a glimpse into our beautiful story. 
            With each passing day, we're creating new memories, new adventures, and new reasons to smile. 
            <span className="block mt-2 font-medium text-pink-600">Here's to filling many more albums with our love story!</span>
          </p>
          
          {/* Mobile-specific love note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 md:mt-6 p-3 md:p-4 bg-pink-50 rounded-xl border border-pink-200"
          >
            <p className="text-xs md:text-sm text-gray-600 italic">
              "In every photo, I see the love in your eyes and the happiness we share. Thank you for being my forever photo partner! 📷✨"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemoriesPage;