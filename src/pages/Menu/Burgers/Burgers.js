import React from "react";

import "./Burgers.css";
import ListItem from "../../../components/ListItem/ListItem";


/*
const menuDataLeft = [
  {
    title: "Hamburger",
    description: "1/3rd Lb. of Angus Beef! 'Nuff Said",
    price: "10",
  },
  {
    title: "Cheeseburger",
    description: "Just like the hamburger, but classed up",
    price: "11",
  },
  {
    title: "Bacon Cheeseburger",
    description:"Even classier than the Cheeseburger because BACON!",
    price: "12",
  },
  {
    title: "California Burger",
    description:
      "Nothing classy about Cali, but this is a dang good burger!",
    price: "12",
  },
  {
    title: "Mushroom & Swiss",
    description:
      "1/3rd Lb Angus Beef with sautéed mushrooms and melted Swiss Cheese",
    price: "12",
  },
  {
    title: "Jalepeno Popper Burger",
    description:
      "1/3rd Lb Angus Beef topped with our house made jalepeno cream cheese spread and fire roasted jalepenos!",
    price: "12",
  },
];

const menuDataRight = [
  {
    title: "Hog Pile Burger",
    description: "1/3rd Lb Angus Beef piled high with Swiss & American Cheese, ham, bacon, smokey fried onions, and is glazed with our house Cherry BBQ",
    price: "14",
  },
  {
    title: "Big Buck Burger",
    description: "1/3rd Lb Angus Beef patty smothered in Swiss cheese, topped with bacon and, piled high with tangled fried onions and our Chef's own Hill Billy Sauce!",
    price: "14",
  },
  {
    title: "Sticks Burger",
    description: "1/3rd Lb. of Angus Beef topped with american cheese, bacon and, creamy peanut butter!",
    price: "12",
  },
  {
    title: "Spicy Pickle Burger",
    description:"1/3rd Lb. of Angus Beef, melted pepperjack cheese, piled to the sky with our homemade deep fried pickles and, is finished with our jalepeno ranch!",
    price: "14",
  },
  {
    title: "Chicken Strip Basket",
    description:"Sauces: BBQ, Gold, Buffalo, Sweet Chili, SunDrop, Woo-Tang, PB&J, Willy Pete (Spicy)",
    price: "13",
  },
  {
    title: "Steak Bite Basket",
    description:"Make a meal out of the app with an 8oz fresh cut sirloin grilled to order!",
    price: "16",
  },
  {
    title: "Walleye Finger Basket",
    description:"Fresh and delicious breaded Walleye fingers!",
    price: "15",
  },
];

const Burgers = () => {
  return (
    <div className="container breakfast">
      <h1 className="heading-secondary">
        Our<span> Burgers & Baskets</span>
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
*/
const menuDataLeft = [
    {
        title: "Hamburger",
        description: "1/3rd Lb. of Angus Beef! 'Nuff Said",
        price: "10",
    },
    {
        title: "Cheeseburger",
        description: "Just like the hamburger, but classed up",
        price: "11",
    },
    {
        title: "Bacon Cheeseburger",
        description:"Even classier than the Cheeseburger because BACON!",
        price: "12",
    },
    {
        title: "California Burger",
        description:"Nothing classy about Cali, but this is a dang good burger!",
        price: "12",
    },
    {
        title: "Mushroom & Swiss",
        description:"1/3rd Lb Angus Beef with sautéed mushrooms and melted Swiss Cheese",
        price: "12",
    },
];

const menuDataMiddle = [

    {
        title: "Jalepeno Popper Burger",
        description:"1/3rd Lb Angus Beef topped with our house made jalepeno cream cheese spread and fire roasted jalepenos!",
        price: "12",
    },
    {
        title: "Hog Pile Burger",
        description: "1/3rd Lb Angus Beef piled high with Swiss & American Cheese, ham, bacon, smokey fried onions, and is glazed with our house Cherry BBQ",
        price: "14",
    },
    {
        title: "Big Buck Burger",
        description: "1/3rd Lb Angus Beef patty smothered in Swiss cheese, topped with bacon and, piled high with tangled fried onions and our Chef's own Hill Billy Sauce!",
        price: "14",
    },
    {
        title: "Sticks Burger",
        description: "1/3rd Lb. of Angus Beef topped with american cheese, bacon and, creamy peanut butter!",
        price: "12",
    },



];

const menuDataRight = [

    {
        title: "Spicy Pickle Burger",
        description:"1/3rd Lb. of Angus Beef, melted pepperjack cheese, piled to the sky with our homemade deep fried pickles and, is finished with our jalepeno ranch!",
        price: "14",
    },
    {
        title: "Chicken Strip Basket",
        description:"Sauces: BBQ, Gold, Buffalo, Sweet Chili, SunDrop, Woo-Tang, PB&J, Willy Pete (Spicy)",
        price: "13",
    },
    {
        title: "Steak Bite Basket",
        description:"Make a meal out of the app with an 8oz fresh cut sirloin grilled to order!",
        price: "16",
    },
    {
        title: "Walleye Finger Basket",
        description:"Fresh and delicious breaded Walleye fingers!",
        price: "15",
    },
];

const Burgers = () => {
    return (
    <div className="section">
        <div className="container burgers">
            <h1 className="heading-secondary">
                Our Burgers <span> & Baskets</span>
            </h1>

        <div className="grid-container">
            <div>
            {menuDataLeft.map((data, i) => (
                <ListItem
                    key={i}
                    title={data.title}
                    description={data.description}
                    price={data.price}
                />
            ))}
            </div>

            <div>
            {menuDataMiddle.map((data, i) => (
                <ListItem
                    key={i}
                    title={data.title}
                    description={data.description}
                    price={data.price}
                />
            ))}
            </div>

            <div>
            {menuDataRight.map((data, i) => (
                <ListItem
                    key={i}
                    title={data.title}
                    description={data.description}
                    price={data.price}
                />
            ))}
            </div>
        </div>
        </div>
    </div>
    );
};

export default Burgers;
