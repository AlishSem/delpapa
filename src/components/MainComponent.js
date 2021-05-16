

import MenuComponent from "./MenuComponent"
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { useState } from 'react'
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import HomeComponent from './HomeComponent'
import { Switch, Route, Redirect} from 'react-router-dom'
import ContactComponent from './ContactComponent'
import AboutComponent from './AboutComponent'

function MainComponent() {
    const [dishes, setDishes] = useState(DISHES)
    const [comments, setComments] = useState(COMMENTS)
    const [leaders, setLeaders] = useState(LEADERS)
    const [promotions, setPromotions] = useState(PROMOTIONS)

    const HomePage = () => {
        return (
            <HomeComponent dish={dishes.filter((dish) => dish.featured)[0]} promotion={promotions.filter((promotion) => promotion.featured)[0]} leader={leaders.filter((leader) => leader.featured)[0]}/>
        )
    }

    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        )
    }


    return (
        <div>
            <HeaderComponent/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <MenuComponent dishes={dishes}/>}/>
                <Route path = "/menu/:dishId" component={DishWithId}/>
                <Route exact path="/contactus" component={ContactComponent}/>
                <Route exact path="/aboutus" component={() => <AboutComponent leaders = {leaders}/>}/>
                <Redirect to="/home"/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}

export default MainComponent;
