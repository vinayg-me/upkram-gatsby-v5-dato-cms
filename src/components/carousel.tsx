import * as React from "react"
import '../styles/carousel.css' // Create this CSS file for styling

interface CarouselProps {
  children: React.ReactNode[];
  interval?: number; // Optional prop to specify the interval time
}

export default function Carousel({ children, interval = 30000 }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, interval);

    return () => clearInterval(id);
  }, [children.length, interval]);

  return (
    <div className="carousel-container">
      {children.map((child, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        >
          {child}
        </div>
      ))}
      <div className="carousel-dots">
        {children.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
