import { motion } from 'framer-motion';
import LoveNotes from './LoveNotes';
import SurpriseLetter from './SurpriseLetter';

const LettersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 pt-32"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="text-6xl mb-4">💌</div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Love Letters for You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Words from my heart, penned with all the love I have for you. 
            Each letter carries my deepest feelings and sweetest thoughts about us.
          </p>
        </motion.div>

        <LoveNotes />
        <div className="mt-16">
          <SurpriseLetter />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Forever in My Heart 💕
          </h3>
          <p className="text-lg leading-relaxed">
            My darling Lipika, no amount of words can truly capture how much you mean to me. 
            But I'll never stop trying to express my love through letters, notes, and every little message. 
            You are my heart, my soul, my everything.
          </p>
          <div className="mt-6">
            <p className="text-xl font-playfair italic">
              All my love, always and forever,<br />
              Abishek ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LettersPage;