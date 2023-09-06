import React from "react";

import "./Appetizers.css";
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Wings & Boneless Wings",
    description: "Sauces:  BBQ | Gold | Buffalo | Sweet Chili | SunDrop | Woo-Tang | PB&J | Willy Pete (Spicy)   Dry-Rub Seasonings || Buffalo | Salt & Vinegar | Garlic Parmesan & Ghost Pepper",
    price: "13",
  },
  {
    title: "Cheese Curds",
    description: "Cheesy Bites... need I say more?",
    price: "11",
  },
  {
    title: "Spinach Artichoke Dip",
    description:
      "House recipe paired with Pita flatbread",
    price: "12",
  },
  {
    title: "Sweet Potato Fries",
    description:
      "Served with a side of sweet chili sauce",
    price: "12",
  },
  {
    title: "Pretzel Bites",
    description:
      "Soft fresh made pretzel bites served with our queso suace",
    price: "12",
  },
  {
    title: "Cream Cheese Wontons",
    description:
      "Comes with our house cherry sweet & sour sauce",
    price: "12",
  },
];

const menuDataRight = [
  {
    title: "Fried Pickle Chips",
    description: "Hand breaded and seasoned",
    price: 11,
  },
  {
    title: "Grilled Steak Bites",
    description: "Hand Cut USDA Choice Sirloin Grilled to perfection with our house seasoning",
    price: 12,
  },
  {
    title: "Nachos",
    description: "Made right with tortilla chips layered in tons of our queso sauce and seasoned beef, then topped with lettuce, black olives, roasted jalepenos | Comes with Salsa and Sour cream",
    price: 12,
  },
  {
    title: "Mini Donuts",
    description:
      "Our signature snack donuts in Original or Maple Bourbon",
    price: "8 | 14",
  },
  {
    title: "Fried Sushi Rolls",
    description:
      "Battered tempura rolls with our house Woo-Tang Sauce on the side",
    price: "12",
  },
];

const Appetizers = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        Our<span> Appetizers</span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
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

export default Appetizers;
