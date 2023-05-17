import '../style/Card.css';
import { Link } from 'react-router-dom';

function Card(card){
    return( 
    <div className='card'>
      < Link to = {`details/${card.props.id}`} >
        <img src={card.props.cover}  alt={card.props.title}/>
        <p className='title-card'> {card.props.title}</p>
      </Link>
    </div>
    )
}

export default Card