import React from "react";
import "../styles/OfferCard.css"

function ServicesSite (props) {
    const {name, quantity, description} = props
    return (
        <div className="cardContainer">
                <div id="cardItem">
                    <div id="productName"> {name} </div>
                    <div id="quantity"> {quantity} </div>
                    <div id="description"> {description} </div>
                    <div className="orderButton">
                        <div id="orderNow"> Order Now </div>
                    </div>
                        
                </div>
        </div>
    );
} 
export default ServicesSite