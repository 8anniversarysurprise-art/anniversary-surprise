import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, CheckCircle, XCircle, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const LoveQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [answered, setAnswered] = useState(false);

    const questions = [
        {
            question: "Where did we first meet?",
            options: ["School", "Park", "Mall", "Online"],
            correct: 0,
            funFact: "In 10th grade! That's where our beautiful story began. 📚"
        },
        {
            question: "What happened the day after I confessed my love?",
            options: ["You said no", "You said yes!", "You didn't respond", "You laughed"],
            correct: 1,
            funFact: "You said YES! That was the happiest day of my life! 💕"
        },
        {
            question: "How many years have we been together?",
            options: ["5 years", "6 years", "7 years", "8 years"],
            correct: 2,
            funFact: "7 amazing years! And counting... ❤️"
        },
        {
            question: "What's special about December 12?",
            options: ["My birthday", "Your birthday", "Our anniversary", "Random date"],
            correct: 2,
            funFact: "Our anniversary! December 12, 2018 - the day we officially became 'us'. 🎉"
        },
        {
            question: "What do we do when we fight?",
            options: ["Stay angry", "Break up", "Talk it out with no ego", "Ignore each other"],
            correct: 2,
            funFact: "We always come back to each other with no ego. That's what makes us special! 💑"
        },
        {
            question: "Do you feel happy with me?",
            options: ["Yes", "of course", "Absolutely", "All of the above"],
            correct: 0,
            funFact: "unnaku vera options ey ill natha last varaikom d vennamavaeley!"
        }
    ];

    const handleAnswer = (answerIndex) => {
        setSelectedAnswer(answerIndex);

        setTimeout(() => {
            if (answerIndex === questions[currentQuestion].correct) {
                setScore(score + 1);
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#B76E79', '#FFF0F3', '#8B4C5C', '#FFB6C1'],
                });
            }

            setTimeout(() => {
                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedAnswer(null);
                } else {
                    setShowResult(true);
                    if (score + (answerIndex === questions[currentQuestion].correct ? 1 : 0) === questions.length) {
                        // Perfect score celebration
                        confetti({
                            particleCount: 200,
                            spread: 100,
                            origin: { y: 0.5 },
                            colors: ['#B76E79', '#FFF0F3', '#8B4C5C', '#FFB6C1'],
                        });
                    }
                }
            }, 2000);
        }, 500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setQuizStarted(false);
    };

    if (!quizStarted) {
        return (
            <section className="py-12 md:py-20 px-4 mobile-padding bg-gradient-to-br from-pink-50 to-soft-pink">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center glass-effect rounded-2xl p-6 md:p-8 shadow-lg mobile-card"
                    >
                        <motion.div
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Heart className="w-16 h-16 md:w-20 md:h-20 mx-auto text-rose-gold mb-4 md:mb-6" />
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 md:mb-4">
                            Our Love Story Quiz
                        </h2>
                        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 px-2">
                            How well do you remember our journey together? 💕
                        </p>
                        <div className="space-y-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setQuizStarted(true)}
                                className="bg-gradient-to-r from-rose-gold to-deep-rose text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] min-w-[150px]"
                            >
                                Start Quiz 🎯
                            </motion.button>
                            <p className="text-sm text-gray-500 italic">
                                "Test your memory of our beautiful journey!" ✨
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    if (showResult) {
        const finalScore = score;
        const percentage = (finalScore / questions.length) * 100;
        let message = "";

        if (percentage === 100) {
            message = "PERFECT! You remember everything! Our love story is written in your heart just as it's written in mine. 💝";
        } else if (percentage >= 80) {
            message = "Amazing! You remember our story so well. Every moment with you is unforgettable. 💕";
        } else if (percentage >= 60) {
            message = "Good job! Our memories together are precious, and I love that you remember them. ❤️";
        } else {
            message = "That's okay! What matters is that we're creating new memories every single day. I love you! 💖";
        }

        return (
            <section className="py-12 md:py-20 px-4 mobile-padding bg-gradient-to-br from-pink-50 to-soft-pink">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 text-center shadow-2xl mobile-card"
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Trophy className="w-16 h-16 md:w-24 md:h-24 mx-auto text-rose-gold mb-4 md:mb-6" />
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-3 md:mb-4">
                            Quiz Complete!
                        </h2>
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-deep-rose mb-4 md:mb-6">
                            {finalScore} / {questions.length}
                        </div>
                        
                        {/* Score visualization */}
                        <div className="mb-4 md:mb-6">
                            <div className="flex justify-center space-x-1 mb-3">
                                {[...Array(questions.length)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                                            i < finalScore ? 'bg-green-500' : 'bg-gray-300'
                                        }`}
                                    >
                                        {i < finalScore ? '❤️' : '🤍'}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-sm md:text-base text-gray-600">
                                {Math.round(percentage)}% Perfect!
                            </div>
                        </div>
                        
                        <div className="bg-pink-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-pink-200">
                            <p className="text-sm md:text-xl text-gray-700 font-playfair italic leading-relaxed">
                                "{message}"
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={resetQuiz}
                                className="bg-gradient-to-r from-rose-gold to-deep-rose text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
                            >
                                Play Again 🔄
                            </motion.button>
                            <p className="text-xs md:text-sm text-gray-500">
                                "Every answer shows how much we mean to each other!" 💕
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    const question = questions[currentQuestion];

    return (
        <section className="py-12 md:py-20 px-4 mobile-padding bg-gradient-to-br from-pink-50 to-soft-pink">
            <div className="max-w-4xl mx-auto">
                {/* Enhanced Progress */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 md:mb-8 glass-effect rounded-xl p-4 md:p-6 shadow-lg mobile-card"
                >
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm md:text-base text-gray-600 font-medium">
                            Question {currentQuestion + 1} of {questions.length}
                        </span>
                        <span className="text-sm md:text-base text-gray-600 font-medium flex items-center gap-1">
                            Score: <span className="text-rose-600 font-bold">{score}</span> ❤️
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-gradient-to-r from-rose-gold to-deep-rose h-3 md:h-4 rounded-full shadow-sm"
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-500">
                        <span>Start</span>
                        <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
                        <span>Finish</span>
                    </div>
                </motion.div>

                {/* Enhanced Question Section */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl mobile-card"
                    >
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-deep-rose mb-6 md:mb-8 text-center leading-tight"
                        >
                            {question.question}
                        </motion.h3>

                        <div className="space-y-3 md:space-y-4">
                            {question.options.map((option, index) => {
                                const isSelected = selectedAnswer === index;
                                const isCorrect = index === question.correct;
                                const showFeedback = selectedAnswer !== null;

                                return (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        whileHover={{ scale: selectedAnswer === null ? 1.02 : 1, x: selectedAnswer === null ? 4 : 0 }}
                                        whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                                        onClick={() => selectedAnswer === null && handleAnswer(index)}
                                        disabled={selectedAnswer !== null}
                                        className={`w-full p-3 md:p-4 rounded-xl text-left font-semibold transition-all duration-300 min-h-[48px] ${showFeedback
                                                ? isCorrect
                                                    ? 'bg-green-100 border-2 border-green-500 text-green-700 shadow-lg transform scale-105'
                                                    : isSelected
                                                        ? 'bg-red-100 border-2 border-red-500 text-red-700'
                                                        : 'bg-white border-2 border-gray-200 text-gray-400'
                                                : 'bg-white border-2 border-gray-200 hover:border-rose-gold hover:bg-rose-50 text-gray-700 hover:shadow-lg'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm md:text-base flex-1 pr-2">{option}</span>
                                            {showFeedback && isCorrect && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                                                </motion.div>
                                            )}
                                            {showFeedback && isSelected && !isCorrect && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0" />
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Enhanced Fun fact */}
                        {selectedAnswer !== null && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 md:mt-6 p-3 md:p-4 bg-rose-50 rounded-xl border-2 border-rose-200 mobile-card"
                            >
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="text-lg md:text-xl flex-shrink-0">💡</span>
                                    <p className="text-rose-700 font-playfair italic text-sm md:text-base leading-relaxed">
                                        {question.funFact}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default LoveQuiz;
