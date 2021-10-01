import React, {useState} from "react"; 

import  "../styles/GallerySite.css"; 

import Text from "./TranslatedText";

import PhotoshotGallery from "./PhotoshotGallery"
import VrTourGallery from "./VrTourGallery"

const tabs =[]

const addTab =  function(name, component) {
    tabs.push({
        name: name,
        component: component,
    })
}

addTab("Photoshot",  (<PhotoshotGallery/>))
addTab("Vr Tour", (<VrTourGallery/>))
addTab("Floor Plan", (<PhotoshotGallery/>))

function GallerySite(){

    const [selectedTab, setTab] = useState(0)

    function handleGalleryContextChange(e,  tabId){
        e.preventDefault()
        setTab(tabId)
    }
    
    function getTabId(desiredTab){
        console.log(desiredTab, selectedTab)
        return(desiredTab === selectedTab? "tab-selected": "tab")
    }
    
    
    return(
        <div className="gallery-wrapper">
            <div className="tabs">
                {tabs.map((tab, num) => (
                    <div key={num} id={getTabId(num)} onClick={e => handleGalleryContextChange(e, num)} ><Text tid={tab.name}/></div>
                ))}
            </div>
            <div className="content">
                {tabs[selectedTab].component}
            </div>
        </div>
    )
}

export default GallerySite