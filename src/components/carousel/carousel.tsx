import CarouselItem from "./carouselItem";
import CarouselLinkedItem from "./carouselLinkedItem";

const Carousel = ({
    height = "h-96",
    isLinked = false,
    carouselItems
}: {
    height?: string,
    isLinked?: boolean,
    carouselItems: Array<{
        src: string,
        alt: string,
        width: number,
        height: number,
        href?: string
    }>
}) => {
    return (
        <div className={`${height} carousel-vertical rounded-box`}>
            {!isLinked && carouselItems.map((item, index) => {
                return (
                    <CarouselItem
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                    />
                );
            })}
            {isLinked && carouselItems.map((item, index) => {
                if (!item.href) item.href = "https://google.com/"; // Set a default link
                return (
                    <CarouselLinkedItem
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        href={item.href}
                    />
                );
            })}
        </div>
    );
};

export default Carousel;