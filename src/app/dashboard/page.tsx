import { Fragment } from "react";
import FadeInWhenVisible from "@/components/animations/fadeInWhenVisible";

import Carousel from "@/components/carousel/carousel";
import Hero from "@/components/hero";
import Image from "next/image";

// Image array
const imageArray = [
    {
        src: "/duomo-side.jpg",
        alt: "Duomo Side",
        width: 400,
        height: 400,
        href: "https://google.com/"
    },
    {
        src: "/duomo-road.jpg",
        alt: "Duomo Road",
        width: 400,
        height: 400,
        href: "https://youtube.com/"
    },
    {
        src: "/milan.jpg",
        alt: "Milan City Centre",
        width: 400,
        height: 400,
        href: "https://bing.com/"
    }
];

const Dashboard = () => {
    return (
        <Fragment>
            <Hero imgurl="/studying-girl.webp">
                <h1 className="text-gray-200 text-4xl lg:text-8xl">Hello There!</h1>
                <div className="flex-col">
                    <p className="text-gray-200">Sentence 1</p>
                    <p className="text-gray-200">Sentence 2</p> 
                </div>
            </Hero>
            <Hero
                definedClass="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-gradient-to-br from-pink-600 from-10% to-base-100 to-90% h-[48rem]"
            >
                <Image
                    alt="some picture"
                    src="/milan.jpg"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl"
                />
                <FadeInWhenVisible>
                    <h1 className="text-5xl text-gray-200 font-bold text-right">About</h1>
                    <p className="py-6 text-right text-gray-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </FadeInWhenVisible>
            </Hero>
            <Hero
                definedClass="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-gradient-to-bl from-teal-500 from-10% to-base-100 to-90% h-[48rem]"
            >
                <FadeInWhenVisible>
                    <h1 className="text-5xl text-gray-200 font-bold">Maybe a bit about the university</h1>
                    <p className="py-6 text-gray-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </FadeInWhenVisible>
                <Image
                    alt="some picture"
                    src="/milan.jpg"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl"
                />
            </Hero>
            <Hero
                flex="flex-col"
                definedClass="px-1 md:px-3 lg:px-5 py-1 md:py-3 lg:py-5 bg-gradient-to-br from-cyan-400 from-10% to-info-content to-90% h-[48rem]"
            >
                <FadeInWhenVisible>
                    <h1 className="text-5xl text-gray-200 font-bold text-center">Where to begin?</h1>
                    <p className="py-6 text-gray-200">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </FadeInWhenVisible>
                <Carousel isLinked={true} height="h-96" carouselItems={imageArray} />
            </Hero>
        </Fragment>
    );
};

export default Dashboard;