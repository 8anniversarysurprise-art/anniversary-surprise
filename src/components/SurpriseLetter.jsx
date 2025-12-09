import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, X, Sparkles, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const SurpriseLetter = () => {
    const [openLetter, setOpenLetter] = useState(null);
    const [discoveredLetters, setDiscoveredLetters] = useState(new Set());

    const letters = [
        {
            id: 1,
            icon: Heart,
            color: 'from-pink-400 to-rose-400',
            position: 'top-20 left-10',
            title: 'First Memory',
            message: 'Do you remember the first time we talked? I knew from that moment you were special. Your smile, your laugh - everything about you made my heart skip a beat. I\'m so grateful that friendship turned into this beautiful love.',
        },
        {
            id: 2,
            icon: Sparkles,
            color: 'from-rose-400 to-pink-500',
            position: 'top-40 right-20',
            title: 'Your Smile',
            message: 'Your smile lights up my entire world. Even on my darkest days, just thinking about you brings sunshine into my life. You have this magical way of making everything better just by being you.',
        },
        {
            id: 3,
            icon: Mail,
            color: 'from-pink-500 to-rose-500',
            position: 'bottom-40 left-20',
            title: 'Promise',
            message: 'I promise to love you every single day, to support your dreams, to be there through every challenge, and to celebrate every victory with you. You and me, forever and always.',
        },
        {
            id: 4,
            icon: Heart,
            color: 'from-rose-500 to-pink-600',
            position: 'bottom-20 right-10',
            title: 'Thank You',
            message: 'Thank you for choosing me, for believing in me, for loving me when I had nothing. You saw something in me that I didn\'t even see in myself. I\'m the person I am today because of your love and support.',
        },
    ];

    const handleLetterClick = (letter) => {
        setOpenLetter(letter);
        if (!discoveredLetters.has(letter.id)) {
            setDiscoveredLetters(new Set([...discoveredLetters, letter.id]));
            // Trigger confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#B76E79', '#FFF0F3', '#8B4C5C', '#FFB6C1'],
            });
        }
    };

    return (
        <section className="relative py-20 px-4 bg-gradient-to-br from-soft-pink to-pink-50 overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                        Hidden Love Letters
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                        Click the floating hearts to discover secret messages 💌
                    </p>
                    <p className="text-sm text-gray-500">
                        Found: {discoveredLetters.size} / {letters.length}
                    </p>
                </motion.div>

                {/* Floating hearts/letters */}
                <div className="relative h-96 md:h-[500px]">
                    {letters.map((letter, index) => {
                        const Icon = letter.icon;
                        const isDiscovered = discoveredLetters.has(letter.id);

                        return (
                            <motion.div
                                key={letter.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`absolute ${letter.position} cursor-pointer`}
                                onClick={() => handleLetterClick(letter)}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${letter.color} flex items-center justify-center shadow-lg`}
                                >
                                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />

                                    {/* Pulse ring */}
                                    {!isDiscovered && (
                                        <motion.div
                                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${letter.color} opacity-50`}
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    )}

                                    {/* Checkmark for discovered */}
                                    {isDiscovered && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                        >
                                            <span className="text-white text-xs">✓</span>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Letter Modal */}
                <AnimatePresence>
                    {openLetter && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setOpenLetter(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, rotateY: -90 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                exit={{ scale: 0.8, rotateY: 90 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                className="glass-effect rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setOpenLetter(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5 text-rose-700" />
                                </button>

                                {/* Letter content */}
                                <div className="text-center">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${openLetter.color} flex items-center justify-center shadow-lg`}
                                    >
                                        {(() => {
                                            const Icon = openLetter.icon;
                                            return <Icon className="w-10 h-10 text-white" />;
                                        })()}
                                    </motion.div>

                                    <h3 className="text-3xl font-bold text-deep-rose mb-4">
                                        {openLetter.title}
                                    </h3>

                                    <div className="relative">
                                        <p className="text-gray-700 leading-relaxed text-lg font-playfair italic">
                                            "{openLetter.message}"
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-rose-200">
                                        <p className="text-rose-600 font-semibold">With all my love,</p>
                                        <p className="text-deep-rose font-playfair text-xl">Abishek ❤️</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Completion message */}
                {discoveredLetters.size === letters.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 text-center"
                    >
                        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
                            <Sparkles className="w-12 h-12 mx-auto text-rose-gold mb-4 animate-pulse" />
                            <h3 className="text-2xl font-bold text-deep-rose mb-2">
                                You Found All The Letters! 💝
                            </h3>
                            <p className="text-gray-600">
                                Just like you've discovered all these messages, you've discovered all the love in my heart. Every word is true, every feeling is real.
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SurpriseLetter;
