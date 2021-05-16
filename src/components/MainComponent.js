

import MenuComponent from "./MenuComponent"
import { DISHES } from '../shared/dishes'
import { useState } from 'react'
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)
    const [selectedDish, setSelectedDish] = useState(null)


    function onDishSelect(dishId) {
        setSelectedDish(dishId)
    }

    return (
        <div>
            <HeaderComponent/>
            <div className="container">
            <MenuComponent dishes={dishes} onClick={(dishId) => onDishSelect(dishId)}/>
            <DishdetailComponent dish = {dishes.filter((dish) => dish.id === selectedDish)[0]} />
            </div>
            <FooterComponent/>
        </div>
    );
}

export default MainComponent;
