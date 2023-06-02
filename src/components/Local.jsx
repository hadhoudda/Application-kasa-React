import '../style/Local.css';
import React from "react";

function Local({locationLocal}){
    return( 
        <p className='local' > {locationLocal}</p>
    )
}

export default Local