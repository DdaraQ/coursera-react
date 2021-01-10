import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }    

    renderDishDetail(dish) {

        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(dish) {

        const comments = dish.comments.map((comment) => {
            return (
                <li>
                    {comment.comment}<br /><br />
                    -- {comment.author}, {comment.date}<br /><br />
                </li>                    
                
            );
        });

        if (dish.comments != null) {
            return (
                <div>
                    {comments}
                </div>                
            );
        } else {
            return (
                <div></div>  
            );
        }        
    }

    render() {

        return (
            <div className="row">
                <div className="col-12 col-xs-12 col-sm-12 col-md-5 m-1">{this.renderDishDetail(this.props.selectedDish)}</div> 
                <div className="col-12 col-xs-12 col-sm-12 col-md-5 m-1"><h4>Comments</h4><ul className="list-unstyled">{this.renderComments(this.props.selectedDish)}</ul></div>
            </div>            
        );
    };

}

export default Dishdetail;