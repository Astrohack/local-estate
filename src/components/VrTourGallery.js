import vrTours_links from "../api/vrTours.json"

import "../styles/VrTourGallery.css"

function VrTourGallery(){
    return(
        <div>
                <div className="gallery">
                <ul className="vrTour-container">
                    {vrTours_links.library.map((tour, num) => (
                    <div className="embeded-vr_tour" key={num}>
                        <iframe  title={num}  src={`https://my.matterport.com/show/?m=` + tour.id}></iframe>
                    </div>
                 ))}
                </ul>
            </div>
        </div>
    )
}

export default VrTourGallery