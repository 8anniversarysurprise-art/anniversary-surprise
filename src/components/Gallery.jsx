import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Gallery = () => {
    // Placeholder images - user will replace these later
    const photos = [
        {
            url: '/images/couple-photo-1.jpg',
            caption: 'Our first photo together',
        },
        {
            url: '/images/couple-photo-9.jpg',
            caption: 'Together forever',
        },
        {
            url: '/images/couple-photo-5.jpg',
            caption: 'Making memories',
        },
    ];

    return (
        <section className="py-12 md:py-20 px-4 mobile-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 md:mb-4">
                        Our Memories
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 mb-4 px-2">
                        Moments captured, love remembered
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer mobile-card hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="aspect-square overflow-hidden bg-gray-200">
                                <img
                                    src={photo.url}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Mobile-friendly overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4 md:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                                    <p className="text-sm md:text-lg font-semibold">{photo.caption}</p>
                                    <div className="mt-2 flex items-center text-xs md:text-sm text-pink-200">
                                        <Camera className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                        <span>Tap to view</span>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced heart icon with better mobile interaction */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                whileTap={{ scale: 1.2 }}
                                className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <Camera className="w-3 h-3 md:w-5 md:h-5 text-rose-gold" />
                                </motion.div>
                            </motion.div>

                            {/* Mobile love indicator */}
                            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    >
                                        ❤️
                                    </motion.div>
                                    <span className="hidden md:inline">Love this!</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile-specific call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 md:mt-12 text-center"
                >
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 md:p-6 border border-pink-200 max-w-lg mx-auto">
                        <p className="text-sm md:text-base text-gray-600 mb-2">
                            "Every photo tells a story of our beautiful journey together 📸"
                        </p>
                        <div className="flex justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.span
                                    key={i}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                                    className="text-pink-500"
                                >
                                    ❤️
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
