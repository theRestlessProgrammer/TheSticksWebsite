import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import './SaladWrap.css'



const menuDataLeft = [
    {
        title: "Crispy Chicken Salad",
        description: "Breaded chicken, lettuce, tomato, 5-blend shredded cheese, your choice pf dressing and a garlic breadstick!",
        price: "11",
    },
    {
        title: "Buffalo or Gold Chicken Salad",
        description: "Same great base as the Crispy Chicken but with a sauce!",
        price: "12",
    },
    {
        title: "Side Salad",
        description: "Our fantastic side salad features, lettuce, diced tomato, shredded cheese and, croutons with croutons and your choices of dressings",
        price: "3",
    },
    ];

    const menuDataRight = [
    {
        title: "Crispy Chicken Ranch Wrap",
        description: "Our go to wrap featuring chicken, lettuce, diced tomato, shredded 5-cheese blend, and you guessed it; ranch dressing! Served with your choice of side!",
        price: "11",
    },
    {
        title: "Buffalo, Gold, or BBQ Crispy Chicken Wrap",
        description: 'Same great base as the "Ranch" Wrap, but spiced up with your choice of sauce!',
        price: "12",
    },
    {
        title: "Keto wraps and Upgrades",
        description: "Keto Wraps, Bacon, Grilled Chicken and more, await you in your wrap!",
        price: "tbd",
    },
    ];

const SaladWrap = () => {
    return (
    <div className='section'>
        <div className="container saladwrap">
        <h1 className="heading-secondary">
        Salads <span> & Wraps</span>
        </h1>   
        <div className="grid-container">
            <div>
                <h2>Salads</h2>
                {menuDataLeft.map((data, i) => (
                <ListItem
                    title={data.title}
                    description={data.description}
                    price={data.price}
                />
                ))}
                <div>
                    <h3>Grilled Chicken Available for $1</h3>
                </div>

            </div>

            <div>
                <h2>Wraps</h2>
                {menuDataRight.map((data, i) => (
                <ListItem
                    title={data.title}
                    description={data.description}
                    price={data.price}
                />
                ))}
                <div>
                    <h3>All come with Fries or Tots.</h3>
                    <p>Upgrade to Onion Rings, Sweet Potato Fries or Side Salad for $2.50</p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default SaladWrap