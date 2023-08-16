const Hero = ({
    imgurl,
    flex = "flex-col lg:flex-row",
    className = "",
    children
}: {
    imgurl?: string,
    flex?: string,
    className?: string,
    children: React.ReactNode
}) => {

    // Use JS logic outside the return statement

    let returnElement: React.JSX.Element = (
        <div className={`hero ${className}`}>
            <div className={`hero-content ${flex}`}>
                {children}
            </div>
        </div>
    );

    if (imgurl) {
        returnElement = (
            <div style={{ backgroundImage: `url(${imgurl})` }} className={`hero min-h-screen ${className}`}>
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