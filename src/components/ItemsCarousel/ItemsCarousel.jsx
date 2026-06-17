import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ItemCard from "../ItemCard";
import "./style.css";

export default function ItemsCarousel({ items = [], productType }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="carousel">
      <button className="carousel_arrow" onClick={scrollPrev} aria-label="Précédent">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
      </button>

      <div className="carousel_viewport" ref={emblaRef}>
        <div className="carousel_track">
          {items.map((item) => (
            <div className="carousel_item" key={item.id}>
              <ItemCard {...item} type={productType} />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel_arrow" onClick={scrollNext} aria-label="Suivant">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}