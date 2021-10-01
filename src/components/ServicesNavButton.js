import React, {useState} from "react";
import ServicesNavMenu from "./ServicesNavMenu"
import Text from "./TranslatedText";


function ServicesNavButton () {

    const handleMouseEnter = (e) => {
        e.preventDefault();
        setActive(true)
    }
    const handleMouseLeave = (e) => {
        e.preventDefault();
        setActive(false)
    }

    const  [isActive, setActive] = useState(false)
    console.log(isActive)

    return (
        <div className="siteHeaderNavItem" onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={e => handleMouseLeave(e)}>
            <div id="services">
                {<Text tid="services"/>}
                {isActive? <ServicesNavMenu/>: null}
            </div>
        </div>
    )
}

export default ServicesNavButton