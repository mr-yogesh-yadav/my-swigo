import { useEffect, useState } from "react";
import "./ScrollTop.css";
const ScrollTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight ? (scrollTop / documentHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowButton(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const radius = 29;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;
  return (
    <button
      className={`scroll-top ${showButton ? "show" : ""}`}
      onClick={goToTop}
      aria-label="Go to top"
    >
      <svg
        className="progress-circle"
        width="66"
        height="66"
        viewBox="0 0 66 66"
      >
        <circle className="circle-bg" cx="33" cy="33" r={radius} />
        <circle
          className="circle-progress"
          cx="33"
          cy="33"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="arrow">↑</span>
    </button>
  );
};

export default ScrollTop;
