

function Title(card){
    return( 
    <div className='title-gallery'>
        <p > {card.props.title}</p>
        <p > {card.props.location}</p>
        <p > {card.props.tags}</p>
        <p > {card.props.host.name}</p>
        <img src={card.props.host.picture}  alt={card.props.host.name}/>
        <p className='description-card'>{card.props.description}</p>

    </div>
    )
}

export default Title