import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, Music, Camera, Coffee, Flower2, Gift } from 'lucide-react';

function CreativeTransition({ onComplete }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [showMemoryGallery, setShowMemoryGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const stages = [
    {
      id: 'welcome',
      title: '7 Years of Magic',
      subtitle: 'A journey through time and love',
      duration: 3000
    },
    {
      id: 'countdown',
      title: 'From December 12, 2018...',
      subtitle: 'To December 12, 2025',
      duration: 4000
    },
    {
      id: 'memories',
      title: 'Our Beautiful Memories',
      subtitle: 'Click on the floating memories to explore',
      interactive: true
    }
  ];

  const photos = Array.from({ length: 10 }, (_, i) => `couple-photo-${i + 1}.jpg`);

  useEffect(() => {
    if (!stages[currentStage]?.interactive && currentStage < stages.length) {
      const timer = setTimeout(() => {
        if (currentStage < stages.length - 1) {
          setCurrentStage(currentStage + 1);
        }
      }, stages[currentStage]?.duration || 3000);

      return () => clearTimeout(timer);
    }
  }, [currentStage]);

  const FloatingMemory = ({ photo, index, onClick }) => (
    <motion.div
      className="absolute cursor-pointer"
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.5
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      onClick={() => onClick(photo, index)}
      style={{
        left: `${10 + (index % 3) * 30}%`,
        top: `${20 + Math.floor(index / 3) * 25}%`
      }}
    >
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-rose-400 p-1 shadow-lg">
          <img 
            src={`/images/${photo}`}
            alt={`Memory ${index + 1}`}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div>
      </div>
    </motion.div>
  );

  const LoveParticle = ({ icon: Icon, delay = 0 }) => (
    <motion.div
      className="absolute"
      initial={{ 
        opacity: 0,
        scale: 0,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50
      }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: -100,
        rotate: 360
      }}
      transition={{ 
        duration: 4 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
      style={{
        left: `${Math.random() * 100}%`
      }}
    >
      <Icon className="w-6 h-6 text-pink-400 fill-current" />
    </motion.div>
  );

  const PhotoModal = () => (
    <AnimatePresence>
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl p-4 max-w-md mx-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={`/images/${selectedPhoto.photo}`}
              alt={`Memory ${selectedPhoto.index + 1}`}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="text-center mt-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
              >
                Beautiful Memory #{selectedPhoto.index + 1}
              </motion.div>
              <p className="text-gray-600 mt-2">A moment captured in time 💕</p>
              
              <motion.button
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold"
                onClick={() => setSelectedPhoto(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderStage = () => {
    const stage = stages[currentStage];
    
    switch (stage?.id) {
      case 'welcome':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 opacity-20 animate-pulse"></div>
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-12 h-12 text-white fill-current" />
              </motion.div>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {stage.title}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {stage.subtitle}
            </motion.p>
          </motion.div>
        );
      
      case 'countdown':
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <motion.div
              className="space-y-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stage.title}
              </motion.h1>
              
              <motion.div
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", bounce: 0.5 }}
              >
                7 YEARS
              </motion.div>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {stage.subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
        );
      
      case 'memories':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center relative"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {stage.title}
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {stage.subtitle}
            </motion.p>

            {/* Floating Photos */}
            <div className="relative w-full h-96 mb-8">
              {photos.slice(0, 6).map((photo, index) => (
                <FloatingMemory 
                  key={index}
                  photo={photo}
                  index={index}
                  onClick={(photo, index) => setSelectedPhoto({ photo, index })}
                />
              ))}
            </div>

            <motion.button
              onClick={onComplete}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(219, 39, 119, 0.3)",
                  "0 15px 40px rgba(147, 51, 234, 0.3)",
                  "0 10px 30px rgba(219, 39, 119, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Enter Our Journey ✨
            </motion.button>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <LoveParticle icon={Heart} delay={0} />
        <LoveParticle icon={Star} delay={2} />
        <LoveParticle icon={Music} delay={4} />
        <LoveParticle icon={Camera} delay={6} />
        <LoveParticle icon={Coffee} delay={8} />
        <LoveParticle icon={Flower2} delay={10} />
        <LoveParticle icon={Gift} delay={12} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              {renderStage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Photo Modal */}
      <PhotoModal />
    </div>
  );
}

export default CreativeTransition;