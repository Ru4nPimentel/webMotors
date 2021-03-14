import React from 'react';
import './Slide.scss';

const Slide = ({ slides }) => {
  const [slideActive, setSlideActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const slideRef = React.useRef();

  React.useEffect(() => {
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(width * slideActive));
  }, [slideActive]);

  function slidePrev() {
    if (slideActive > 0) {
      setSlideActive(slideActive - 1);
    } else if (slideActive === 0) {
      setSlideActive(slides.length - 1);
    }
  }

  function slideNext() {
    if (slideActive < slides.length - 1) {
      setSlideActive(slideActive + 1);
    } else if (slideActive === slides.length - 1) {
      setSlideActive(0);
    }
  }

  return (
    <section className="slide">
      <div
        className="slide_content"
        style={{ transform: `translateX(${position}px)` }}
        ref={slideRef}
      >
        {slides.map((slide) => (
          <div className="slide_item" key={slide.id}>
            <div
              className="slide_banner"
              style={{ backgroundImage: 'url(' + slide.imgUrl + ')' }}
            ></div>
          </div>
        ))}
      </div>
      <nav className="slide_nav">
        <button className="slideprev" onClick={slidePrev}>
          <i></i>
        </button>
        <button className="slidenext" onClick={slideNext}>
          <i></i>
        </button>
      </nav>
    </section>
  );
};

export default Slide;
