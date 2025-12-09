import { motion } from 'framer-motion';
import Timeline from './Timeline';

const TimelinePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 pt-32"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="text-6xl mb-4">⏰</div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Beautiful Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From December 12, 2018 to this very moment - relive every precious milestone 
            in our incredible 7-year love story together.
          </p>
        </motion.div>

        <Timeline />
      </div>
    </motion.div>
  );
};

export default TimelinePage;