import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Star, Coffee, Smile } from 'lucide-react';

function EntryPage({ onEnter }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);

  // Cute animated character
  const Character = () => (
    <motion.div
      className="relative mb-8"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.6 }}
    >
      {/* Character body */}
      <div className="relative w-32 h-32 mx-auto">
        {/* Head */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full shadow-lg"
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-3 h-3 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          <div className="absolute top-4 right-3 w-3 h-3 bg-white rounded-full">
            <motion.div 
              className="absolute top-1 right-1 w-1.5 h-1.5 bg-black rounded-full"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </div>
          
          {/* Smile */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-gray-700 rounded-b-full"
            animate={{ 
              scaleX: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Blush */}
          <div className="absolute top-6 left-1 w-2 h-2 bg-pink-500 rounded-full opacity-60"></div>
          <div className="absolute top-6 right-1 w-2 h-2 bg-pink-500 rounded-full opacity-60"></div>
        </motion.div>
        
        {/* Body */}
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-br from-purple-300 to-pink-400 rounded-3xl shadow-lg"
          animate={{ 
            scaleY: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Heart on chest */}
          <motion.div
            className="absolute top-3 left-1/2 transform -translate-x-1/2"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </motion.div>
        </motion.div>
        
        {/* Arms */}
        <motion.div
          className="absolute top-20 left-2 w-4 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full shadow-md"
          animate={{ 
            rotate: [0, 20, 0, -20, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-2 w-4 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full shadow-md"
          animate={{ 
            rotate: [0, -20, 0, 20, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Legs */}
        <motion.div
          className="absolute bottom-0 left-4 w-4 h-8 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full shadow-md"
          animate={{ 
            scaleY: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-4 w-4 h-8 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full shadow-md"
          animate={{ 
            scaleY: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      
      {/* Floating hearts */}
      <motion.div
        className="absolute -top-4 -right-4"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="w-6 h-6 text-pink-500 fill-current" />
      </motion.div>
      
      <motion.div
        className="absolute -top-2 -left-6"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -360]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Sparkles className="w-4 h-4 text-purple-500" />
      </motion.div>
    </motion.div>
  );

  const handleCharacterClick = () => {
    setShowQuestion(true);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    
    // Only allow exactly "lipika" (case-insensitive, no extra words)
    if (answer.trim().toLowerCase() === 'lipika') {
      setIsCorrect(true);
      setTimeout(() => {
        onEnter();
      }, 2000);
    } else {
      setShowError(true);
      setAnswer(''); // Clear the input field
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-3 h-3 text-purple-400" />
            ) : (
              <Star className="w-3 h-3 text-rose-400 fill-current" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-md mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Welcome to Our
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            Anniversary Journey
          </motion.h2>

          <Character />

          <AnimatePresence mode="wait">
            {!showQuestion ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <motion.p
                  className="text-lg text-gray-700 mb-6"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Hi there! I'm your love guardian! ✨
                </motion.p>
                
                <motion.button
                  onClick={handleCharacterClick}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:from-pink-600 hover:to-rose-600 transform transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Click me to enter! 💕
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {!isCorrect ? (
                  <>
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                    >
                      <motion.p
                        className="text-lg text-gray-700 mb-4"
                        animate={{ 
                          scale: [1, 1.02, 1],
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        Before you enter this magical place, tell me...
                      </motion.p>
                      
                      <p className="text-xl font-semibold text-pink-600 mb-4">
                        What's the name of the beautiful soul this journey is dedicated to? 💖
                      </p>
                      
                      <form onSubmit={handleAnswerSubmit} className="space-y-4">
                        <input
                          type="text"
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          placeholder="Type the name..."
                          className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none text-center text-lg font-medium"
                          autoFocus
                        />
                        
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Enter the Journey! ✨
                        </motion.button>
                      </form>
                      
                      <AnimatePresence>
                        {showError && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            Hmm, that doesn't seem right. Try again! 💭
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl p-6 shadow-xl"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 0.6,
                        repeat: 2
                      }}
                    >
                      <p className="text-xl font-bold mb-2">Perfect! Welcome! 🎉</p>
                      <p>Get ready for a beautiful journey...</p>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default EntryPage;