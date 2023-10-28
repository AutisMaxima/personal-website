'use client'

import FadeInWhenVisible from "../motions/fadeInWhenVisible/fadeInWhenVisible";
import Hero from "../components/Hero/hero";
import ParticleBackground from "../components/Particles/ParticlesBackground/particlesBackground";
import LottieComponent from "../components/LottieComponent/lottieComponent";

import { motion } from "framer-motion";

import Person from "../assets/person.json";
import Content from "../assets/content.json";

// Image array
// const imageArray = [
//     {
//         src: "/images/duomo-side.jpg",
//         alt: "Duomo Side",
//         width: 400,
//         height: 400,
//         href: "https://google.com/"
//     },
//     {
//         src: "/images/duomo-road.jpg",
//         alt: "Duomo Road",
//         width: 400,
//         height: 400,
//         href: "https://youtube.com/"
//     },
//     {
//         src: "/images/milan.jpg",
//         alt: "Milan City Centre",
//         width: 400,
//         height: 400,
//         href: "https://bing.com/"
//     }
// ];

const fadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

const staggered = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        },
    }
};

const Home = () => {
    return (
        <div className="max-w-[100vw]">
            <Hero flex="flex-col" background={<ParticleBackground />} className="min-h-screen text-neutral-content">
                <FadeInWhenVisible>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Hello <span className="text-error">There</span></h1>
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">Welcome back</h3>
                </FadeInWhenVisible>
            </Hero>
            <Hero
                className="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-base-300 min-h-[40rem]"
            >
                <LottieComponent
                    animationData={Person}
                    className="flex justify-center items-center"
                    loop={true}
                />
                <motion.div variants={staggered} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h1 variants={fadeIn} transition={{ duration: 1 }} className="text-4xl lg:text-5xl font-bold text-center lg:text-right text-base-content">About <span className="text-primary">Me</span></motion.h1>
                    <motion.p variants={fadeIn} transition={{ duration: 1 }} className="py-3 lg:py-6 text-center lg:text-right text-base-content">
                        I am a passionate fourth year computer science student at the University of Warwick,
                        exploring the realms of technology and innovation. By exploring, I mean trying out
                        new stuff which I find interesting. As you can probably already tell, the first sentence
                        was generated by ChatGPT.
                    </motion.p>
                </motion.div>
            </Hero>
            <Hero
                className="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-neutral min-h-[40rem]"
            >
                <motion.div variants={staggered} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h1 variants={fadeIn} transition={{ duration: 1 }} className="text-4xl lg:text-5xl font-bold text-center lg:text-left text-neutral-content">My <span className="text-secondary">Content</span></motion.h1>
                    <motion.p variants={fadeIn} transition={{ duration: 1 }} className="py-3 lg:py-6 text-center lg:text-left text-neutral-content">
                        I post most of my personal projects and some notes here.
                        I experiment with different frontend and backend features here as well.
                    </motion.p>
                </motion.div>
                <LottieComponent
                    animationData={Content}
                    className="flex justify-center items-center"
                    loop={true}
                />
            </Hero>
        </div>
    );
};

export default Home;