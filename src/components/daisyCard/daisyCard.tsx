import Image from "next/image";

const DaisyCard = ({
    key = 0,
    title = "Some title",
    text = "Some text",
    imgSpecs,
    buttonText
} : {
    key: number,
    title: string,
    text: string,
    imgSpecs: {
        src: string,
        alt: string,
        width: number,
        height: number
    },
    buttonText?: string,
}) => {
    return (
        <div key={key} className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={imgSpecs.src}
                    alt={imgSpecs.alt}
                    width={imgSpecs.width}
                    height={imgSpecs.height}
                    sizes="(max-width: 100%)"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                {buttonText && 
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
                }
            </div>
        </div>
    );
};

export default DaisyCard;