import React from "react";

import {Link} from 'react-router-dom'

import "../styles/servicesNavMenu.css"

function ServicesNavMenu() {
    return (
        <div className="servicesNavMenuWrapper" style={{paddingTop: "1em"}}>
            <div  className="servicesNavMenu" style={{top: "5em"}}>
                <div className="servicesNavMenuItem">
                    <div id="serviceName">
                        PRO PACK
                    </div>
                    <div id="serviceImage">

                    </div>
                    <div id="serviceDescription">
                        Description
                    </div>
                </div>
                <Link to="/photoshot">
                    <div className="servicesNavMenuItem">
                        <div id="serviceName">
                            PHOTOSHOT
                        </div>
                        <div id="serviceImage">

                        </div>
                        <div id="serviceDescription">
                            Description
                        </div>
                    </div>
                </Link>
                <div className="servicesNavMenuItem">
                    <div id="serviceName">
                        VIDEO / DRONE
                    </div>
                    <div id="serviceImage">

                    </div>
                    <div id="serviceDescription">
                    Description
                    </div>
                </div>
        </div>
    </div>
    );
}

export default ServicesNavMenu