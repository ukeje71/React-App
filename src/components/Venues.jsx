import React from "react";
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/images/wedding-scroll-cropped.jpg";
import img2 from "../assets/images/2.2-Social-Lorely-Meza.jpg";
import img3 from "../assets/images/2.3-Corporate-Joel-Maus.jpg";
import img4 from "../assets/images/1.1-Lorely-Meza-1.jpg";
import "../components/Venues.css";
import { ArrowRight } from "lucide-react";
const Venues = () => {
  return (
    <>
      <section className="Curvedout">
        <div className="bg">
          <div className="partialcurve"></div>
        </div>
        <div className="writeup">
          <h3>Venues</h3>
          <h2>Unforgetable Vennues</h2>
          <p>
            24 Carrots is the exclusive or preferred caterer at Southern
            California’s most spectacular properties. From intimate understated
            spaces to large and luxurious, we’ll help you find the event venue
            that makes your heart skip a beat.
          </p>
          <span className="btn">
            <button>Explore Venues</button>
            <ArrowRight />
          </span>
        </div>
      </section>
        <section className="hover-parent">
          <div>
            <div className="hover-container">
              <img src={img1} />
              <div className="hover-content">
                <p>Explore Venue</p>
              </div>
            </div>
          </div>

          <div>
            <div className="hover-container">
              <img src={img2} />
              <div className="hover-content">
                <p>Explore Venue</p>
              </div>
            </div>
          </div>

          <div>
            <div className="hover-container">
              <img src={img3} />
              <div className="hover-content">
                <p>Explore Venue</p>
              </div>
            </div>
          </div>

          <div>
            <div className="hover-container">
              <img src={img4} />
              <div className="hover-content">
                <p>Explore Venue</p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Venues;
