import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";

import image1 from "../../../assets/FriedSushi.jpg";
import image2 from "../../../assets/gallery05.jpg";

const menuData = [
  {

    title: "Fried Sushi Rolls",
    description: "Battered tempura rolls with our house Woo-Tang Sauce on the side",
    price: "12",
    img: image1,
  },
  {
    title: "10oz Sirloin Steak",
    description: "Hand cut USDA Choice 10oz Sirloin seasoned and grilled to perfection, paired with our house potatoes, seasonal vegetables, a garlic breadstick and a side salad!",
    price: "28",
    img: image2,
  },
];

const MenuOfTheDay = () => {
  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          <span>menu </span>of the day
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOfTheDay;
