import React from "react";
import "ServicesSite.css"
import OfferCard from "./OfferCard"

function ServicesSite () {

    return (
        <div className="wrapper">
            <div className="cardContainer">
                <div id="cardItem">
                    <div id="productName"> Photoshot </div>
                    <div id="quantity"> 9 </div>
                        
                </div>
            </div>

            
            <OfferCard/>
        </div>
    );
} 
export default ServicesSite