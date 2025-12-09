import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const startDate = new Date('2018-12-12T00:00:00');

        const updateCounter = () => {
            const now = new Date();
            const diff = now - startDate;

            setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
        };

        updateCounter();
        const interval = setInterval(updateCounter, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden mobile-hero">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-soft-pink via-pink-100 to-rose-100">
                <motion.div
                    className="absolute inset-0 opacity-20 md:opacity-30"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle, #B76E79 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                    // className="md:bg-[length:50px_50px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 mobile-padding max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-6 md:mb-8"
                >
                    <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-rose-gold mb-4 animate-pulse" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gradient mb-3 md:mb-4 leading-tight"
                >
                    <span className="block sm:inline">Abishek</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block sm:inline mx-2 text-rose-500">
                        &
                    </span>
                    <span className="block sm:inline">Lipika</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-deep-rose mb-8 md:mb-12 font-light px-2"
                >
                    <span className="block md:inline">7 Years of</span> <span className="block md:inline font-medium">Togetherness</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="glass-effect rounded-2xl p-4 md:p-8 max-w-3xl mx-auto shadow-2xl mobile-card"
                >
                    <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">We've been together for:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            { label: 'Days', value: days },
                            { label: 'Hours', value: hours },
                            { label: 'Minutes', value: minutes },
                            { label: 'Seconds', value: seconds },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                className="bg-gradient-to-br from-rose-gold to-deep-rose rounded-xl p-3 md:p-4 text-white shadow-lg transform hover:scale-105 transition-transform duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 leading-none">
                                    {item.value.toLocaleString()}
                                </div>
                                <div className="text-xs sm:text-sm md:text-base opacity-90">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Mobile-specific love message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="mt-4 md:mt-6 p-3 md:p-4 bg-pink-50 rounded-lg border border-pink-200"
                    >
                        <p className="text-sm md:text-base text-gray-700 italic">
                            "Every second with you feels like a gift! 💕"
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-8 md:mt-12 px-4"
                >
                    <p className="text-sm md:text-base text-gray-500 italic">December 12, 2018 - December 12, 2025</p>
                    <div className="mt-2 flex justify-center">
                        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                            ❤️ 7 Years of Love ❤️
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-rose-gold rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-rose-gold rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
