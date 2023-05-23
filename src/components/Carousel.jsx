import '../style/carousel.css';

const Carousel = ({ locationPictures}) => {
    
  
    return (
      <div className="container">
        { locationPictures && locationPictures.length>0 
                &&  <img src={locationPictures}  alt={"location Pictures in detail" }/>
            }
        
        
      </div>
    )
  }


export default Carousel;