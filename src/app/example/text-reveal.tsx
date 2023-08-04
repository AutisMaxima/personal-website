"use client";

import { motion } from "framer-motion";

const TextReveal = ({ text }: { text: String }) => {

    // Split text into and array of words
    const characters = text.split("");

    // Sentence gives the instruction on the delay of the animation of each word
    const sentence = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    // Letter does the main animation
    const letter = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 50,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 50,
            },
        },
    };

    return (
        <motion.h1
            className="m-0 p-0 text-6xl sm:text-8xl md:text-10xl lg:text-12xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-sans font-semibold tracking-tighter leading-none"
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {characters.map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default TextReveal;