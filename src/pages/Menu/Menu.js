import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/OurMenuHero3.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Appetizers from './Appetizers/Appetizers'
import Entrees from "./Entrees/Entrees";
import Drinks from './Drinks/Drinks';
import Beverages from './Beverages/Beverages';
import Pizza from './Pizza/Pizza';
import Burgers from './Burgers/Burgers';
import KidsMenu from './KidsMenu/KidsMenu';
import SaladWrap from './SaladWrap/SaladWrap';

const Menu = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuOfTheDay />
      <Appetizers />
      <Entrees />
      <SaladWrap />
      <Pizza />
      <Burgers />
      <Drinks />
      <KidsMenu />
      <Beverages />
    </div>
  );
};

export default Menu;
