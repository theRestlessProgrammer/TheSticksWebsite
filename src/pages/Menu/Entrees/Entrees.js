import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './Entrees.css'

const menuDataLeft = [
  {
    title: "Sweet Basil Alfredo Cheese Stuffed Tortellini",
    description:"This is a house favorite! Your choice of meat, paired with a garlic breadstick and our side salad! Choice of chicken or grilled Shrimp (or get both for +$6)",
    price: "18",
  },
];

const menuDataMiddle = [
  {
    title: "5oz Sirloin Steak",
    description:"Hand cut USDA Choice 5oz Sirloin seasoned and grilled to perfection, paired with our house potatoes, seasonal vegetables, a garlic breadstick and a side salad!",
    price: "18",
  },
];

const menuDataRight = [
  {
    title: "10oz Sirloin Steak",
    description:"Hand cut USDA Choice 10oz Sirloin seasoned and grilled to perfection, paired with our house potatoes, seasonal vegetables, a garlic breadstick and a side salad!",
    price: "28",
  },
];

const Entrees = () => {
  return (
    <div className="section">
      <div className="container beverages">
        <h1 className="heading-secondary">
          Our <span> Entrees</span>
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


export default Entrees