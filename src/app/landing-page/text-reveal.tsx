"use client";

import { motion } from "framer-motion";

const TextReveal = ({ 
    text, 
    definedClass = ""
}: { 
    text: string, 
    definedClass: string 
}) => {

    // Sentence gives the instruction on the delay of the animation of each word
    const sentence = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.12 * i },
        }),
    };

    return (
        <motion.div
            className={definedClass}
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
        {text}
        </motion.div>
    );
};

export default TextReveal;