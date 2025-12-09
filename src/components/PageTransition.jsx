import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children, currentPage }) => {
  const pageVariants = {
    initial: { 
      opacity: 0, 
      x: 100,
      scale: 0.95
    },
    in: { 
      opacity: 1, 
      x: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      x: -100,
      scale: 1.05
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;