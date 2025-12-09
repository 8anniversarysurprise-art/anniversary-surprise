import { motion } from 'framer-motion';
import MusicPlayer from './MusicPlayer';

const MusicPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 pt-32"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="text-6xl mb-4">🎵</div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-rose-600 bg-clip-text text-transparent mb-6">
            Our Love Soundtrack
          </h1>
        </motion.div>

        <MusicPlayer />

      </div>
    </motion.div>
  );
};

export default MusicPage;