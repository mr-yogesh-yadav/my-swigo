import "./Footer.css";
import img from "../images/30day.png"
import { FaShoppingCart } from "react-icons/fa";

function Footer() {
  const footer = [
    {
      naam: "Reliable and Regular Updates",
      sarNaam: "Get a lifetime reliable & regular updates with your purchase.",
    },
    {
      naam: "7 Years+ Envato Exclusive Author",
      sarNaam: "DexignZone is a time-tested author with year's experience.",
    },
    {
      naam: "5-Star Customer Support",
      sarNaam: "More than 3000 resolved inquiries and happy customer reviews.",
    },
    {
      naam: "Customers Feedback Appreciative",
      sarNaam:
        "Have a good idea or improvement? It can be ended up in our updates!",
    },
  ];
  return (
    <>
      <section className="footer">
        <div className="footer-first">
          {footer.map((item, index) => {
            return (
              <div className="footer-first-card" key={index}>
                <h2>{item.naam}</h2>
                <span>{item.sarNaam}</span>
              </div>
            );
          })}
        </div>
        <div className="footer-c">
            <div className="footer-c-title">
                <span>Purchase now</span>
                <h2>Get your theme right now<br/>and create your awesome site.</h2>
            </div>
            <div className="footer-c-c">
                <div className="footer-c-l">
                    <h4>Include<br/>In<br/>Package:</h4>
                    <p>{"{"}</p>
                    <ul>
                        <li>Swigo template</li>
                        <li>Premium bundled plugins</li>
                        <li>6 month support included</li>
                    </ul>
                    <ul>
                        <li>Free future template updates</li>
                        <li>Quality checked by Envato</li>
                    </ul>
                </div>
                <div className="footer-c-r">
                    <div className="footer-c-img">
                        <img src={img} alt="img" />
                    </div>
                    <div className="footer-c-buy">
                        <a href="#"><FaShoppingCart /> <span>Regular <br/>License</span></a>
                        <a href="#"><FaShoppingCart /> <span>Extended  <br/>License</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <span>Copyright © 2026 DexignZone. all rights reserved.</span>
        </div>
      </section>
    </>
  );
}
export default Footer;
