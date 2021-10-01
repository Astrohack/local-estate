
function PhotoshotGallery(){
    
    const image_names = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
    
    return(
        <div className="gallery">
            <ul className="gallery-container">
                {image_names.map((image_name, num) => (
                    <li id="image-container"  key={num} >
                        <img className="image" src={ process.env.PUBLIC_URL +`/gallery-images/${image_name}`}alt="img"/>
                    </li>
                    
                ))}
            </ul>
        </div>
            
    )
}

export default PhotoshotGallery