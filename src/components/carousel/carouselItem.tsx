import Image from "next/image";

const CarouselItem = ({
    key,
    src,
    alt,
    width,
    height,
}: {
    key: number,
    src: string,
    alt: string,
    width: number,
    height: number,
}) => {
    return (
        <div className="carousel-item h-full">
            <Image
                key={key + "-" + src}
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
};

export default CarouselItem;