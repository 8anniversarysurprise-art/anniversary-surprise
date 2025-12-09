import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Star, Smile, Crown } from 'lucide-react';

const LoveNotes = () => {
    const notes = [
        {
            icon: Heart,
            title: 'More Loved, More Happy',
            description: 'With you, I feel more loved and happier than I ever thought possible. You bring joy to every moment.',
            gradient: 'from-pink-400 to-rose-400',
        },
        {
            icon: Sparkles,
            title: 'My Motivation',
            description: 'I want to achieve everything for you. You inspire me to be better, to do more, to reach higher.',
            gradient: 'from-rose-400 to-pink-500',
        },
        {
            icon: Star,
            title: 'Loved Me When I Had Nothing',
            description: 'You loved me when I had nothing. Now I\'m good enough, and it\'s all because you believed in me.',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            icon: Users,
            title: 'Our Connection',
            description: 'I don\'t know how, but we have so much connection. It\'s like we were meant to find each other.',
            gradient: 'from-rose-500 to-pink-600',
        },
        {
            icon: Smile,
            title: 'No Ego Between Us',
            description: 'When we fight, we always come back to each other. No ego, just love. That\'s what makes us special.',
            gradient: 'from-pink-600 to-rose-600',
        },
        {
            icon: Crown,
            title: 'Beautiful Inside & Out',
            description: 'You\'re beautiful outside and inside. I want my life with you fully, every single day.',
            gradient: 'from-rose-600 to-pink-700',
        },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-soft-pink to-pink-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                        Why I Love You
                    </h2>
                    <p className="text-xl text-gray-600">Every reason, every moment, every heartbeat</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {notes.map((note, index) => {
                        const Icon = note.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <div className="glass-effect rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    {/* Background gradient on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${note.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${note.gradient} flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-deep-rose mb-4 relative z-10">
                                        {note.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed relative z-10">
                                        {note.description}
                                    </p>

                                    {/* Decorative element */}
                                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Heart className="w-24 h-24 text-rose-gold" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom message */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
                        <Heart className="w-12 h-12 mx-auto text-rose-gold mb-4 animate-pulse" />
                        <p className="text-2xl font-playfair text-deep-rose italic">
                            "Every day with you is a blessing. Here's to forever together."
                        </p>
                        <p className="text-lg text-gray-600 mt-4">- Abishek</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LoveNotes;
