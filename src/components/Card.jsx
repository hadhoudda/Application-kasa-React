import '../style/Card.css';
import React from "react";
import { Link } from 'react-router-dom';

function Card({card}){
    return( 
    <div className='card'>
      <Link to = {`details/${card.id}`} >
      <div className="overlay"></div>
        <img className='img-card' src={card.cover}  alt={"l'image de " + card.title}/>
        <span > {card.title}</span>
      </Link>
    </div>
    )
}

export default Card