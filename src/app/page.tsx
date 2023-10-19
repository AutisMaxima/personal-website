import FadeInWhenVisible from "@/motions/fadeInWhenVisible/fadeInWhenVisible";
import Hero from "@/components/Hero/Hero";
import ParticleBackground from "@/components/Particles/ParticlesBackground/ParticlesBackground";

import LottieComponent from "@/components/LottieComponent/LottieComponent";
import Person from "../assets/person.json";
import Content from "../assets/content.json";

// Image array
const imageArray = [
    {
        src: "/images/duomo-side.jpg",
        alt: "Duomo Side",
        width: 400,
        height: 400,
        href: "https://google.com/"
    },
    {
        src: "/images/duomo-road.jpg",
        alt: "Duomo Road",
        width: 400,
        height: 400,
        href: "https://youtube.com/"
    },
    {
        src: "/images/milan.jpg",
        alt: "Milan City Centre",
        width: 400,
        height: 400,
        href: "https://bing.com/"
    }
];

const Home = () => {
    return (
        <div className="max-w-[100vw]">
            {/* <Hero flex="flex-col" imgurl="/studying-girl.webp" className="text-neutral-content"> */}
            <Hero flex="flex-col" background={<ParticleBackground />} className="min-h-screen text-neutral-content">
                <FadeInWhenVisible>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Hello <span className="text-error">There</span></h1>
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">Welcome back</h3>
                </FadeInWhenVisible>
            </Hero>
            <Hero
                className="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-base-300 h-[40rem]"
            >
                <LottieComponent
                    animationData={Person}
                    className="flex justify-center items-center"
                    loop={true}
                />
                <FadeInWhenVisible>
                    <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-right text-base-content">About <span className="text-primary">Me</span></h1>
                    <p className="py-3 lg:py-6 text-center lg:text-right text-base-content">
                        I am a passionate fourth year computer science student at the University of Warwick,
                        exploring the realms of technology and innovation. By exploring, I mean trying out
                        new stuff which I find interesting. As you can probably already tell, the first sentence
                        was generated by ChatGPT.
                    </p>
                </FadeInWhenVisible>
            </Hero>
            <Hero
                className="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-neutral h-[40rem]"
            >
                <FadeInWhenVisible>å
                    <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left text-neutral-content">My <span className="text-secondary">Content</span></h1>
                    <p className="py-3 lg:py-6 text-center lg:text-left text-neutral-content">
                        I post most of my personal projects and some notes here.
                        I experiment with different frontend and backend features here as well.
                    </p>
                </FadeInWhenVisible>
                <LottieComponent
                    animationData={Content}
                    className="flex justify-center items-center"
                    loop={true}
                />
            </Hero>
            {/* <Hero
                flex="flex-col"
                className="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-base-300 max-h-fit"
            >
                <FadeInWhenVisible>
                    <h1 className="text-3xl lg:text-5xl font-bold text-center text-base-content">Where to begin?</h1>
                    <p className="py-3 lg:py-6 text-base-content">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </FadeInWhenVisible>
            </Hero> */}
        </div>
    );
};

export default Home;