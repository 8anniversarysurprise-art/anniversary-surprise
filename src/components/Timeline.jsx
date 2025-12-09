import { motion } from 'framer-motion';
import { School, MessageCircle, Heart, Sparkles, Calendar, Gift, Cake, Star } from 'lucide-react';

const Timeline = () => {
    const events = [
        {
            year: '2018',
            date: 'Before December',
            title: 'We Met in School',
            description: 'It all started when we were just students. Two hearts that would soon beat as one.',
            icon: School,
            color: 'from-pink-400 to-rose-400',
        },
        {
            year: 'Late 2018',
            date: 'Getting Closer',
            title: 'Talk, Talk, Talk',
            description: 'We were friends first. Endless conversations, shared laughs, and a connection that kept growing stronger each day.',
            icon: MessageCircle,
            color: 'from-rose-400 to-pink-500',
        },
        {
            year: 'December 12, 2018',
            date: 'The Big Day',
            title: 'We Became Official! 💕',
            description: 'The day that changed our lives forever. December 12th, 2018 - the beginning of our beautiful love story together.',
            icon: Heart,
            color: 'from-pink-500 to-rose-500',
        },
        {
            year: '2019-2024',
            date: 'Growing Together',
            title: 'Through All Seasons',
            description: 'Through every high and low, every challenge and celebration, we\'ve grown stronger together. 6 amazing years of love, laughter, and creating memories.',
            icon: Sparkles,
            color: 'from-rose-500 to-pink-600',
        },
        {
            year: 'December 12, 2025',
            date: 'Our 7th Anniversary!',
            title: '7 Years of Pure Love ✨',
            description: 'Today marks 7 incredible years since we became official! From that special day in 2018 to this moment in 2025, our love continues to bloom.',
            icon: Gift,
            color: 'from-pink-600 to-rose-600',
        },
        {
            year: 'Forever',
            date: 'Into the Future',
            title: 'Many More to Come',
            description: 'This is just the beginning. Here\'s to countless more anniversaries, adventures, and a lifetime of love ahead of us.',
            icon: Star,
            color: 'from-rose-600 to-purple-500',
        },
    ];

    return (
        <section className="py-12 md:py-20 px-4 mobile-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 md:mb-4">
                        Our Story
                    </h2>
                    <p className="text-base md:text-xl text-gray-600">The journey of us</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Mobile timeline line - vertical on left */}
                    <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-pink-200 via-rose-300 to-pink-200 block"></div>

                    {events.map((event, index) => {
                        const Icon = event.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`relative mb-8 md:mb-20 flex items-center ${
                                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Mobile layout - always left aligned */}
                                <div className="w-full md:w-5/12 pl-16 md:pl-0 md:pr-12 md:text-right">
                                    <div className={`md:${!isEven ? 'text-left pl-12 pr-0' : 'text-right pr-12 pl-0'}`}>
                                        <div className="glass-effect rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 mobile-card">
                                            <div className={`inline-block bg-gradient-to-r ${event.color} text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3`}>
                                                {event.year}
                                            </div>
                                            {event.date && (
                                                <div className="text-xs md:text-sm text-pink-600 font-medium mb-1 md:mb-2">
                                                    {event.date}
                                                </div>
                                            )}
                                            <h3 className="text-lg md:text-2xl font-bold text-deep-rose mb-2">
                                                {event.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Icon - left side for mobile, center for desktop */}
                                <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 top-4 md:top-auto">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg border-2 md:border-4 border-white`}
                                    >
                                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                    </motion.div>
                                </div>

                                {/* Spacer for desktop */}
                                <div className="hidden md:block w-5/12"></div>
                            </motion.div>
                        );
                    })}
                </div>
                
                {/* Enhanced Anniversary Counter */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-8 md:mt-16 text-center bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg mobile-card"
                >
                    <div className="flex flex-col md:flex-row justify-center items-center mb-4 gap-2 md:gap-0">
                        <Calendar className="w-6 h-6 md:w-8 md:h-8 text-pink-600 md:mr-3" />
                        <h3 className="text-lg sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent text-center">
                            December 12, 2018 → December 12, 2025
                        </h3>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-500 mb-2">7 Years</div>
                    <p className="text-sm md:text-lg text-gray-600 mb-4 px-2">
                        That's approximately <span className="font-bold text-pink-600">2,557 days</span> of love, 
                        laughter, and creating beautiful memories together
                    </p>
                    
                    {/* Mobile optimized grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-sm md:max-w-md mx-auto">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white rounded-lg p-2 md:p-3 shadow mobile-card"
                        >
                            <div className="text-xl md:text-2xl font-bold text-pink-600">7</div>
                            <div className="text-xs md:text-sm text-gray-600">Years</div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white rounded-lg p-2 md:p-3 shadow mobile-card"
                        >
                            <div className="text-xl md:text-2xl font-bold text-rose-600">84</div>
                            <div className="text-xs md:text-sm text-gray-600">Months</div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white rounded-lg p-2 md:p-3 shadow mobile-card"
                        >
                            <div className="text-xl md:text-2xl font-bold text-pink-600">2,557</div>
                            <div className="text-xs md:text-sm text-gray-600">Days</div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white rounded-lg p-2 md:p-3 shadow mobile-card"
                        >
                            <div className="text-xl md:text-2xl font-bold text-rose-600">∞</div>
                            <div className="text-xs md:text-sm text-gray-600">Love</div>
                        </motion.div>
                    </div>

                    {/* Mobile love message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 md:mt-6 p-3 md:p-4 bg-white/80 rounded-xl border border-pink-200"
                    >
                        <p className="text-sm md:text-base text-gray-700 italic">
                            "7 years ago, we chose each other. Today, we choose each other again. Forever and always. 💕"
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
