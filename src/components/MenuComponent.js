import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"
import { useState } from 'react'
import { render } from '@testing-library/react'



function MenuComponent({dishes, onClick}) {

    const menu = dishes.map((dish) => {
        return(
            <div key = {dish.id} className="col-12 col-md-5 m-1">
                <Card onClick = {() => onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
    )})

    return (
        
            <div className="row">
                {menu}
            </div>
        
    )
}

export default MenuComponent
