import "./Exclusive.css";
import image1 from "../images/1.png";
import image2 from "../images/react.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";
import image13 from "../images/13.png";
import image14 from "../images/14.png";
import image15 from "../images/15.png";
import image16 from "../images/16.png";
import image17 from "../images/17.png";
import image18 from "../images/18.png";
import image19 from "../images/19.png";
import image20 from "../images/20.png";
function Exclusive() {
  const exclusive = [
    {
      img: image1,
      name: "Tailwind v3.4.3",
    },
    {
      img: image2,
      name: "React",
    },
    {
      img: image3,
      name: "100% Responsive",
    },
    {
      img: image4,
      name: "High Performance",
    },
    {
      img: image5,
      name: "Fully Customizable",
    },
    {
      img: image6,
      name: "Easy to use",
    },
    {
      img: image7,
      name: "Unlimited Options",
    },
    {
      img: image8,
      name: "Vite v5.2.0",
    },
    {
      img: image9,
      name: "React Router",
    },
    {
      img: image10,
      name: "Gallery",
    },
    {
      img: image11,
      name: "Node v20.11.1",
    },
    {
      img: image12,
      name: "Well Documented",
    },
    {
      img: image13,
      name: "Cross Browser",
    },
    {
      img: image14,
      name: "Modern Desingn",
    },
    {
      img: image15,
      name: "Category Style",
    },
    {
      img: image16,
      name: "Masonry",
    },
    {
      img: image17,
      name: "Swiper js",
    },
    {
      img: image18,
      name: "Lifetime Updates",
    },
    {
      img: image6,
      name: "Search Options",
    },
    {
      img: image19,
      name: "Google Fonts",
    },
    {
        img: image20,
        name: "FontAwesome Icons"
    }
  ];
  return (
    <>
      <section className="exclusive" id="exclusive">
        <div className="about-title">
          <p>Our Features</p>
          <h2>Exclusive Features that Differentiate Our Website</h2>
        </div>
        <div className="exclusive-cards">
          {exclusive.map((item, index) => {
            return (
              <div className="exclusive-card" key={index}>
                <div className="exclusive-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Exclusive;
