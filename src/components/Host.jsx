import '../style/Host.css';

function Host({locationHostPicture ,locationHostName}){
    return( 
        <figure className='name-host'>
          <figcaption> {locationHostName} </figcaption>
          <img className="img-host" src={locationHostPicture} alt='location' />
        </figure>
    )
}

export default Host