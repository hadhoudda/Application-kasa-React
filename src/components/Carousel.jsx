import '../style/carousel.css';
import React, { useState} from "react";


const Carousel = ({ locationPictures}) => {
  const [index, setIndex] = useState(0);
  const imgPrev = () => {
    setIndex(index=== 0 ? locationPictures?.length-1 : index-1);
    }

    const imgNext = () => {
      setIndex(index=== locationPictures?.length-1 ? 0 : index+1);
      }
  
    return (
      <div className="container">
        { locationPictures &&
          locationPictures?.length>0 
          && <img className='img-carousel' src={locationPictures[index]}  alt={"location Pictures in detail" }/>
          }
        {locationPictures?.length > 1 ? (
                <div className="arrow">
                    <i onClick={imgPrev}
                        className="fa-solid fa-angle-left arrow-left"
                    ></i>
                    <i onClick={imgNext}
                        className="fa-solid fa-angle-right arrow-right"
                    ></i>
                </div>
            ) : null}        
      </div>
    )
  }


export default Carousel;