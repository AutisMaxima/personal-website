import React from 'react';
import Link from 'next/link';

import CloudIcon from '@heroicons/react/20/solid/esm/CloudIcon';

const Projects = () => {
    return (
        <div className="mx-[10%] min-h-screen">
            <div className="my-[2.5%]"><h3 className="text-xl md:text-2xl lg:text-3xl text-emphasis text-base-content">Machine learning</h3></div>
            <div className="divider mb-[4%] text-base-content"></div>

            {/** Address Standardisation */}
            <div className="card card-normal min-h-fit bg-base-100 shadow-xl mb-[4%]">
                <div className="card-body">
                    <h2 className="card-title text-base-content text-base md:text-lg lg:text-xl">
                        Address Standardisation on a flawed dataset
                    </h2>

                    <p className="text-base-content text-sm md:text-base lg:text-lg">Implementing the T5 sequence-to-sequence model on an imperfect dataset of Indonesian Addresses.</p>
                    <div className="card-actions justify-end text-primary-content">
                        <Link href="https://github.com/AutisMaxima/Address-Standardisation" className="btn btn-primary btn-sm md:btn-md lg:btn-lg">
                            <span><CloudIcon className="w-6 h-6" /></span>
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/** Accent Recognition  */}
            <div className="card card-normal min-h-fit bg-base-100 shadow-xl mb-[4%]">
                <div className="card-body">
                    <h2 className="card-title text-base-content text-base md:text-lg lg:text-xl">
                        Speaker Accent Recognition
                    </h2>

                    <p className="text-base-content text-sm md:text-base lg:text-lg">Investigating linear seperability on a dataset of accents with various techniques such as PCA and kernels.</p>
                    <div className="card-actions justify-end text-primary-content">
                        <Link href="https://github.com/AutisMaxima/accent-recognition" className="btn btn-primary btn-sm md:btn-md lg:btn-lg">
                            <span><CloudIcon className="w-6 h-6" /></span>
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="my-[2.5%]"><h3 className="text-xl md:text-2xl lg:text-3xl text-emphasis text-base-content">C++</h3></div>
            <div className="divider mb-[4%] text-base-content"></div>
        </div>
    );
};

export default Projects;