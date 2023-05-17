

function Gallery(card){
    return (
        <div>
            <img className='pictures-card' src={card.props.pictures}  alt={card.props.title}/>
        </div>
    )
}

export default Gallery;