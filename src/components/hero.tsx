const Hero = ({
    height = "min-h-screen",
    colour = "bg-secondary",
    children
}: {
    height?: string,
    colour?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={`hero ${height} ${colour} max-h-fit`}>
            <div className="hero-content flex-col lg:flex-row">
                {children}
            </div>
        </div>
    );
};

export default Hero;