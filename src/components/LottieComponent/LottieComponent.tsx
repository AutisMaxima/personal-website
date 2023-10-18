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
        <Lottie
            animationData={animationData}
            className={className}
            loop={loop}
        />
    );
};

export default LottieComponent;