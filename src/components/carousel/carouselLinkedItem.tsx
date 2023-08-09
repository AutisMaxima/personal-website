import Image from "next/image";
import Link from "next/link";

const CarouselLinkedItem = ({
    key,
    src,
    alt,
    width,
    height,
    href
}: {
    key: number,
    src: string,
    alt: string,
    width: number,
    height: number,
    href: string,
}) => {
    return (
        <Link key={key} href={href} className="carousel-item h-full">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </Link>
    );
};

export default CarouselLinkedItem;