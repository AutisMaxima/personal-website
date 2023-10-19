import React from 'react';
import Hero from "@/components/Hero/Hero";

const Projects = () => {
    return (
        <>
            <Hero className="min-h-screen bg-base-300">
                <h1 className="text-center text-base-content font-semibold text-2xl lg:text-4xl">There are currently <span className="text-error">no</span> projects!</h1>
            </Hero>
        </>
    );
};

export default Projects;