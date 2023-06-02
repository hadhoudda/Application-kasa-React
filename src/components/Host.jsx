import '../style/Host.css';
import React from "react";

function Host({locationHostPicture ,locationHostName}){
    return( 
        <figure className='host'>
          <figcaption> {locationHostName} </figcaption>
          <img className="img-host" src={locationHostPicture} alt='location' />
        </figure>
    )
}

export default Host