import "./About.css";
import { LuHeadset } from "react-icons/lu";
import { RiTailwindCssFill, RiVuejsLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiWordpress, SiDotnet, SiLaravel } from "react-icons/si";
import img1 from "../assets/index-full.webp";
import img2 from "../assets/index-2-full.webp";
import img3 from "../assets/index-3-full.webp";

function About() {
  const icon = [
    {
      name: "React Tailwind",
      icon: <RiTailwindCssFill />,
      className: "react",
    },
    {
      name: "HTML",
      icon: <AiOutlineHtml5 />,
      className: "html",
    },
    {
      name: "VUE JS",
      icon: <RiVuejsLine />,
      className: "vue",
    },
    {
      name: "WordPress",
      icon: <SiWordpress />,
      className: "wordpress",
    },
    {
      name: "ASP.NET",
      icon: <SiDotnet />,
      className: "asp",
    },
    {
      name: "LARAVEL",
      icon: <SiLaravel />,
      className: "laravel",
    },
  ];
  const about = [
    {
      img: img1,
      title: "Home Page 1",
    },
    {
      img: img2,
      title: "Home Page 2",
    },
    {
      img: img3,
      title: "Home Page 3",
    },
  ];
  return (
    <section className="about" id="about">
      <div className="about-title">
        <p>03+ Home Pages</p>
        <h2>Stunning Diverse Website Introduction</h2>
      </div>
      <div className="about-content">
        {about.map((item, index) => (
          <div className="about-card" key={index}>
            <div className="technology-list">
              {icon.map((tech, techIndex) => (
                <div className={`technology ${tech.className}`} key={techIndex}>
                  <span className="technology-icon">{tech.icon}</span>
                  <span className="technology-name">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="website-image">
              <img src={item.img} alt={item.title} />
            </div>
            <h3 className="website-title">{item.title}</h3>
          </div>
        ))}
      </div>
      <a href="#" className="about-footer">
        <LuHeadset />Need Any Help Link
      </a>
    </section>
  );
}

export default About;
