import '../style/Title.css';
import React from "react";

function Title({locationTitle}){
    return( 
        <h1 className='title-picture' > {locationTitle}</h1>
    )
}

export default Title