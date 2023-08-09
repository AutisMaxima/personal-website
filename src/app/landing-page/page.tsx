import TextReveal from "./text-reveal";

const LandingPage = () => {

    const backgroundImgArr = [
        'https://daisyui.com/images/stock/photo-1507358522600-9f71eß620c44e.jpg',
        './milan.jpg'
    ];

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImgArr[Math.floor(Math.random() * backgroundImgArr.length)]})` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-peimary-content">
                <div className="max-w-md">
                    <TextReveal text="Hello There" definedClass="mb-5 text-5xl font-bold" />
                    <TextReveal text="Weclome to my website. Come, take a seat and explore!" definedClass="mb-5 text-lg" />
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;