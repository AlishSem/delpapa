

import MenuComponent from "./MenuComponent"
import { useState, Component } from 'react'
import DishdetailComponent from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import HomeComponent from './HomeComponent'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import ContactComponent from './ContactComponent'
import AboutComponent from './AboutComponent'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}


class MainComponent extends Component {


    constructor(props){
        super(props)
    }


    render(){

    const HomePage = () => {
        return (
            <HomeComponent dish={this.props.dishes.filter((dish) => dish.featured)[0]} promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]} leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
        )
    }

    const DishWithId = ({match}) => {
        return (
            <DishdetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        )
    }


    return (
        <div>
            <HeaderComponent/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <MenuComponent dishes={this.props.dishes}/>}/>
                <Route path = "/menu/:dishId" component={DishWithId}/>
                <Route exact path="/contactus" component={ContactComponent}/>
                <Route exact path="/aboutus" component={() => <AboutComponent leaders={this.props.leaders}/>}/>
                <Redirect to="/home"/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}
}

export default withRouter(connect(mapStateToProps)(MainComponent));
