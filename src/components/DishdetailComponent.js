import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap"
import {Link} from 'react-router-dom'

function DishdetailComponent({dish, comments}) {
    if (dish != null) {
    
    
    let contents = comments.map(comment => {
        return (
            <div key = {comment.id} class = "comment">
                <p>{comment.comment}</p>
                <p> -- {comment.author}</p>
                
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
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
            
                {contents}
            
        </div>
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
