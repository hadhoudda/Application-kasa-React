import '../style/pictures.css';

function Carousel({locationPictures}){
    return (           
        <div className="container">
            <img src={locationPictures}  alt={"location Pictures in detail"}/>
        </div>
    )
}

export default Carousel;