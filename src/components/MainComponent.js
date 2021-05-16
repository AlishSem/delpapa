

import MenuComponent from "./MenuComponent"
import { DISHES } from '../shared/dishes'
import { useState } from 'react'
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import HomeComponent from './HomeComponent'
import { Switch, Route, Redirect} from 'react-router-dom'


function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)
    const HomePage = () => {
        return (
            <HomeComponent/>
        )
    }


    return (
        <div>
            <HeaderComponent/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <MenuComponent dishes={dishes}/>}/>
                <Redirect to="/home"/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}

export default MainComponent;
