import React from "react";
import "../components/About.css";
import { ArrowDown, ArrowRight } from "lucide-react";
import Carusel from "./Carusel";
import backgroundVideo from "../assets/24carrtos-home-banner.mp4"
import img1 from '../assets/images/1.2-Holly-Sigafoos-Photo.jpg'
import img2 from '../assets/images/1.3-Holly-Sigafoos-Photo.jpg';
import img3 from '../assets/images/1.4-Lorely-Meza.jpg';
import img4 from '../assets/images/1.1-Lorely-Meza-1.jpg';

const imgarr = [img1, img2, img3, img4]

const About = () => {
  return (
    <div className="bg-black">
      <section className="Hero-page">
        <div
          className="cover"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
        >
          <span className="txt">
            <h1>
              <a href="#About">Simply the best</a>
            </h1>
            <ArrowDown className="svg" color="red" size={40} />
          </span>
          <video autoPlay loop muted id="Video">
            <source src={backgroundVideo}  type='video/mp4' />
            {/* <source
              src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"
              type="video/mp4"
            /> */}
          </video>
        </div>
      </section>

      {/* About Us */}
      <section id="About">
        <div className="carousel-slide">
          <div className="firstlayer">
            <p className="brand">Welcome to Phil's Confectories.</p>
            <p className="remarks">Remarkable Catering & Events</p>
            <p className="rate">
              Phil's is a full-service experiential caterer and hospitality
              group. We are committed to creating elevated culinary events with
              outstanding service, offering peace of mind and a remarkable
              experience. Serving Enyimba city and Environs for over 20 years,
              we hold ourselves to exceptionally high standards because you
              deserve the absolute finest.
            </p>
            <div className="btn">
              <p>Get in touch</p>
              <ArrowRight
                className="arrow-icon animate-bounce"
                size={30}
                color="White"
              />
            </div>
          </div>

          <div className="secondlayer wrapper">
            <div className="testimonial-container" id="testimonial-container">
              {/* Carusel will go here */}
              <Carusel images={imgarr} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
