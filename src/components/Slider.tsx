import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWith, setSlideWith] = useState(0);
  const visorRef = useRef(null);

  const handleSwipeLeft = () => {
    setCurrentSlide(() =>
      currentSlide < images.length - 1 ? currentSlide + 1 : currentSlide
    );
  };

  const handleSwipeRight = () => {
    setCurrentSlide(() => (currentSlide > 0 ? currentSlide - 1 : currentSlide));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  const refPassthrough = (el) => {
    handlers.ref(el);
    visorRef.current = el;
  };

  useEffect(() => {
    setSlideWith(visorRef.current?.offsetWidth);
  }, [visorRef]);
  return (
    <div
      {...handlers}
      className="flex flex-col"
      ref={refPassthrough}
      style={{ width: "100%", overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          display: "flex",
          width: `${images.length * slideWith}px`,
          transform: `translateX(-${currentSlide * slideWith}px)`,
          transition: "transform 0.5s",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="justify-center"
            style={{
              flex: "0 0 100%",
              maxWidth: `${slideWith}px`,
            }}
          >
            <img
              src={`/assets/images/${image}`}
              alt={`Slide ${index + 1}`}
              style={{
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {images.map((_, i) => (
          <div
            onClick={() => setCurrentSlide(i)}
            className={`${
              i === currentSlide ? "bg-white" : ""
            } rounded w-2.5 h-2.5 mx-1 border-2 order-white`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
