import "./Award.css";
import img1 from "../images/pic1 (2).webp";
import img2 from "../images/pic2.webp";
import img3 from "../images/pic3.webp";
import img4 from "../images/pic4.webp";
import img5 from "../images/pic5.webp";
import { useEffect, useRef } from "react";
function Award() {
  const award = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];
  const trackRef = useRef(null);
  const position = useRef(0);
  const setWidth = useRef(0);
  const cardWidth = useRef(0);
  const animationFrame = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPosition = useRef(0);
  const isHovering = useRef(false);
  const slides = [...award, ...award, ...award];
  const updateTrack = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `
      translate3d(${position.current}px, 0, 0)
    `;
  };
  const calculateWidth = () => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector(".award-card");
    if (!firstCard) return;
    const styles = getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.gap) || 0;
    cardWidth.current = firstCard.offsetWidth + gap;
    setWidth.current = cardWidth.current * award.length;
    if (position.current === 0) {
      position.current = -setWidth.current;
    }
    updateTrack();
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
    const speed = 0.06;
    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      if (!isHovering.current && !isDragging.current && setWidth.current > 0) {
        position.current -= speed * delta;
        if (position.current <= -setWidth.current * 2) {
          position.current += setWidth.current;
        }
        updateTrack();
      }
      animationFrame.current = requestAnimationFrame(animate);
    };
    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);
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
    if (position.current > -setWidth.current) {
      position.current -= setWidth.current;
    }
    if (position.current < -setWidth.current * 2) {
      position.current += setWidth.current;
    }
    updateTrack();
  };
  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (error) {}
    updateTrack();
  };
  const handlePointerCancel = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (error) {}
    updateTrack();
  };
  return (
    <section className="award">
      <div className="about-title">
        <p>Awards Winning</p>

        <h2>The Best of the Best - Our Winning Awards</h2>
      </div>
      <div
        className="award-wrapper"
        onPointerEnter={() => {
          isHovering.current = true;
        }}
        onPointerLeave={() => {
          isHovering.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div className="award-list" ref={trackRef}>
          {slides.map((item, index) => (
            <div className="award-card" key={index}>
              <img src={item.img} alt="award" draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Award;
