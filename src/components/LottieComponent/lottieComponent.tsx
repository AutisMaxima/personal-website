'use client'

import Lottie from "lottie-react";

const LottieComponent = (
    {
        animationData,
        className = "",
        loop = true
    }: {
        animationData: Object,
        className?: string,
        loop?: boolean 
    }
) => {
    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={loop}
            />
        </div>
    );
};

export default LottieComponent;