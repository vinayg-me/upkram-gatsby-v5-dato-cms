import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "./film-strip-carousel.css" // Ensure you create this CSS file for styling
import { HomepageImage } from "./ui"

interface FilmStripCarouselProps {
  images: HomepageImage[]
}

const FilmStripCarousel: React.FC<FilmStripCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="film-strip-carousel">
      <button className="nav-button left" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="film-strip-images-container">
        {images
          .concat(images.slice(0, getVisibleImagesCount()))
          .map((image, index) => (
            <div
              key={image.id}
              className={`film-strip-carousel-item ${
                index >= activeIndex &&
                index < activeIndex + getVisibleImagesCount()
                  ? "visible"
                  : ""
              }`}
            >
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={image.alt}
                className="film-strip-carousel-image"
              />
            </div>
          ))}
      </div>
      <button className="nav-button right" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  )
}

const getVisibleImagesCount = () => {
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    const width = window.innerWidth
    if (width >= 1024) return 4 // Desktop
    if (width >= 768) return 2 // Tablet
  }
  return 1
}

export default FilmStripCarousel
