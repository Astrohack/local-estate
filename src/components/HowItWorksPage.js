import React from "react";
import "../styles/HowItWorksPage.css"

function HowItWorksPage( ){
    return (
        <div className="wrapper">
            <div className="heading">
                <div className="title">
                    Steps
                </div>              
            </div>
           <div className="stages-wrapper">
                <div className="step-wrapper">
                    <div id="">
                        Select your service(s) and options.
                    </div>
                </div>
                <div className="step-wrapper">
                    <div id="">
                        Book your appointment on our real time agenda.
                    </div>
                </div>
                <div className="step-wrapper">
                    <div id="">
                        Our real estate marketing professional arrives on-site and takes care of your order.
                    </div>
                </div>
                <div className="step-wrapper">
                    <div id="">
                        The content is ready for download in your account within 24hours after appointment.
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HowItWorksPage
