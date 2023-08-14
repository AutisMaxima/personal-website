import { Fragment } from "react";

const Hero = ({
    imgurl,
    flex = "flex-col lg:flex-row",
    definedClass = "",
    children
}: {
    imgurl?: string,
    flex?: string,
    definedClass?: string,
    children: React.ReactNode
}) => {

    // Use JS logic outside the return statement

    let returnElement: React.JSX.Element = (
        <div className={`hero ${definedClass}`}>
            <div className={`hero-content ${flex}`}>
                {children}
            </div>
        </div>
    );

    if (imgurl) {
        returnElement = (
            <div style={{ backgroundImage: `url(${imgurl})` }} className={`hero min-h-screen ${definedClass}`}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className={`hero-content ${flex}`}>
                    {children}
                </div>
            </div>
        );
    }

    return returnElement;
};

export default Hero;