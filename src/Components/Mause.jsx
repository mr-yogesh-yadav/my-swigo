import { useEffect, useRef } from "react";
import "./Mouse.css";
function Mouse() {
  const circleRef = useRef(null);
  const circle2Ref = useRef(null);
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const animate = () => {
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;
      if (circleRef.current) {
        circleRef.current.style.left = `${mouseX}px`;
        circleRef.current.style.top = `${mouseY}px`;
      }
      if (circle2Ref.current) {
        circle2Ref.current.style.left = `${circleX}px`;
        circle2Ref.current.style.top = `${circleY}px`;
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", moveMouse);
    animate();
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);
  return (
    <>
      <div ref={circleRef} className="mouse-circle" />
      <div ref={circle2Ref} className="mouse-circle-2" />
    </>
  );
}
export default Mouse;
