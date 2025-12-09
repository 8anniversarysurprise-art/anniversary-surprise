import { motion } from 'framer-motion';
import { Music, Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const spotifyUrl = 'https://open.spotify.com/search/konjam%20un%20kadhalal%20ms%20dhoni';

    return (
        <section className="py-12 md:py-20 px-4 mobile-padding bg-gradient-to-br from-pink-50 to-soft-pink">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 md:mb-4">
                        Our Song
                    </h2>
                    <p className="text-base md:text-xl text-gray-600">The melody of our love</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-3 rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden mobile-card"
                >
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-5 md:opacity-10">
                        <motion.div
                            animate={{
                                scale: isPlaying ? [1, 1.2, 1] : 1,
                                rotate: isPlaying ? 360 : 0,
                            }}
                            transition={{
                                duration: 3,
                                repeat: isPlaying ? Infinity : 0,
                                ease: 'linear',
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-rose-gold to-deep-rose rounded-full blur-3xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Enhanced Music icon */}
                        <motion.div
                            animate={{
                                rotate: isPlaying ? [0, 5, -5, 0] : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: isPlaying ? Infinity : 0,
                            }}
                            className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 bg-gradient-to-br from-rose-gold to-deep-rose rounded-full flex items-center justify-center shadow-xl"
                        >
                            <Music className="w-8 h-8 md:w-12 md:h-12 text-white" />
                        </motion.div>

                        {/* Enhanced Song info */}
                        <div className="text-center mb-6 md:mb-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-rose mb-2">
                                Konjam Un Kadhalal
                            </h3>
                            <p className="text-gray-600 text-sm md:text-lg mb-2">
                                From M.S. Dhoni: The Untold Story
                            </p>
                            <p className="text-gray-500 text-xs md:text-sm">
                                By Pa. Vijay
                            </p>
                        </div>

                        {/* Enhanced Music Player Section */}
                        <div className="mb-4 md:mb-6 space-y-3 md:space-y-4">
                            {/* Enhanced Search Instructions */}
                            <div className="glass-effect rounded-xl p-4 md:p-6 text-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 mobile-card">
                                <h4 className="text-base md:text-lg font-semibold text-deep-rose mb-2 md:mb-3">
                                    🎵 Listen to Our Song
                                </h4>
                                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                                    Search for "Konjam Un Kadhalal" from M.S. Dhoni: The Untold Story on your favorite music platform
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://open.spotify.com/search/konjam%20un%20kadhalal%20ms%20dhoni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg min-h-[48px]"
                                    >
                                        🎵 Spotify
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://music.youtube.com/search?q=konjam+un+kadhalal+ms+dhoni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg min-h-[48px]"
                                    >
                                        🎵 YouTube Music
                                    </motion.a>
                                </div>
                            </div>

                            {/* Mobile-optimized YouTube Video Player */}
                            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
                                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/CmdKbiI0kdE"
                                        title="Konjam Un Kadhalal - M.S. Dhoni: The Untold Story"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '12px' }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Personal Message Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="glass-effect rounded-2xl p-4 md:p-6 mb-4 md:mb-6 bg-gradient-to-br from-rose-50/50 to-pink-50/50 mobile-card"
                        >
                            <h4 className="text-lg md:text-xl font-bold text-deep-rose mb-3 text-center">
                                Why This Song is Special to Us
                            </h4>
                            <div className="space-y-2 md:space-y-3 text-gray-600 text-center">
                                <p className="font-playfair italic text-sm md:text-base">
                                    "This song captures the essence of our love story..."
                                </p>
                                <p className="text-sm md:text-base leading-relaxed">
                                    Every time I hear this melody, it reminds me of the moments we've shared,
                                    the laughter, the dreams, and the beautiful journey we're on together.
                                </p>
                                <div className="bg-pink-100 rounded-lg p-3 mt-3">
                                    <p className="text-rose-gold font-semibold text-sm md:text-base">
                                        💕 Our love grows stronger with each passing day 💕
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Enhanced Spotify button */}
                        <motion.div
                            className="flex justify-center mb-6"
                        >
                            <motion.a
                                href={spotifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-gold to-deep-rose text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] text-sm md:text-base"
                            >
                                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                                Search on Spotify
                            </motion.a>
                        </motion.div>

                        {/* Enhanced Decorative notes */}
                        <div className="mt-6 md:mt-8 flex justify-center gap-2 md:gap-4">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: isPlaying ? [0, -10, 0] : 0,
                                        opacity: isPlaying ? [0.3, 1, 0.3] : 0.3,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: isPlaying ? Infinity : 0,
                                        delay: i * 0.2,
                                    }}
                                    className="text-rose-gold text-lg md:text-2xl"
                                >
                                    ♪
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Enhanced Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 md:mt-12 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg mobile-card"
                >
                    <div className="flex justify-center mb-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg md:text-xl">💕</span>
                        </div>
                    </div>
                    <p className="text-base md:text-xl font-playfair text-deep-rose italic leading-relaxed">
                        "Every time I hear this song, I think of you"
                    </p>
                    <div className="mt-3 text-xs md:text-sm text-gray-500">
                        - Our Forever Melody 🎵
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MusicPlayer;
