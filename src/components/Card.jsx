import '../style/Card.css';
import { Link } from 'react-router-dom';

function Card(card){
    return( 
    <div className='card'>
      <Link to = {`detail/${card.id}`}>
        <img src={card.cover}  alt={card.title}/>
        <p className='title-card'> {card.title}</p>
      </Link>
    </div>
    )
}

export default Card