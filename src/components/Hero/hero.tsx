const Hero = ({
    imgurl,
    background,
    flex = "flex-col lg:flex-row",
    className = "min-h-screen",
    children
}: {
    imgurl?: string,
    background?: JSX.Element
    flex?: string,
    className?: string,
    children: React.ReactNode
}) => {

    // Use JS logic outside the return statement

    let returnElement = (
        <div className={`hero ${className}`}>
            <div className={`hero-content ${flex}`}>
                {children}
            </div>
        </div>
    );

    if (imgurl) {
        returnElement = (
            <div style={{ backgroundImage: `url(${imgurl})` }} className={`hero ${className}`}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className={`hero-content ${flex}`}>
                    {children}
                </div>
            </div>
        );
    }
    else if (background) {
        returnElement = (
            <div className={`hero ${className}`}>
                {background}
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