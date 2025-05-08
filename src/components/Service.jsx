import React from "react";
import "../components/Service.css";
import { ArrowRight } from "lucide-react";
// IMAGES
import img1 from "../assets/images/wedding-scroll-cropped.jpg";
import img2 from "../assets/images/2.2-Social-Lorely-Meza.jpg";
import img3 from "../assets/images/2.3-Corporate-Joel-Maus.jpg";
import img4 from "../assets/images/1.1-Lorely-Meza-1.jpg";
import { Carousel } from "react-responsive-carousel";

const Service = () => {
  return (
    <div>
      <section className="Services">
        <h2 className="lead">Making Every Experience Magical</h2>
        {/* IMAGES WILL GO HERE */}
        <div>
          <Carousel showThumbs={false} autoPlay={true} autoFocus={true}>
            <span className="swipers">
              <img src={img1} alt="image1" />
              <span className="exc">
                <h3>Weddings</h3>
                <h4>Exceptional Wedding</h4>
                <p>
                  The most important day of your life, is ours too. Your wedding
                  should be the ultimate celebration of your relationship, and
                  our team of experts guide you through the process, offering
                  peace of mind and a remarkable experience.
                </p>
                <span className="btn">
                  <button>Learn more</button>
                  <ArrowRight />
                </span>
              </span>
            </span>

            <span className="swipers">
              <img src={img2} alt="image1" />
              <span className="exc">
                <h3>Social</h3>
                <h4>Incomparable Social Events</h4>
                <p>
                  We sweat the small stuff, so you don’t have to. For all of
                  life’s special occasions, we give your anniversary, shower, or
                  birthday party the attention it deserves, allowing you to
                  focus on being present with your guests!
                </p>
                <span className="btn">
                  <button>Learn more</button>
                  <ArrowRight />
                </span>
              </span>
            </span>

            <span className="swipers">
              <img src={img3} alt="image1" />
              <span className="exc">
                <h3>Corporate</h3>
                <h4>Exceptional Wedding</h4>
                <p>
                  We don’t put you in a box. Each venue is unique to each party,
                  and our curated list of event spaces and venue partners offers
                  easy access with personalized service at Southern California’s
                  premier locations.
                </p>
                <span className="btn">
                  <button>Learn more</button>
                  <ArrowRight />
                </span>
              </span>
            </span>

            <span className="swipers">
              <img src={img4} alt="image1" />
              <span className="exc">
                <h3>Weddings</h3>
                <h4>Exceptional Wedding</h4>
                <p>
                  The most important day of your life, is ours too. Your wedding
                  should be the ultimate celebration of your relationship, and
                  our team of experts guide you through the process, offering
                  peace of mind and a remarkable experience.
                </p>
                <span className="btn">
                  <button>Learn more</button>
                  <ArrowRight />
                </span>
              </span>
            </span>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Service;
