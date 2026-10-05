import "./Hero.css";
import Particles from "./Particles";
import { FaHeadset } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo-white.webp";
import imageA from "../assets/garlic1.png"
import imageB from "../assets/garlic2.png"
import imageE from "../assets/icon-2-element.png"
import imageD from "../assets/icon-element.png"
import imageC from "../assets/team-element.png"
import image1 from "../assets/bnr1.webp"
import image2 from "../assets/bnr2.webp"
import image3 from "../assets/bnr3.webp"
import image4 from "../assets/bnr4.webp"
import image5 from "../assets/bnr5.webp"
function Hero() {
  return (
    <section className="hero">
      <a href="#" className="listen-btn-body"><FaHeadset /><span>Support</span></a>
      <a href="#" className="listen-btn-body b"><FaShoppingCart /><span>Buy Now</span></a>
        <Particles />
      <div className="hero-nav">
        <div className="hero-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#about">DEMO</a>
          </li>
          <li>
            <a href="#exclusive">Features</a>
          </li>
          <li>
            <a href="#" target="blank">Documentation</a>
          </li>
        </ul>
        <button>
          <span>Buy Now</span>
        </button>
      </div>
      <div className="hero-title">
        <span>Swigo - Fast Food And Restaurant ASP.NET Core & MVC Bootstrap Template</span>
        </div>
        <div className="hero-bottom">
            <img className="imageA" src={imageA} alt="img"/>
            <img className="imageB" src={imageB} alt="img"/>
            <img className="imageC" src={imageC} alt="img"/>
            <img className="imageD" src={imageD} alt="img"/>
            <img className="imageE" src={imageE} alt="img"/>
            <div className="hero-row">
                <div className="hero-rowA">
                    <img src={image5} alt="img"/>
                </div>
                <div className="hero-rowB">
                    <img src={image3} alt="img"/>
                </div>
                <div className="hero-rowC">
                    <img src={image1} alt="img"/>
                </div>
                <div className="hero-rowD">
                    <img src={image2} alt="img"/>
                    <h2 className="hero-bg-text"><span>RESTAURANT</span></h2>
                </div>
                <div className="hero-rowE">
                    <img src={image4} alt="img"/>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Hero;
