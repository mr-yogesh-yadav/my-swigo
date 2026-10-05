import "./Discord.css";
import img1 from "../images/about-us.webp";
import img16 from "../images/blog-grid-2.webp";
import img12 from "../images/cart.webp";
import img14 from "../images/checkout.webp";
import img2 from "../images/faqs.webp";
import img5 from "../images/menu1.webp";
import img6 from "../images/menu2.webp";
import img7 from "../images/menu3.webp";
import img8 from "../images/menu4.webp";
import img9 from "../images/menu5.webp";
import img15 from "../images/product-detail.webp";
import img4 from "../images/service-detail.webp";
import img3 from "../images/service.webp";
import img10 from "../images/shop-style1.webp";
import img11 from "../images/shop-style2.webp";
import img13 from "../images/wishlist.webp";
import { LuHeadset } from "react-icons/lu";
function Discord() {
  const images = [
    {
      img: img1,
      name: "About Us",
    },
    {
      img: img2,
      name: "Faq'S",
    },
    {
      img: img3,
      name: "Service",
    },
    {
      img: img4,
      name: "Service Detail",
    },
    {
      img: img5,
      name: "Our Menu 1",
    },
    {
      img: img6,
      name: "Our Menu 2",
    },
    {
      img: img7,
      name: "Our Menu 3",
    },
    {
      img: img8,
      name: "Our Menu 4",
    },
    {
      img: img9,
      name: "Our Menu 5",
    },
    {
      img: img10,
      name: "Shop Style 1",
    },
    {
      img: img11,
      name: "Shop Style 2",
    },
    {
      img: img12,
      name: "Shop Cart",
    },
    {
      img: img13,
      name: "Shop Wishlist",
    },
    {
      img: img14,
      name: "Shop Checkout",
    },
    {
      img: img15,
      name: "Product Detail",
    },
    {
      img: img16,
      name: "Blog Grid 2",
    },
  ];
  return (
    <>
      <section className="discord" id="discord">
        <div className="discord-content">
          <div className="discord-bar">All Required Pages For Development</div>
          <div className="discord-main">
            <div className="about-title">
              <p>40+ Inner Pages</p>
              <h2>Discover Your Website with Our Awesome Inner Pages</h2>
            </div>
            <div className="discord-cards">
              {images.map((item, index) => (
                <div className="discord-card" key={index}>
                  <div className="discord-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
            <a href="#" className="about-footer">
              <LuHeadset />
              Need Any Help Link
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Discord;
