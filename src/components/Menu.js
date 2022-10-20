import React, { useState } from "react";
import { dishes } from "../contants/dishes";
const Menu = () => {
  const [dishMenu, setDishMenu] = useState(dishes);
  console.log(dishMenu);
  return <div>Menu</div>;
};

export default Menu;
