import { motion } from 'framer-motion';
import SecretPhotos from './SecretPhotos';
import LoveQuiz from './LoveQuiz';
import { Gift, Star, Heart, Sparkles } from 'lucide-react';

const SurprisesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 pt-32"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-4"
          >
            🎁
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Special Surprises
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I've prepared some extra special surprises just for you, my love! 
            Each one is made with care and filled with all my affection for you.
          </p>
        </motion.div>

        {/* Surprise Box Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
            <Gift className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-4">Unwrap Your Gifts!</h3>
            <p className="text-pink-100">
              Click around to discover all the special surprises I've hidden for you throughout this page
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
              <Heart className="w-4 h-4 text-red-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </motion.div>

        {/* Secret Photos Surprise */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16"
        >
          <SecretPhotos />
        </motion.div>

        {/* Love Quiz Surprise */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mb-16"
        >
          <LoveQuiz />
        </motion.div>

        {/* Final Surprise Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 shadow-lg border border-pink-200">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-5xl mb-4"
            >
              💝
            </motion.div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              The Greatest Surprise of All
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              You know what the greatest surprise is, Lipika? It's waking up every day knowing that you're mine, 
              and I'm yours. It's the way you surprise me with your kindness, your laughter, your love. 
              You ARE my greatest surprise, my biggest blessing, my most precious gift.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full">
              <Heart className="w-5 h-5" />
              <span className="font-medium">I love you more than words can say</span>
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SurprisesPage;