import React from "react";
import "./Testimonies.css";
// Images import
import img1 from "../assets/images/4.2-Lorely-Meza.jpg";
import img2 from "../assets/images/4.1-Kay-McCoy.jpg";
import img3 from "../assets/images/4.3-Desert-Born-Studios.jpg";
import img4 from "../assets/images/4.4-Lorely-Meza.jpg";
// import img5 from "../assets/images/7-31-5.jpg";
// import img6 from "../assets/images/1.-MAIN-3.jpg";

// Carusel import
import { Carousel } from "react-responsive-carousel";

const Testimonies = () => {
  return (
    <>
      <section className="Testimonies">
        <div className="Logo"></div>
        <div className="static-head">
          <h2>Our Happy Clients</h2>
          <p>
            Food may be our love language but words of affirmation always make
            us esatic. Read what our happy client have to say about how we made
            their day great!
          </p>
        </div>

        <div className="testimonyList">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop>
            <div className="list">
              <img src={img1} alt="img1" />
              <span className="speech">
                <p>
                  " The staff was top notch -- professional ,Hardworking,and
                  just a pleasure to work with."
                </p>
                <h3>Robin</h3>
                <h4>Executive Assistant ,Corelogic</h4>
              </span>
            </div>

            <div className="list">
              <img src={img2} alt="img2" />
              <span className="speech">
                <p>
                  " The staff was top notch -- professional ,Hardworking,and
                  just a pleasure to work with."
                </p>
                <h3>Robin</h3>
                <h4>Executive Assistant ,Corelogic</h4>
              </span>
            </div>

            <div className="list">
              <img src={img3} alt="img3" />
              <span className="speech">
                <p>
                  " The staff was top notch -- professional ,Hardworking,and
                  just a pleasure to work with."
                </p>
                <h3>Robin</h3>
                <h4>Executive Assistant ,Corelogic</h4>
              </span>
            </div>

            <div className="list">
              <img src={img4} alt="img4" />
              <span className="speech">
                <p>
                  " The staff was top notch -- professional ,Hardworking,and
                  just a pleasure to work with."
                </p>
                <h3>Robin</h3>
                <h4>Executive Assistant ,Corelogic</h4>
              </span>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="news">
        <h1>What’s Cookin’</h1>
        <div>
          <div className="hover-container">
            <img src={img4} alt="img5" />
            <div className="hover-content">
              <p>Read More</p>
            </div>
          </div>
        </div>

        <div>
          <div className="hover-container">
            <img src={img3} />
            <div className="hover-content">
              <p>Read More</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
