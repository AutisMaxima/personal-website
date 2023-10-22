import React from 'react';
import Link from 'next/link';

const Projects = () => {
    return (
        // <>
        //     <Hero className="min-h-screen bg-base-300">
        //         <h1 className="text-center text-base-content font-semibold text-2xl lg:text-4xl">There are currently <span className="text-error">no</span> projects!</h1>
        //     </Hero>
        // </>
        <div className="mx-[10%] min-h-screen">
            <div className="my-[2.5%]"><h3 className="text-xl md:text-2xl lg:text-3xl text-emphasis text-base-content">Machine learning</h3></div>
            <div className="divider mb-[4%] text-base-content"></div>

            {/** New Cards */}
            <div className="card card-normal min-h-fit bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-base-content">
                        Address Standardisation on a flawed dataset
                        <div className="badge badge-secondary">NLP</div>
                    </h2>

                    <p className="text-base-content">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end text-primary-content">
                        <Link href="https://github.com/AutisMaxima/Address-Standardisation" className="btn btn-primary">GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;