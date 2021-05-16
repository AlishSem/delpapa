import React from 'react'
import style from '../App.css'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"


function DishdetailComponent({dish}) {
    if (dish != null) {
    let comments = dish.comments.map(comment => {
        return (
            <div key = {comment.id} class = "comment">
                <p>{comment.comment}</p>
                <p> -- {comment.author}</p>
                
            </div>
        )
    })
    return (
        <div className="row">
        <div  className= "col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card> 
            
        </div>
        <div className= "col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            
                {comments}
            
        </div>
        </div>
    )}
    else {
        return( 
            <div>
            </div>
        )
    }
}

export default DishdetailComponent
