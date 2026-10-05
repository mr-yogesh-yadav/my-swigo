import "./Review.css";
import img from "../images/pic1.webp";
import { useEffect, useRef, useState } from "react";
import { LuHeadset } from "react-icons/lu";

function Review() {
  const review = [
    {
      haiding: "Design Quality",
      description:
        "I purchased the GardenZone template yesterday and it is fantastic. The html built well and well commented, as is the css and js. This gives me a great starting point and save me loads of work. The support team is also great and very fast at responding.",
      name: "BROKERC3",
    },
    {
      haiding: "Design Quality",
      description:
        "Design looks great. Code-wise.. I can rate this 9/10. Easy to customize. Easy to edit. Good theme. Gets the job done.",
      name: "2GOODTECH",
    },
    {
      haiding: "Design Quality",
      description:
        "My client was in need of a website with a deadline of 4 days. It was perfect to find a lightweight template where you have all the pages and features you may need.",
      name: "DIEGOMMAGNO",
    },
    {
      haiding: "Design Quality",
      description:
        "Very clean design and excellent support. The template was easy to customize and helped me complete my project quickly.",
      name: "ARY-THEMES",
    },
    {
      haiding: "Design Quality",
      description:
        "Beautiful design with a lot of useful features. Everything is well organized and easy to understand.",
      name: "JOHNDOE",
    },
  ];
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const position = useRef(0);
  const animationFrame = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPosition = useRef(0);
  const setWidth = useRef(0);
  const cardWidth = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const slides = [...review, ...review, ...review, ...review, ...review];
  const calculateWidth = () => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector(".review-card");
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(trackRef.current).gap);
    cardWidth.current = firstCard.offsetWidth + gap;
    setWidth.current = cardWidth.current * review.length;
    if (position.current === 0) {
      position.current = -setWidth.current;
    }
    updateTrack();
  };
  const updateTrack = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${position.current}px, 0, 0)`;
  };
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);
  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.05;
    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      if (!isPaused && !isDragging.current && setWidth.current > 0) {
        position.current -= speed * delta;
        if (position.current <= -setWidth.current * 2) {
          position.current += setWidth.current;
        }
        updateTrack();
        updateActiveDot();
      }
      animationFrame.current = requestAnimationFrame(animate);
    };
    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [isPaused]);
  const updateActiveDot = () => {
    if (!cardWidth.current) return;
    const relative = Math.abs(position.current + setWidth.current);
    const index = Math.floor(relative / cardWidth.current) % review.length;
    setActiveDot(index);
  };
  const handlePointerDown = (e) => {
    isDragging.current = true;

    startX.current = e.clientX;

    startPosition.current = position.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const distance = e.clientX - startX.current;

    position.current = startPosition.current + distance;
    if (position.current > -cardWidth.current) {
      position.current -= setWidth.current;
    }

    if (position.current < -setWidth.current * 2) {
      position.current += setWidth.current;
    }

    updateTrack();

    updateActiveDot();
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (error) {}
    if (cardWidth.current) {
      const nearest =
        Math.round(position.current / cardWidth.current) * cardWidth.current;

      position.current = nearest;

      updateTrack();
    }
  };
  const goToSlide = (index) => {
    position.current = -setWidth.current - index * cardWidth.current;
    updateTrack();
    setActiveDot(index);
  };

  return (
    <section className="review">
      <div className="about-title">
        <p>Template Reviews</p>
        <h2>What Our Customers Are Saying</h2>
      </div>
      <div
        className="review-wrapper"
        ref={wrapperRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="review-track" ref={trackRef}>
          {slides.map((item, index) => (
            <div className="review-card" key={index}>
              <div className="review-up">
                <div className="heading">
                  <p className="stars">⭐⭐⭐⭐⭐</p>
                  <span>OR</span>
                  <strong>{item.haiding}</strong>
                </div>
                <p className="description">{item.description}</p>
              </div>
              <div className="review-bottom">
                <div className="review-tag">
                  <img src={img} alt="customer" draggable="false" />
                </div>
                <div className="customer-info">
                  <strong>{item.name}</strong>
                  <span>CUSTOMER</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="review-dots">
        {review.map((_, index) => (
          <button
            key={index}
            className={activeDot === index ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <a href="#" className="about-footer" style={{paddingRight: "120px"}}>
        <LuHeadset />
        Need Any Help Link
      </a>
    </section>
  );
}

export default Review;
