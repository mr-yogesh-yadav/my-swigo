import "./Form.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useState, useRef } from "react";
import img1 from "../images/contact-mobile.png";
import img2 from "../images/contact-tab.png";
import { LuHeadset } from "react-icons/lu";

function Form() {
  const form = [
    {
      img: img1,
      type: "mobile",
    },
  ];

  const [slide, setSlide] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    member: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    member: "",
    message: "",
  });

  const timerRef = useRef(null);

  const nextSlide = () => {
    if (slide) return;

    setSlide(true);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSlide(false);
    }, 3000);
  };

  const prevSlide = () => {
    clearTimeout(timerRef.current);
    setSlide(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z ]/g, "");
    }

    if (name === "number") {
      newValue = value.replace(/[^0-9]/g, "");
      newValue = newValue.slice(0, 10);
    }

    if (name === "member") {
      newValue = value.replace(/[^0-9]/g, "");

      if (newValue === "0") {
        newValue = "";
      }
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    validateField(name, newValue);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (value.trim() === "") {
        error = "Please Enter a valid Name";
      } else if (value.trim().length < 2) {
        error = "Name must contain at least 2 letters";
      }
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value.trim() === "") {
        error = "Please Enter a valid Email";
      } else if (!emailPattern.test(value)) {
        error = "Please Enter a valid Email";
      }
    }

    if (name === "number") {
      if (value === "") {
        error = "Please Enter a valid Number";
      } else if (value.length !== 10) {
        error = "Number must contain exactly 10 digits";
      }
    }

    if (name === "member") {
      if (value === "") {
        error = "Please Enter a valid Member";
      } else if (Number(value) < 1) {
        error = "Member must be minimum 1";
      }
    }

    if (name === "message") {
      if (value.trim() === "") {
        error = "Please Enter a Message";
      } else if (value.trim().length < 10) {
        error = "Please Enter minimum 10 letters";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    const fields = ["name", "email", "number", "member", "message"];

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    alert("Reservation Booked Successfully!");

    console.log(formData);
  };

  return (
    <section className="form">
      <div className="form-left">
        <p className="form-subtitle">WORKING PHP FORMS</p>

        <h1>
          Ready to Use
          <br />
          Awesome Form
        </h1>

        <span>
          Don't go by our Words, checkout awesome demos and verify yourself.
          Save 1000s of hours of designing and coding work as we already did
          that for you.
        </span>

        <ul>
          <li>Running Contact Form</li>
          <li>Mailchimp Ready</li>
        </ul>

        <div className="form-buttons">
          <button className="form-p" onClick={nextSlide}>
            <FaArrowLeftLong />
          </button>

          <button className="form-s" onClick={prevSlide}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="form-right">
        <div className={`form-track ${slide ? "" : "form-track-active"}`}>
          <div className="form-main">
            <form onSubmit={handleSubmit}>
              <div className="form-m-b">
                <h2>Reservation</h2>

                <div className="form-m-action">
                  <div>
                    <label>Your Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Yogesh Yadav"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    {errors.name && <span>{errors.name}</span>}
                  </div>

                  <div>
                    <label>Your Email</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="yog@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {errors.email && <span>{errors.email}</span>}
                  </div>
                </div>

                <div className="form-m-action">
                  <div>
                    <label>Your Number</label>

                    <input
                      type="tel"
                      name="number"
                      placeholder="9571973691"
                      value={formData.number}
                      onChange={handleChange}
                      inputMode="numeric"
                    />

                    {errors.number && <span>{errors.number}</span>}
                  </div>

                  <div>
                    <label>Member</label>

                    <input
                      type="number"
                      name="member"
                      placeholder="1"
                      min="1"
                      value={formData.member}
                      onChange={handleChange}
                    />

                    {errors.member && <span>{errors.member}</span>}
                  </div>
                </div>

                <div className="form-m-action">
                  <div>
                    <label>Message</label>

                    <input
                      type="text"
                      name="message"
                      placeholder="Hey do you have a moment to talk about!"
                      value={formData.message}
                      onChange={handleChange}
                    />

                    {errors.message && <span>{errors.message}</span>}
                  </div>
                </div>

                <button type="submit" className="form-btn-a">
                  Book a Table
                </button>
              </div>
            </form>
          </div>

          {form.map((item, index) => (
            <div className={`form-card ${item.type}`} key={index}>
              <img src={item.img} alt="Contact form" />

              <div className="form-tag">CONTACT US</div>
            </div>
          ))}
        </div>
      </div>

      {/* <a href="#" className="about-footer">
        <LuHeadset />
        Need Any Help Link
      </a> */}
    </section>
  );
}

export default Form;
