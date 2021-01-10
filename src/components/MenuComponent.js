import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import { DISHES } from "../shared/dishes";
import Dishdetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props);

       
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }

    

    renderDish(dish) {

        if (dish != null) {
            return (
                <Dishdetail selectedDish={dish} />
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-xs-12 col-sm-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>                        
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                
                
            </div>
            
        );
    };
}

export default Menu;