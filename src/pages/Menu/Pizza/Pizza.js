import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './Pizza.css'



const menuDataLeft = [
    {
      title: "Chicken Alfredo",
      description: "Alfredo",
      price: "14 | 14 | 18",
    },
    {
      title: "Chicken Bacon Ranch",
      description: "CBR Pizza",
      price: "14 | 14 | 18",
    },
    {
      title: "Buffalo Chicken",
      description: "Buffalo Pizza",
      price: "14 | 14 | 18",
    },
  ];
  
  const menuDataRight = [
    {
      title: "Sticks Philly Cheesesteak",
      description: "Made with our homemade sauce and hand cut USDA Choice Sirloin, topped with onions and green peppers!",
      price: "18 | 18 | 22",
    },
    {
      title: "Sticks Palermo Pie",
      description: "Made with our homemade cream cheese, spinach and, artichoke spread, topped with red onion, diced tomato, and Shrimp or Chicken!",
      price: "18 | 18 | 22",
    },
    {
      title: "Build Your Own Pizza",
      description: "Comes with One meat (Additional toppings are extra)",
      price: "12 | 12 | 16",
    },
  ];

const Pizza = () => {
  return (
    <div className='section'>
        <div className="container Pizza">
      <h1 className="heading-secondary">
        Our<span> pizzas</span>
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
        <div className='PizzaInfo'>
            <h3>Available Sizes and Breads</h3>
            <h4>10" Couliflower || 12" Thin/Thick hand-tossed || 16" hand-tossed</h4>
            <h4>Meats: Pepperoni, Suasage, Bacon, Chicken, Canadian Bacon</h4>
            <h4>Veggies/Other: Onion, Green Olives, Black Olives, Green Peppers, </h4>
            <h4>Mushrooms, Jalepenos, Pineapple, Banana Peppers</h4>
        </div>
    </div>
    </div>
  )
}

export default Pizza