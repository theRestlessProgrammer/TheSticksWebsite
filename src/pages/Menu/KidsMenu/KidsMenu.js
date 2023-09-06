import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './KidsMenu.css'


/*Kids Dual Section Menu START
const menuDataLeft = [
    {
        title:"Hamburger",
        description:"Kids Hamburger, made from Angus Beef!",
        price:"6",
    },

    {
        title:"Hot Dog",
        description:"Hotdog, hotdog, hot-digity-dog!",
        price:  "6",
    },
];

const menuDataRight = [
    {
        title:"Cheeseburger",
        description:"Kids Cheeseburger, just like the kids hamburger, but is classed up with some cheese!",
        price:"7",
    },
    {
        title:"Chicken Strips",
        description:"We've got Chicken strips for the kids and for the bigger kids, no judgement on your food choice here!",
        price: "7",
    },
    {
        title:"Mac & Cheese",
        description:'"Max" out the cheese and the smile on your face with this Mac & Cheese!',
        price:"7",
    },  
];

const KidsMenu = () => {
    return (
        <div className="container kidsmenu">
        <h1 className="heading-secondary">
            Kids<span> Menu</span>
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
*/ //Kids Dual Section Menu END


// Kids Tri Section Menu START
const menuDataLeft = [
    {
    title:"Hot Dog",
    description:"Hotdog, hotdog, hot-digity-dog!",
    price:  "6",
    },
    {
    title:"Mac & Cheese",
    description:'"Max" out the cheese and the smile on your face with this Mac & Cheese!',
    price:"7",
    },    
];

const menuDataMiddle = [
    {
    title:"Hamburger",
    description:"Kids Hamburger, made from Angus Beef!",
    price:"6",
    },
    {
    title:"Cheeseburger",
    description:"Kids Cheeseburger, just like the kids hamburger, but is classed up with some cheese!",
    price:"7",
    },
];

const menuDataRight = [
    {
    title: "Chicken Strips",
    description:"We've got Chicken strips for the kids and for the bigger kids, no judgement on your food choice here!",
    price: "7",
    },
];

const KidsMenu = () => {
    return (
    <div className="section">
        <div className="container kidsmenu">
        <h1 className="heading-secondary">
            Kids<span> Menu</span>
        </h1>
        <h3>Comes with a side of fries or tots and a cookie!</h3>
        

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
// //Kids Tri Section Menu END


export default KidsMenu