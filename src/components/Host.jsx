

function Host({locationHostPicture ,locationHostName}){
    return( 
        <figure className='title-picture'>
          <img src={locationHostPicture} alt='location' />
          <figcaption> {locationHostName} </figcaption>
        </figure>
    )
}


export default Host