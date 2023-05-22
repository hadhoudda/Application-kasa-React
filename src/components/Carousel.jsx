import '../style/carousel.css';

function Carousel({locationPictures}){
    return (
        <div className="carousel">
        
            {locationPictures && locationPictures?.length>0 
            && locationPictures?.map((picture, index) => <img src={locationPictures}  alt={"location Pictures in detail"}/>)
            }
        
            <div>rabi</div>
            <i id="left" class="fa-solid fa-less-than"></i>
            <i id="right" class="fa-solid fa-greater-than"></i>
        
        </div>
    )
}

export default Carousel;