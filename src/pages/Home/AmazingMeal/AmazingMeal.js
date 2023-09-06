import React, { useState } from "react";

import "./AmazingMeal.css";

import image1 from "../../../assets/gallery01.jpg";
import image2 from "../../../assets/gallery02.jpg";
import image3 from "../../../assets/gallery03.jpg";
import image4 from "../../../assets/gallery04.jpg";
import image5 from "../../../assets/gallery05.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {
  const [items, setItems] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleItemClick = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems([...updatedItems]);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id} onClick={() => handleItemClick(item.id)}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            "At The Stick's Bar and Grill, we are committed to blending the warmth of Madison's community spirit with our passion for culinary excellence. Rooted in the heart of Minnesota, we take pride in serving up not just meals, but memories. From our grill to your table, every bite is a testament to traditional flavors and contemporary flair, encapsulating the essence of what it means to dine in Madison. Our mission is simple: to offer our guests a welcoming atmosphere, unparalleled service, and a dining experience that not only satisfies hunger but also kindles the soul. Welcome to The Stick's – where Madison's heart meets its palate.";
              <br />
              <br />
              Great food with everything from onion rings to mini-donuts to steak, all prepared and ready to for you to eat while watching the big game, playing cornhole, darts or pool! We have everything for your favorite 5 O'clock stop!  
            </p>

          </div>
        </div>

        <div className="amazing-card-container">
          <div className="amazing-card amazing-card-left">
            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <p>
              At The Stick's Bar and Grill, we pride ourselves on the genuine taste of fresh ingredients. Every dish on our menu is crafted with utmost care, ensuring that each bite is bursting with pure flavor and unmatched quality.
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  Upcoming <span> Events</span>
                </h3>
              </div>

              <h3>
                Darts League Begins November 1st
                
              </h3>
              <p>The pre-league meeting is on October 25th at 6pm </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
