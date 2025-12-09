import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Lock, Unlock, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const SecretPhotos = () => {
    const [unlockedPhotos, setUnlockedPhotos] = useState(new Set());
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const secretPhotos = [
        {
            id: 1,
            locked: '/images/couple-photo-10.jpg',
            unlocked: '/images/couple-photo-10.jpg',
            hint: 'Tap to reveal our magic ✨',
            message: 'A snapshot of our beautiful journey… ❤️',
            secret: 'Every time I see this, I fall in love with you all over again.'
        },
        {
            id: 2,
            locked: '/images/couple-photo-3.jpg',
            unlocked: '/images/couple-photo-3.jpg',
            hint: 'Tap to reveal',
            message: 'Our happiest moments together 🌟',
            secret: 'Every second with you is a treasure!',
        },
        {
            id: 3,
            locked: '/images/couple-photo-6.jpg',
            unlocked: '/images/couple-photo-6.jpg',
            hint: 'Click me!',
            message: 'A special memory 💖',
            secret: 'This day was perfect because I was with you!',
        },
        {
            id: 4,
            locked: '/images/couple-photo-8.jpg',
            unlocked: '/images/couple-photo-8.jpg',
            hint: 'Unlock me',
            message: 'Forever in my heart ❤️',
            secret: 'HAHAHA !',
        },
    ];

    const handleUnlock = (photo) => {
        if (!unlockedPhotos.has(photo.id)) {
            setUnlockedPhotos(new Set([...unlockedPhotos, photo.id]));
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#B76E79', '#FFF0F3', '#8B4C5C'],
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#B76E79', '#FFF0F3', '#8B4C5C'],
            });
        }
        setSelectedPhoto(photo);
    };

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                        Secret Memories
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                        Click the locked photos to reveal special moments 🔓
                    </p>
                    <p className="text-sm text-gray-500">
                        Unlocked: {unlockedPhotos.size} / {secretPhotos.length}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {secretPhotos.map((photo, index) => {
                        const isUnlocked = unlockedPhotos.has(photo.id);

                        return (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group cursor-pointer"
                                onClick={() => handleUnlock(photo)}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                                >
                                    {/* Photo */}
                                    <img
                                        src={isUnlocked ? photo.unlocked : photo.locked}
                                        alt={photo.message}
                                        className={`w-full h-full object-cover transition-all duration-500 ${!isUnlocked ? 'blur-lg grayscale' : ''
                                            }`}
                                    />

                                    {/* Lock overlay */}
                                    {!isUnlocked && (
                                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <Lock className="w-12 h-12 text-white mb-2" />
                                            </motion.div>
                                            <p className="text-white text-sm font-semibold">{photo.hint}</p>
                                        </div>
                                    )}

                                    {/* Unlocked indicator */}
                                    {isUnlocked && (
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            className="absolute top-2 right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            <Unlock className="w-5 h-5 text-white" />
                                        </motion.div>
                                    )}

                                    {/* Hover message */}
                                    {isUnlocked && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <p className="text-white text-sm font-semibold">{photo.message}</p>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Photo Modal */}
                <AnimatePresence>
                    {selectedPhoto && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                className="relative max-w-2xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedPhoto.unlocked}
                                    alt={selectedPhoto.message}
                                    className="w-full rounded-2xl shadow-2xl"
                                />
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-6 glass-effect rounded-2xl p-6 text-center"
                                >
                                    <Heart className="w-8 h-8 mx-auto text-rose-gold mb-3 animate-pulse" />
                                    <p className="text-xl font-playfair italic text-deep-rose mb-2">
                                        "{selectedPhoto.secret}"
                                    </p>
                                    <p className="text-gray-600">{selectedPhoto.message}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* All unlocked message */}
                {unlockedPhotos.size === secretPhotos.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 text-center"
                    >
                        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto shadow-xl bg-gradient-to-br from-rose-50 to-pink-50">
                            <Heart className="w-12 h-12 mx-auto text-rose-gold mb-4 animate-bounce" />
                            <h3 className="text-2xl font-bold text-deep-rose mb-2">
                                All Memories Unlocked! 🎉
                            </h3>
                            <p className="text-gray-600 font-playfair italic">
                                "Just like these photos, my love for you is no longer a secret. It's out in the open, for the whole world to see. I love you, Lipika!"
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SecretPhotos;
