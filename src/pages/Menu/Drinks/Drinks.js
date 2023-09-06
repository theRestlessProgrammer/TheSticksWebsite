import React from "react";

import "./Drinks.css";

import ListItem from "../../../components/ListItem/ListItem";
import Drinksimg from "../../../assets/Drinksimg.jpg";

const menuDataRight = [
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
  },
  {
    title: "American Pancakes",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 21,
  },
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
  },
  {
    title: "American Pancakes",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 21,
  },
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
  },
];

const Drinks = () => {
  return (
    <div className="container drink-selection">
      <h1 className="heading-secondary">
        Our Drink<span> Selection</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={Drinksimg} alt="Drink Options" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drinks;
