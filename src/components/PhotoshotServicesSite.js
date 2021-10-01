import React from "react";
import "../styles/PhotoshotServicesSite.css"
import OfferCard from "./OfferCard"
import salon from "../salon.jpg"

function PhotoshotServicesSite () {

    return (
        <div>
            <div className="siteContainer"  style={{height:"100vh", width:"100%", display:"flex", justifyContent:"center", background:"blue", position:"fixed", zIndex:"-100"}}>
                <img className="background" src={salon} alt="background" style={{wdth:"100%", objectFit:"cover", overflow:"hidden",  flex:"1 1 auto"}}/>
            </div>

            <div className="wrapper">
                <div className="container">
                    <div className="siteTitle"> Photoshot </div>
                
                    <div className="contents">
                        <OfferCard name={"Photoshot"} quantity={12} description={"Photos"}/>
                        <OfferCard name={"Photoshot"} quantity={12} description={"Photos"}/>
                        <OfferCard name={"Photoshot"} quantity={12} description={"Photos"}/>
                        <OfferCard name={"Photoshot"} quantity={12} description={"Photos"}/>
                        
                    </div>
                
                </div>
               
            </div>
        </div>
        
        
    );
} 
export default PhotoshotServicesSite