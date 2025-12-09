import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import EntryPage from './components/EntryPage';
import CreativeTransition from './components/CreativeTransition';
import HomePage from './components/HomePage';
import TimelinePage from './components/TimelinePage';
import MemoriesPage from './components/MemoriesPage';
import LettersPage from './components/LettersPage';
import MusicPage from './components/MusicPage';
import SurprisesPage from './components/SurprisesPage';
import { Heart } from 'lucide-react';

function App() {
  const [showEntry, setShowEntry] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleEntryComplete = () => {
    setShowEntry(false);
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />;
      case 'timeline':
        return <TimelinePage />;
      case 'memories':
        return <MemoriesPage />;
      case 'letters':
        return <LettersPage />;
      case 'music':
        return <MusicPage />;
      case 'surprises':
        return <SurprisesPage />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {showEntry ? (
        <EntryPage onEnter={handleEntryComplete} />
      ) : showTransition ? (
        <CreativeTransition onComplete={handleTransitionComplete} />
      ) : (
        <>
          <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
          
          <PageTransition currentPage={currentPage}>
            {renderPage()}
          </PageTransition>

          {/* Enhanced Footer - only show on home page */}
          {currentPage === 'home' && (
        <motion.footer 
          className="bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 py-8 md:py-16 px-4 mobile-padding mt-8 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg border border-pink-200 text-center mobile-card"
            >
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
                className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center"
              >
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3 md:mb-4">
                Happy 7th Anniversary, Lipika!
              </h3>
              
              <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-2xl mx-auto px-2">
                From December 12, 2018 to this very day, every moment with you has been a gift.
                <span className="block mt-1 md:mt-2">Here's to many more years of love, laughter, and togetherness.</span>
              </p>
              
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6 shadow-lg">
                <p className="text-base md:text-xl font-playfair italic leading-relaxed">
                  "Lipika, these 7 years have been the most beautiful chapter of my life. 
                  Every day with you feels like a gift, every moment a treasure."
                </p>
                <div className="mt-3 md:mt-4 text-sm md:text-lg font-medium">
                  Forever yours, Abishek ❤️
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-pink-200">
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  December 12, 2018 → December 12, 2025
                </p>
                <p className="text-base md:text-lg font-bold text-pink-600 mt-1">
                  7 Years of Love & Counting
                </p>
              </div>
            </motion.div>
          </div>
        </motion.footer>
      )}
        </>
      )}
    </div>
  );
}
export default App;
