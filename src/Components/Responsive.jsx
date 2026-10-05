import "./Responsive.css";
import { useEffect, useRef, useState } from "react";
import imgA from "../assets/index-tab-1.webp";
import imgB from "../assets/index-tab-3.webp";
import imgC from "../assets/index-mobile-2.webp";
import imgD from "../assets/index-mobile-1.webp";
import imgE from "../assets/index-mobile-2 (1).webp";
import imgF from "../assets/index-mobile-3.webp";
import { LuHeadset } from "react-icons/lu";
function Responsive() {
  const responsive = [
    {
      img: imgA,
      size: "small",
      title: "Home Page 1",
    },
    {
      img: imgB,
      size: "large",
      title: "Home Page 2",
    },
    {
      img: imgC,
      size: "small",
      title: "Home Page 3",
    },
    {
      img: imgD,
      size: "large",
      title: "Home Page 4",
    },
    {
      img: imgE,
      size: "small",
      title: "Home Page 5",
    },
    {
      img: imgF,
      size: "large",
        title: "Home Page 6",
    },
  ];
  const slides = [...responsive, ...responsive, ...responsive, ...responsive, ...responsive, ...responsive];
  const sliderRef = useRef(null);
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(6);
  const [animate, setAnimate] = useState(true);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const getPosition = (index) => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const cards = slider.querySelectorAll(".responsive-item");
    if (!cards[index]) return 0;
    return cards[index].offsetLeft;
  };
  const moveSlider = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const position = getPosition(index);
    slider.style.transform = `translateX(-${position}px)`;
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const previousSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.style.transition = animate ? "transform 0.7s ease" : "none";
    moveSlider(currentIndex);
  }, [currentIndex, animate]);
  const handleTransitionEnd = () => {
    if (currentIndex >= 12) {
      setAnimate(false);
      setCurrentIndex(6);
      return;
    }
    if (currentIndex <= 0) {
      setAnimate(false);
      setCurrentIndex(6);
    }
  };
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }
  }, [animate]);
  const startAutoSlide = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  const stopAutoSlide = () => {
    clearInterval(timerRef.current);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      moveSlider(6);
      startAutoSlide();
    }, 100);
    return () => {
      clearTimeout(timer);
      clearInterval(timerRef.current);
    };
  }, []);
  const handlePointerDown = (e) => {
    setDragging(true);
    stopAutoSlide();
    startX.current = e.clientX;
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transition = "none";
    }
  };
  const handlePointerUp = (e) => {
    if (!dragging) return;
    const distance = e.clientX - startX.current;
    setDragging(false);
    if (distance < -70) {
      nextSlide();
    } else if (distance > 70) {
      previousSlide();
    }
    startAutoSlide();
  };
  return (
    <section className="responsive" id="responsive">
      <div className="about-title">
        <p>RESPONSIVE SIZE</p>
        <h2>Responsive Design For Mobile And Tablet</h2>
      </div>
      <div
        className="responsive-wrapper"

        onMouseEnter={stopAutoSlide}

        onMouseLeave={() => {

            if (!dragging) {
                startAutoSlide();

            }

        }}
      >
        <div
          ref={sliderRef}
          className="responsive-track"
          onTransitionEnd={handleTransitionEnd}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {slides.map((item, index) => (
            <div className={`responsive-item ${item.size}`} key={index}>
                <div className="responsive-item-title">
                    <h3>{item.title}</h3>
                </div>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <a href="#" className="about-footer">
            <LuHeadset />Need Any Help Link
        </a>
    </section>
  );
}
export default Responsive;
