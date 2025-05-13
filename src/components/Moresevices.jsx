import React from "react";
import "./Moreservices.css";
const Moreservices = () => {
  return (
    <>
      <section className="Moreservices">
        {/* layer1 */}
        <div className="specialities">
          <h2>Great Food & A Whole Lot More</h2>
          <p>
            Catering is just the beginning. Sure, we love astonishing your
            guests with attentive service, thoughtful food, and an inviting
            environment. But what really matters most is helping you create
            memories that will last for a lifetime. Our industry experts think
            of all the little things that turn an ordinary event into an
            unforgettable experience.
          </p>
          <button className="btn">Explore Services</button>
        </div>

        {/* Layer2 */}
        <div className="listing">
          <div className="listing-cover">
            <span>
              <h2>Gourmet Catering</h2>
              <p>
                Our professionally-trained culinary team is passionate and proud
                of our diverse and thoughtful menu, always cooking up something
                that aligns with your great taste.
              </p>
              <button className="btns">Learn more</button>
            </span>

            <span>
              <h2>Bar Service</h2>
              <p>
                Our sophisticated flavor expertise enables us to create
                inventive concoctions that generate buzz in more ways than one!
              </p>
              <button className="btns">Learn more</button>
            </span>
          </div>

          {/* Transiting  images will go here */}
          <div className="slideshow"></div>

          <div className="listing-cover">
            <span>
              <h2>Staffing</h2>
              <p>
                The hand-selected team at 24 Carrots are just as important to
                our reputation as our gourmet food. Our staff is certainly the
                best at what they do, and you’ll work with professionals who
                genuinely care about the success of your event!
              </p>
              <button className="btns">Learn more</button>
            </span>

            <span>
              <h2> Event Production</h2>
              <p>
                If mind-blowing spectacles and immersive guest experiences are
                what you’re after, the specialists at 24 Carrots can pull it off
                on an epic scale!
              </p>
              <button className="btns">Learn more</button>
            </span>
          </div>
        </div>

        {/* Mobile */}
        <div className="listing2">
          {/* Transiting  images will go here */}
          <div className="transiting2"></div>

          <span>
            <h2>Gourmet Catering</h2>
            <p>
              Our professionally-trained culinary team is passionate and proud
              of our diverse and thoughtful menu, always cooking up something
              that aligns with your great taste.
            </p>
            <button className="btns">Learn more</button>
          </span>

          <span>
            <h2>Bar Service</h2>
            <p>
              Our sophisticated flavor expertise enables us to create inventive
              concoctions that generate buzz in more ways than one!
            </p>
            <button className="btns">Learn more</button>
          </span>

          <span>
            <h2>Staffing</h2>
            <p>
              The hand-selected team at 24 Carrots are just as important to our
              reputation as our gourmet food. Our staff is certainly the best at
              what they do, and you’ll work with professionals who genuinely
              care about the success of your event!
            </p>
            <button className="btns">Learn more</button>
          </span>

          <span>
            <h2> Event Production</h2>
            <p>
              If mind-blowing spectacles and immersive guest experiences are
              what you’re after, the specialists at 24 Carrots can pull it off
              on an epic scale!
            </p>
            <button className="btns">Learn more</button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Moreservices;
