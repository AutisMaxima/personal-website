import Image from "next/image";

const Card = ({
    key = Math.round(Math.random() * 1000),
    title = "Some title",
    text = "Some text",
    imgSpecs,
    className,
    children
}: {
    key?: number,
    title: string,
    text: string,
    imgSpecs?: {
        src: string,
        alt: string,
        width: number,
        height: number
    },
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div key={key} className={`card flex-auto h-96 w-96 bg-base-100 shadow-xl text-base-content ${className}`}>
            {imgSpecs && <figure>
                <Image
                    src={imgSpecs.src}
                    alt={imgSpecs.alt}
                    width={imgSpecs.width}
                    height={imgSpecs.height}
                />
            </figure>}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;